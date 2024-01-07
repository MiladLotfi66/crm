import { useState } from "react";
import Form from "../module/Form";
import { useRouter } from "next/router";
import moment from "moment";

function CustomerEditPage({data,id}) {
const date = data.date ? moment(data.date).utc().format("YYYY-MM-DD"):"";
const router=useRouter();

const cancelHandler=()=>{
router.push("/")
}

const saveHandler = async() => {
  const res = await fetch(`/api/edit/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.status==="success") router.push("/");
};


  const [form , setForm]=useState({
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone || "",
    address: data.address || "",
    postalCode: data.postalCode || "",
    data: date,
    products:data.products || "",
  })

  return (
    <div className="customer-page">
      <h4>edit customer</h4>  
      <Form form={form} setForm={setForm}/>
      <div className="customer-page__buttons">
        <button className="first" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="second" onClick={saveHandler}>
          edit
        </button>
      </div>
    </div>
  )
}

export default CustomerEditPage;
