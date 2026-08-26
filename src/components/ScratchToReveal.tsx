import React, { useCallback, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

/*
  Scratch-card offer modal.

  Shows once per browser, on whichever comes first: exit intent (desktop) or a
  dwell timer (covers mobile, which has no exit intent). The card is a canvas
  painted with the foil, then erased with `destination-out` as the user drags.
*/

const SEEN_KEY = 'lps:autopilot-surprise:v1';
const DWELL_MS = 30000;
const REVEAL_AT = 0.5; // fraction scratched away before it opens itself up

const WA_OFFER =
  'https://wa.me/27832336716?text=' +
  encodeURIComponent(
    "Hi Jeremy, I've got the FIRSTMONTH50 code from your site — I'd like to book an Online Presence Review."
  );

/* --------------------------------- Foil --------------------------------- */

const roundRect = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) => {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
};

/** The little crosshair sitting above the label. */
const drawCursorMark = (
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number
) => {
  ctx.save();
  ctx.strokeStyle = 'rgba(255,255,255,0.75)';
  ctx.fillStyle = '#ffffff';
  ctx.lineWidth = 1.4;

  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.28, 0, Math.PI * 2);
  ctx.fill();

  const t = r * 0.42;
  [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.moveTo(cx + dx * (r + 3), cy + dy * (r + 3));
    ctx.lineTo(cx + dx * (r + 3 + t), cy + dy * (r + 3 + t));
    ctx.stroke();
  });
  ctx.restore();
};

const paintFoil = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const { width: w, height: h } = canvas.getBoundingClientRect();
  if (!w || !h) return;

  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(w * dpr);
  canvas.height = Math.round(h * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const g = ctx.createLinearGradient(0, 0, w, h);
  g.addColorStop(0, '#A8C6FA');
  g.addColorStop(0.45, '#4285F4');
  g.addColorStop(1, '#1A3FA8');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);

  const inset = Math.max(10, Math.round(w * 0.022));
  ctx.strokeStyle = 'rgba(255,255,255,0.5)';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([7, 6]);
  roundRect(ctx, inset, inset, w - inset * 2, h - inset * 2, 14);
  ctx.stroke();
  ctx.setLineDash([]);

  const label = 'SCRATCH TO REVEAL';
  const size = Math.max(13, Math.min(24, Math.round(w * 0.048)));

  drawCursorMark(ctx, w / 2, h / 2 - size * 1.9, size * 0.78);

  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = `700 ${size}px 'Inter Tight', system-ui, sans-serif`;
  // Not in every engine yet; the label just renders untracked where it's missing.
  if ('letterSpacing' in ctx) {
    (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing =
      `${Math.round(size * 0.22)}px`;
  }
  ctx.fillText(label, w / 2, h / 2 + size * 0.7);
};

/* ------------------------------ Scratch card ----------------------------- */

