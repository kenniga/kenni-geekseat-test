import { ReactNode } from 'react';

export interface IDividerProps {
    children: ReactNode;
    className?: string;
    alignment?: 'start' | 'center' | 'end';
    lineStyle?: 'dashed' | 'dotted' | 'solid';
    lineWeight?: 'light' | 'regular' | 'heavy';
}
