import React from 'react';
import classNames from 'classnames';

interface Props {
  type?: string;
  className?: string;
  onClick?: () => void;
  title?: string;
}

const Button: React.FC<Props> = ({ type, className, children, ...props }) => {
  return (
    <button
      className={classNames('button', { [`button--${type}`]: type }, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;