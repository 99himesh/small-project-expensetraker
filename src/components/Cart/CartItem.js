import { useDispatch } from 'react-redux';
import { cartAction } from '../store/cartslice';
import classes from './CartItem.module.css';


const CartItem = (props) => {
  
  const dispatch=useDispatch();
  const { title, quantity, total, price ,id} = props.item;
 
  const addItemHandler=()=>{
    dispatch(cartAction.additemTocart({
      id,
      title,
      price
    }))
  };

  const removeHandler=(id)=>{
    debugger
    console.log(id);
    dispatch(cartAction.removeItemFromcart({id}))
  };




  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandler.bind(null,id)}>-</button>
          <button onClick={addItemHandler} >+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
