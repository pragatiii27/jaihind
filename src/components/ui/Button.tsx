import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ink' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-sans font-semibold tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#B5654A] focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 cursor-pointer';

  const sizeStyles = {
    sm: 'h-9 px-4 text-xs rounded-sm gap-1.5',
    md: 'h-11 px-6 text-sm rounded-sm gap-2',
    lg: 'h-13 px-8 text-base rounded-md gap-2.5'
  };

  const variantStyles = {
    primary: 'bg-[#B5654A] text-white hover:bg-[#9E553C] shadow-sm',
    ink: 'bg-[#1D1C19] text-[#F7F5F1] hover:bg-[#34322D] shadow-sm',
    outline: 'border border-[#1D1C19] text-[#1D1C19] bg-transparent hover:bg-[#1D1C19] hover:text-[#F7F5F1]',
    ghost: 'bg-transparent text-[#1D1C19] hover:bg-[#EFEAE2]',
    link: 'bg-transparent text-[#B5654A] hover:underline p-0 h-auto font-medium tracking-normal'
  };

  return (
    <button
      className={twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], className))}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
