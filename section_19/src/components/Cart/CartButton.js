import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/ui-slices';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  const toggelCartHandler = () => {
    dispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={toggelCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
