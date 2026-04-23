'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Wifi, Phone, MapPin, ExternalLink } from 'lucide-react';
import { useToast } from '@/components/ui/Toast';
import { ModuleLayout } from '@/components/dashboard/ModuleLayout';
import { Modal } from '@/components/ui/Modal';

export default function MisServiciosPage() {
  const router = useRouter();
  const { showToast, ToastComponent } = useToast();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('pgi_token');
    if (!token) {
      router.replace('/');
    }
  }, [router]);

  return (
    <ModuleLayout activeModule="mis-servicios">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-muted-foreground font-medium mb-8">Tus servicios contratados y su estado actual.</p>

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
                <button 
                  onClick={() => setSelectedService('fibra')}
                  className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest border border-accent/30 text-accent hover:bg-accent/5 transition-colors"
                >
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
                <span className="font-semibold text-foreground">Vencimiento: 28 Feb 2027</span>
              </div>
              <div className="flex items-center justify-between md:justify-end gap-4 mt-4 md:mt-0">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  Activo
                </span>
                <button 
                  onClick={() => setSelectedService('voip')}
                  className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest border border-accent/30 text-accent hover:bg-accent/5 transition-colors"
                >
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
                <span className="font-semibold text-foreground">Vencimiento: 15 Abr 2027</span>
              </div>
              <div className="flex items-center justify-between md:justify-end gap-4 mt-4 md:mt-0">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  Activo
                </span>
                <button 
                  onClick={() => setSelectedService('gps')}
                  className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest border border-accent/30 text-accent hover:bg-accent/5 transition-colors"
                >
                  Ver detalle
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
      {ToastComponent}

      {/* Modals */}
      <Modal open={selectedService === 'fibra'} onClose={() => setSelectedService(null)} title="Internet Fibra Óptica">
        <ul className="space-y-1">
          <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Velocidad contratada</span><span className="text-sm font-semibold text-foreground">100 Mbps simétrico</span></li>
          <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">IP Asignada</span><span className="text-sm font-semibold text-foreground">186.24.115.42</span></li>
          <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Facturación</span><span className="text-sm font-semibold text-foreground">1ro de cada mes</span></li>
          <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Técnico asignado</span><span className="text-sm font-semibold text-foreground">Ing. Roberto Sánchez</span></li>
          <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Contacto técnico</span><span className="text-sm font-semibold text-foreground">+54 9 11 4523-8821</span></li>
          <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Estado</span><span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Activo</span></li>
          <li className="flex justify-between py-2 border-b border-border/40 last:border-0"><span className="text-sm text-muted-foreground">Uptime</span><span className="text-sm font-semibold text-foreground">99.8% últimos 30 días</span></li>
        </ul>
      </Modal>

      <Modal open={selectedService === 'voip'} onClose={() => setSelectedService(null)} title="Telefonía VoIP">
        <ul className="space-y-1">
          <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Líneas</span><span className="text-sm font-semibold text-foreground">2 líneas DDI</span></li>
          <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Número 1</span><span className="text-sm font-semibold text-foreground">+54 11 5230-4400</span></li>
          <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Número 2</span><span className="text-sm font-semibold text-foreground">+54 11 5230-4401</span></li>
          <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Minutos incluidos</span><span className="text-sm font-semibold text-foreground">Ilimitados local y nacional</span></li>
          <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Facturación</span><span className="text-sm font-semibold text-foreground">1ro de cada mes</span></li>
          <li className="flex justify-between py-2 border-b border-border/40 last:border-0"><span className="text-sm text-muted-foreground">Estado</span><span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Activo</span></li>
        </ul>
      </Modal>

      <Modal open={selectedService === 'gps'} onClose={() => setSelectedService(null)} title="Monitoreo GPS Flota">
        <ul className="space-y-1">
          <li className="flex justify-between items-center py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Unidades monitoreadas</span><span className="text-sm font-semibold text-foreground">7 / 10</span></li>
          <li className="flex justify-between items-center py-2 border-b border-border/40">
            <span className="text-sm text-muted-foreground">Plataforma</span>
            <a href="https://trackpro-web.vercel.app/" target="_blank" rel="noreferrer" className="text-sm font-semibold text-accent hover:underline flex items-center gap-1">
              trackpro-web.vercel.app <ExternalLink size={12} />
            </a>
          </li>
          <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Cobertura</span><span className="text-sm font-semibold text-foreground">Nacional</span></li>
          <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Actualización</span><span className="text-sm font-semibold text-foreground">Cada 30 segundos</span></li>
          <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Soporte técnico</span><span className="text-sm font-semibold text-foreground">24/7</span></li>
          <li className="flex justify-between py-2 border-b border-border/40 last:border-0"><span className="text-sm text-muted-foreground">Estado</span><span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Activo</span></li>
        </ul>
      </Modal>

    </ModuleLayout>
  );
}
