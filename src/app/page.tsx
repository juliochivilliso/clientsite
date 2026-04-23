'use client';

import React from 'react';
import { LoginSidebar } from '@/components/login/LoginSidebar';
import { LoginForm } from '@/components/login/LoginForm';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

/**
 * LoginPage
 * Orchestrates the split-screen login experience.
 * Mobile-First: Stacked on mobile, Split-screen on Desktop (lg+).
 */
export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row bg-background font-sans selection:bg-accent/30 transition-colors duration-500 overflow-x-hidden">
      
      {/* --- Section Left: Branding (Full height Aside) --- */}
      <div className="hidden lg:block w-[40%] xl:w-[35%]">
        <LoginSidebar />
      </div>

      {/* --- Section Right: Form Container --- */}
      <section 
        aria-labelledby="login-title"
        className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 relative bg-background overflow-y-auto"
      >
        
        {/* Toggle Theme - Technical positioning */}
        <div className="absolute top-6 right-6 lg:top-8 lg:right-8 transition-opacity duration-700">
          <ThemeToggle />
        </div>

        {/* The Card with Advanced Elevation and 3D Logic */}
        <article className="
          w-full max-w-[420px] 
          bg-card 
          lg:rounded-[2.5rem] rounded-[1.5rem] 
          p-8 md:p-10
          shadow-layered-depth
          dark:shadow-none
          dark:bg-card-volume
          dark:border dark:border-white/10
          dark:inner-glow-top
          backdrop-blur-xl 
          animate-in zoom-in-95 duration-500
          relative z-10
          my-8
        ">
          
          <header className="flex flex-col items-center mb-8">
            {/* Mobile Logo Branding (Original Brand Asset) */}
            <div className="lg:hidden flex flex-col items-center mb-6">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-50"></div>
                <img
                  src="/logo_triax_pgi_2.png"
                  alt="TRIAX PGI Logo"
                  width={96}
                  height={96}
                  className="relative w-24 h-24 mb-2 object-contain drop-shadow-[0_0_8px_rgba(59,130,246,0.2)]"
                />
              </div>
              <div className="h-1 w-12 bg-gradient-to-r from-accent to-blue-500 rounded-full"></div>
            </div>

            <h1 id="login-title" className="text-2xl md:text-3xl font-black text-foreground tracking-tight text-center uppercase">
              Gestioná tus <span className="text-accent">Servicios</span>
            </h1>
            <p className="mt-2 text-xs md:text-sm text-muted-foreground text-center font-semibold max-w-[280px] leading-relaxed">
              Ingresá tus credenciales para acceder a tu cuenta y gestionar tus servicios.
            </p>
          </header>

          <LoginForm />
          
          <footer className="mt-8 pt-6 border-t border-border/40 text-center">
            <p className="text-[9px] text-muted-foreground font-black uppercase tracking-[0.2em] leading-relaxed">
              Propiedad de TRIAX Telecomunicaciones.<br />
              Portal de Clientes.
            </p>
          </footer>
        </article>

        {/* Legal Footer (Strict WCAG AA #94A3B8 in Dark) */}
        <footer className="mt-4 pb-4 text-[9px] text-muted-foreground uppercase tracking-widest font-black">
          © 2026 TRIAX PGI v4.0.0 &bull; Seguridad Industrial
        </footer>
      </section>
    </main>
  );
}
