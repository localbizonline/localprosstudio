import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const WIDGET_URL =
  'https://reputationhub.site/reputation/widgets/review_widget/X8ThpQ4AZ9FtX8bR2XFt';

const INITIAL_REVIEW_COUNT = 9;
const LOAD_MORE_COUNT = 6;

interface WidgetReview {
  id: string;
  reviewerName: string;
  starRating: number;
  comment: string;
  dateAdded: string;
  iconUrl?: string;
}

interface WidgetData {
  reviews: WidgetReview[];
  aggregateData: {
    totalReviews: number;
    totalRating: number;
  };
  templateData: {
    loadMoreText?: string;
    writeAReviewText?: string;
    locationReviewLink?: string;
  };
}

interface ReputationReviewWidgetProps {
  variant?: 'light' | 'dark';
}

const parseWidgetData = (html: string): WidgetData | null => {
  const marker = 'window.__SSR_DATA__ = ';
  const start = html.indexOf(marker);
  if (start === -1) {
    return null;
  }

  const jsonStart = html.indexOf('{', start);
  if (jsonStart === -1) {
    return null;
  }

  let depth = 0;
  for (let i = jsonStart; i < html.length; i++) {
    if (html[i] === '{') {
      depth++;
    }
    if (html[i] === '}') {
      depth--;
    }
    if (depth === 0) {
      try {
        const data = JSON.parse(html.slice(jsonStart, i + 1));
        return {
          reviews: data.reviews ?? [],
          aggregateData: data.aggregateData ?? { totalReviews: 0, totalRating: 0 },
          templateData: data.templateData ?? {},
        };
      } catch {
        return null;
      }
    }
  }

  return null;
};

const formatReviewDate = (isoDate: string) =>
  new Date(isoDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

const getInitials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const ReputationReviewWidget = ({ variant = 'light' }: ReputationReviewWidgetProps) => {
  const [reviews, setReviews] = useState<WidgetReview[]>([]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_REVIEW_COUNT);
  const [isLoading, setIsLoading] = useState(true);
  const [writeReviewLink, setWriteReviewLink] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadReviews = async () => {
      try {
        const response = await fetch(WIDGET_URL);
        const html = await response.text();
        const data = parseWidgetData(html);

        if (!isMounted || !data) {
          return;
        }

        setReviews(data.reviews.filter((review) => review.comment?.trim()));
        setWriteReviewLink(data.templateData.locationReviewLink ?? null);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadReviews();

    return () => {
      isMounted = false;
    };
  }, []);

  const isDark = variant === 'dark';
  const visibleReviews = reviews.slice(0, visibleCount);
  const hasMore = visibleCount < reviews.length;

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={`h-48 rounded-2xl animate-pulse ${
              isDark ? 'bg-neutral-900' : 'bg-neutral-100'
            }`}
          />
        ))}
      </div>
    );
  }

  if (!reviews.length) {
    return null;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleReviews.map((review) => (
          <article
            key={review.id}
            className={`rounded-2xl p-6 border flex flex-col ${
              isDark
                ? 'bg-neutral-900 border-neutral-700'
                : 'bg-white border-neutral-100 shadow-soft'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: review.starRating }).map((_, index) => (
                  <Star
                    key={index}
                    className="w-4 h-4 text-amber-400 fill-current"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className={`text-xs ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
                {formatReviewDate(review.dateAdded)}
              </span>
            </div>

            <p
              className={`text-sm leading-relaxed mb-6 flex-1 ${
                isDark ? 'text-neutral-300' : 'text-neutral-700'
              }`}
            >
              {review.comment}
            </p>

            <div
              className={`flex items-center gap-3 pt-4 border-t ${
                isDark ? 'border-neutral-800' : 'border-neutral-100'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                  isDark ? 'bg-neutral-800 text-neutral-200' : 'bg-neutral-900 text-white'
                }`}
              >
                {getInitials(review.reviewerName)}
              </div>
              <div className="min-w-0 flex-1">
                <p className={`text-sm font-medium truncate ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                  {review.reviewerName}
                </p>
              </div>
              {review.iconUrl && (
                <img src={review.iconUrl} alt="" className="w-4 h-4 opacity-70" />
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        {hasMore && (
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + LOAD_MORE_COUNT)}
            className={`px-6 py-3 rounded-xl font-semibold transition-colors ${
              isDark
                ? 'bg-neutral-900 border border-neutral-700 text-white hover:bg-neutral-800'
                : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
            }`}
          >
            Load More
          </button>
        )}
        {writeReviewLink && (
          <a
            href={writeReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 rounded-xl font-semibold transition-colors ${
              isDark
                ? 'bg-amber-500 text-black hover:bg-amber-400'
                : 'bg-neutral-900 text-white hover:bg-neutral-800'
            }`}
          >
            Write a review
          </a>
        )}
      </div>
    </div>
  );
};

export default ReputationReviewWidget;
