import { clsx } from 'clsx';

export function Container({ children, className, size = 'default' }) {
  const sizes = {
    sm: 'max-w-3xl',
    default: 'max-w-5xl',
    lg: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div className={clsx('mx-auto px-4 sm:px-6 lg:px-8', sizes[size], className)}>
      {children}
    </div>
  );
}

export function Flex({ children, className, gap, align = 'center', justify = 'start' }) {
  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
  };

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
  };

  const gapClasses = {
    0: 'gap-0',
    1: 'gap-1',
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
  };

  return (
    <div className={clsx('flex', alignClasses[align], justifyClasses[justify], gap && gapClasses[gap], className)}>
      {children}
    </div>
  );
}

export function Grid({ children, className, cols = 3, gap = 4 }) {
  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  };

  const gapClasses = {
    0: 'gap-0',
    2: 'gap-2',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
  };

  return (
    <div className={clsx('grid', colClasses[cols], gapClasses[gap], className)}>
      {children}
    </div>
  );
}

export function Stack({ children, className, gap = 4, direction = 'vertical' }) {
  const gapClasses = {
    0: 'gap-0',
    1: 'gap-1',
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
  };

  return (
    <div
      className={clsx(
        direction === 'vertical' ? 'flex flex-col' : 'flex',
        gapClasses[gap],
        className
      )}
    >
      {children}
    </div>
  );
}

export function Center({ children, className }) {
  return (
    <div className={clsx('flex items-center justify-center', className)}>
      {children}
    </div>
  );
}

export function Section({ children, className, size = 'default', background }) {
  const backgrounds = {
    default: '',
    light: 'bg-gray-50 dark:bg-gray-900',
    dark: 'bg-gray-900 dark:bg-gray-100',
    primary: 'bg-blue-50 dark:bg-blue-900/20',
  };

  const sizes = {
    sm: 'py-8',
    default: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
  };

  return (
    <section className={clsx(sizes[size], backgrounds[background], className)}>
      {children}
    </section>
  );
}

export function AspectRatio({ children, ratio = '16/9', className }) {
  return (
    <div className={clsx('relative w-full', className)} style={{ aspectRatio: ratio }}>
      {children}
    </div>
  );
}

export function Hide({ children, when = true }) {
  if (when) return null;
  return children;
}

export function Show({ children, when }) {
  if (!when) return null;
  return children;
}