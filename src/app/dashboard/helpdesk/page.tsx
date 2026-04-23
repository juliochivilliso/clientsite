'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';
import { useToast } from '@/components/ui/Toast';
import { SupportChat } from '@/components/helpdesk/SupportChat';
import { ModuleLayout } from '@/components/dashboard/ModuleLayout';
import { Modal } from '@/components/ui/Modal';

export default function HelpdeskPage() {
  const router = useRouter();
  const { showToast, ToastComponent } = useToast();
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const [showNewTicket, setShowNewTicket] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('pgi_token');
    if (!token) {
      router.replace('/');
    }
  }, [router]);

  return (
    <ModuleLayout activeModule="helpdesk">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
            <div>
              <p className="text-muted-foreground font-medium">Tus tickets de soporte y su estado.</p>
            </div>
            <button 
              onClick={() => setShowNewTicket(true)}
              className="inline-flex items-center gap-2 btn-3d-industrial text-white px-4 py-2 rounded-xl text-sm font-bold self-start mt-2 md:mt-0"
            >
              <Plus size={18} />
              Nuevo Ticket
            </button>
          </div>

          <div className="space-y-4">
            {/* Ticket 1 */}
            <article className="flex max-md:flex-col md:items-center justify-between bg-card border border-border dark:inner-glow-top rounded-2xl p-5 gap-4">
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
                <button 
                  onClick={() => setSelectedTicket('1042')}
                  className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest border border-accent/30 text-accent hover:bg-accent/5 transition-colors"
                >
                  Ver ticket
                </button>
              </div>
            </article>

            {/* Ticket 2 */}
            <article className="flex max-md:flex-col md:items-center justify-between bg-card border border-border dark:inner-glow-top rounded-2xl p-5 gap-4">
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
                <button 
                  onClick={() => setSelectedTicket('1038')}
                  className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest border border-accent/30 text-accent hover:bg-accent/5 transition-colors"
                >
                  Ver ticket
                </button>
              </div>
            </article>

            {/* Ticket 3 */}
            <article className="flex max-md:flex-col md:items-center justify-between bg-card border border-border dark:inner-glow-top rounded-2xl p-5 gap-4">
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
                <button 
                  onClick={() => setSelectedTicket('1031')}
                  className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest border border-accent/30 text-accent hover:bg-accent/5 transition-colors"
                >
                  Ver ticket
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
      {ToastComponent}
      <SupportChat />

      {/* Modals de Tickets */}
      <Modal open={selectedTicket === '1042'} onClose={() => setSelectedTicket(null)} title="Ticket #1042 — Sin señal en sede norte">
        <div className="space-y-4">
          <ul className="space-y-1 mb-4">
            <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Servicio</span><span className="text-sm font-semibold text-foreground">Internet Fibra Óptica</span></li>
            <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Prioridad</span><span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-red-500/10 text-red-500 border border-red-500/20">Alta</span></li>
            <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Estado</span><span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-amber-500/10 text-amber-500 border border-amber-500/20">En proceso</span></li>
            <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Abierto</span><span className="text-sm font-semibold text-foreground">18 Abr 2026</span></li>
            <li className="flex justify-between py-2 border-b border-border/40 last:border-0"><span className="text-sm text-muted-foreground">Última actualización</span><span className="text-sm font-semibold text-foreground">20 Abr 2026</span></li>
          </ul>
          
          <h4 className="text-sm font-bold text-foreground mb-2">Línea de tiempo</h4>
          <div className="space-y-3 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-accent bg-card shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow ml-0.5 md:ml-0 z-10"></div>
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-muted p-3 rounded-xl border border-border">
                <time className="text-xs font-bold text-accent mb-1 inline-block">18 Abr 09:14</time>
                <p className="text-sm text-foreground">Ticket creado por Administrador</p>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-accent bg-card shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow ml-0.5 md:ml-0 z-10"></div>
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-muted p-3 rounded-xl border border-border">
                <time className="text-xs font-bold text-accent mb-1 inline-block">18 Abr 11:30</time>
                <p className="text-sm text-foreground">Asignado a soporte nivel 2</p>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-accent bg-card shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow ml-0.5 md:ml-0 z-10"></div>
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-muted p-3 rounded-xl border border-border">
                <time className="text-xs font-bold text-accent mb-1 inline-block">20 Abr 08:55</time>
                <p className="text-sm text-foreground">Técnico en camino a sede norte</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-4 rounded-xl bg-accent/10 border border-accent/20">
            <p className="text-sm text-foreground"><span className="font-bold text-accent">Mensaje del agente:</span> "Estimado cliente, un técnico se encuentra en camino. El tiempo estimado de resolución es de 2 horas."</p>
          </div>
        </div>
      </Modal>

      <Modal open={selectedTicket === '1038'} onClose={() => setSelectedTicket(null)} title="Ticket #1038 — Factura con monto incorrecto">
        <div className="space-y-4">
          <ul className="space-y-1 mb-4">
            <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Servicio</span><span className="text-sm font-semibold text-foreground">Administración</span></li>
            <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Prioridad</span><span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-amber-500/10 text-amber-500 border border-amber-500/20">Media</span></li>
            <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Estado</span><span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Resuelto</span></li>
            <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Abierto</span><span className="text-sm font-semibold text-foreground">10 Abr 2026</span></li>
            <li className="flex justify-between py-2 border-b border-border/40 last:border-0"><span className="text-sm text-muted-foreground">Cerrado</span><span className="text-sm font-semibold text-foreground">11 Abr 2026</span></li>
          </ul>
          
          <h4 className="text-sm font-bold text-foreground mb-2">Línea de tiempo</h4>
          <div className="space-y-3 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-muted-foreground bg-card shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow ml-0.5 md:ml-0 z-10"></div>
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-muted p-3 rounded-xl border border-border opacity-70">
                <time className="text-xs font-bold text-muted-foreground mb-1 inline-block">10 Abr 14:20</time>
                <p className="text-sm text-foreground">Ticket creado</p>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-muted-foreground bg-card shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow ml-0.5 md:ml-0 z-10"></div>
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-muted p-3 rounded-xl border border-border opacity-70">
                <time className="text-xs font-bold text-muted-foreground mb-1 inline-block">10 Abr 16:45</time>
                <p className="text-sm text-foreground">Revisado por área de facturación</p>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-emerald-500 bg-card shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow ml-0.5 md:ml-0 z-10"></div>
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-muted p-3 rounded-xl border border-emerald-500/20 border-l-[3px] border-l-emerald-500">
                <time className="text-xs font-bold text-emerald-500 mb-1 inline-block">11 Abr 09:10</time>
                <p className="text-sm text-foreground">Error corregido. Nota de crédito emitida.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-4 rounded-xl bg-accent/10 border border-accent/20">
            <p className="text-sm text-foreground"><span className="font-bold text-accent">Mensaje del agente:</span> "El error en la factura fue corregido. Se emitió una nota de crédito que se aplicará en el próximo ciclo."</p>
          </div>
        </div>
      </Modal>

      <Modal open={selectedTicket === '1031'} onClose={() => setSelectedTicket(null)} title="Ticket #1031 — Solicitud de aumento de ancho de banda">
        <div className="space-y-4">
          <ul className="space-y-1 mb-4">
            <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Servicio</span><span className="text-sm font-semibold text-foreground">Internet Fibra Óptica</span></li>
            <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Prioridad</span><span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-500/10 text-blue-500 border border-blue-500/20">Baja</span></li>
            <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Estado</span><span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-slate-500/10 text-slate-500 border border-slate-500/20">Cerrado</span></li>
            <li className="flex justify-between py-2 border-b border-border/40"><span className="text-sm text-muted-foreground">Abierto</span><span className="text-sm font-semibold text-foreground">02 Mar 2026</span></li>
            <li className="flex justify-between py-2 border-b border-border/40 last:border-0"><span className="text-sm text-muted-foreground">Cerrado</span><span className="text-sm font-semibold text-foreground">05 Mar 2026</span></li>
          </ul>
          
          <h4 className="text-sm font-bold text-foreground mb-2">Línea de tiempo</h4>
          <div className="space-y-3 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-muted-foreground bg-card shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow ml-0.5 md:ml-0 z-10"></div>
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-muted p-3 rounded-xl border border-border opacity-70">
                <time className="text-xs font-bold text-muted-foreground mb-1 inline-block">02 Mar 10:00</time>
                <p className="text-sm text-foreground">Solicitud recibida</p>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-muted-foreground bg-card shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow ml-0.5 md:ml-0 z-10"></div>
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-muted p-3 rounded-xl border border-border opacity-70">
                <time className="text-xs font-bold text-muted-foreground mb-1 inline-block">04 Mar 12:00</time>
                <p className="text-sm text-foreground">Cotización enviada al cliente</p>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-slate-500 bg-card shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow ml-0.5 md:ml-0 z-10"></div>
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-muted p-3 rounded-xl border border-slate-500/20 border-l-[3px] border-l-slate-500 opacity-70">
                <time className="text-xs font-bold text-slate-500 mb-1 inline-block">05 Mar 09:30</time>
                <p className="text-sm text-foreground">Cliente no confirmó. Ticket cerrado.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-4 rounded-xl bg-accent/10 border border-accent/20">
            <p className="text-sm text-foreground"><span className="font-bold text-accent">Mensaje del agente:</span> "Se envió la cotización para upgrade a 300 Mbps. El ticket fue cerrado por inactividad."</p>
          </div>
        </div>
      </Modal>

      <Modal open={showNewTicket} onClose={() => setShowNewTicket(false)} title="Nuevo Ticket de Soporte">
        <form 
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setShowNewTicket(false);
            showToast('Ticket creado exitosamente. Nuestro equipo se contactará a la brevedad.');
          }}
        >
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-foreground/90 ml-1">Servicio relacionado</label>
            <select className="w-full px-4 py-2.5 rounded-xl bg-muted border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-sm text-foreground transition-all" required>
              <option value="">Seleccione un servicio</option>
              <option value="fibra">Internet Fibra Óptica</option>
              <option value="voip">Telefonía VoIP</option>
              <option value="gps">Monitoreo GPS Flota</option>
              <option value="admin">Administración</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-foreground/90 ml-1">Prioridad</label>
            <select className="w-full px-4 py-2.5 rounded-xl bg-muted border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-sm text-foreground transition-all" required>
              <option value="baja">Baja</option>
              <option value="media">Media</option>
              <option value="alta">Alta</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-foreground/90 ml-1">Asunto</label>
            <input type="text" placeholder="Describa brevemente el problema" className="w-full px-4 py-2.5 rounded-xl bg-muted border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-sm text-foreground transition-all" required />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-foreground/90 ml-1">Descripción</label>
            <textarea rows={4} placeholder="Detalle el problema con la mayor información posible" className="w-full px-4 py-2.5 rounded-xl bg-muted border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-sm text-foreground transition-all resize-none" required></textarea>
          </div>
          <button type="submit" className="btn-3d-industrial text-white w-full py-3 rounded-xl font-bold mt-2 hover:brightness-110 active:scale-[0.98] transition-all">
            Crear Ticket
          </button>
        </form>
      </Modal>

    </ModuleLayout>
  );
}
