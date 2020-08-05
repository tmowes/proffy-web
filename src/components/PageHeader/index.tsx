import React from 'react'

import {
  Header,
  TopNavBar,
  BackButton,
  BackIcon,
  Logo,
  HeaderContent,
  HeaderText,
  HeaderDescription,
} from './styles'
import { HeaderProps } from './types'

const PageHeader: React.FC<HeaderProps> = ({
  title,
  description,
  children,
}) => {
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
        {description && <HeaderDescription>{description}</HeaderDescription>}
        {children}
      </HeaderContent>
    </Header>
  )
}

export default PageHeader
