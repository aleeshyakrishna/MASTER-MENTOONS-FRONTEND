import React, { useState } from "react";
import "../pagecss/Productitems.css";
import { useFormik } from "formik";
const Productitems = ({onClose}) => {
  // const [video,setVideo] =useState("");
  const [image,setImage] = useState("")
  const handleChange = (event) =>{
    console.log(event,"this is form eventsssssssssssss");
    let files = event.target.files[0];
    setImage(files)
    console.log(files,"files coming............");
    
   
  }


  const formik = useFormik({
    initialValues: {
      productName: "",
      productCategory: "",
      ageCategory: "",
      price: "",
      free: "",
      image: "",
      video: "",
    },

    onSubmit:async (values)=>{
      // setLoding(true)
      const body = {
  
          productName : values.productName,
          productCategory : values.productCategory,
          ageCategory:values.ageCategory,
          price : values.price,
          free :values.free,
          
  
    }
    console.log(body,";;;;;;;;;;");
    console.log(image,"lllllllllllllllllllllllllllllll");

  }
  });


 
  return (
    <div className="main-item-adding">
      <h1> Add your Product item </h1>
      <form onSubmit={formik.handleSubmit} className="itemsadding-form" enctype="multipart/form-data" >
        <input
          type="text"
          placeholder="Enter Product Name"
          id="productName"
          name="productName"
          value={formik.values.productName}
          onChange={formik.handleChange}
        />
        <br></br>
        <input
          type="text"
          id="productDescription"
          name="productDescription"
          placeholder="Enter Product Description"
          value={formik.values.productDescription}
          onChange={formik.handleChange}
        />
<br></br>
         <div className="age-cat">
          <label>Category</label>
          <select id="ageCategory" 
          name="ageCategory"
          value={formik.values.ageCategory}
          onChange={formik.handleChange}>

            <option value="Comic">Comic</option>
            <option value="AudioComic">Audio-Comic</option>
            <option value="Podcast">Podcast</option>
            <option value="Workshop">Workshop</option>
  
          </select>
        </div>
        <br></br>
        <div className="age-cat">
          <label>Age Category</label>
          <select id="ageCategory" 
          name="ageCategory"
          value={formik.values.ageCategory}
          onChange={formik.handleChange}>

            <option value="6-10">6-10</option>
            <option value="10-12">10-12</option>
            <option value="13-17">13-17</option>
            <option value="17-19">17-19</option>
            <option value="20+">20+</option>
            <option value="parentsorcarers">parents or carers</option>
          </select>
        </div>

        <br></br>
        {/* <div className="video">
          <label>Video </label>
          <input type="file"
         
          id="video"
          name="video"
          onChange={handleChange} />
        </div>

        <br></br> */}

        {/* <div className="pdf">
          <label>Pdf </label>
          <input type="file"
          value="pdf"
          id="pdf" 
           name="pdf" 
           onChange={handleChange} 
            />
        </div> */}

        <div className="pdf">
          <label>pdf </label>
          <input type="file"
         accept=".pdf"
          id="image" 
           name="image" 
           onChange={handleChange} 
            />
        </div>

        <br></br>
        <input type="text"
        id="free" name="free"
         placeholder="free"
          value={formik.values.free}  onChange={formik.handleChange} />
        <br></br>
        <input
          type="text"
          id="price" name="price"
          placeholder="Enter Product Price"
          value={formik.values.price}
          onChange={formik.handleChange}
        />
        <button type="submit"
        onClick={onClose}
        > Submit</button>
      </form>
    </div>
  );
};

export default Productitems;
