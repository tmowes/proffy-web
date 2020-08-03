import React from 'react'

import {
  LandingWrapper,
  LandingContainer,
  LogoContainer,
  Logo,
  LogoText,
  LandigImage,
  ButtonsContainer,
  StudyButton,
  GiveClassesButton,
  StudyIcon,
  GiveClassesIcon,
  PurpleHeartIcon,
  TotalConnections,
} from './styles'

const Landing: React.FC = () => {
  return (
    <LandingWrapper>
      <LandingContainer className="container">
        <LogoContainer>
          <Logo />
          <LogoText>Sua plataforma de estudos online.</LogoText>
        </LogoContainer>

        <LandigImage />

        <ButtonsContainer>
          <StudyButton to="/study">
            <StudyIcon />
            Estudar
          </StudyButton>
          <GiveClassesButton to="/give-classes">
            <GiveClassesIcon />
            Dar aulas
          </GiveClassesButton>
        </ButtonsContainer>

        <TotalConnections>
          Total de 69 conexões já realizadas
          <PurpleHeartIcon />
        </TotalConnections>
      </LandingContainer>
    </LandingWrapper>
  )
}

export default Landing
