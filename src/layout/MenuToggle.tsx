import React from 'react';
import { Menu } from 'lucide-react';
import { useSidebar } from '../context/SidebarContext';

export const MenuToggle: React.FC = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-200"
    >
      <Menu className="w-6 h-6" />
    </button>
  );
};