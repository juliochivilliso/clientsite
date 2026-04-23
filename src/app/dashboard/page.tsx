'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { NetworkChart } from '@/components/dashboard/NetworkChart';
import { LoadingWrapper } from '@/components/ui/LoadingWrapper';
import {
  LayoutList,
  HeadphonesIcon,
  MapPin,
  ArrowRight,
  Wifi,
  Ticket,
  CalendarClock,
} from 'lucide-react';

const modules = [
  {
    id: 'mis-servicios',
    icon: LayoutList,
    title: 'Mis Servicios',
    description: 'Consultá y gestioná tus servicios contratados.',
    href: '/dashboard/mis-servicios',
    external: false,
    accentColor: 'from-blue-500 to-blue-600',
    shadowColor: 'shadow-blue-500/20',
    badge: {
      text: '3',
      label: 'ACTIVOS',
      style: 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20',
    },
  },
  {
    id: 'helpdesk',
    icon: HeadphonesIcon,
    title: 'Helpdesk',
    description: 'Abrí tickets de soporte y seguí tus consultas.',
    href: '/dashboard/helpdesk',
    external: false,
    accentColor: 'from-indigo-500 to-violet-600',
    shadowColor: 'shadow-indigo-500/20',
    badge: {
      text: '1',
      label: 'ABIERTO',
      style: 'bg-amber-500/10 text-amber-500 border border-amber-500/20',
    },
  },
  {
    id: 'trakpro',
    icon: MapPin,
    title: 'TrakPro',
    description: 'Seguimiento en tiempo real de tu flota y activos.',
    href: 'https://trackpro-web.vercel.app/',
    external: true,
    accentColor: 'from-emerald-500 to-teal-600',
    shadowColor: 'shadow-emerald-500/20',
    badge: {
      isOnline: true,
      label: 'ONLINE',
      style: 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20',
    },
  },
];

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('pgi_token');
    if (!token) {
      router.replace('/');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <DashboardHeader />

      {/* ── Main ─────────────────────────────────────────────── */}
      <main className="max-w-6xl mx-auto px-6 py-14">
        <LoadingWrapper>
        {/* Welcome */}
        <section className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-accent mb-1">Portal de Cliente</p>
          <h1 className="text-4xl font-black tracking-tight text-foreground">
            Bienvenido, <span className="text-accent">Administrador</span>
          </h1>
          <p className="mt-2 text-muted-foreground font-medium max-w-lg">
            Accedé a tus servicios, soporte y herramientas desde un único panel de control.
          </p>
        </section>

        {/* KPIs */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-75">
          {/* KPI 1 */}
          <article className="flex items-center gap-4 bg-card border border-border rounded-2xl px-5 py-4">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <Wifi size={20} />
            </div>
            <div>
              <p className="text-2xl font-black text-foreground leading-none">3</p>
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mt-1">Servicios activos</p>
            </div>
          </article>

          {/* KPI 2 */}
          <article className="flex items-center gap-4 bg-card border border-border rounded-2xl px-5 py-4">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
              <Ticket size={20} />
            </div>
            <div>
              <p className="text-2xl font-black text-foreground leading-none">1</p>
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mt-1">Ticket abierto</p>
            </div>
          </article>

          {/* KPI 3 */}
          <article className="flex items-center gap-4 bg-card border border-border rounded-2xl px-5 py-4">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <CalendarClock size={20} />
            </div>
            <div>
              <p className="text-xl font-black text-foreground leading-none">31 Dic 2026</p>
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mt-1">Próximo vencimiento</p>
            </div>
          </article>
        </section>

        {/* Network Chart */}
        <section className="mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
          <NetworkChart />
        </section>

        {/* Module Grid */}
        <section
          aria-label="Módulos disponibles"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100"
        >
          {modules.map((mod) => {
            const Icon = mod.icon;
            const CardContent = (
              <article
                key={mod.id}
                className="
                  group relative flex flex-col gap-6 p-7
                  bg-card
                  border border-border
                  dark:inner-glow-top
                  rounded-3xl
                  shadow-sm hover:shadow-lg hover:shadow-accent/5
                  transition-all duration-300 hover:-translate-y-1
                  cursor-pointer overflow-hidden
                "
              >
                {/* Gradient blob on hover */}
                <div className={`absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br ${mod.accentColor} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 pointer-events-none`} />

                {/* Badge */}
                {mod.badge && (
                  <div className={`absolute top-5 right-5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${mod.badge.style}`}>
                    {mod.badge.isOnline && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                    )}
                    {mod.badge.text && <span>{mod.badge.text}</span>}
                    {mod.badge.label}
                  </div>
                )}

                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${mod.accentColor} ${mod.shadowColor} shadow-lg flex items-center justify-center text-white flex-shrink-0`}>
                  <Icon size={22} />
                </div>

                {/* Text */}
                <div className="flex-1 space-y-1.5">
                  <h2 className="text-lg font-black text-foreground tracking-tight">{mod.title}</h2>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{mod.description}</p>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-accent">
                    {mod.external ? 'Abrir plataforma' : 'Acceder'}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-accent group-hover:translate-x-1 transition-transform duration-200"
                  />
                </div>
              </article>
            );

            return mod.external ? (
              <a
                key={mod.id}
                href={mod.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {CardContent}
              </a>
            ) : (
              <a key={mod.id} href={mod.href} className="block">
                {CardContent}
              </a>
            );
          })}
        </section>
        </LoadingWrapper>
      </main>
    </div>
  );
}
