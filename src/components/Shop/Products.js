import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
 const DUMMY_PRODUCT=
 [
 
 {
  id:'p2',
  price:5,
  title:"second",
  description:"second book wrote"
 },
 {
  id:'p1',
  price:6,
  title:"first",
  description:"first book wrote"
 }
 ]


  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
    
      <ul>

        {DUMMY_PRODUCT.map((products)=>(
             <ProductItem
             key={products.key}
             id={products.id}
             title={products.title}
             price={products.price}
             description={products.description}
           />
        ))
        }
           
        {/* {DUMMY_PRODUCT.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))} */}
      
    
      </ul>
    </section>
  );
};

export default Products;
