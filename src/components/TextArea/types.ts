import { TextareaHTMLAttributes } from 'react'

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label: string
}
