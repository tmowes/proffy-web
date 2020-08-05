import React from 'react'

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

import { week_day, subjects } from '../../data/selectOptions.json'

const TeacherForm: React.FC = () => {
  return (
    <TeacherFormContainer>
      <PageHeader
        className="page-teacher-header"
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulario de inscrição"
      />
      <MainForm>
        <FieldSet>
          <Legend>Seus dados</Legend>
          <Input type="text" name="name" label="Nome completo" />
          <Input type="text" name="avatar" label="Avatar Url" />
          <Input type="text" name="whatsapp" label="WhatsApp" />
          <TextArea name="bio" label="Biografia" />
        </FieldSet>
        <FieldSet>
          <Legend>Sobre a aula</Legend>
          <Select name="subject" label="Matéria" options={subjects} />
          <Input type="text" name="cost" label="Custo da sua aula por hora" />
        </FieldSet>
        <ScheduleFieldSet>
          <ScheduleLegend>
            Horarios disponiveis
            <AddSchedule type="button">+ Novo Horario</AddSchedule>
          </ScheduleLegend>
          <ScheduleContainer>
            <Select name="week_day" label="Dia da semana" options={week_day} />
            <Input type="time" name="from" label="Ínicio" />
            <Input type="time" name="to" label="Término" />
          </ScheduleContainer>
        </ScheduleFieldSet>
        <FooterItem>
          <FooterText>
            <FooterIcon />
            Importante!
            <br />
            Preencha todos os dados
          </FooterText>
          <FooterButton type="button">Salvar cadastro</FooterButton>
        </FooterItem>
      </MainForm>
    </TeacherFormContainer>
  )
}

export default TeacherForm
