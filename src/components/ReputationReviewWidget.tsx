import React, { useEffect } from 'react';

const WIDGET_SCRIPT_SRC = 'https://reputationhub.site/reputation/assets/review-widget.js';
const WIDGET_IFRAME_SRC =
  'https://reputationhub.site/reputation/widgets/review_widget/X8ThpQ4AZ9FtX8bR2XFt';

const ReputationReviewWidget = () => {
  useEffect(() => {
    if (document.querySelector(`script[src="${WIDGET_SCRIPT_SRC}"]`)) {
      return;
    }

    const script = document.createElement('script');
    script.src = WIDGET_SCRIPT_SRC;
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      className="lc_reviews_widget"
      src={WIDGET_IFRAME_SRC}
      frameBorder={0}
      scrolling="no"
      style={{ minWidth: '100%', width: '100%' }}
      title="Customer reviews"
    />
  );
};

export default ReputationReviewWidget;