const ScratchCard = ({ onRevealed }: { onRevealed: () => void }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawing = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);
  const sampleTick = useRef(0);
  const done = useRef(false);
  const [cleared, setCleared] = useState(false);

  const finish = useCallback(() => {
    if (done.current) return;
    done.current = true;
    setCleared(true);
    onRevealed();
  }, [onRevealed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    paintFoil(canvas);
    const onResize = () => {
      if (!done.current) paintFoil(canvas);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /** Rough fraction of the foil erased, sampled on a coarse grid. */
  const clearedFraction = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return 0;
    const { width, height } = canvas;
    const data = ctx.getImageData(0, 0, width, height).data;
    const step = 16; // every 4th pixel (4 bytes each)
    let clear = 0;
    let total = 0;
    for (let i = 3; i < data.length; i += step) {
      total++;
      if (data[i] < 40) clear++;
    }
    return total ? clear / total : 0;
  };

  const scratchTo = (x: number, y: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const r = Math.max(20, canvas.getBoundingClientRect().width * 0.055);
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineWidth = r * 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const from = last.current ?? { x, y };
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(x, y);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalCompositeOperation = 'source-over';
    last.current = { x, y };

    // getImageData is expensive — only check occasionally
    sampleTick.current += 1;
    if (sampleTick.current % 8 === 0 && clearedFraction(canvas) >= REVEAL_AT) {
      finish();
    }
  };

  const pointAt = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 z-10 h-full w-full touch-none rounded-[22px] transition-opacity duration-500 ${
          cleared ? 'pointer-events-none opacity-0' : 'cursor-crosshair opacity-100'
        }`}
        onPointerDown={(e) => {
          if (done.current) return;
          e.currentTarget.setPointerCapture(e.pointerId);
          drawing.current = true;
          const p = pointAt(e);
          last.current = p;
          scratchTo(p.x, p.y);
        }}
        onPointerMove={(e) => {
          if (!drawing.current || done.current) return;
          const p = pointAt(e);
          scratchTo(p.x, p.y);
        }}
        onPointerUp={() => {
          drawing.current = false;
          last.current = null;
        }}
        onPointerLeave={() => {
          drawing.current = false;
          last.current = null;
        }}
      />

      {/* What sits under the foil */}
      <div className="flex aspect-[16/10] flex-col items-center justify-center rounded-[22px] bg-[#F4F7FD] px-6 text-center sm:aspect-[16/9]">
        <p className="font-tight text-[12px] font-semibold uppercase tracking-[0.16em] text-[#1A56DB] sm:text-[13px]">
          Your first month
        </p>
        <p className="font-tight mt-2 text-[44px] font-medium leading-none tracking-[-0.03em] text-[#0D0F1C] sm:text-[64px]">
          50% off
        </p>
        <p className="font-tight mt-4 max-w-sm text-[14px] leading-[1.55] text-[#6B7280] sm:text-[16px]">
          On any package. We get your foundation set up properly before you pay
          full price.
        </p>
        <span className="font-tight mt-5 rounded-full border border-dashed border-[#1A56DB] bg-white px-4 py-2 text-[13px] font-semibold tracking-[0.08em] text-[#1A56DB]">
          FIRSTMONTH50
        </span>
      </div>

      {/* Scratching is drag-only, so keyboard users get a button */}
      {!cleared && (
        <button
          type="button"
          onClick={finish}
          className="font-tight absolute -bottom-9 left-1/2 z-20 -translate-x-1/2 text-[13px] text-[#9AA0A6] underline decoration-dotted underline-offset-4 transition-colors hover:text-[#1A56DB]"
        >
          Can't scratch? Reveal it
        </button>
      )}
    </div>
  );
};

/* --------------------------------- Modal -------------------------------- */

const ScratchToReveal = () => {
  const [open, setOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const close = useCallback(() => {
    setOpen(false);
    try {
      window.localStorage.setItem(SEEN_KEY, '1');
    } catch {
      /* private mode — it just shows again next visit */
    }
  }, []);

  useEffect(() => {
    let seen = false;
    try {
      seen = window.localStorage.getItem(SEEN_KEY) === '1';
    } catch {
      /* ignore */
    }
    if (seen) return;

    let fired = false;
    const fire = () => {
      if (fired) return;
      fired = true;
      setOpen(true);
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'offer_modal_shown', {
          event_category: 'engagement',
          event_label: 'autopilot_scratch',
          value: 1,
        });
      }
    };

    // Desktop: pointer heading out of the top of the window.
    const onExit = (e: MouseEvent) => {
      if (e.clientY <= 0) fire();
    };
    document.addEventListener('mouseout', onExit);

    // Mobile has no exit intent, so fall back to dwell time.
    const timer = window.setTimeout(fire, DWELL_MS);

    return () => {
      document.removeEventListener('mouseout', onExit);
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="A discount on your first month"
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-10"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={close}
        className="absolute inset-0 cursor-default bg-white/80 backdrop-blur-md"
      />

      {/* Extra bottom room only while the "reveal it" link is still there */}
      <div
        className={`surface-autopilot relative z-10 w-full max-w-xl animate-fade-in-up rounded-[32px] border border-[#ECEEF3] bg-white p-6 transition-[padding] duration-500 sm:p-10 ${
          revealed ? 'pb-6 sm:pb-10' : 'pb-16 sm:pb-16'
        }`}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-2 text-[#9AA0A6] transition-colors hover:bg-[#F4F6FA] hover:text-[#0D0F1C]"
        >
          <X className="h-5 w-5" />
        </button>

        {/* px keeps the title clear of the close button on narrow phones */}
        <h2 className="font-tight mb-6 px-8 text-center text-[26px] font-semibold tracking-[-0.02em] text-[#0D0F1C] sm:px-6 sm:text-[34px]">
          {revealed ? "There you go." : "You've got a surprise!"}
        </h2>

        <ScratchCard onRevealed={() => setRevealed(true)} />

        <div
          className={`overflow-hidden transition-all duration-500 ${
            revealed ? 'mt-8 max-h-40 opacity-100' : 'mt-0 max-h-0 opacity-0'
          }`}
        >
          <a
            href={WA_OFFER}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'cta_click', {
                  event_category: 'engagement',
                  event_label: 'autopilot_scratch_claim',
                  value: 1,
                });
              }
              close();
            }}
            className="btn-autopilot font-tight flex w-full items-center justify-center rounded-full px-8 py-4 text-[17px] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            Claim it on WhatsApp
          </a>
          <p className="font-tight mt-3 text-center text-[12px] text-[#9AA0A6]">
            One per business. Just mention the code when we chat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScratchToReveal;
