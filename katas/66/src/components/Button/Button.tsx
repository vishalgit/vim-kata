import React from 'react';
import { ButtonProps } from './types';
import { useButtonStyles } from './styles';
import { buttonVariants } from '../../theme/variants';

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'medium',
    children,
    ...props
}) => {
    const styles = useButtonStyles({ variant, size });
    
    return (
        <button className={styles.root} {...props}>
            {children}
        </button>
    );
}; 