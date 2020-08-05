/* eslint-disable  */
import React, { useState, useEffect } from 'react'

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
import api from '../../services/api'

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    async function loadConnections() {
      const { data } = await api.get('connections')
      setTotalConnections(data.total)
    }
    loadConnections()
  }, [])

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
          {`Total de ${totalConnections} conexões já realizadas`}
          <PurpleHeartIcon />
        </TotalConnections>
      </LandingContainer>
    </LandingWrapper>
  )
}

export default Landing
