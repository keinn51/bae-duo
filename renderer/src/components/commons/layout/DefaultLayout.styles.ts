import { color } from '@/src/commons/styles/styles'
import styled from '@emotion/styled'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;
  padding: 32px 40px;
  @media (max-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }
  @media (max-width: 360px) {
    max-width: 360px;
    padding: 0 16px;
  }
`
export const HeaderLayout = styled.header`
  margin: 24px 0 42px;
  font-size: 28px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`
