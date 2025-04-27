import React from 'react';
import { ArrowRight } from 'lucide-react';

interface GradientButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({ href, children, className = '' }) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 transition-colors w-full sm:w-auto ${className}`}
    >
      {children}
      <ArrowRight className="ml-2 w-5 h-5" />
    </a>
  );
};

export default GradientButton