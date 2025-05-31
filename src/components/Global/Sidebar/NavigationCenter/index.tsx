import React from 'react';

interface NavigationCenterProps {
  title?: string;
  onNavigate: (label: string) => void;
  items: {
    label: string;
    icon: React.ReactNode;
    url: string;
    disabled?: boolean;
  }[];
}

const NavigationCenter = ({
  items,
  onNavigate,
  title,
}: NavigationCenterProps) => {
  return (
    <div className="text-sm flex-1">
      <h2 className="p-3 text-nowrap">{title}</h2>
      <nav>
        <ul className="space-y-1">
          {items.map((item, index) => (
            <li
              key={index}
              className={`flex items-center p-2 rounded transition-colors hover:bg-white hover:shadow-lg ${
                item.disabled
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
              onClick={() => !item.disabled && onNavigate(item.url)}
            >
              <div
                className={
                  'flex items-center p-2 justify-center bg-white rounded shadow- mr-3'
                }
              >
                {item.icon}
              </div>
              <span className={'transition-opacity duration-200 opacity-100 '}>
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavigationCenter;
// This NavigationCenter component is a placeholder for the navigation section of a sidebar.
