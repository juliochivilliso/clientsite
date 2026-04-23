import React from 'react';

/**
 * LoginSidebar component
 * Renders the left-side branding panel for the login page.
 * Features a dark corporate gradient and the Triax PGI logo.
 */
export const LoginSidebar: React.FC = () => {
  return (
    <aside
      aria-label="Información de marca TRIAX PGI"
      className="dark hidden lg:flex w-full min-h-screen bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#010309] flex-col items-center justify-center relative overflow-hidden text-slate-200 border-r border-white/5"
    >
      {/* Decorative blurry background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900 rounded-full blur-[120px]"></div>
      </div>

      <div className="z-10 flex flex-col items-center text-center">
        <div className="mb-10 transform transition-all duration-1000 hover:scale-105 active:scale-95 cursor-pointer group">
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img
              src="/logo_triax_pgi_2.png"
              alt="TRIAX PGI Logo"
              width={220}
              height={220}
              className="relative w-56 h-56 object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            />
          </div>
        </div>

        <div className="space-y-6 max-w-sm px-8">
          <div className="space-y-3">
            <h1 className="text-6xl font-black tracking-tighter text-white leading-none">
              TRIAX <span className="text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-400">SERVICE</span>
            </h1>
            <div className="h-1.5 w-24 bg-gradient-to-r from-accent to-transparent rounded-full mx-auto"></div>
          </div>

          <p className="text-xl text-slate-400 font-semibold tracking-tight leading-snug">
            Gestioná tus servicios <br />
            <span className="text-slate-500 font-medium text-lg">desde un solo lugar.</span>
          </p>

          <div className="pt-10">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-[0.25em] text-accent backdrop-blur-md shadow-2xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              Sistema Industrial v4.0.0
            </div>
          </div>
        </div>
      </div>

      <footer className="absolute bottom-12 left-0 w-full text-center px-12 opacity-40">
        <p className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.3em]">
          Powered by Triax Group &bull; Industrial Intelligence
        </p>
      </footer>
    </aside>
  );
};
