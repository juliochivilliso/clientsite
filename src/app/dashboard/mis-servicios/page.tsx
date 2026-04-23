'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { LoadingWrapper } from '@/components/ui/LoadingWrapper';
import { ArrowLeft, Wifi, Phone, MapPin } from 'lucide-react';

export default function MisServiciosPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('pgi_token');
    if (!token) {
      router.replace('/');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <DashboardHeader 
        customLeft={
          <button
            onClick={() => router.push('/dashboard')}
            className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors group"
            aria-label="Volver al dashboard"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            Volver
          </button>
        }
      />

      {/* ── Main ─────────────────────────────────────────────── */}
      <main className="max-w-6xl mx-auto px-6 py-14">
        <LoadingWrapper>
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-accent mb-1">Portal de Cliente</p>
          <h1 className="text-4xl font-black tracking-tight text-foreground mb-2">
            Mis Servicios
          </h1>
          <p className="text-muted-foreground font-medium mb-12">Tus servicios contratados y su estado actual.</p>

          <div className="space-y-4">
            {/* Servicio 1 */}
            <article className="flex max-md:flex-col md:items-center justify-between bg-card border border-border dark:inner-glow-top rounded-2xl p-5 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 flex-shrink-0">
                  <Wifi size={24} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">Internet Fibra Óptica</h3>
                  <p className="text-sm text-muted-foreground">100 Mbps simétrico</p>
                </div>
              </div>
              <div className="flex flex-col md:items-end gap-1 text-sm">
                <span className="text-muted-foreground">Desde 01 Ene 2025</span>
                <span className="font-semibold text-foreground">Vencimiento: 31 Dic 2026</span>
              </div>
              <div className="flex items-center justify-between md:justify-end gap-4 mt-4 md:mt-0">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  Activo
                </span>
                <button className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest border border-accent/30 text-accent hover:bg-accent/5 transition-colors">
                  Ver detalle
                </button>
              </div>
            </article>

            {/* Servicio 2 */}
            <article className="flex max-md:flex-col md:items-center justify-between bg-card border border-border dark:inner-glow-top rounded-2xl p-5 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-500 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">Telefonía VoIP</h3>
                  <p className="text-sm text-muted-foreground">2 líneas DDI</p>
                </div>
              </div>
              <div className="flex flex-col md:items-end gap-1 text-sm">
                <span className="text-muted-foreground">Desde 01 Mar 2025</span>
                <span className="font-semibold text-foreground">Vencimiento: 28 Feb 2026</span>
              </div>
              <div className="flex items-center justify-between md:justify-end gap-4 mt-4 md:mt-0">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  Activo
                </span>
                <button className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest border border-accent/30 text-accent hover:bg-accent/5 transition-colors">
                  Ver detalle
                </button>
              </div>
            </article>

            {/* Servicio 3 */}
            <article className="flex max-md:flex-col md:items-center justify-between bg-card border border-border dark:inner-glow-top rounded-2xl p-5 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">Monitoreo GPS Flota</h3>
                  <p className="text-sm text-muted-foreground">Hasta 10 unidades</p>
                </div>
              </div>
              <div className="flex flex-col md:items-end gap-1 text-sm">
                <span className="text-muted-foreground">Desde 15 Abr 2025</span>
                <span className="font-semibold text-foreground">Vencimiento: 15 Abr 2026</span>
              </div>
              <div className="flex items-center justify-between md:justify-end gap-4 mt-4 md:mt-0">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  Activo
                </span>
                <button className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest border border-accent/30 text-accent hover:bg-accent/5 transition-colors">
                  Ver detalle
                </button>
              </div>
            </article>
          </div>
        </div>
        </LoadingWrapper>
      </main>
    </div>
  );
}
