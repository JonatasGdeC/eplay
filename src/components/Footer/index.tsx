import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <S.Container>
      <div className="container">
        <S.FooterSection>
          <S.SectionTitle>Categorias</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link to="/categorias#rpg">RPG</S.Link>
            </li>
            <li>
              <S.Link to="/categorias#action">Ação</S.Link>
            </li>
            <li>
              <S.Link to="/categorias#sports">Esportes</S.Link>
            </li>
            <li>
              <S.Link to="/categorias#simulation">Simulação</S.Link>
            </li>
            <li>
              <S.Link to="/categorias#fight">Luta</S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <S.FooterSection>
          <S.SectionTitle>Acesso rápido</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link to="/#on-sale">Promoções</S.Link>
            </li>
            <li>
              <S.Link to="/#coming-soon">Em breve</S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </S.Container>
  )
}

export default Footer
