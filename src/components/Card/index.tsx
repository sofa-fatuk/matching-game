import React from "react"

import { CardType } from '../../types'
import cardBack from '../../images/stars.png'
import { getClassNames } from '../../helpers'

import classes from './style.module.scss'

interface Iprops {
  onClick: () => void,
  card: CardType,
}

function Card(props: Iprops) {
  const { card, onClick } = props

  const onChangeCardSide = () => {
      onClick(card)
    
    // переворачивает карточку
    // if (!card.matched) {
    //   onClick(card)
    //   setIsBackSide(!isBackSide)
    // }
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