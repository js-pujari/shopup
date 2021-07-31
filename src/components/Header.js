import React from 'react'
import Updates from './Updates'
const Header = ({title}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <h2>{title}</h2>
      <Updates />
    </div>
  )
}

export default Header;
