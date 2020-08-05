import styled from 'styled-components'

export const TextAreaBlock = styled.div`
  position: relative;
  &:not(:first-child) {
    margin-top: 1.4rem;
  }
  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: var(--primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 4px;
    z-index: 999;
  }
`
export const Subject = styled.label`
  font-size: 1.6rem;
  color: var(--text-primary);
`
export const TextAreaText = styled.textarea`
  width: 100%;
  height: 16rem;
  min-height: 8rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background: var(--input-background);
  border: 1px solid var(--line-white);
  padding: 1.2rem 1.6rem;
  font: 1.6rem Archivo;
  resize: vertical;
`
