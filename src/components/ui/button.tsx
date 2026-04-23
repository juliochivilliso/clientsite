'use client';

import { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'destructive' | 'ghost';
export type ButtonSize    = 'sm' | 'md' | 'lg' | 'icon';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-accent-foreground shadow-lg shadow-accent/20 hover:brightness-110 hover:shadow-xl hover:shadow-accent/25',
  secondary:
    'bg-transparent border border-border text-muted-foreground hover:bg-muted/70 active:bg-muted',
  destructive:
    'bg-destructive text-accent-foreground shadow-lg shadow-destructive/20 hover:brightness-110 hover:shadow-xl hover:shadow-destructive/25',
  ghost:
    'bg-transparent text-muted-foreground hover:text-accent hover:bg-accent/10',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4     py-2      text-[10px] font-black uppercase tracking-widest rounded-xl',
  md: 'px-6     py-3      text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl',
  lg: 'px-8     py-4      text-[13px] font-black uppercase tracking-[0.2em] rounded-[2rem]',
  icon: 'p-2.5 rounded-xl aspect-square',
};

const Spinner = () => (
  <Loader2 className="w-4 h-4 animate-spin text-current" />
);

// ─── Button ───────────────────────────────────────────────────────────────────

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?:    ButtonSize;
  loading?: boolean;
  icon?:    React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading, icon, className, children, disabled, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={[
        'inline-flex items-center justify-center gap-2 transition-all duration-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        'active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          {icon && <span className="shrink-0">{icon}</span>}
          {children && <span className="relative z-10">{children}</span>}
        </>
      )}
    </button>
  ),
);
Button.displayName = 'Button';

const iconSizeClasses: Record<ButtonSize, string> = {
  sm: 'w-7  h-7  rounded-lg',
  md: 'w-10 h-10 rounded-xl',
  lg: 'w-12 h-12 rounded-2xl',
  icon: 'w-10 h-10 rounded-xl',
};

// ─── IconButton ───────────────────────────────────────────────────────────────

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon:     React.ReactNode;
  variant?: ButtonVariant;
  size?:    ButtonSize;
  loading?: boolean;
  label:    string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, variant = 'ghost', size = 'md', loading, label, className, disabled, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      aria-label={label}
      className={[
        'inline-flex items-center justify-center transition-all duration-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        'active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed',
        variantClasses[variant],
        iconSizeClasses[size],
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {loading ? <Spinner /> : icon}
    </button>
  ),
);
IconButton.displayName = 'IconButton';

// ─── ButtonGroup + SegmentedItem ─────────────────────────────────────────────

export interface ButtonGroupProps {
  variant?:   'spaced' | 'segmented';
  children:   React.ReactNode;
  className?: string;
}

export function ButtonGroup({ variant = 'spaced', children, className }: ButtonGroupProps) {
  if (variant === 'segmented') {
    return (
      <div
        role="group"
        className={[
          'inline-flex border border-border rounded-xl overflow-hidden divide-x divide-border',
          className,
        ].filter(Boolean).join(' ')}
      >
        {children}
      </div>
    );
  }
  return (
    <div role="group" className={['flex items-center gap-2', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
}

export interface SegmentedItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export function SegmentedItem({ active, children, className, ...props }: SegmentedItemProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={[
        'px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.05em] transition-all duration-300',
        active
          ? 'bg-accent text-accent-foreground shadow-xl shadow-accent/10'
          : 'bg-transparent text-muted-foreground hover:bg-muted/70',
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}
