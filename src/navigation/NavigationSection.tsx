import React from 'react';
import { SidebarButton } from './SidebarButton';
import { MenuItem } from '../types/navigation';

interface NavigationSectionProps {
  items: MenuItem[];
  activeItem: string;
  onItemClick: (label: string) => void;
}

export const NavigationSection: React.FC<NavigationSectionProps> = ({
  items,
  activeItem,
  onItemClick,
}) => {
  return (
    <div className="px-6 space-y-2">
      {items.map((item) => (
        <SidebarButton
          key={item.label}
          icon={item.icon}
          label={item.label}
          isActive={activeItem === item.label}
          onClick={() => onItemClick(item.label)}
        />
      ))}
    </div>
  );
};