import { 
  TOGGLE_CARDS_IS_OPEN,
  SET_MATCHED_CARDS,
  CLOSE_UNMATCHED_CARDS,
  SUFFLE_NEW_CARDS,
} from "../actions/cards"
import { getCards, shuffleCards } from "../../helpers/cards"

type ToggleCardsAction = {
  id: string,
  type: typeof TOGGLE_CARDS_IS_OPEN,
}

type SetMatchedCardsAction = {
  src: string,
  type: typeof SET_MATCHED_CARDS,
}

type CloseUnmatchedCardsAction = {
  type: typeof CLOSE_UNMATCHED_CARDS,
}

type SuffleNewCardsAction = {
  type: typeof SUFFLE_NEW_CARDS,
}

const initialState = shuffleCards(getCards())

function cardsReducer (state = initialState, action: ToggleCardsAction | SetMatchedCardsAction | CloseUnmatchedCardsAction | SuffleNewCardsAction) {
  switch (action.type) {
    case TOGGLE_CARDS_IS_OPEN:
      const cardId = (action as ToggleCardsAction).id
      return state.map((cardItem) => {
        if (cardItem.id === cardId) {
          return {...cardItem, isOpen: !cardItem.isOpen}
        }
        return cardItem
      })
    case SET_MATCHED_CARDS:
      const cardSrc = (action as SetMatchedCardsAction).src
      return state.map((cardItem) => {
        if (cardItem.src === cardSrc) {
          return { ...cardItem, matched: true }
        }
        return cardItem
      })
    case CLOSE_UNMATCHED_CARDS:
      return state.map((cardItem) => {
        if (cardItem.isOpen && !cardItem.matched) {
          return { ...cardItem, isOpen: false }
        }
        return cardItem
      })
    case SUFFLE_NEW_CARDS:
      return shuffleCards(getCards())
    default:
      return state
  }
}

export default cardsReducer