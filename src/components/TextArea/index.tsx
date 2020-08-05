import React from 'react'

import { TextAreaBlock, Subject, TextAreaText } from './styles'
import { TextAreaProps } from './types'

const TextArea: React.FC<TextAreaProps> = ({ name, label, ...rest }) => {
  return (
    <TextAreaBlock>
      <Subject htmlFor={name}>{label}</Subject>
      <TextAreaText id={name} autoComplete="off" {...rest} />
    </TextAreaBlock>
  )
}

export default TextArea
