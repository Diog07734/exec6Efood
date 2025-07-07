import {
  ContainerFood,
  ImagemFood,
  TitleFood,
  DescriptionFood,
  StyledButton
} from './styles'
import Button from '../ButtonFood'
import { formataPreco } from '../../utils/formatters'

type FoodProps = {
  onClick: () => void
  foto: string
  nome: string
  descricao: string
  preco: number
  porcao: string
}

const Food = ({ onClick, foto, descricao, nome, preco }: FoodProps) => {
  const limitarDescricao = (descricao: string) => {
    return descricao.length > 150 ? descricao.slice(0, 150) + '...' : descricao
  }

  return (
    <ContainerFood>
      <ImagemFood src={foto} />
      <div onClick={onClick}>
        <TitleFood>{nome}</TitleFood>
        <DescriptionFood>{limitarDescricao(descricao)}</DescriptionFood>
        <StyledButton>Adicionar ao carrinho </StyledButton>
      </div>
    </ContainerFood>
  )
}

export default Food
