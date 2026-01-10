/// <reference types="vite/client" />

// Google Analytics gtag type declaration
interface Window {
  gtag: (
    command: 'event' | 'config' | 'js',
    targetId: string | Date,
    config?: {
      event_category?: string;
      event_label?: string;
      value?: number;
      [key: string]: unknown;
    }
  ) => void;
  dataLayer: unknown[];
}
