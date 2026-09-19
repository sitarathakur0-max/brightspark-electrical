import React from 'react';
import { Star } from 'lucide-react';
import { business } from '../data/business';

interface TrustBadgeProps {
  className?: string;
  variant?: 'light' | 'dark' | 'compact';
}

export const TrustBadge: React.FC<TrustBadgeProps> = ({ className = '', variant = 'dark' }) => {
  if (variant === 'compact') {
    return (
      <div
        id="trust-badge-compact"
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border bg-slate-800/80 text-slate-200 border-slate-700 ${className}`}
      >
        <div className="flex items-center text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="font-bold">{business.rating}</span>
        <span className="text-slate-400">({business.reviewCount} Reviews)</span>
      </div>
    );
  }

  const isDark = variant === 'dark';

  return (
    <div
      id="trust-badge-pill"
      className={`inline-flex items-center gap-3 px-4 py-2 rounded-full border transition-all ${
        isDark
          ? 'bg-slate-800/80 border-slate-700/80 text-white'
          : 'bg-white border-slate-200 text-slate-900 shadow-sm'
      } ${className}`}
    >
      <div className="flex items-center gap-0.5 text-amber-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <div className="text-xs sm:text-sm font-semibold tracking-tight">
        <span>Rated {business.rating} ★</span>
        <span className={`ml-1 font-normal ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          from {business.reviewCount} reviews
        </span>
      </div>
    </div>
  );
};
