import { useState } from 'react'
import type { CardapioItem } from '../../pages/Home'
import { List } from './styles'

import { Container } from '../../styles'
import Food from '../Food'

import {
  ModalContent,
  Modal,
  ModalButton,
  Description,
  BotaoFechar,
  ImageModal,
  Title
} from './styles'

import Fechar from '../../assets/images/fechar.png'
import { formataPreco } from '../../utils/formatters'

type Props = {
  foods: CardapioItem[]
}

const FoodList = ({ foods }: Props) => {
  const [pratoSelecionado, setPratoSelecionado] = useState<CardapioItem | null>(
    null
  )

  return (
    <Container>
      <List>
        {foods.map((item) => (
          <Food
            key={item.id}
            onClick={() => setPratoSelecionado(item)}
            foto={item.foto}
            nome={`${item.nome}`}
            descricao={`${item.descricao}`}
            preco={item.preco}
            porcao={`${item.porcao}`}
          />
        ))}
      </List>

      <Modal className={pratoSelecionado ? 'visivel' : ''}>
        {pratoSelecionado && (
          <ModalContent>
            <BotaoFechar
              src={Fechar}
              onClick={() => setPratoSelecionado(null)}
            />
            <ImageModal
              src={pratoSelecionado.foto}
              alt={pratoSelecionado.nome}
            />
            <div>
              <Title>{pratoSelecionado.nome}</Title>
              <Description>
                {pratoSelecionado.descricao}
                <span>{pratoSelecionado.porcao}</span>
              </Description>
              <ModalButton>
                Adicionar ao carrinho {formataPreco(pratoSelecionado.preco)}
              </ModalButton>
            </div>
          </ModalContent>
        )}
        <div className="overlay"></div>
      </Modal>
    </Container>
  )
}

export default FoodList
