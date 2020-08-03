import React from 'react'

import { TeacherListContainer } from './styles'
import PageHeader from '../../components/PageHeader'

const TeacherList: React.FC = () => {
  return (
    <TeacherListContainer className="container">
      <PageHeader title="Estes são os proffys disponiveis." />
      <h1>TeacherList</h1>
    </TeacherListContainer>
  )
}

export default TeacherList
