import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.green : 'transparent'};
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? 'transparent' : colors.white)};
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    opacity: 0.8;
  }
`
export const ButtonLink = styled(Link)`
  background-color: transparent;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
  transition: all ease 0.3s;

  &:hover {
    opacity: 0.8;
  }
`
