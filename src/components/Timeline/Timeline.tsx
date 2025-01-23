import React from 'react';

interface TimelineProps {
  children: React.ReactNode;
  title: string;
}

export function Timeline({ children, title }: TimelineProps) {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{title}</h2>
      <div className="space-y-0">{children}</div>
    </div>
  );
}