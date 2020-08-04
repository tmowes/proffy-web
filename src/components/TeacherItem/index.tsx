import React from 'react'

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

const TeacherItem: React.FC = () => {
  return (
    <TeacherItemContainer>
      <HeaderListItem>
        <Avatar />
        <ContentItem>
          <TitleItem>Julius Mowes</TitleItem>
          <TagItem>Química</TagItem>
        </ContentItem>
      </HeaderListItem>
      <TextItem>
        Entusiasta das melhores tecnologias de foguete avançada.
        <br />
        <br />
        Currently studying NodeJS, ReactJS, ReactNative, JavaScript, TypeScript
        and BigDataAnalysis.
      </TextItem>
      <FooterItem>
        <FooterTextItem>
          Preço/hora
          <strong>R$ 80,00</strong>
        </FooterTextItem>
        <WhatsButton to="/">
          <WhatsIcon />
          Entrar em contato
        </WhatsButton>
      </FooterItem>
    </TeacherItemContainer>
  )
}

export default TeacherItem
