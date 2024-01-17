import React, { useEffect, useState } from 'react'
import { useParams,NavLink } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addCart } from '../redux/action/action/index.js'
import Lottie from 'lottie-react'
import Productani from '../animation/Productani.json'
import '../pagecss/Productdetail.css'
import { MdCurrencyRupee } from "react-icons/md";
import Productnav from '../Pages/Productnav.js'
import axios from '../api/Baseurl.js'

const Productdetails = () => {

  const dispatch = useDispatch();
  const addProduct =(product) =>{
    dispatch(addCart(product));
  }

  const {id} = useParams();

  const [product,setProduct] = useState([]);

  const [loding,setLoading] = useState(false);


  useEffect(()=>{
    const fetchProduct= async () =>{
     
       try {
          const response = await axios.get('/products')
          console.log(response,"++++++++++");
          setProduct(response.data)
       } catch (err){
         return { status: false , message:"not found product"}
       }
    }
    fetchProduct()
  },[])

  const Loading = () =>{
    return(
        <Lottie className='lod' animationData={Productani} />
    )
  }

  const ShowProduct = () =>{
    return(
      <>
    
      <div className="product-main-box">
      <div className='detile-image'>
          <img src={product.image} alt="" />
      </div>
      <div className="product-detile">
      <h2>{product.title}</h2>
      <p className='pd'><MdCurrencyRupee className='rs-icon'/>{product.price}</p>
      <p>{product.description
}</p>
 <button>Shop Now</button>
 <NavLink to='/Cart'><button onClick={()=>addProduct(product)}>Add To Cart</button></NavLink>
      </div>  
      </div>
      
      </>
    )
  }

  return (
    <div>
        <Productnav />
      <div>
       {loding ? <Loading/> : <ShowProduct />}
      </div>
    </div>
  )
}

export default Productdetails