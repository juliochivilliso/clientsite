'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LayoutList, HeadphonesIcon, MapPin, ExternalLink, LayoutDashboard, LogOut, Menu, X } from 'lucide-react';

interface ModuleLayoutProps {
  children: React.ReactNode;
  activeModule: 'mis-servicios' | 'helpdesk';
}

export function ModuleLayout({ children, activeModule }: ModuleLayoutProps) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('pgi_token');
    router.push('/');
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`w-64 fixed left-0 top-0 h-full z-40 bg-card border-r border-border flex flex-col transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Superior */}
        <div className="p-5 border-b border-border flex flex-col gap-2">
          <div className="flex items-center justify-between lg:justify-start gap-3">
            <img src="/logo_triax_pgi_2.png" alt="TRIAX Logo" className="w-8 h-8 object-contain" />
            <h2 className="font-black uppercase text-foreground leading-tight tracking-tight">
              TRIAX <span className="text-accent">SERVICIOS</span>
            </h2>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-muted-foreground p-1">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Navegación */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          <div 
            onClick={() => router.push('/dashboard/mis-servicios')}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${activeModule === 'mis-servicios' ? 'bg-accent/10 text-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`}
          >
            <LayoutList size={20} />
            Mis Servicios
          </div>
          <div 
            onClick={() => router.push('/dashboard/helpdesk')}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${activeModule === 'helpdesk' ? 'bg-accent/10 text-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`}
          >
            <HeadphonesIcon size={20} />
            Helpdesk
          </div>
          <div 
            onClick={() => window.open('https://trackpro-web.vercel.app/', '_blank')}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer text-muted-foreground hover:text-foreground hover:bg-muted"
          >
            <MapPin size={20} />
            <span>TrakPro <ExternalLink size={12} className="inline ml-1 opacity-70" /></span>
          </div>

          <hr className="border-border my-2" />

          <div 
            onClick={() => router.push('/dashboard')}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer text-muted-foreground hover:text-foreground hover:bg-muted"
          >
            <LayoutDashboard size={16} />
            Panel Principal
          </div>
        </nav>

        {/* Inferior */}
        <div className="p-3 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              AD
            </div>
            <div className="truncate">
              <p className="text-sm font-semibold text-foreground truncate">Administrador</p>
              <p className="text-xs text-muted-foreground truncate">admin@empresa.com</p>
            </div>
          </div>
          <button onClick={handleLogout} className="text-muted-foreground hover:text-red-500 p-2 transition-colors shrink-0">
            <LogOut size={16} />
          </button>
        </div>
      </aside>

      {/* Area de contenido */}
      <div className="flex-1 flex flex-col w-full lg:ml-64">
        {/* TopBar */}
        <header className="h-14 border-b border-border/60 bg-card/80 backdrop-blur-xl sticky top-0 z-30 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-foreground">
              <Menu size={20} />
            </button>
            <h1 className="text-base font-black uppercase tracking-tight text-foreground">
              {activeModule === 'mis-servicios' ? 'Mis Servicios' : 'Helpdesk'}
            </h1>
          </div>
          <ThemeToggle />
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
