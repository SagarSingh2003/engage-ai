import React from 'react';
import { useSidebar } from '../context/SidebarContext';

export const SidebarOverlay: React.FC = () => {
  const { isCollapsed, toggleSidebar } = useSidebar();

  if (isCollapsed) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
      onClick={toggleSidebar}
    />
  );
};