import { useEffect, useState } from 'react'
import FoodList from '../../components/FoodList'
import Footer from '../../components/Footer'
import HeaderPerfil from '../../components/HeaderPerfil'
import { useParams } from 'react-router-dom'

import type { CardapioItem, Restaurants } from '../../pages/Home'

const Perfil = () => {
  const [restaurante, setRestaurante] = useState<Restaurants | null>(null)
  const { id } = useParams()

  // Estado do carrinho
  const [qtdCarrinho, setQtdCarrinho] = useState(0)

  // Função para adicionar produto
  const adicionarProduto = () => setQtdCarrinho((qtd) => qtd + 1)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((resposta) => resposta.json())
      .then((resposta) => {
        const cardapioCorrigido: CardapioItem[] = resposta.cardapio.map(
          (item: any) => ({
            ...item,
            preco: Number(item.preco)
          })
        )
        setRestaurante({
          ...resposta,
          cardapio: cardapioCorrigido
        } as Restaurants)
      })
  }, [id])

  return (
    <>
      {restaurante && (
        <HeaderPerfil
          tipo={restaurante.tipo!}
          titulo={restaurante.titulo!}
          capa={restaurante.capa!}
          qtdCarrinho={qtdCarrinho}
        />
      )}
      <FoodList foods={restaurante?.cardapio ?? []} adicionarProduto={adicionarProduto} />
      <Footer />
    </>
  )
}

export default Perfil