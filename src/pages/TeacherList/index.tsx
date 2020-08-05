import React, { useState, useCallback, FormEvent } from 'react'

import {
  TeacherListContainer,
  SearchTeachers,
  MainList,
  SearchTeachersButton,
} from './styles'
import api from '../../services/api'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

import { subjects, week_days } from '../../data/selectOptions.json'
import { TeacherItemDTO } from '../../components/TeacherItem/types'

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([])
  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  const searchTeachers = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      async function filterClasses() {
        const { data } = await api.get('classes', {
          params: {
            subject,
            week_day,
            time,
          },
        })
        setTeachers(data)
        console.log('data', data)
      }
      filterClasses()
    },
    [subject, time, week_day],
  )

  return (
    <TeacherListContainer>
      <PageHeader title="Estes são os proffys disponiveis.">
        <SearchTeachers onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            options={subjects}
            value={subject}
            onChange={e => {
              setSubject(e.target.value)
            }}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            options={week_days}
            value={week_day}
            onChange={e => {
              setWeekDay(e.target.value)
            }}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={e => {
              setTime(e.target.value)
            }}
          />
          <SearchTeachersButton type="submit">Buscar</SearchTeachersButton>
        </SearchTeachers>
      </PageHeader>
      <MainList>
        {teachers.map((teacher: TeacherItemDTO) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </MainList>
    </TeacherListContainer>
  )
}

export default TeacherList
