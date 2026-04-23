'use client';

import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

export function useToast() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  const showToast = (msg: string) => {
    setMessage(msg);
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 2500);
  };

  const ToastComponent = visible ? (
    <div className="fixed bottom-6 left-6 z-[100] bg-card border border-border rounded-2xl px-5 py-3.5 shadow-xl flex items-center gap-3 animate-in slide-in-from-bottom-4 fade-in duration-300">
      <Sparkles size={20} className="text-accent" />
      <span className="text-sm font-semibold text-foreground">{message}</span>
    </div>
  ) : null;

  return { showToast, ToastComponent };
}
