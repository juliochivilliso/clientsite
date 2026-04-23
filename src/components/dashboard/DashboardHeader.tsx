'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut, User, Settings, CreditCard, ChevronDown } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { useToast } from '@/components/ui/Toast';
import { Modal } from '@/components/ui/Modal';

interface DashboardHeaderProps {
  customLeft?: React.ReactNode;
}

export function DashboardHeader({ customLeft }: DashboardHeaderProps) {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { showToast, ToastComponent } = useToast();
  const [activeModal, setActiveModal] = useState<'perfil' | 'config' | 'factura' | null>(null);
  const [toggles, setToggles] = useState({ email: true, alerts: true, sms: false, summary: false });
  const toggleSetting = (key: keyof typeof toggles) => setToggles(p => ({ ...p, [key]: !p[key] }));

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
          <button onClick={() => router.push('/dashboard')} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img
              src="/logo_triax_pgi_2.png"
              alt="TRIAX PGI"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="text-lg font-black tracking-tight uppercase text-foreground">
              TRIAX <span className="text-accent">SERVICIOS</span>
            </span>
          </button>
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
                AD
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border border-background rounded-full"></span>
              </div>
              <ChevronDown size={14} className={`text-muted-foreground transition-transform duration-200 hidden sm:block ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-card border border-border/50 shadow-xl shadow-black/10 dark:shadow-black/40 rounded-2xl py-2 animate-in zoom-in-95 duration-200 origin-top-right overflow-hidden">
                <div className="px-4 py-3 border-b border-border/40">
                  <p className="text-sm font-bold text-foreground">Administrador</p>
                  <p className="text-xs text-muted-foreground truncate">admin@empresa.com</p>
                </div>
                
                <div className="py-1">
                  <button onClick={() => { setActiveModal('perfil'); setDropdownOpen(false); }} className="w-full flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors">
                    <User size={16} />
                    <span>Mi Perfil</span>
                  </button>
                  <button onClick={() => { setActiveModal('config'); setDropdownOpen(false); }} className="w-full flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors">
                    <Settings size={16} />
                    <span>Configuración</span>
                  </button>
                  <button onClick={() => { setActiveModal('factura'); setDropdownOpen(false); }} className="w-full flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors">
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
      {ToastComponent}

      {/* Modals */}
      <Modal open={activeModal === 'perfil'} onClose={() => setActiveModal(null)} title="Mi Perfil">
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xl font-black shadow-lg mb-4">
            AD
          </div>
          <h3 className="text-xl font-black text-foreground">Administrador</h3>
          <p className="text-sm text-muted-foreground">admin@empresa.com</p>
        </div>
        <ul className="space-y-1">
          <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Empresa</span><span className="text-sm font-semibold text-foreground">Grupo Industrial Méndez S.A.</span></li>
          <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Teléfono</span><span className="text-sm font-semibold text-foreground">+54 9 11 5823-9041</span></li>
          <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Rol</span><span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-accent/10 text-accent border border-accent/20">Cliente Premium</span></li>
          <li className="flex justify-between py-2 border-b border-border/40 last:border-0"><span className="text-sm text-muted-foreground">Miembro desde</span><span className="text-sm font-semibold text-foreground">Enero 2024</span></li>
        </ul>
      </Modal>

      <Modal open={activeModal === 'factura'} onClose={() => setActiveModal(null)} title="Facturación">
        <div className="space-y-1">
          <div className="flex justify-between items-center py-3 border-b border-border/40 text-sm">
            <div>
              <p className="font-semibold text-foreground">Mar 2026</p>
              <p className="text-xs text-muted-foreground">Vencimiento: 01 Abr 2026</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-foreground">$124.500</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Pagado</span>
            </div>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-border/40 text-sm">
            <div>
              <p className="font-semibold text-foreground">Feb 2026</p>
              <p className="text-xs text-muted-foreground">Vencimiento: 01 Mar 2026</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-foreground">$124.500</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Pagado</span>
            </div>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-border/40 last:border-0 text-sm">
            <div>
              <p className="font-semibold text-foreground">Abr 2026</p>
              <p className="text-xs text-muted-foreground">Vencimiento: 01 May 2026</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-foreground">$131.200</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-amber-500/10 text-amber-500 border border-amber-500/20">Pendiente</span>
            </div>
          </div>
        </div>
      </Modal>

      <Modal open={activeModal === 'config'} onClose={() => setActiveModal(null)} title="Configuración">
        <div className="space-y-1">
          <div className="flex items-center justify-between py-3 border-b border-border/40">
            <span className="text-sm font-semibold text-foreground">Notificaciones por email</span>
            <button onClick={() => toggleSetting('email')} className={`relative w-10 h-5 rounded-full transition-colors ${toggles.email ? 'bg-accent' : 'bg-muted-foreground/30'}`}>
              <div className={`absolute top-0.5 left-0 w-4 h-4 bg-white rounded-full shadow transition-transform ${toggles.email ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
            </button>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-border/40">
            <span className="text-sm font-semibold text-foreground">Alertas de vencimiento</span>
            <button onClick={() => toggleSetting('alerts')} className={`relative w-10 h-5 rounded-full transition-colors ${toggles.alerts ? 'bg-accent' : 'bg-muted-foreground/30'}`}>
              <div className={`absolute top-0.5 left-0 w-4 h-4 bg-white rounded-full shadow transition-transform ${toggles.alerts ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
            </button>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-border/40">
            <span className="text-sm font-semibold text-foreground">Notificaciones SMS</span>
            <button onClick={() => toggleSetting('sms')} className={`relative w-10 h-5 rounded-full transition-colors ${toggles.sms ? 'bg-accent' : 'bg-muted-foreground/30'}`}>
              <div className={`absolute top-0.5 left-0 w-4 h-4 bg-white rounded-full shadow transition-transform ${toggles.sms ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
            </button>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-border/40 last:border-0">
            <span className="text-sm font-semibold text-foreground">Resumen semanal</span>
            <button onClick={() => toggleSetting('summary')} className={`relative w-10 h-5 rounded-full transition-colors ${toggles.summary ? 'bg-accent' : 'bg-muted-foreground/30'}`}>
              <div className={`absolute top-0.5 left-0 w-4 h-4 bg-white rounded-full shadow transition-transform ${toggles.summary ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
            </button>
          </div>
        </div>
      </Modal>
    </header>
  );
}
