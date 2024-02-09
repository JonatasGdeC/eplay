import * as S from './styles'

import zelda from '../../assets/images/banner-homem-aranha.png'

const Gallery = () => {
  return (
    <S.Items>
      <S.Item>
        <img src={zelda} alt="Imagem do link" />
      </S.Item>
      <S.Item>
        <img src={zelda} alt="Imagem do link" />
      </S.Item>
      <S.Item>
        <img src={zelda} alt="Imagem do link" />
      </S.Item>
      <S.Item>
        <img src={zelda} alt="Imagem do link" />
      </S.Item>
    </S.Items>
  )
}

export default Gallery
