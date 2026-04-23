'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut, User, Settings, CreditCard, ChevronDown } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

interface DashboardHeaderProps {
  customLeft?: React.ReactNode;
}

export function DashboardHeader({ customLeft }: DashboardHeaderProps) {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    localStorage.removeItem('pgi_token');
    router.push('/');
  };

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-card/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        
        {/* Brand or Custom Left (e.g. Back button) */}
        {customLeft ? (
          <div>{customLeft}</div>
        ) : (
          <div className="flex items-center gap-3">
            <img
              src="/logo_triax_pgi_2.png"
              alt="TRIAX PGI"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="text-lg font-black tracking-tight uppercase text-foreground">
              TRIAX <span className="text-accent">PGI</span>
            </span>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full"
              aria-label="Menú de usuario"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold shadow-sm shadow-blue-500/20 border-2 border-background/20 relative group-hover:scale-105 transition-transform">
                CM
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border border-background rounded-full"></span>
              </div>
              <ChevronDown size={14} className={`text-muted-foreground transition-transform duration-200 hidden sm:block ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-card border border-border/50 shadow-xl shadow-black/10 dark:shadow-black/40 rounded-2xl py-2 animate-in zoom-in-95 duration-200 origin-top-right overflow-hidden glassmorphism">
                <div className="px-4 py-3 border-b border-border/40">
                  <p className="text-sm font-bold text-foreground">Carlos Méndez</p>
                  <p className="text-xs text-muted-foreground truncate">cmendez@empresa.com</p>
                </div>
                
                <div className="py-1">
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors">
                    <User size={16} />
                    <span>Mi Perfil</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors">
                    <Settings size={16} />
                    <span>Configuración</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors">
                    <CreditCard size={16} />
                    <span>Facturación</span>
                  </button>
                </div>
                
                <div className="pt-1 border-t border-border/40">
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-red-500 hover:bg-red-500/10 transition-colors"
                  >
                    <LogOut size={16} />
                    <span>Cerrar Sesión</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
