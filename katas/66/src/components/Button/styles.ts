import { ButtonProps } from './types';
import { theme } from '../../theme';

export const useButtonStyles = ({ variant = 'primary', size = 'medium' }: Pick<ButtonProps, 'variant' | 'size'>) => {
    return {
        root: `
            button-base
            ${variant}-variant
            ${size}-size
            hover:opacity-90
            transition-all
        `
    };
}; 