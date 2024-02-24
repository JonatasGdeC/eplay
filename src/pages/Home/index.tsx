import Banner from '../../components/Banner/'
import ProductsList from '../../components/ProductList'

import { useGetOnSaleQuery, useGetSoomQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingOnSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoom } = useGetSoomQuery()

  return (
    <>
      <Banner />
      <ProductsList
        games={onSaleGames}
        title="Promoções"
        background="gray"
        id="on-sale"
        isLoading={isLoadingOnSale}
      />
      <ProductsList
        games={soonGames}
        title="Em breve"
        background="black"
        id="coming-soon"
        isLoading={isLoadingSoom}
      />
    </>
  )
}

export default Home
