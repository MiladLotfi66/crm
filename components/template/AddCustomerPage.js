import { useState } from "react";
import Form from "../module/Form"

function AddCustomerPage() {
    const [form , setForm]=useState({
        name:"",
        lastName:"",
        email:"",
        phone:"",
        address:"",
        postalCode:"",
        data:"",
        products:[],
    })
    const cancelHandler=()=>{

    }
    const saveHandler=()=>{

    }
    

  return (
    <div className="customer-page">
      <h4>Add New customer</h4>
      <Form form={form} setForm={setForm}/>
      <div className="customer-page__buttons"> 
      <button className="first" onClick={cancelHandler}>Cancel</button>
      <button className="second" onClick={saveHandler}>Save</button>
      </div>
    </div>
  )
}

export default AddCustomerPage
