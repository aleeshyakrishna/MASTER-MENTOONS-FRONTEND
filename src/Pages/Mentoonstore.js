import React, { useState,useEffect } from 'react'
import '../pagecss/Mentoonstore.css'
import Productnav from '../Pages/Productnav.js'
import { MdCurrencyRupee } from "react-icons/md";
import { useNavigate,NavLink } from 'react-router-dom';
import axios from '../api/Baseurl.js'

const Mentoonstore = (props) => {


const [items,setItems] = useState([]);
const [loading,setLoading] = useState(false);
let componentMounted = true;

const navigate = useNavigate();


useEffect(()=>{
  const fetchProduct= async () =>{
   
     try {
        const response = await axios.get('/products')
        console.log(response,"++++++++++");
        setItems(response.data.prod)
     } catch (err){
       return { status: false , message:"not found product"}
     }
  }
  fetchProduct()
},[])



  const Loading = () =>{
    return (
      <>
      <p className='loading'>Loading.....</p>
      </>
    )
  }

    //  const  filterProduct = (cat)=>{
    //     const updateitems =items.filter((x)=>x.category === cat) ;
    //     setFliter(updateitems)
    //  }
  const ShowPro = () =>{
    return(
      <div className="categorys-box">
      <button >All</button>
      <button >E-Comics</button>
      <button >Audio-Comics</button>
      <button >WorkShops</button>
      <button >Podcast</button>
      <hr></hr>
     </div>
    
 
    )
  }
  return (
    <div>
      <Productnav />
        <div className="main-mentoons" >
        
        </div>
      <div className="setlading">
        {loading ? <Loading /> : <ShowPro />}
      </div>

       <div className="show-product">
       {items.map((item)=>{
            return<div className='product-main' onClick={()=>navigate(`/Productdetails/${item.id}`)}>
              <div className="dispay-flex">
              <div className='product-box' key={item.id}>
              <img src={item.image} alt="" />
              <h2>{item.productName}</h2>
              <p><MdCurrencyRupee />{item.price}</p>
              {item?.count > 0 ?   <button className="addtocart-btn">
                    Go To Cart
                  </button>:
                  <button to= {`/Productdetails/${item.id}`} className="addtocart-btn">
                  Add To Cart
                </button>
                
                }
            </div>
            </div>
            </div>
            
          })}
       </div>
         
    </div>
  )
}

export default Mentoonstore