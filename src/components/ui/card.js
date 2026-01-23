import { twMerge } from 'tailwind-merge';

export default function Card({ children, className, as: Component = "div" }) {
  const baseStyles = "p-8 bg-gray-900/50 rounded-xl border border-highlight/25";
  
  return (
    <Component className={twMerge(baseStyles, className)}>
      {children}
    </Component>
  );
}