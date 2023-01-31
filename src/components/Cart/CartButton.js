import classes from './CartButton.module.css';
import { uiActions } from '../store/uislice';
import { useDispatch } from 'react-redux';
const CartButton = (props) => {
 const dispatch= useDispatch();

const toggleHandler=()=>{
  dispatch(uiActions.toggle())
}



  return ( 
    <div>
    <button onClick={toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
    </div>
  
  );
};

export default CartButton;
