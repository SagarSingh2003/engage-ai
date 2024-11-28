import React from 'react';

interface StatsPeriod {
  label: string;
  date: string;
  value: string;
}

interface StatsCardProps {
  title: string;
  periods: StatsPeriod[];
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, periods }) => {
  return (
    <div className="bg-white p-6 rounded-lg max-csm:p-0">
      <h2 className="text-xl font-semibold text-gray-900 h-[20%]">{title}</h2>
      <div className="flex flex-col justify-evenly h-[80%]">
        {periods.map((period, index) => (
          <div key={index} className="flex justify-between items-center min-h-[66px] py-[32px] ">
            <div className="space-y-1">
              <div className="font-medium text-gray-700">{period.label}</div>
              <div className="text-sm text-gray-500">{period.date}</div>
            </div>
            <div className="text-2xl font-semibold text-gray-900">{period.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};