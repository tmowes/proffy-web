import React from 'react'

import { TeacherFormContainer } from './styles'
import PageHeader from '../../components/PageHeader'

const TeacherForm: React.FC = () => {
  return (
    <TeacherFormContainer className="container">
      <PageHeader title="Que incrível que você quer dar aulas.">
        TESTE
      </PageHeader>
      <h1>TeacherForm</h1>
    </TeacherFormContainer>
  )
}

export default TeacherForm
