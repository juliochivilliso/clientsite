'use client';

import React from 'react';
import { useTheme } from '../theme-provider';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        relative inline-flex h-10 w-20 flex-shrink-0 cursor-pointer rounded-full border-2 border-slate-200 dark:border-slate-800
        bg-slate-50 dark:bg-slate-900 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-slate-950
      "
      aria-label="Alternar tema"
    >
      <span
        className={`
          pointer-events-none relative inline-block h-8 w-8 transform rounded-full bg-white dark:bg-accent shadow ring-0 transition duration-300 ease-in-out
          ${theme === 'dark' ? 'translate-x-10' : 'translate-x-1'}
          mt-0.5
        `}
      >
        <span
          className={`
            absolute inset-0 flex h-full w-full items-center justify-center transition-opacity
            ${theme === 'dark' ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in'}
          `}
          aria-hidden="true"
        >
          <Sun size={16} className="text-amber-500" />
        </span>
        <span
          className={`
            absolute inset-0 flex h-full w-full items-center justify-center transition-opacity
            ${theme === 'dark' ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out'}
          `}
          aria-hidden="true"
        >
          <Moon size={16} className="text-white" />
        </span>
      </span>
    </button>
  );
};
