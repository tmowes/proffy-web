import React, { useCallback } from 'react'

import {
  TeacherItemContainer,
  HeaderListItem,
  Avatar,
  ContentItem,
  TitleItem,
  TagItem,
  TextItem,
  FooterItem,
  FooterTextItem,
  WhatsButton,
  WhatsIcon,
} from './styles'
import { TeacherItemProps } from './types'
import api from '../../services/api'

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const createNewConnection = useCallback(() => {
    async function saveNewConnection() {
      await api.post('connections', {
        user_id: teacher.id,
      })
    }
    saveNewConnection()
  }, [teacher.id])
  return (
    <TeacherItemContainer>
      <HeaderListItem>
        <Avatar src={teacher.avatar} alt={teacher.name} />
        <ContentItem>
          <TitleItem>{teacher.name}</TitleItem>
          <TagItem>{teacher.subject}</TagItem>
        </ContentItem>
      </HeaderListItem>
      <TextItem>{teacher.bio}</TextItem>
      <FooterItem>
        <FooterTextItem>
          Preço/hora
          <strong>{`R$ ${teacher.cost}`}</strong>
        </FooterTextItem>
        <WhatsButton
          target="_blank"
          rel="noopener noreferrer"
          href={`https://wa.me/${teacher.whatsapp}`}
          onClick={createNewConnection}
        >
          <WhatsIcon />
          Entrar em contato
        </WhatsButton>
      </FooterItem>
    </TeacherItemContainer>
  )
}

export default TeacherItem
