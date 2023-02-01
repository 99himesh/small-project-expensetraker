import classes from './CartButton.module.css';
import { uiActions } from '../store/uislice';
import { useDispatch, useSelector } from 'react-redux';
const CartButton = (props) => {
 const dispatch= useDispatch();
 
const cartQuantity=useSelector(state=>state.cart.totalQuantity)
const toggleHandler=()=>{
  dispatch(uiActions.toggle())
}



  return ( 
    <div>
    <button onClick={toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
    </div>
  
  );
};

export default CartButton;
