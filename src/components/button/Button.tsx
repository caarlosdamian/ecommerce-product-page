import React from 'react';
import styles from './Button.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | string;
}

export const Button = ({ children, ...props }: Props) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};
