import React from 'react'

import {
  Header,
  TopNavBar,
  BackButton,
  BackIcon,
  Logo,
  HeaderContent,
  HeaderText,
} from './styles'
import { HeaderProps } from './types'

const PageHeader: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Header>
      <TopNavBar>
        <BackButton to="/">
          <BackIcon />
        </BackButton>
        <Logo />
      </TopNavBar>
      <HeaderContent>
        <HeaderText>{title}</HeaderText>
      </HeaderContent>
    </Header>
  )
}

export default PageHeader
