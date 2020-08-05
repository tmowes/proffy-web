import React from 'react'

import { InputBlock, Subject, InputText } from './styles'
import { InputProps } from './types'

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <InputBlock>
      <Subject htmlFor={name}>{label}</Subject>
      <InputText id={name} autoComplete="off" {...rest} />
    </InputBlock>
  )
}

export default Input
