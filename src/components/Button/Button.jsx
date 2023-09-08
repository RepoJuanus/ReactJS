//rafc
import React from 'react'

export const Button = ({text, cb , color} ) => {
  return (
    <button style={{backgroundColor: color}} onClick={cb}>
        {text}
    </button>
  )
}
