import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'

import { useSelector, useDispatch } from 'react-redux'
import { CardType } from '../../types'

import classes from './style.module.scss'
import { RootState } from '../../store'
import { 
  closeUnmatchedCards,
  setMatchedCards,
  shuffleNewCards,
  toggleCardsIsOpen,
} from '../../store/actions/cards'


function MainPage() {
  const [gameNumber, setGameNumber] = useState(0)
  const [firstCardInPair, setFirstCardInPair] = useState<CardType | null>(null)
  const [isDisabled, setIsDisabled] = useState(false)

  const dispatch = useDispatch()
  const cards = useSelector<RootState, CardType[]>(state => state.cards)

  const startNewGame = () => {
    dispatch(shuffleNewCards())
    setGameNumber(gameNumber + 1)
  }

  const onClickCard = (card: CardType) => {
    if (isDisabled) {
      return
    }

    if (card.isOpen) {
      return
    }

    if (!card.matched) {
      toggleCardIsOpen(card)
      checkMatch(card)
    }
  }

  const toggleCardIsOpen = (card: CardType) => {
    dispatch(toggleCardsIsOpen(card.id))
  }

  const checkMatch = (card: CardType) => {

    if (firstCardInPair) {
      if (firstCardInPair.src === card.src) {
        dispatch(setMatchedCards(card.src))

      } else {
        setIsDisabled(true)
        setTimeout(() => {
          dispatch(closeUnmatchedCards())
          setIsDisabled(false)
        }, 1000)
      }
      setFirstCardInPair(null)
    } else {
      setFirstCardInPair(card)
    }
  }
  

  useEffect(() => {
    if(cards.every(cardItem => cardItem.matched)) {
      setTimeout(() => {
        alert('you win')
      }, 1000)
    }
  }, [cards])

  return (
    <div className={classes.main}>
      <h1 className={classes.title}>Matching Game</h1>
      <div className={classes.button}>
        <Button
          value="New Game"
          onClick={startNewGame}
        />
      </div>
      <div key={gameNumber} className={classes.container}>
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              onClick={onClickCard}
              card={card}
            />
          )
        })}
      </div>
    </div>
  );
}

export default MainPage;
