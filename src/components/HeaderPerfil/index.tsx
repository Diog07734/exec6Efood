import fundoImg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.svg'

import { Imagem, Text, Banner, TextBanner, RestaurantName } from './styles'
import { Container } from '../../styles'
import { Link } from 'react-router-dom'

type Props = {
  tipo: string
  titulo: string
  capa: string
  qtdCarrinho: number
}

const HeaderPerfil = ({ capa, tipo, titulo, qtdCarrinho }: Props) => (
  <>
    <Imagem style={{ backgroundImage: `url(${fundoImg})` }}>
      <Text>Restaurantes</Text>
      <Link to="/">
        <img src={logo} alt="Efood" />
      </Link>
      <Text>{qtdCarrinho} produto(s) no carrinho</Text>
    </Imagem>
    <Banner
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${capa})`
      }}
    >
      <Container>
        <TextBanner>{tipo}</TextBanner>
        <RestaurantName>{titulo}</RestaurantName>
      </Container>
    </Banner>
  </>
)

export default HeaderPerfil