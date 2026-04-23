'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { LoadingWrapper } from '@/components/ui/LoadingWrapper';
import { ArrowLeft, Plus } from 'lucide-react';

export default function HelpdeskPage() {
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
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-accent mb-1">Portal de Cliente</p>
              <h1 className="text-4xl font-black tracking-tight text-foreground mb-2">
                Helpdesk
              </h1>
              <p className="text-muted-foreground font-medium">Tus tickets de soporte y su estado.</p>
            </div>
            <button className="inline-flex items-center gap-2 btn-3d-industrial text-white px-4 py-2 rounded-xl text-sm font-bold self-start mt-2 md:mt-0">
              <Plus size={18} />
              Nuevo Ticket
            </button>
          </div>

          <div className="space-y-4">
            {/* Ticket 1 */}
            <article className="flex max-md:flex-col md:items-center justify-between bg-card dark:bg-[#15191e] border border-border dark:border-white/10 dark:inner-glow-top rounded-2xl p-5 gap-4">
              <div className="flex flex-col gap-1 md:w-1/3">
                <span className="text-xs text-muted-foreground font-mono">#1042</span>
                <h3 className="text-base font-bold text-foreground leading-snug">Sin señal en sede norte</h3>
                <p className="text-sm text-accent">Internet Fibra Óptica</p>
              </div>
              <div className="flex flex-col md:items-end gap-2 text-sm md:w-1/4">
                <span className="text-muted-foreground">18 Abr 2026</span>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-red-500/10 text-red-500 border border-red-500/20">
                    Alta
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-amber-500/10 text-amber-500 border border-amber-500/20">
                    En proceso
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-end mt-4 md:mt-0">
                <button className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest border border-accent/30 text-accent hover:bg-accent/5 transition-colors">
                  Ver ticket
                </button>
              </div>
            </article>

            {/* Ticket 2 */}
            <article className="flex max-md:flex-col md:items-center justify-between bg-card dark:bg-[#15191e] border border-border dark:border-white/10 dark:inner-glow-top rounded-2xl p-5 gap-4">
              <div className="flex flex-col gap-1 md:w-1/3">
                <span className="text-xs text-muted-foreground font-mono">#1038</span>
                <h3 className="text-base font-bold text-foreground leading-snug">Factura con monto incorrecto</h3>
                <p className="text-sm text-accent">Administración</p>
              </div>
              <div className="flex flex-col md:items-end gap-2 text-sm md:w-1/4">
                <span className="text-muted-foreground">10 Abr 2026</span>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-amber-500/10 text-amber-500 border border-amber-500/20">
                    Media
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    Resuelto
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-end mt-4 md:mt-0">
                <button className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest border border-accent/30 text-accent hover:bg-accent/5 transition-colors">
                  Ver ticket
                </button>
              </div>
            </article>

            {/* Ticket 3 */}
            <article className="flex max-md:flex-col md:items-center justify-between bg-card dark:bg-[#15191e] border border-border dark:border-white/10 dark:inner-glow-top rounded-2xl p-5 gap-4">
              <div className="flex flex-col gap-1 md:w-1/3">
                <span className="text-xs text-muted-foreground font-mono">#1031</span>
                <h3 className="text-base font-bold text-foreground leading-snug">Solicitud de aumento de ancho de banda</h3>
                <p className="text-sm text-accent">Internet Fibra Óptica</p>
              </div>
              <div className="flex flex-col md:items-end gap-2 text-sm md:w-1/4">
                <span className="text-muted-foreground">02 Mar 2026</span>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-500/10 text-blue-500 border border-blue-500/20">
                    Baja
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-slate-500/10 text-slate-500 border border-slate-500/20">
                    Cerrado
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-end mt-4 md:mt-0">
                <button className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest border border-accent/30 text-accent hover:bg-accent/5 transition-colors">
                  Ver ticket
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
