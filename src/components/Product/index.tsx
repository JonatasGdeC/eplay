import Tag from '../Tag'
import * as S from './styles'

const Product = () => {
  return (
    <S.Card>
      <img src="//placehold.it/222x250" />
      <S.Titulo>Nome do jogo</S.Titulo>
      <Tag>Categoria</Tag>
      <Tag>Windowns</Tag>
      <S.Descricao>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        accusantium adipisci, dolore illo voluptate repellat tenetur reiciendis
        minus maxime mollitia nesciunt. Expedita fugiat qui molestiae quos dicta
        minus aspernatur quasi!
      </S.Descricao>
    </S.Card>
  )
}

export default Product
