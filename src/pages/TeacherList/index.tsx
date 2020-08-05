import React from 'react'

import { TeacherListContainer, SearchTeachers, MainList } from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

import { subjects, week_day } from '../../data/selectOptions.json'

const TeacherList: React.FC = () => {
  return (
    <TeacherListContainer>
      <PageHeader title="Estes são os proffys disponiveis.">
        <SearchTeachers>
          <Select name="subject" label="Matéria" options={subjects} />
          <Select name="week_day" label="Dia da semana" options={week_day} />
          <Input type="time" name="time" label="Hora" />
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
