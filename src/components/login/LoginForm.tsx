'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui';
import { PasswordField } from './PasswordField';
import { LogIn } from 'lucide-react';

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mfaToken, setMfaToken] = useState('');
  const [showMfa, setShowMfa] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('pgi_remember') === 'true';
    }
    return false;
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Por favor complete todos los campos.');
      return;
    }

    setLoading(true);

    // Simulate successful auth — replace with real Apollo mutation
    await new Promise(r => setTimeout(r, 1200));
    localStorage.setItem('pgi_token', 'demo-token');
    router.push('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {!showMfa ? (
        <>
          <div className="space-y-1.5">
            <label htmlFor="username" className="text-sm font-semibold text-foreground/90 ml-1 transition-colors">
              Usuario
            </label>
            <div className="relative group">
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loading}
                placeholder="Tu nombre de usuario"
                className="w-full h-12 px-4 rounded-xl bg-muted border border-border focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card outline-none transition-all duration-300 placeholder:text-muted-foreground/60 text-foreground group-hover:border-slate-300 dark:group-hover:border-slate-700"
                required
                aria-required="true"
                aria-label="Ingresá tu nombre de usuario"
                suppressHydrationWarning
              />
            </div>
          </div>

          <PasswordField
            id="password"
            label="Clave de Acceso"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            placeholder="••••••••"
            showForgotPassword
            required
          />

          <div className="flex items-center justify-between py-1">
            <div className="flex items-center space-x-2 group cursor-pointer select-none">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => {
                  setRememberMe(e.target.checked);
                  localStorage.setItem('pgi_remember', String(e.target.checked));
                }}
                className="w-4 h-4 rounded border-slate-300 text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card transition-all duration-200 cursor-pointer"
                aria-label="Recordar sesion del usuario"
                suppressHydrationWarning
              />
              <label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer group-hover:text-foreground transition-colors">
                Mantener sesión iniciada
              </label>
            </div>
          </div>
        </>
      ) : (
        <div className="space-y-4 animate-in zoom-in-95 duration-300">
          <div className="text-center mb-6">
            <h2 className="text-lg font-bold">Verificación de Identidad</h2>
            <p className="text-xs text-muted-foreground">Ingresá el código de 6 dígitos de tu aplicación MFA</p>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mfaToken" className="text-sm font-semibold text-foreground/90 ml-1">
              Código de Seguridad
            </label>
            <input
              id="mfaToken"
              type="text"
              maxLength={6}
              value={mfaToken}
              onChange={(e) => setMfaToken(e.target.value.replace(/\D/g, ''))}
              autoFocus
              className="w-full h-14 text-center text-3xl font-mono p-4 rounded-xl bg-muted border border-border focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent outline-none transition-all tracking-[0.5em]"
              placeholder="000000"
              required
            />
          </div>

          <button
            type="button"
            onClick={() => setShowMfa(false)}
            className="text-[10px] text-accent font-bold uppercase tracking-widest hover:underline w-full text-center"
          >
            Volver al login
          </button>
        </div>
      )}

      {error && (
        <div role="alert" aria-live="assertive" className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-950/30 border-l-4 border-red-500 rounded-r-lg text-red-700 dark:text-red-400 text-sm font-semibold animate-in fade-in slide-in-from-top-2 duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>{error}</span>
        </div>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="w-full h-12 btn-3d-industrial active:scale-[0.98] text-white font-bold rounded-xl transition-all duration-300 group shadow-xl"
        aria-label="Ingresar al portal TRIAX PGI"
        icon={!loading && !showMfa ? <LogIn size={18} className="group-hover:translate-x-1 transition-transform" /> : undefined}
      >
        {loading ? <span>{showMfa ? 'Verificando...' : 'Validando...'}</span> : <span>{showMfa ? 'Verificar' : 'Ingresar'}</span>}
      </Button>

      <p className="text-center text-[11px] text-muted-foreground font-medium pt-4 border-t border-border/30">
        ¿No tenés cuenta?{' '}
        <a href="#" className="text-accent font-bold hover:underline" aria-label="Comunicate con soporte">
          Comunicate con soporte
        </a>
      </p>
    </form>
  );
};
