import React from 'react'
import * as S from './styles'

type Props = {
  isVisible: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal = ({ isVisible, onClose, children }: Props) => {
  if (!isVisible) return null

  return (
    <S.Overlay onClick={onClose}>
      <S.Content onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>×</button>
        {children}
      </S.Content>
    </S.Overlay>
  )
}

export default Modal
