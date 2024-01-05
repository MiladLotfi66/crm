import FormInput from "../element/formInput"
import ItemList from "./itemList"



function Form({form , setForm}) {

const changeHandler=(e)=>{
const {name , value}=e.target;
setForm({...form , [name]:value})
};
    return (
    <div>
        <FormInput name="name" label="name" value={form.value} type="text" onChange={(e)=>changeHandler(e)}/>
        <FormInput name="lastName" label="Last name" value={form.lastName} type="text" onChange={(e)=>changeHandler(e)}/>
        <FormInput name="email" label="Email" value={form.email} type="text" onChange={(e)=>changeHandler(e)}/>
        <FormInput name="phone" label="Phone" value={form.phone} type="text" onChange={(e)=>changeHandler(e)}/>
        <FormInput name="address" label="Address" value={form.address} type="text" onChange={(e)=>changeHandler(e)}/>
        <FormInput name="postalCode" label="Postal code" value={form.postalCode} type="text" onChange={(e)=>changeHandler(e)}/>
        <FormInput name="date" label="Date" value={form.date} type="date" onChange={(e)=>changeHandler(e)}/>
      <ItemList form={form} setForm={setForm}/>
    </div>
  )
}

export default Form
