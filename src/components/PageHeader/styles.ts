import styled from 'styled-components'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'
import backIcon from '../../assets/icons/back.svg'

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--primary);
`
export const TopNavBar = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-primary);
  padding: 1.6rem 0;
`
export const BackButton = styled(Link)`
  height: 3.2rem;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.6;
  }
`
export const BackIcon = styled.img.attrs({
  src: backIcon,
  alt: 'Botão Voltar',
})``
export const Logo = styled.img.attrs({ src: logoImg, alt: 'Proffy' })`
  height: 1.6rem;
`
export const HeaderContent = styled.div`
  width: 90%;
  margin: 3.2rem auto;
  position: relative;
`
export const HeaderText = styled.strong`
  font: 700 3.6rem Archivo;
  line-height: 4.2rem;
  color: var(--title-primary);
`
