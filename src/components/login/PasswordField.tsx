'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';

interface PasswordFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  showForgotPassword?: boolean;
}

/**
 * PasswordField Component
 * Custom input for passwords with a visibility toggle and accessibility support.
 */
export const PasswordField: React.FC<PasswordFieldProps> = ({ 
  label, 
  error, 
  id, 
  className, 
  showForgotPassword = true,
  ...props 
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between ml-1">
        <label 
          htmlFor={id} 
          className="text-sm font-semibold text-foreground/90 transition-colors"
        >
          {label || 'Clave de Acceso'}
        </label>
        {showForgotPassword && (
          <button 
            type="button" 
            onClick={() => setShowModal(true)} 
            className="text-xs font-bold text-accent hover:underline transition-all"
            aria-label="Recuperar Clave de Acceso olvidada"
          >
            ¿Olvidaste tu clave?
          </button>
        )}
      </div>

      <div className="relative group">
        <input
          {...props}
          id={id}
          type={showPassword ? 'text' : 'password'}
          className={`
            w-full h-12 px-4 pr-12 rounded-xl bg-muted border 
            transition-all duration-300 outline-none
            placeholder:text-muted-foreground/60 text-foreground
            ${error 
              ? 'border-red-500 ring-4 ring-red-500/10' 
              : 'border-border focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card group-hover:border-slate-300 dark:group-hover:border-slate-700'
            }
            ${className}
          `}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-required={props.required ? 'true' : 'false'}
          aria-label={`Ingresá ${label.toLowerCase()}`}
          suppressHydrationWarning
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
          aria-label={showPassword ? 'Ocultar clave de acceso' : 'Mostrar clave de acceso'}
          title={showPassword ? 'Ocultar clave' : 'Mostrar clave'}
        >
          {showPassword ? (
            <EyeOff className="w-5 h-5 animate-in zoom-in-75 duration-300" />
          ) : (
            <Eye className="w-5 h-5 animate-in zoom-in-75 duration-300" />
          )}
        </button>
      </div>
      {error && (
        <p 
          id={`${id}-error`}
          className="text-xs font-semibold text-red-500 ml-1 mt-1 animate-in fade-in slide-in-from-top-1"
        >
          {error}
        </p>
      )}
      <Modal open={showModal} onClose={() => setShowModal(false)} title="Recuperar clave">
        <p className="text-sm text-muted-foreground">Comunicate con soporte al correo <span className="font-semibold text-foreground">soporte@triax.com</span> para recuperar tu clave de acceso.</p>
      </Modal>
    </div>
  );
};
