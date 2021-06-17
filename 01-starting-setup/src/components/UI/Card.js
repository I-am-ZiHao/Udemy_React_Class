const Card = (props) => {
  const classes = 'card ' + props.className;  // 讓外面傳進來的className可以生效
  return <div className={classes}>
    {props.children}
  </div>
}

export default Card;