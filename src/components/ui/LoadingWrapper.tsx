'use client';

import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos carga de API (0.8 segundos) al montar
    const timer = setTimeout(() => {
      setLoading(false);
    }, 850);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-6 animate-in fade-in duration-500">
        <div className="relative">
          <Loader2 className="w-12 h-12 text-accent animate-spin" />
          <div className="absolute inset-0 w-12 h-12 bg-accent/20 blur-xl rounded-full" />
        </div>
        <div className="space-y-3 flex flex-col items-center">
          <div className="h-4 w-48 bg-muted rounded-full animate-pulse" />
          <div className="h-3 w-32 bg-muted/60 rounded-full animate-pulse delay-75" />
        </div>
      </div>
    );
  }

  return <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">{children}</div>;
}
