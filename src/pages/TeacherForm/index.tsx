/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useState, useEffect, FormEvent } from 'react'

import { useHistory } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import TextArea from '../../components/TextArea'
import Select from '../../components/Select'
import {
  TeacherFormContainer,
  MainForm,
  FieldSet,
  Legend,
  FooterItem,
  FooterText,
  FooterIcon,
  FooterButton,
  ScheduleFieldSet,
  ScheduleLegend,
  AddSchedule,
  ScheduleContainer,
} from './styles'

import { week_days, subjects } from '../../data/selectOptions.json'
import api from '../../services/api'

const TeacherForm: React.FC = () => {
  const { push } = useHistory()
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')
  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ])

  const addNewScheduleItem = useCallback(() => {
    const newSchedule = {
      week_day: 2,
      from: '',
      to: '',
    }
    setScheduleItems([...scheduleItems, newSchedule])
    console.log('addNewScheduleItem')
  }, [scheduleItems])

  const setScheduleItemValue = useCallback(
    (position: number, field: string, value: string) => {
      const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
        if (index === position) {
          return { ...scheduleItem, [field]: value }
        }
        return scheduleItem
      })
      setScheduleItems(updatedScheduleItems)
    },
    [scheduleItems],
  )
  const handleCreateClass = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      async function createClass() {
        await api.post('classes', {
          name,
          avatar,
          whatsapp,
          bio,
          subject,
          cost: Number(cost),
          schedule: scheduleItems,
        })
      }
      try {
        createClass()
        alert('Cadastro realizado com sucesso')
        push('/')
      } catch (error) {
        alert('Erro no cadastro')
      }
    },
    [avatar, bio, cost, name, push, scheduleItems, subject, whatsapp],
  )

  return (
    <TeacherFormContainer>
      <PageHeader
        className="page-teacher-header"
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulario de inscrição"
      />
      <MainForm onSubmit={handleCreateClass}>
        <FieldSet>
          <Legend>Seus dados</Legend>
          <Input
            type="text"
            name="name"
            label="Nome completo"
            value={name}
            onChange={e => {
              setName(e.target.value)
            }}
          />
          <Input
            type="text"
            name="avatar"
            label="Avatar Url"
            value={avatar}
            onChange={e => {
              setAvatar(e.target.value)
            }}
          />
          <Input
            type="text"
            name="whatsapp"
            label="WhatsApp"
            value={whatsapp}
            onChange={e => {
              setWhatsapp(e.target.value)
            }}
          />
          <TextArea
            name="bio"
            label="Biografia"
            value={bio}
            onChange={e => {
              setBio(e.target.value)
            }}
          />
        </FieldSet>
        <FieldSet>
          <Legend>Sobre a aula</Legend>
          <Select
            name="subject"
            label="Matéria"
            options={subjects}
            value={subject}
            onChange={e => {
              setSubject(e.target.value)
            }}
          />
          <Input
            type="text"
            name="cost"
            label="Custo da sua aula por hora"
            value={cost}
            onChange={e => {
              setCost(e.target.value)
            }}
          />
        </FieldSet>
        <ScheduleFieldSet>
          <ScheduleLegend>
            Horarios disponiveis
            <AddSchedule type="button" onClick={addNewScheduleItem}>
              + Novo Horario
            </AddSchedule>
          </ScheduleLegend>
          {scheduleItems.map((schedule, index) => (
            <ScheduleContainer
              key={`${schedule.week_day}+${schedule.from}+${schedule.to}`}
            >
              <Select
                name="week_day"
                label="Dia da semana"
                value={schedule.week_day}
                onChange={e => {
                  setScheduleItemValue(index, 'week_day', e.target.value)
                }}
                options={week_days}
              />
              <Input
                type="time"
                name="from"
                label="Ínicio"
                value={schedule.from}
                onChange={e => {
                  setScheduleItemValue(index, 'from', e.target.value)
                }}
              />
              <Input
                type="time"
                name="to"
                label="Término"
                value={schedule.to}
                onChange={e => {
                  setScheduleItemValue(index, 'to', e.target.value)
                }}
              />
            </ScheduleContainer>
          ))}
        </ScheduleFieldSet>
        <FooterItem>
          <FooterText>
            <FooterIcon />
            Importante!
            <br />
            Preencha todos os dados
          </FooterText>
          <FooterButton type="submit">Salvar cadastro</FooterButton>
        </FooterItem>
      </MainForm>
    </TeacherFormContainer>
  )
}

export default TeacherForm
