import { ButtonHTMLAttributes } from 'react';
import { ButtonVariant, ButtonSize } from '../../theme/types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
} 