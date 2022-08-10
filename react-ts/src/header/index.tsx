import React from 'react'

interface HeaderProps {
    title: string;
    color?: string;
}

const Header = ({title, color}: HeaderProps) => {
  return (
    <div style={{backgroundColor: color ? color :'red'}}>
        <h1>{title}</h1>
    </div>
  )
}

export default Header
