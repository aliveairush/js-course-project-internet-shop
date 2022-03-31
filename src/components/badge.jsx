import React from 'react';


const Badge = ({color, value }) => {
  return (
    <span className={`badge bg-${color}`}>{value}</span>
  );
}

Badge.defaultProps = {
  color: 'primary',
  name: ""
}

export default Badge;