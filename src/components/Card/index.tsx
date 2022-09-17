import React from "react"

import { CardType } from '../../types'
import cardBack from '../../images/stars.png'
import { getClassNames } from '../../helpers'

import classes from './style.module.scss'

interface Iprops {
  onClick: (card: CardType) => void,
  card: CardType,
}

function Card(props: Iprops) {
  const { card, onClick } = props

  const onChangeCardSide = () => {
      onClick(card)
  }


  return (
    <div
      onClick={onChangeCardSide}
      className={getClassNames(classes.card, !card.isOpen && classes.isBackSide)}
    >
      <img className={classes.cardContent} src={card.src} alt="card front" />
      <img className={getClassNames(classes.cardContent, classes.back)} src={cardBack} alt="card back" />
    </div>
  )
}

export default Card
