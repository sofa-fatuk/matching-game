import cardCat from '../images/cat.png'
import cardKitty from '../images/kitty.png'
import cardLama from '../images/lama.png'
import cardChicken from '../images/chicken.png'
import cardCello from '../images/cello.png'
import cardHouse from '../images/house.png'
import cardEagle from '../images/eagle.png'
import cardRabbit from '../images/rabbit.png'
import { CardType } from '../types'

export function getCards(): CardType[] {
  return [
    { id: "1", "src": cardCat, matched: false, isOpen: false },
    { id: "2", "src": cardCat, matched: false, isOpen: false },
    { id: "3", "src": cardChicken, matched: false, isOpen: false },
    { id: "4", "src": cardChicken, matched: false, isOpen: false },
    { id: "5", "src": cardLama, matched: false, isOpen: false },
    { id: "6", "src": cardLama, matched: false, isOpen: false },
    { id: "7", "src": cardKitty, matched: false, isOpen: false },
    { id: "8", "src": cardKitty, matched: false, isOpen: false },
    { id: "9", "src": cardRabbit, matched: false, isOpen: false },
    { id: "10", "src": cardRabbit, matched: false, isOpen: false },
    { id: "11", "src": cardCello, matched: false, isOpen: false },
    { id: "12", "src": cardCello, matched: false, isOpen: false },
    { id: "13", "src": cardHouse, matched: false, isOpen: false },
    { id: "14", "src": cardHouse, matched: false, isOpen: false },
    { id: "15", "src": cardEagle, matched: false, isOpen: false },
    { id: "16", "src": cardEagle, matched: false, isOpen: false },
  ]
}

export function shuffleCards(cards: CardType[]) {
  return [...cards].sort(() => Math.random() - 0.5)
}