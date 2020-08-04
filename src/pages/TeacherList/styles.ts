import styled from 'styled-components'

export const TeacherListContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--background);
  @media (min-width: 700px) {
    max-width: 100%;
  }
`
export const SearchTeachers = styled.form`
  margin-top: 3.2rem;
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;
  }
`
export const InputBlock = styled.div`
  position: relative;
  &:not(:first-child) {
    margin-top: 1.4rem;
    @media (min-width: 700px) {
      margin-top: 0;
    }
  }
  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: var(--primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0px;
    z-index: 999;
  }
`
export const Subject = styled.label`
  font-size: 1.6rem;
  color: var(--text-primary);
`
export const Input = styled.input`
  width: 100%;
  height: 5.6rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background: var(--input-background);
  border: 1px solid var(--line-white);
  padding: 0 1.6rem;
  font: 1.6rem Archivo;
`
export const MainList = styled.main`
  width: 90%;
  margin: 3.2rem auto;
  @media (min-width: 700px) {
    padding: 3.2rem 0;
    margin: 0 auto;
    max-width: 740px;
  }
`
