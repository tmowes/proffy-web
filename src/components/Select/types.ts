import { SelectHTMLAttributes } from 'react'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  label: string
  options: SelectOptions[]
}

export interface SelectOptions {
  value: string
  label: string
}
