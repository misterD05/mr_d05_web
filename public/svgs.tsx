import React from 'react';



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


let mapIcons = {}

export default mapIcons = {
    "portfolio" : <DeveloperIcon></DeveloperIcon>
}
