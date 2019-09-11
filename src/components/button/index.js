import React from 'react';
import './index.css';
export default function(props) {
  const { className, style, children, type, ...rest } = props;
  return (
    <div className={`pui-btn ${className}`} style={style} {...rest}>
      { children }
    </div>
  );
}