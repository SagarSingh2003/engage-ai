import React from 'react';

interface TooltipProps {
  title: string;
  items: {
    label: string;
    value: number;
    color: string;
  }[];
}

export const ChartTooltip: React.FC<TooltipProps> = ({ title, items }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-3 min-w-[120px]">
      <div className="text-sm font-medium text-gray-600 mb-2">{title}</div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <div 
                className="w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-500">{item.label}</span>
            </div>
            <span className="text-sm font-medium text-gray-700">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};