import React from 'react';
import stats from '../public/stats.svg';


interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    color?: string;
}

export const DeveloperIcon: React.FC<IconProps> = ({
    size = 70,
    color = 'currentColor',
    className = '',
    ...props
}) => {
    return (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-colors duration-200 ${className} m-4`}
        {...props}
    >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
    );
};
export interface SmartMirrorSymbolProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
}

export const SmartMirrorSymbol: React.FC<SmartMirrorSymbolProps> = ({
    size = 128,
    color = 'currentColor',
    className = '',
    ...props
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${className}`}
            {...props}
        >
        <rect
            x="12"
            y="8"
            width="76"
            height="84"
            rx="12"
            stroke={color}
            strokeWidth="6"
        />

        <line
            x1="70"
            y1="18"
            x2="30"
            y2="82"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="16 12"
            opacity="0.35"
        />

        <line
            x1="80"
            y1="28"
            x2="55"
            y2="68"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.35"
        />

        <rect
            x="22"
            y="18"
            width="20"
            height="12"
            rx="3"
            stroke={color}
            strokeWidth="4"
        />

        <circle
            cx="72"
            cy="74"
            r="3"
            fill={color}
        />
        <circle
            cx="78"
            cy="74"
            r="3"
            fill={color}
        />
    </svg>
    );
};

import { SVGProps } from 'react';

export const ChartColumnIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="70"
    height="70"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <path d="M18 17V9" />
    <path d="M13 17V5" />
    <path d="M8 17v-3" />
  </svg>
);

let mapIcons = {}

export default mapIcons = {
    "portfolio": <DeveloperIcon></DeveloperIcon>,
    "mirror": <SmartMirrorSymbol></SmartMirrorSymbol>,
    "stats": <ChartColumnIcon></ChartColumnIcon>
}
