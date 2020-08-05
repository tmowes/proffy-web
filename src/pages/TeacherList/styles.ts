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
