import React, { useEffect, useState } from 'react'
import Button from './components/Button'
import Card from './components/Card'

import cardCat from './images/cat.png'
import cardKitty from './images/kitty.png'
import cardLama from './images/lama.png'
import cardChicken from './images/chicken.png'
import cardCello from './images/cello.png'
import cardHouse from './images/house.png'
import cardEagle from './images/eagle.png'
import cardRabbit from './images/rabbit.png'

import classes from './style.module.scss'

const cardImage = [
  { "src": cardCat, matched: false, isOpen: false },
  { "src": cardCat, matched: false, isOpen: false },
  { "src": cardChicken, matched: false, isOpen: false },
  { "src": cardChicken, matched: false, isOpen: false },
  { "src": cardLama, matched: false, isOpen: false },
  { "src": cardLama, matched: false, isOpen: false },
  { "src": cardKitty, matched: false, isOpen: false },
  { "src": cardKitty, matched: false, isOpen: false },
  { "src": cardRabbit, matched: false, isOpen: false },
  { "src": cardRabbit, matched: false, isOpen: false },
  { "src": cardCello, matched: false, isOpen: false },
  { "src": cardCello, matched: false, isOpen: false },
  { "src": cardHouse, matched: false, isOpen: false },
  { "src": cardHouse, matched: false, isOpen: false },
  { "src": cardEagle, matched: false, isOpen: false },
  { "src": cardEagle, matched: false, isOpen: false },
]

function App() {
  const [cards, setCards] = useState([])
  const [gameNumber, setGameNumber] = useState(0)
  const [firstCardInPair, setFirstCardInPair] = useState(null)
  const [isDisabled, setIsDisabled] = useState(false)

 
  const shuffledCards = () => {
    const shuffledCards = [...cardImage]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: String(index) }))

    setCards(shuffledCards)
    setGameNumber(gameNumber + 1)
  }

  useEffect(() => {
    shuffledCards()
  }, [])

  const onClickCard = (card) => {
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

  const toggleCardIsOpen = (card) => {

    setCards((prevCards) => {
      return prevCards.map((cardItem) => {
        if (cardItem.id === card.id) {
          return {...cardItem, isOpen: !cardItem.isOpen}
        }
        return cardItem
      })
    })
  }

  const checkMatch = (card) => {
    console.log('firstCardInPair', firstCardInPair);
    console.log('card', card)

    if (firstCardInPair) {
      if (firstCardInPair.src === card.src) {
        console.log('matched1231')
        setCards((prevCards) => {
          return prevCards.map((cardItem) => {
            if (cardItem.src === firstCardInPair.src) {
              return { ...cardItem, matched: true }
            }
            return cardItem
          })
        })
      } else {
        setIsDisabled(true)
        setTimeout(() => {
          setCards((prevCards) => {
            return prevCards.map((cardItem) => {
              if (cardItem.isOpen && !cardItem.matched) {
                return { ...cardItem, isOpen: false }
              }
              return cardItem
            })
          })
          setIsDisabled(false)
        }, 1000)
      }
      setFirstCardInPair(null)
    } else {
      setFirstCardInPair(card)
    }
  }

  console.log(cards, gameNumber);

  return (
    <div className={classes.main}>
      <h1 className={classes.title}>Matching Game</h1>
      <div className={classes.button}>
        <Button
          value="New Game"
          onClick={shuffledCards}
        />
      </div>
      <div key={gameNumber} className={classes.container}>
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              onClick={onClickCard}
              card={card}
              disabled={isDisabled}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
