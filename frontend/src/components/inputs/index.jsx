import { clsx } from 'clsx';
import { forwardRef } from 'react';

export const Input = forwardRef(({ 
  label, 
  error, 
  className,
  ...props 
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={clsx(
          'w-full px-3 py-2 border rounded-lg',
          'bg-white dark:bg-gray-900',
          'text-gray-900 dark:text-gray-100',
          'placeholder:text-gray-400',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          error ? 'border-red-500' : 'border-gray-300 dark:border-gray-700',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export const Textarea = forwardRef(({ 
  label, 
  error, 
  className,
  ...props 
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        className={clsx(
          'w-full px-3 py-2 border rounded-lg',
          'bg-white dark:bg-gray-900',
          'text-gray-900 dark:text-gray-100',
          'placeholder:text-gray-400',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'resize-none',
          error ? 'border-red-500' : 'border-gray-300 dark:border-gray-700',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export const Select = forwardRef(({ 
  label, 
  error, 
  options = [],
  placeholder,
  className,
  ...props 
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      <select
        ref={ref}
        className={clsx(
          'w-full px-3 py-2 border rounded-lg',
          'bg-white dark:bg-gray-900',
          'text-gray-900 dark:text-gray-100',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          error ? 'border-red-500' : 'border-gray-300 dark:border-gray-700',
          className
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export const Checkbox = forwardRef(({ 
  label, 
  error, 
  className,
  ...props 
}, ref) => {
  return (
    <div className="flex items-center gap-2">
      <input
        ref={ref}
        type="checkbox"
        className={clsx(
          'w-4 h-4 rounded border-gray-300 text-blue-600',
          'focus:ring-blue-500 focus:ring-offset-0',
          error ? 'border-red-500' : '',
          className
        )}
        {...props}
      />
      {label && (
        <label className="text-sm text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export const Radio = forwardRef(({ 
  label, 
  options = [],
  name,
  className,
  ...props 
}, ref) => {
  return (
    <div className="space-y-2">
      {options.map((option) => (
        <div key={option.value} className="flex items-center gap-2">
          <input
            ref={ref}
            type="radio"
            name={name}
            value={option.value}
            className={clsx(
              'w-4 h-4 border-gray-300 text-blue-600',
              'focus:ring-blue-500 focus:ring-offset-0',
              className
            )}
            {...props}
          />
          {option.label && (
            <label className="text-sm text-gray-700 dark:text-gray-300">
              {option.label}
            </label>
          )}
        </div>
      ))}
    </div>
  );
});

Radio.displayName = 'Radio';

export const Label = ({ children, className, required }) => {
  return (
    <label className={clsx('block text-sm font-medium text-gray-700 dark:text-gray-300', className)}>
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};

export const FormGroup = ({ children, className, error }) => {
  return (
    <div className={clsx('space-y-1', className)}>
      {children}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export const Fieldset = ({ children, legend, className }) => {
  return (
    <fieldset className={clsx('space-y-4', className)}>
      {legend && (
        <legend className="text-lg font-medium text-gray-900 dark:text-gray-100">
          {legend}
        </legend>
      )}
      {children}
    </fieldset>
  );
};