import React from 'react'

const HeaderIcon = ({Icon, title}) => {
  return (
    <div>
        <Icon />
        <p>{title}</p>
    </div>
  )
}

export default HeaderIcon