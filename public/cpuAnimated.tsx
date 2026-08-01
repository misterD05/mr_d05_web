import React, { useId } from 'react';

export interface CpuChipProps {
  size?: number;
  color?: string;
  isProcessing?: boolean;
  labelText?: string;
  title?: string;
  className?: string;
}

export const CpuChip: React.FC<CpuChipProps> = ({
  size = 300,
  color = '#49c5ff',
  isProcessing = true,
  labelText = 'CPU',
  title = 'Icona del processore con labirinto elettrico',
  className = '',
}) => {
  const glowId = useId();
  const gradientId = useId();

  const pinOffsets = [30, 43, 57, 70];
  const pinDelays = ['delay-0', 'delay-75', 'delay-150', 'delay-200'];

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <style>{`
        @keyframes mazeElectricDischarge {
          0% { stroke-dashoffset: 120; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-maze-electric {
          stroke-dasharray: 8 20;
          animation: mazeElectricDischarge 1.2s linear infinite;
        }
        .animate-maze-electric-reverse {
          stroke-dasharray: 10 25;
          animation: mazeElectricDischarge 1.6s linear infinite reverse;
        }
      `}</style>

      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={title}
        className="transition-transform duration-300 hover:scale-105"
      >
        <title>{title}</title>

        <defs>
          <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
        </defs>

        <g stroke={color} strokeWidth="3" strokeLinecap="round">
          {pinOffsets.map((pos, idx) => {
            const delayClass = isProcessing ? `animate-pulse ${pinDelays[idx % pinDelays.length]}` : '';
            return (
              <React.Fragment key={pos}>
                <line x1={pos} y1="5" x2={pos} y2="20" className={delayClass} />
                <line x1={pos} y1="80" x2={pos} y2="95" className={delayClass} />
                <line x1="5" y1={pos} x2="20" y2={pos} className={delayClass} />
                <line x1="80" y1={pos} x2="95" y2={pos} className={delayClass} />
              </React.Fragment>
            );
          })}
        </g>

        <rect
          x="20"
          y="20"
          width="60"
          height="60"
          rx="10"
          fill={`url(#${gradientId})`}
          stroke={color}
          strokeWidth="2.5"
          filter={isProcessing ? `url(#${glowId})` : undefined}
        />

        <path
          d="
            M 28 28 H 72 V 72 H 28 Z
            M 28 35 H 65 V 65 H 35 V 42 H 58 V 58 H 42 V 50 H 50
            M 30 70 H 45 V 67
            M 70 30 V 45 H 67
            M 70 60 H 55 V 53
            M 40 28 V 33
            M 60 28 V 33
            M 28 50 H 33
            M 72 50 H 67
            M 50 72 V 67
          "
          stroke="#1E293B"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.8"
        />

        <path
          d="
            M 28 28 H 72 V 72 H 28 Z
            M 28 35 H 65 V 65 H 35 V 42 H 58 V 58 H 42 V 50 H 50
            M 30 70 H 45 V 67
            M 70 30 V 45 H 67
            M 70 60 H 55 V 53
            M 40 28 V 33
            M 60 28 V 33
            M 28 50 H 33
            M 72 50 H 67
            M 50 72 V 67
          "
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.35"
        />

        {isProcessing && (
          <>
            <path
              d="
                M 28 28 H 72 V 72 H 28 Z
                M 28 35 H 65 V 65 H 35 V 42 H 58 V 58 H 42 V 50 H 50
              "
              stroke="#FFFFFF"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-maze-electric"
              style={{ filter: `drop-shadow(0 0 2px ${color})` }}
            />
            <path
              d="
                M 30 70 H 45 V 67
                M 70 30 V 45 H 67
                M 70 60 H 55 V 53
                M 40 28 V 33
                M 60 28 V 33
                M 28 50 H 33
                M 72 50 H 67
                M 50 72 V 67
              "
              stroke="#FFFFFF"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-maze-electric-reverse"
              style={{ filter: `drop-shadow(0 0 2px ${color})` }}
            />
          </>
        )}

        <rect
          x="44"
          y="44"
          width="12"
          height="12"
          rx="2"
          fill={color}
          opacity={isProcessing ? 0.85 : 0.4}
          className={isProcessing ? 'animate-ping' : ''}
          style={{
            transformBox: 'fill-box',
            transformOrigin: 'center',
            animationDuration: '2s',
          }}
        />

        <rect x="44" y="44" width="12" height="12" rx="2" fill={color} opacity="0.9" />

        {labelText && (
          <text
            x="50"
            y="50.8"
            fill="#FFFFFF"
            fontSize="4.5"
            fontWeight="bold"
            fontFamily="system-ui, sans-serif"
            textAnchor="middle"
            dominantBaseline="middle"
            className="pointer-events-none select-none"
          >
            {labelText}
          </text>
        )}
      </svg>
    </div>
  );
};

export default CpuChip;
