import {
  ScoreContainer,
  Text,
  Score,
  ScoreView,
  Heading,
} from './styledComponents'

const ScoreBoard = props => {
  const {score} = props
  return (
    <ScoreContainer>
      <Heading>
        ROCK
        <br /> PAPER
        <br /> SCISSORS
      </Heading>
      <ScoreView>
        <Text>Score</Text>
        <Score>{score}</Score>
      </ScoreView>
    </ScoreContainer>
  )
}

export default ScoreBoard
