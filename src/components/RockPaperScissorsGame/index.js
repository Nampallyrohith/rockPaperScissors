import {Component} from 'react'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'

import {
  PlayViewContainer,
  GameContainer,
  RulesButton,
  RulesContainer,
  CloseBtn,
  RuleImg,
  ResultContainer,
  Text,
  Content,
  Image,
  View,
  ResultHeading,
  ResultButton,
} from './styledComponents'
import ButtonItem from '../ButtonItem'

import ScoreBoard from '../ScoreBoard'

const gameStatusContent = {
  playingView: 'PLAY',
  gameResults: 'RESULT',
}

class RockPaperScissorsGame extends Component {
  state = {
    gameStatus: gameStatusContent.playingView,
    score: 0,
    choice: '',
    opponent: '',
    result: '',
  }

  onClickPlayAgain = () => {
    this.setState({gameStatus: gameStatusContent.playingView})
  }

  updateChoiceImage = id => {
    const {choicesList} = this.props
    const item = choicesList.find(list => list.id === id)
    this.setState({choice: item}, this.gameDecision)
  }

  gameDecision = () => {
    const {choicesList} = this.props
    const random = Math.random()
    const scaleNum = random * choicesList.length
    const index = Math.floor(scaleNum)
    this.setState(
      {
        opponent: choicesList[index],
        gameStatus: gameStatusContent.gameResults,
      },
      this.getGameProcessing,
    )
  }

  getGameProcessing = () => {
    const {choice, opponent} = this.state

    // For Rock
    if (choice.id === 'ROCK') {
      if (opponent.id === 'PAPER') {
        console.log(true)
        this.setState(prevState => ({
          score: prevState.score - 1,
          result: 'YOU LOSE',
        }))
      } else if (choice.id === opponent.id) {
        this.setState(prevState => ({score: prevState.score}))
        this.setState({result: 'IT IS DRAW'})
      } else {
        console.log(false)
        this.setState(prevState => ({
          score: prevState.score + 1,
          result: 'YOU WON',
        }))
      }
    }

    // For Paper
    if (choice.id === 'PAPER') {
      if (opponent.id === 'SCISSORS') {
        console.log(true)
        this.setState(prevState => ({
          score: prevState.score - 1,
          result: 'YOU LOSE',
        }))
      } else if (choice.id === opponent.id) {
        this.setState(prevState => ({score: prevState.score}))
        this.setState({result: 'IT IS DRAW'})
      } else {
        console.log(false)
        this.setState(prevState => ({
          score: prevState.score + 1,
          result: 'YOU WON',
        }))
      }
    }

    // For Scissors
    if (choice.id === 'SCISSORS') {
      if (opponent.id === 'ROCK') {
        this.setState(prevState => ({
          score: prevState.score - 1,
          result: 'YOU LOSE',
        }))
      } else if (choice.id === opponent.id) {
        this.setState(prevState => ({score: prevState.score}))
        this.setState({result: 'IT IS DRAW'})
      } else {
        this.setState(prevState => ({
          score: prevState.score + 1,
          result: 'YOU WON',
        }))
      }
    }
  }

  renderGamePlayView = () => {
    const {choicesList} = this.props

    return (
      <GameContainer>
        {choicesList.map(list => (
          <ButtonItem
            key={list.id}
            list={list}
            updateChoiceImage={this.updateChoiceImage}
          />
        ))}
      </GameContainer>
    )
  }

  renderGameResult = () => {
    const {choice, opponent, result} = this.state
    return (
      <ResultContainer>
        <View>
          <Content>
            <Text>YOU</Text>
            <Image src={choice.imageUrl} alt="your choice" />
          </Content>
          <Content>
            <Text>OPPONENT</Text>
            <Image src={opponent.imageUrl} alt="opponent choice" />
          </Content>
        </View>
        <ResultHeading>{result}</ResultHeading>
        <ResultButton type="button" onClick={this.onClickPlayAgain}>
          PLAY AGAIN
        </ResultButton>
      </ResultContainer>
    )
  }

  renderGame = () => {
    const {gameStatus} = this.state
    switch (gameStatus) {
      case gameStatusContent.playingView:
        return this.renderGamePlayView()
      case gameStatusContent.gameResults:
        return this.renderGameResult()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state
    return (
      <>
        <PlayViewContainer>
          <ScoreBoard score={score} />
          {this.renderGame()}
          <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
            {close => (
              <RulesContainer>
                <CloseBtn type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseBtn>
                <RuleImg
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesContainer>
            )}
          </Popup>
        </PlayViewContainer>
      </>
    )
  }
}

export default RockPaperScissorsGame
