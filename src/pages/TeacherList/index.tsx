import React from 'react'

import {
  TeacherListContainer,
  SearchTeachers,
  InputBlock,
  Subject,
  Input,
  MainList,
} from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

const TeacherList: React.FC = () => {
  return (
    <TeacherListContainer>
      <PageHeader title="Estes são os proffys disponiveis.">
        <SearchTeachers>
          <InputBlock>
            <Subject htmlFor="subject">Matéria</Subject>
            <Input type="text" id="subject" autoComplete="off" />
          </InputBlock>
          <InputBlock>
            <Subject htmlFor="week_day">Dia da semana</Subject>
            <Input type="text" id="week_day" autoComplete="off" />
          </InputBlock>
          <InputBlock>
            <Subject htmlFor="time">Hora</Subject>
            <Input type="text" id="time" autoComplete="off" />
          </InputBlock>
        </SearchTeachers>
      </PageHeader>
      <MainList>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </MainList>
    </TeacherListContainer>
  )
}

export default TeacherList
