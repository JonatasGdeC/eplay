import Product from '../Product'
import * as S from './styles'

type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ title }: Props) => {
  return (
    <S.Container>
      <div className="container">
        <S.Title>{title}</S.Title>
        <S.List>
          <li>
            <Product />
          </li>
          <li>
            <Product />
          </li>
          <li>
            <Product />
          </li>
          <li>
            <Product />
          </li>
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList
