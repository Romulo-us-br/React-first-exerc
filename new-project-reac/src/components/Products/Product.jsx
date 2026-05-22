import './Products.scss';
import cn from 'classnames';

export const Product = ({ title, price = 0 }) => (
  // <div className={`Product ${price===0 ? 'Product__free': ' '}`}>
  <div className={cn('Product', { 
    'Product__free': price === 0 
    })}>

    <h2 className="Product__title"
    style={{
      color: price===0 ? 'green' : 'red',
      backgroundColor:'yellow',
    }}>
      {title}
    </h2>
    <p className="Product__price ">
      {`Price: ${price}R$ `}
      {price === 0 ?
        (
          <>
            <span>*</span>
            <span>*</span>
          </>
        ) : (
          <span> +</span>
        )}
      {/* {price>0 && <span>oi</span>} */}
    </p>
  </div>
);