import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  rightIcon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[#4F9CF9] text-white hover:bg-[#2F7CD9] focus:ring-[#4F9CF9]",
    secondary: "bg-[#FFE492] text-[#043873] hover:bg-[#EED381] focus:ring-[#FFE492]",
    outline: "border border-[#FFE492] text-white hover:bg-[#FFE492] hover:text-[#043873]", // Assuming outline is used on dark bg
    ghost: "bg-transparent text-[#043873] hover:bg-gray-100", // For "Login" maybe
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-10 py-5 text-lg", // Based on 40px padding in Figma
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};
