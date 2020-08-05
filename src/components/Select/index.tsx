import React from 'react'

import { SelectBlock, Subject, SelectText, SelectOption } from './styles'
import { SelectProps } from './types'

const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => {
  return (
    <SelectBlock>
      <Subject htmlFor={name}>{label}</Subject>
      <SelectText id={name} {...rest}>
        <SelectOption value="" selected disabled hidden>
          Selecione uma opção
        </SelectOption>
        {options.map(option => (
          <SelectOption
            key={option.value}
            value={option.value}
            label={option.label}
          />
        ))}
      </SelectText>
    </SelectBlock>
  )
}

export default Select
