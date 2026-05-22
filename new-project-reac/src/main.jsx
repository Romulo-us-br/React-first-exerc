import { createRoot } from 'react-dom/client'
import { Product } from './components/Products/Product.jsx'

createRoot(document.getElementById('root')).render(
  <div className="App">
    <h1>My Shop</h1>
    
    <Product
      title={'Peperoni Pizza'}
      price={100}
    />

    <Product
      title={'Chocolate Cake'}
      price={30}
    />
    <Product
      title={'Water'}
    />
  </div>

);
