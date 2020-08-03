import styled, { css } from 'styled-components'

import logoImg from '../../assets/logo.svg'
import landingImg from '../../assets/landing.svg'
import studyIcon from '../../assets/icons/study.svg'
import giveClassesIcon from '../../assets/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/icons/purple-heart.svg'

export const LandingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-primary);
  background: var(--primary);
`
export const LandingContainer = styled.div`
  /* background: black; */
  @media (min-width: 1100px) {
    max-width: 1100px;
    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      'logo hero hero'
      'buttons buttons total';
    /* background: black; */
  }
`
export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;
  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    text-align: left;
    margin: 0;
  }
`
export const Logo = styled.img.attrs({
  src: logoImg,
  alt: 'Proffy',
})`
  height: 10rem;
  @media (min-width: 1100px) {
    height: 100%;
  }
`
export const LogoText = styled.h2`
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 4.6rem;
  margin-top: 0.8rem;
  @media (min-width: 1100px) {
    text-align: initial;
    font-size: 3.6rem;
  }
`
export const LandigImage = styled.img.attrs({
  src: landingImg,
  alt: 'Plataforma de estudos',
})`
  width: 100%;
  @media (min-width: 1100px) {
    grid-area: hero;
    justify-self: end;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;
  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;
  }
`
const buttonsStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30rem;
  height: 10.4rem;
  border-radius: 0.8rem;
  font: 700 2rem Archivo;
  color: var(--button-text);
  transition: background-color 0.2s;
  @media (min-width: 1100px) {
    font-size: 2.4rem;
  }
`
export const StudyButton = styled.a`
  ${buttonsStyles}
  margin-right: 1.6rem;
  background: var(--primary-lighter);
  &:hover {
    background: var(--primary-light);
  }
`
export const GiveClassesButton = styled.a`
  ${buttonsStyles}
  background: var(--secondary);
  &:hover {
    background: var(--secondary-dark);
  }
`
const iconsStyles = css`
  width: 4rem;
  margin-right: 2.4rem;
`
export const StudyIcon = styled.img.attrs({
  src: studyIcon,
  alt: 'Estudar',
})`
  ${iconsStyles}
`
export const GiveClassesIcon = styled.img.attrs({
  src: giveClassesIcon,
  alt: 'Dar aulas',
})`
  ${iconsStyles}
`
export const PurpleHeartIcon = styled.img.attrs({
  src: purpleHeartIcon,
  alt: 'Coração roxo',
})`
  margin-left: 0.8rem;
`
export const TotalConnections = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  @media (min-width: 1100px) {
    grid-area: total;
    justify-self: end;
  }
`
