import styled from 'styled-components'

export const PlayViewContainer = styled.div`
  background-color: #223a5f;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const GameContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 400px;
`

export const RulesButton = styled.button`
  background-color: white;
  color: #223a5f;
  border-width: 0px;
  border-radius: 8px;
  height: 50px;
  width: 120px;
  font-size: 17px;
  padding: 8px;
  align-self: flex-end;
  margin: 20px;
  font-weight: bold;
  letter-spacing: 1px;
`
export const RulesContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CloseBtn = styled.button`
  background-color: gray;
  border-width: 0px;
  padding: 5px;
  text-align: center;
  align-self: flex-end;
`

export const RuleImg = styled.img`
  width: 550px;
  margin: 30px;
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const View = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Text = styled.p`
  color: white;
  font-size: 25px;
  font-weight: bold;
`
export const Image = styled.img`
  border-radius: 50%;
  width: 150px;
`
export const Content = styled.div`
  font-family: 'Roboto';
  text-align: center;
  margin-right: 100px;
`
export const ResultHeading = styled.p`
  color: white;
  font-weight: bold;
  font-size: 35px;
`
export const ResultButton = styled.button`
  background-color: white;
  color: #223a5f;
  width: 180px;
  height: 40px;
  border-width: 0px;
  border-radius: 8px;
  font-weight: bold;
`
