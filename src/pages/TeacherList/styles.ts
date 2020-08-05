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
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;
  }
  label {
    color: var(--text-primary);
  }
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

export const SearchTeachersButton = styled.button`
  width: 100%;
  height: 5.6rem;
  background: var(--secondary);
  color: var(--button-text);
  border-radius: 0.8rem;
  font: 700 1.6rem Archivo;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: calc(8.5rem - 5.6rem);
  transition: background-color 0.2s;
  &:hover {
    background: var(--secondary-dark);
  }
  @media (min-width: 700px) {
    width: 20rem;
  }
`
