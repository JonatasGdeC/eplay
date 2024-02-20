import * as S from './styles'

type Prosp = {
  children: JSX.Element
  title: string
}

const Card = ({ children, title }: Prosp) => {
  return (
    <S.Container>
      <h2>{title}</h2>
      {children}
    </S.Container>
  )
}

export default Card
