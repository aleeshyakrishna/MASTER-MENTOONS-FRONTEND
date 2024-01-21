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
import { object } from 'yup'


const Productdetails = () => {
  

  // const dispatch = useDispatch();
  // const addProduct =(product) =>{
  //   dispatch(addCart(product));
  // }

  
  const [product,setProduct] = useState([]);
  
  const [loding,setLoading] = useState(false);

  const {id} = useParams();
  console.log(id,"999999999999999999999999999999");
  useEffect(()=>{
    const fetchProduct= async (id) =>{

       try {
          const response = await axios.get(`/prodView/${id}`)
          console.log(response,"....----.......>");
          setProduct(response.data.data.result)
          console.log(response);
       } catch (err){
         return { status: false , message:"not found product"}
       }
    }
    fetchProduct(id)
  },[])
  !Object.keys(product).length > 0 && <div>ppp</div>
  const ShowProduct = () =>{
    return(
      <>
    
 <div className="product-main-box" >
      <div className='detile-image'key={{id}}>
          <img src={product.thumbnail} alt="" />
      </div>
      <div className="product-detile">
      <h2>{product?.productName}</h2>
      <br></br>
      <p className='pd'><MdCurrencyRupee className='rs-icon'/>{product.price}</p>
      <p>{product.productDescription}</p>
 <button>BUY</button>
 <NavLink to='/Cart'><button >Add To Cart</button></NavLink>
      </div>  
      </div>

      
      </>
    )
  }

  return (
    <div>
        <Productnav />
      <div>
     <ShowProduct />
      </div>
    </div>
  )
}

export default Productdetails