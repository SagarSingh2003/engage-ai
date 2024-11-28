import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SidebarButtonProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const SidebarButton: React.FC<SidebarButtonProps> = ({
  icon: Icon,
  label,
  isActive = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full md:w-[220px] lg:w-[252px] h-[60px]
        flex items-center gap-3 px-6
        transition-all duration-300 ease-in-out
        rounded-lg
        ${isActive 
          ? 'bg-purple-50 text-purple-600' 
          : 'text-gray-600 hover:bg-purple-50/50'
        }
        group
      `}
    >
      <Icon className={`
        w-5 h-5
        transition-all duration-300 
        ${isActive ? 'text-purple-600' : 'text-gray-500'}
        group-hover:scale-110 group-hover:text-purple-600
      `} />
      <span className="text-base font-medium transition-colors duration-300 group-hover:text-purple-600">
        {label}
      </span>
    </button>
  );
};