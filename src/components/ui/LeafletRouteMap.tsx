import React from 'react';
import Image from 'next/image';

interface Coordinate {
  lat: number;
  lng: number;
}

interface LeafletRouteMapProps {
  origin: Coordinate | null;
  destination: Coordinate | null;
  routeCoords: [number, number][]; // Array of [lng, lat] from OSRM GeoJSON
  distanceKm?: number;
  serviceType?: 'EXPRESS' | 'LOW_COST';
}

export default function LeafletRouteMap({
  origin,
  destination,
  routeCoords,
  distanceKm,
  serviceType = 'EXPRESS',
}: LeafletRouteMapProps) {
  return (
    <div className="w-full h-full min-h-[300px] relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#00174e] to-[#052C87] select-none p-4 flex flex-col justify-between">
      {/* Visual Map Grid & Radial Glow */}
      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-blue-500/10 via-transparent to-transparent pointer-events-none" />

      {/* Top Left: Logo Badge Branding Overlay */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="bg-brand-blue-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 shadow-lg flex items-center gap-2.5">
          <div className="relative w-6 h-6 shrink-0 bg-white/10 rounded-lg p-0.5 flex items-center justify-center">
            <Image
              src="/logo-master.svg"
              alt="Logo DosRuedas"
              width={20}
              height={20}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[11px] font-display uppercase tracking-wider text-white">
              DosRuedas <span className="text-[#FFF12E]">Live</span>
            </span>
            <span className="text-[8px] font-mono text-blue-200">
              {serviceType === 'EXPRESS' ? 'Ruta Prioritaria < 2H' : 'Ruteo Batch Económico'}
            </span>
          </div>
        </div>

        {/* Top Right: Live Distance Pill Overlay */}
        {distanceKm !== undefined && distanceKm > 0 && (
          <div className="bg-[#FFF12E] text-[#052C87] px-3 py-1.5 rounded-xl border-2 border-white shadow-xl flex items-center gap-2">
            <span className="text-[10px] font-subheading font-bold uppercase tracking-wider">
              Distancia
            </span>
            <span className="text-sm font-mono font-black tabular-nums bg-[#052C87] text-white px-2 py-0.5 rounded-md">
              {distanceKm.toLocaleString('es-AR')} km
            </span>
          </div>
        )}
      </div>

      {/* Center Interactive Route SVG Simulation */}
      <div className="relative z-10 flex-1 my-4 flex items-center justify-center">
        <div className="w-full max-w-sm bg-white/5 border border-white/15 rounded-2xl p-4 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#0950F6] text-white flex items-center justify-center text-xs font-bold border border-white shrink-0">
              A
            </div>
            <div className="flex-1 truncate">
              <span className="text-[10px] uppercase font-subheading tracking-wider text-[#FFF12E] block">
                Origen
              </span>
              <span className="text-xs font-sans text-white truncate block">
                {origin ? `Coord: ${origin.lat.toFixed(4)}, ${origin.lng.toFixed(4)}` : 'Seleccionar en formulario'}
              </span>
            </div>
          </div>

          {/* Dotted Route Connector */}
          <div className="pl-4 flex items-center gap-2">
            <div className="h-6 w-0.5 border-l-2 border-dashed border-[#FFF12E]/70" />
            {routeCoords.length > 0 && (
              <span className="text-[10px] font-mono text-[#FFF12E] bg-white/10 px-2 py-0.5 rounded-full">
                {routeCoords.length} puntos de trazado
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FFF12E] text-[#052C87] flex items-center justify-center text-xs font-bold border border-[#052C87] shrink-0">
              B
            </div>
            <div className="flex-1 truncate">
              <span className="text-[10px] uppercase font-subheading tracking-wider text-[#FFF12E] block">
                Destino
              </span>
              <span className="text-xs font-sans text-white truncate block">
                {destination ? `Coord: ${destination.lat.toFixed(4)}, ${destination.lng.toFixed(4)}` : 'Seleccionar en formulario'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Center Route Status Pill */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-white/90 border-t border-white/15 pt-3">
        <div className="flex items-center gap-1.5 text-[#FFF12E]">
          <span className="inline-block w-2 h-2 rounded-full bg-[#FFF12E] animate-ping" />
          <span>Ruteador MDQ Activo</span>
        </div>
        <span className="text-white/60">Mar del Plata</span>
      </div>
    </div>
  );
}

