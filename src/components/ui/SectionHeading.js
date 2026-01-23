// components/ui/SectionHeading.js

import { twMerge } from 'tailwind-merge';

export default function SectionHeading({ children, className }) {
  const baseStyles = "text-2xl font-bold text-white mb-8 border-l-4 border-highlight pl-4";
  
  return (
    <h2 className={twMerge(baseStyles, className)}>
      {children}
    </h2>
  );
}