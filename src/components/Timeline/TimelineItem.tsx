import React from 'react';
import { CalendarDays } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  organization: string;
  date: string;
  description: string;
}

export function TimelineItem({ title, organization, date, description }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 group animate-fade-in">
      <div className="absolute left-0 top-0 w-1 h-full bg-gray-200 dark:bg-gray-700 group-last:h-8"></div>
      <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400 border-2 border-white dark:border-gray-900 transition-transform duration-300 group-hover:scale-150"></div>
      <div className="flex flex-col space-y-2 transition-all duration-300 group-hover:translate-x-2">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
          <span className="font-medium">{organization}</span>
          <span>•</span>
          <div className="flex items-center text-sm">
            <CalendarDays className="w-4 h-4 mr-1" />
            {date}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}