'use client';

import React, { useState } from 'react';
import { MessageCircle, X, Bot } from 'lucide-react';

export function SupportChat() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<'menu' | 'answer' | 'ticket'>('menu');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [resolution, setResolution] = useState<'resolved' | 'ticket' | null>(null);

  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic);
    setStep('answer');
  };

  const handleResolution = (res: 'resolved' | 'ticket') => {
    setResolution(res);
    setStep('ticket');
  };

  const resetChat = () => {
    setOpen(false);
    setTimeout(() => {
      setStep('menu');
      setSelectedTopic('');
      setResolution(null);
    }, 300); // Reset after close animation
  };

  const getAnswer = (topic: string) => {
    if (topic.includes('sin señal')) {
      return "Entiendo que tenés problemas de conectividad. En la mayoría de los casos esto se resuelve reiniciando el equipo. ¿El problema persiste luego de 5 minutos?";
    }
    if (topic.includes('factura')) {
      return "Podés consultar el detalle de tu facturación en la sección Mis Servicios. Si encontrás un error, te recomendamos abrir un ticket para que nuestro equipo lo revise.";
    }
    if (topic.includes('cambio en mi plan')) {
      return "Los cambios de plan se procesan en el próximo ciclo de facturación. Nuestro equipo te contactará para coordinar los detalles.";
    }
    if (topic.includes('GPS')) {
      return "Tu servicio de Monitoreo GPS Flota está activo y operativo. Podés acceder a TrakPro para ver el estado en tiempo real de tu flota.";
    }
    return "No pude encontrar una respuesta para esa consulta. ¿Querés hablar con un agente?";
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full shadow-xl shadow-blue-500/30 hover:scale-110 active:scale-95 transition-all duration-200"
        aria-label={open ? 'Cerrar chat de soporte' : 'Abrir chat de soporte'}
      >
        {open ? <X size={24} className="text-white" /> : <MessageCircle size={24} className="text-white" />}
      </button>

      {/* Panel del chat */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-h-[480px] bg-card border border-border dark:border-white/10 rounded-3xl shadow-2xl dark:shadow-black/40 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 zoom-in-95 duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-3 flex items-center gap-3 text-white">
            <div className="flex items-center justify-center w-8 h-8 flex-shrink-0 bg-white/20 rounded-full">
              <Bot size={20} />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold leading-tight">Asistente TRIAX</h3>
              <p className="text-[10px] opacity-80 leading-tight">Soporte automatizado</p>
            </div>
            <div className="flex items-center gap-1.5 bg-black/10 px-2 py-1 rounded-full border border-white/10">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold tracking-widest uppercase">En línea</span>
            </div>
          </div>

          {/* Área de mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-card min-h-[220px]">
            {/* Mensaje bot inicial */}
            <div className="flex justify-start">
              <div className="bg-muted text-foreground text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%]">
                <p>¡Hola! Soy el asistente de TRIAX. ¿En qué puedo ayudarte hoy?</p>
              </div>
            </div>

            {/* Opciones Menu */}
            {step === 'menu' && (
              <div className="flex flex-col gap-2 pt-2 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <button onClick={() => handleTopicClick('📶 Mi servicio está sin señal')} className="w-full text-left bg-muted/50 hover:bg-accent/10 border border-border rounded-xl px-3 py-2 text-sm text-foreground transition-colors font-medium">
                  📶 Mi servicio está sin señal
                </button>
                <button onClick={() => handleTopicClick('💳 Consulta sobre mi factura')} className="w-full text-left bg-muted/50 hover:bg-accent/10 border border-border rounded-xl px-3 py-2 text-sm text-foreground transition-colors font-medium">
                  💳 Consulta sobre mi factura
                </button>
                <button onClick={() => handleTopicClick('🔧 Solicitar cambio en mi plan')} className="w-full text-left bg-muted/50 hover:bg-accent/10 border border-border rounded-xl px-3 py-2 text-sm text-foreground transition-colors font-medium">
                  🔧 Solicitar cambio en mi plan
                </button>
                <button onClick={() => handleTopicClick('📍 Estado de mis servicios GPS')} className="w-full text-left bg-muted/50 hover:bg-accent/10 border border-border rounded-xl px-3 py-2 text-sm text-foreground transition-colors font-medium">
                  📍 Estado de mis servicios GPS
                </button>
              </div>
            )}

            {/* Step Answer / Ticket */}
            {step !== 'menu' && (
              <>
                <div className="flex justify-end animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="bg-accent text-white text-sm rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%]">
                    <p>{selectedTopic}</p>
                  </div>
                </div>

                <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-500 delay-300 fill-mode-both">
                  <div className="bg-muted text-foreground text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] shadow-sm">
                    <p>{getAnswer(selectedTopic)}</p>
                  </div>
                </div>

                {step === 'answer' && (
                  <div className="flex flex-col gap-2 pt-2 fill-mode-both animate-in fade-in slide-in-from-bottom-2 duration-500 delay-700">
                    <button onClick={() => handleResolution('resolved')} className="w-full text-center bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-xl px-3 py-2 text-sm font-bold transition-colors">
                      ✅ Resolvió mi problema
                    </button>
                    <button onClick={() => handleResolution('ticket')} className="w-full text-center bg-accent/10 hover:bg-accent/20 text-accent border border-accent/20 rounded-xl px-3 py-2 text-sm font-bold transition-colors">
                      🎫 Quiero abrir un ticket
                    </button>
                  </div>
                )}

                {step === 'ticket' && resolution === 'resolved' && (
                  <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-500 delay-200 fill-mode-both">
                    <div className="bg-muted text-foreground text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%]">
                      <p>¡Perfecto! Me alegra haber podido ayudarte. Si tenés otra consulta, estoy aquí.</p>
                    </div>
                  </div>
                )}

                {step === 'ticket' && resolution === 'ticket' && (
                  <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-500 delay-200 fill-mode-both">
                    <div className="bg-muted text-foreground text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%]">
                      <p>Entendido. Un agente de soporte se va a comunicar con vos a la brevedad. ¡Gracias por contactarnos!</p>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Footer actions */}
          {step === 'ticket' && (
            <div className="border-t border-border p-3 bg-muted/30">
              <button 
                onClick={resetChat} 
                className="w-full bg-card hover:bg-muted border border-border text-foreground text-xs font-bold uppercase tracking-widest px-4 py-2.5 rounded-xl transition-all shadow-sm group"
              >
                Cerrar conversación
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
