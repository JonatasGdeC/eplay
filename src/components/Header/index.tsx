import { Link } from 'react-router-dom'

import * as S from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }
  return (
    <S.HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="Eplay" />
        </Link>
        <nav>
          <S.Links>
            <S.LinkItem>
              <Link to="/categorias">Categorias</Link>
            </S.LinkItem>
            <S.LinkItem>
              <a href="#">Novidades</a>
            </S.LinkItem>
            <S.LinkItem>
              <a href="#">Promoções</a>
            </S.LinkItem>
          </S.Links>
        </nav>
      </div>
      <S.CardButton href="#" onClick={openCart}>
        0 - produto(s)
        <img src={carrinho} alt="Carrinho de compras" />
      </S.CardButton>
    </S.HeaderBar>
  )
}

export default Header
