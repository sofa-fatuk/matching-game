import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react"
import classes from './style.module.scss';

interface Iprops extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
}

function Button (props: Iprops) {
  const { value, onClick } = props;
  return (
    <button className={classes.button} onClick={onClick}>
      {value}
    </button>
  )
}

export default Button