import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { uiActions } from './components/store/ui-slices';
import Notification from './components/UI/Notification';
import { Fragment } from 'react';
import { sendCartData, fetchCartData } from './components/store/cart-actions';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  // -----fetch data in useEffect-----
  // useEffect(() => {
  //   const sendCartData = async () => {
  //     dispatch(uiActions.setNotification({  // when start
  //       status: 'pending...',
  //       title: 'sending...',
  //       message: 'sending cart data...',
  //     }));

  //     const response = await fetch(
  //       'https://udemy-react-class-a3ccb-default-rtdb.firebaseio.com/cart.json', 
  //       {
  //         method: 'PUT',
  //         body: JSON.stringify(cart),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error('send data failed.');
  //     }

  //     const reponseData = await response.json();

  //     dispatch(uiActions.setNotification({  // when finish
  //       status: 'success',
  //       title: 'success',
  //       message: 'sending data succeed.',
  //     }));
  //   }

  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }

  //   sendCartData().catch(error => {
  //     dispatch(uiActions.setNotification({  // when error
  //       status: 'error',
  //       title: 'error',
  //       message: 'sending data failed.',
  //     }));
  //   })
  // }, [cart]); // dispatch

  useEffect(() => {
    dispatch(fetchCartData)
  }, [])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart])

  return (
    <Fragment>
      {notification &&
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      }
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
