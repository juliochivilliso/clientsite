'use client';

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Lun', bw: 400 },
  { name: 'Mar', bw: 300 },
  { name: 'Mie', bw: 550 },
  { name: 'Jue', bw: 450 },
  { name: 'Vie', bw: 700 },
  { name: 'Sab', bw: 200 },
  { name: 'Dom', bw: 150 },
];

export function NetworkChart() {
  return (
    <div className="w-full h-80 bg-card border border-border dark:inner-glow-top rounded-3xl p-6 relative overflow-hidden group">
      
      {/* Decorative gradient */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-colors duration-500 pointer-events-none" />

      <div className="flex items-center justify-between mb-8 relative z-10">
        <div>
          <h2 className="text-lg font-black tracking-tight text-foreground">Consumo de Ancho de Banda</h2>
          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mt-1">Tráfico total últimos 7 días (Mbps)</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">En vivo</span>
        </div>
      </div>

      <div className="w-full h-52 relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 5, right: 0, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorBw" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#888888" strokeOpacity={0.15} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#888888' }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#888888' }} 
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'var(--card)', 
                borderRadius: '16px', 
                border: '1px solid var(--border)',
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
              }}
              itemStyle={{ color: '#3b82f6', fontWeight: 'bold' }}
              labelStyle={{ color: 'var(--muted-foreground)', fontWeight: 'bold', marginBottom: '4px' }}
              cursor={{ stroke: 'var(--border)', strokeWidth: 1, strokeDasharray: '4 4' }}
            />
            <Area 
              type="monotone" 
              dataKey="bw" 
              name="Consumo Mbps"
              stroke="#3b82f6" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorBw)" 
              activeDot={{ r: 6, fill: '#3b82f6', stroke: 'hsl(var(--background))', strokeWidth: 2 }}
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
