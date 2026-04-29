import { clsx } from 'clsx';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled, 
  loading,
  className,
  ...props 
}) {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    ghost: 'hover:bg-gray-100',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        'inline-flex items-center justify-center font-medium rounded-lg transition-colors',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {loading && (
        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
      )}
      {children}
    </button>
  );
}

export function IconButton({ 
  children, 
  variant = 'ghost', 
  size = 'md',
  className,
  ...props 
}) {
  const variants = {
    ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800',
    outline: 'border border-gray-300 hover:border-gray-400',
    filled: 'bg-gray-100 dark:bg-gray-800',
  };

  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-lg transition-colors',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function Card({ children, className, ...props }) {
  return (
    <div
      className={clsx(
        'bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function Badge({ children, variant = 'default', className }) {
  const variants = {
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
    primary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export function Avatar({ src, alt, size = 'md', fallback }) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  return (
    <div className={clsx('relative rounded-full overflow-hidden', sizes[size])}>
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <span className="text-gray-600 font-medium">
            {fallback?.charAt(0)?.toUpperCase() || '?'}
          </span>
        </div>
      )}
    </div>
  );
}

export function Spinner({ size = 'md', className }) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <div
      className={clsx(
        'border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin',
        sizes[size],
        className
      )}
    />
  );
}

export function Toggle({ checked, onChange, label, disabled }) {
  return (
    <label className={clsx('inline-flex items-center gap-2', disabled && 'opacity-50')}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={onChange}
        className={clsx(
          'w-10 h-5 rounded-full relative transition',
          checked ? 'bg-blue-600' : 'bg-gray-300',
          disabled && 'cursor-not-allowed'
        )}
      >
        <span
          className={clsx(
            'absolute top-0.5 w-4 h-4 bg-white rounded-full transition',
            checked ? 'right-0.5' : 'left-0.5'
          )}
        />
      </button>
      {label && <span className="text-sm text-gray-700 dark:text-gray-300">{label}</span>}
    </label>
  );
}

export function Skeleton({ className }) {
  return (
    <div
      className={clsx(
        'animate-pulse bg-gray-200 dark:bg-gray-700 rounded',
        className
      )}
    />
  );
}

export function Progressbar({ value, showLabel = true, size = 'md' }) {
  const sizes = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  return (
    <div className="w-full">
      <div className={clsx('flex justify-between text-xs mb-1', !showLabel && 'sr-only')}>
        <span>Progress</span>
        <span>{value}%</span>
      </div>
      <div className={clsx('bg-gray-200 dark:bg-gray-700 rounded-full', sizes[size])}>
        <div 
          className={clsx('bg-gray-900 dark:bg-gray-100 rounded-full transition-all', sizes[size])} 
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export function Divider({ label, className }) {
  if (label) {
    return (
      <div className={clsx('flex items-center gap-4', className)}>
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
        <span className="text-sm text-gray-500">{label}</span>
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
      </div>
    );
  }

  return <div className={clsx('h-px bg-gray-200 dark:bg-gray-700', className)} />;
}