import styled from 'styled-components'

import warningIcon from '../../assets/icons/warning.svg'

export const TeacherFormContainer = styled.div`
  width: 100vw;
  height: 100vh;
  @media (min-width: 700px) {
    max-width: 100%;
  }
`
export const MainForm = styled.main`
  background: var(--box-base);
  width: 100%;
  max-width: 74rem;
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem;
  overflow: hidden;
`
export const FieldSet = styled.fieldset`
  border: 0;
  padding: 0 2.4rem;
  &:not(:first-child) {
    margin-top: 6.4rem;
  }
  div:not(:first-child) {
    margin-top: 1.4rem;
  }
  label {
    color: var(--text-complement);
  }
  @media (min-width: 700px) {
    padding: 0 6.4rem;
  }
`

export const Legend = styled.legend`
  font: 700 2.4rem Archivo;
  color: var(--text-title);
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: space-between;
  width: 100%;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid var(--line-white);
`

export const FooterItem = styled.footer`
  padding: 4rem 2.4rem;
  background: var(--box-footer);
  border-top: 1px solid var(--line-white);
  margin-top: 6.4rem;
  @media (min-width: 700px) {
    padding: 4rem 6.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const FooterText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: var(--text-complement);
  @media (min-width: 700px) {
    justify-content: space-between;
  }
`
export const FooterIcon = styled.img.attrs({
  src: warningIcon,
  alt: 'Aviso importante',
})`
  margin-right: 1.6rem;
`
export const FooterButton = styled.button`
  width: 100%;
  height: 5.6rem;
  background: var(--secondary);
  color: var(--button-text);
  border-radius: 0.8rem;
  font: 700 1.6rem Archivo;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3.2rem;
  transition: background-color 0.2s;
  &:hover {
    background: var(--secondary-dark);
  }
  @media (min-width: 700px) {
    width: 20rem;
    margin-top: 0;
  }
`
export const ScheduleFieldSet = styled.fieldset`
  display: flex;
  justify-content: center;
  align-items: space-between;

  border: 0;
  padding: 0 2.4rem;
  &:not(:first-child) {
    margin-top: 6.4rem;
  }
  div:not(:first-child) {
    margin-top: 1.4rem;
  }
  label {
    color: var(--text-complement);
  }
  @media (min-width: 700px) {
    padding: 0 6.4rem;
  }
`
export const ScheduleLegend = styled.legend`
  font: 700 2.4rem Archivo;
  color: var(--text-title);
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid var(--line-white);
`

export const AddSchedule = styled.button`
  font: 700 1.6rem Archivo;
  color: var(--primary);
  transition: color 0.2s;
  &:hover {
    color: var(--primary-darker);
  }
`

export const ScheduleContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  column-gap: 1.6rem;
  div:not(:first-child) {
    margin-top: 0;
  }
`
