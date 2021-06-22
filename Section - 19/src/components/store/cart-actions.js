
import { uiActions } from './ui-slices';
import { cartActions } from './cart-slices';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('https://udemy-react-class-a3ccb-default-rtdb.firebaseio.com/cart.json');

      if (!response.ok) {
        throw new Error('cannot fetch data');
      }
      const data = await response.json();
      return data;
    }

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity
      }));
    }
    catch (error) {
      sendCartData().catch(error => {
        dispatch(uiActions.setNotification({
          status: 'error',
          title: 'error',
          message: 'fetch data failed.',
        }));
      })
    }
  }
}

// -----fetch data in action creator-----
export const sendCartData = cart => {
  return async (dispatch) => {
    dispatch(uiActions.setNotification({  // when start
      status: 'pending...',
      title: 'sending...',
      message: 'sending cart data...',
    }));

    const sendRequset = async () => {
      const response = await fetch(
        'https://udemy-react-class-a3ccb-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error('send data failed.');
      }
    }

    try {
      await sendRequset();
      dispatch(uiActions.setNotification({  // when finish
        status: 'success',
        title: 'success',
        message: 'sending data succeed.',
      }));
    }
    catch (error) {
      sendCartData().catch(error => {
        dispatch(uiActions.setNotification({  // when error
          status: 'error',
          title: 'error',
          message: 'sending data failed.',
        }));
      })
    }
  }
}