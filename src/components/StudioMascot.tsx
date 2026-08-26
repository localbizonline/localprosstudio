import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

import peekSrc from '../assets/images/mascot/peek.webp';
import pointSrc from '../assets/images/mascot/point.webp';
import phoneSrc from '../assets/images/mascot/phone.webp';
import waveBodySrc from '../assets/images/mascot/wave-body.webp';
import waveArmSrc from '../assets/images/mascot/wave-arm.webp';

/*
  The Local Pros man, rigged.

  Geometry below is measured off the source artwork (a 685 x 1200 frame for the
  wave pose, 896 x 1200 for the phone pose) and expressed as percentages, so the
  layers stay registered at any display size.
*/

const WAVE = {
  frame: { w: 685, h: 1200 },
  body: { x: 286, y: 0, w: 399, h: 1200 },
  arm: { x: 0, y: 11, w: 411, h: 495 },
  shoulder: { x: 378, y: 470 }, // rotation pivot, in frame coords
  eyes: [
    { x: 392, y: 214, w: 46, h: 50 }, // viewer's left
    { x: 480, y: 208, w: 48, h: 54 },
  ],
};

const PHONE = {
  frame: { w: 896, h: 1200 },
  screen: { x: 677, y: 217, w: 155, h: 305 },
};

const pct = (a: number, b: number) => `${(a / b) * 100}%`;

/* Reveal on first scroll into view, then hold. */
const useReveal = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, shown };
};

/* ------------------------------- Wave rig ------------------------------- */

const WaveMascot = ({ className = '' }: { className?: string }) => {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const { frame, body, arm, shoulder, eyes } = WAVE;

  return (
    <div
      ref={ref}
      /* No `relative` here — callers pass `absolute` and Tailwind emits
         `relative` after `absolute`, so it would silently win. The inner
         wrapper provides the positioning context for the layers instead. */
      className={`group select-none ${className}`}
      style={{ aspectRatio: `${frame.w} / ${frame.h}` }}
      aria-hidden="true"
    >
      <div
        className={`h-full w-full transition-all duration-700 ease-out motion-safe:animate-mascot-bob ${
          shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <div className="relative h-full w-full transition-transform duration-500 group-hover:-rotate-2">
          <img
            src={waveBodySrc}
            alt=""
            className="absolute"
            style={{
              left: pct(body.x, frame.w),
              top: pct(body.y, frame.h),
              width: pct(body.w, frame.w),
              height: pct(body.h, frame.h),
            }}
          />

          {/* Eyelids — flat skin grey with the character's ink line along the bottom */}
          {eyes.map((e) => (
            <span
              key={`${e.x}-${e.y}`}
              className="absolute origin-top rounded-b-[40%] border-b-[3px] border-b-[#141414] bg-[#E3E3E3] motion-safe:animate-mascot-blink"
              style={{
                left: pct(e.x - e.w / 2, frame.w),
                top: pct(e.y - e.h / 2, frame.h),
                width: pct(e.w, frame.w),
                height: pct(e.h, frame.h),
                transform: 'scaleY(0)',
              }}
            />
          ))}

          <img
            src={waveArmSrc}
            alt=""
            className="absolute motion-safe:animate-mascot-wave"
            style={{
              left: pct(arm.x, frame.w),
              top: pct(arm.y, frame.h),
              width: pct(arm.w, frame.w),
              height: pct(arm.h, frame.h),
              transformOrigin: `${((shoulder.x - arm.x) / arm.w) * 100}% ${
                ((shoulder.y - arm.y) / arm.h) * 100
              }%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

/* ------------------------- Phone rig (live screen) ------------------------ */

const PhoneMascot = ({ className = '' }: { className?: string }) => {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const { frame, screen } = PHONE;

  return (
    <div
      ref={ref}
      className={`group select-none ${className}`}
      style={{ aspectRatio: `${frame.w} / ${frame.h}` }}
    >
      <div
        className={`relative h-full w-full transition-all duration-700 ease-out motion-safe:animate-mascot-bob ${
          shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <img
          src={phoneSrc}
          alt="The Local Pros man holding up a phone showing a new five-star review"
          className="h-full w-full object-contain"
        />

        {/* A review landing on the phone screen, on a loop */}
        <div
          className="absolute flex flex-col items-center justify-center gap-[8%] overflow-hidden bg-white"
          style={{
            left: pct(screen.x, frame.w),
            top: pct(screen.y, frame.h),
            width: pct(screen.w, frame.w),
            height: pct(screen.h, frame.h),
          }}
          aria-hidden="true"
        >
          <div className="flex gap-[2px]">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="w-[13%] min-w-[7px] fill-current text-[#F5A623] motion-safe:animate-star-pop"
                strokeWidth={0}
                style={{ animationDelay: `${i * 140}ms` }}
              />
            ))}
          </div>
          <div className="flex w-[70%] flex-col gap-[6px]">
            <span className="h-[4px] w-full rounded-full bg-[#D9DDE5]" />
            <span className="h-[4px] w-[75%] rounded-full bg-[#D9DDE5]" />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------ Flat poses ------------------------------- */

const FLAT: Record<'peek' | 'point', { src: string; alt: string }> = {
  peek: {
    src: peekSrc,
    alt: 'The Local Pros man peeking over the top of a card',
  },
  point: {
    src: pointSrc,
    alt: 'The Local Pros man pointing at a checklist',
  },
};

const FlatMascot = ({
  pose,
  className = '',
  from = 'up',
}: {
  pose: 'peek' | 'point';
  className?: string;
  from?: 'up' | 'left' | 'right';
}) => {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const hidden =
    from === 'left'
      ? '-translate-x-8 opacity-0'
      : from === 'right'
      ? 'translate-x-8 opacity-0'
      : 'translate-y-10 opacity-0';

  return (
    <div ref={ref} className={`group select-none ${className}`}>
      <img
        src={FLAT[pose].src}
        alt={FLAT[pose].alt}
        loading="lazy"
        className={`w-full transition-all duration-700 ease-out group-hover:-rotate-2 motion-safe:animate-mascot-bob ${
          shown ? 'translate-x-0 translate-y-0 opacity-100' : hidden
        }`}
      />
    </div>
  );
};

/* -------------------------------- Export -------------------------------- */

const StudioMascot = ({
  pose,
  className,
  from,
}: {
  pose: 'wave' | 'peek' | 'point' | 'phone';
  className?: string;
  from?: 'up' | 'left' | 'right';
}) => {
  if (pose === 'wave') return <WaveMascot className={className} />;
  if (pose === 'phone') return <PhoneMascot className={className} />;
  return <FlatMascot pose={pose} className={className} from={from} />;
};

export default StudioMascot;
