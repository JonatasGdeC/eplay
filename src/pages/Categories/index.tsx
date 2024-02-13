import ProductsList from '../../components/ProductList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportsGames } = useGetSportGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRPGGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()

  if (actionGames && sportsGames && fightGames && rpgGames && simulationGames) {
    return (
      <>
        <ProductsList games={actionGames} title="Ação" background="black" />
        <ProductsList games={sportsGames} title="Esportes" background="gray" />
        <ProductsList games={fightGames} title="Luta" background="black" />
        <ProductsList games={rpgGames} title="RPG" background="gray" />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="black"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
