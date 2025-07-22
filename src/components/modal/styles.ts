import styled from 'styled-components'

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  background: white;
  padding: 32px;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  position: relative;
`
