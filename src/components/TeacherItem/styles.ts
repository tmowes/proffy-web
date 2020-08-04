import styled from 'styled-components'
import { Link } from 'react-router-dom'

import whatsappIcon from '../../assets/icons/whatsapp.svg'

const avatarUrl =
  'https://avatars0.githubusercontent.com/u/59985627?s=460&u=4250eeda3e661627db57da113f43dd462c0ca2d7&v=4'

export const TeacherItemContainer = styled.article`
  margin-top: 2.4rem;
  background: var(--box-base);
  border: 1px solid var(--line-white);
  border-radius: 0.8rem;
  overflow: hidden;
`
export const HeaderListItem = styled.header`
  padding: 3.2rem 2rem;
  display: flex;
  align-items: center;
  @media (min-width: 700px) {
    padding: 3.2rem;
  }
`
export const Avatar = styled.img.attrs({
  src: avatarUrl,
  alt: 'Avatar',
})`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
`
export const ContentItem = styled.div`
  margin-left: 2.4rem;
`
export const TitleItem = styled.strong`
  font: 700 2.4rem Archivo;
  display: block;
  color: var(--text-title);
`
export const TagItem = styled.span`
  font-size: 1.6rem;
  display: block;
  /* color: var(--text-title); */
  margin-top: 0.4rem;
`
export const TextItem = styled.p`
  font-size: 1.6rem;
  line-height: 2.8rem;
  padding: 0 2rem;
  @media (min-width: 700px) {
    padding: 0 3.2rem;
  }
`
export const FooterItem = styled.footer`
  padding: 3.2rem 2rem;
  background: var(--box-footer);
  border-top: 1px solid var(--line-white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 700px) {
    padding: 3.2rem;
  }
`
export const FooterTextItem = styled.p`
  strong {
    color: var(--primary);
    font-size: 1.6rem;
    display: block;
    @media (min-width: 700px) {
      display: initial;
      margin-left: 1.6rem;
    }
  }
`
export const WhatsButton = styled(Link)`
  width: 20rem;
  height: 5.6rem;
  border-radius: 0.8rem;
  background: var(--secondary);
  color: var(--button-text);
  font: 700 1.4rem Archivo;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: 0.2s;
  &:hover {
    background: var(--secondary-dark);
  }
  @media (min-width: 700px) {
    width: 24.5rem;
    font-size: 1.6rem;
    justify-content: center;
  }
`
export const WhatsIcon = styled.img.attrs({
  src: whatsappIcon,
  alt: 'Whatsapp',
})`
  @media (min-width: 700px) {
    margin-right: 1.6rem;
  }
`
