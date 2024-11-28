import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  Map,
  Calendar,
  Bell,
  Settings,
  LogOut,
} from 'lucide-react';
import { useSidebar } from '../context/SidebarContext';
import { NavigationSection } from '../navigation/NavigationSection';
import { MenuToggle } from './MenuToggle';
import { SidebarOverlay } from './SidebarOverlay';
import { Logo } from './Logo';
import { MenuItem } from '../types/navigation';
import SearchBar from '../components/SearchBar';
import ProfileButton from '../components/ProfileButton';

const menuItems: MenuItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: Users, label: 'Segment' },
  { icon: Map, label: 'User Journey' },
  { icon: Calendar, label: 'Events' },
  { icon: Bell, label: 'Notification' },
];

const bottomMenuItems: MenuItem[] = [
  { icon: Settings, label: 'Settings' },
  { icon: LogOut, label: 'Logout' },
];

export const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const { isCollapsed, toggleSidebar } = useSidebar();

  const handleItemClick = (label: string) => {
    setActiveItem(label);
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  return (
    <>
      <MenuToggle />
      
      <aside className={`
        fixed left-0 top-0 h-screen bg-white shadow-sm
        transition-all duration-300 ease-in-out
        ${isCollapsed ? '-translate-x-full' : 'translate-x-0'}
        md:translate-x-0
        md:w-[280px] lg:w-[332px]
        z-40
      `}>
        <div className="flex flex-col h-full py-8">
          <Logo />

        <div className="hidden max-cllmd:flex flex-col  items-center max-cllmd:items-start max-cllmd:p-[10px] gap-4 min-cllmd:flex-grow justify-end   ml-4">
            <ProfileButton />
            <SearchBar />
        </div>

          <nav className="flex-1 flex flex-col">
            <NavigationSection
              items={menuItems}
              activeItem={activeItem}
              onItemClick={handleItemClick}
            />
          </nav>

        

          <NavigationSection
            items={bottomMenuItems}
            activeItem={activeItem}
            onItemClick={handleItemClick}
          />

        
        </div>
      </aside>
      
      <SidebarOverlay />
    </>
  );
};