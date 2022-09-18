export const TOGGLE_CARDS_IS_OPEN = 'TOGGLE_CARDS_IS_OPEN'
export const SET_MATCHED_CARDS = 'SET_MATCHED_CARDS'
export const CLOSE_UNMATCHED_CARDS = 'CLOSE_UNMATCHED_CARDS'
export const SUFFLE_NEW_CARDS = 'SUFFLE_NEW_CARDS'

export function toggleCardsIsOpen (id: string) {
  return {
    type: TOGGLE_CARDS_IS_OPEN,
    id
  }
}

export function setMatchedCards (src: string) {
  return {
    type: SET_MATCHED_CARDS,
    src
  }
}

export function closeUnmatchedCards () {
  return {
    type: CLOSE_UNMATCHED_CARDS,
  }
}

export function shuffleNewCards () {
  return {
    type: SUFFLE_NEW_CARDS,
  }
}