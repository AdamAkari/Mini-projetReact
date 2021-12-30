import Product from './Product'
import '../style/productlist.css'
import {products} from '../Data/data'



function ProductList(){
    return(
        <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-title">Create and inspire. It's Adam </h1>
          <p className="pl-desc">
            Adam has done a creative portfolio that your work has been waiting for.
            Beautiful homes, stunning portfolio styles and  a whole lot more awaits
            inside.
          </p>
        </div>
        <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
      
    )
}
export default ProductList