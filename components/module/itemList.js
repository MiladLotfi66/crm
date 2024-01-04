import FormInput from "../element/formInput";
function ItemList({ form, setForm }) {
const { products } = form ;

const changeHandler=(e,index)=>{
    const {name,value}= e.target;
    const newProducts=[...products];
    newProducts[index][name]=value;
    setForm({...form , products:newProducts})

}
const deleteHandler=(index)=>{
    const newProducts=[...products];
    newProducts.splice(index,1);
    setForm({...form , products:newProducts})


}
const addHandler=()=>{
setForm({
    ...form,products:[...products,{name:""  , price:"" , qty:""}],
})
console.log(form);
}
    return (
    <div className="item-list">
      <p>Purchased Products</p>
      {
        products.map((product ,index)=>(
            <div key={index} className="form-input__list">

                <FormInput name="name" label="product name" type="text" value={product.name} onChange={(e)=>changeHandler(e , index)}/>
                <div>
                <FormInput name="price" label="Price" type="text" value={product.price} onChange={(e)=>changeHandler(e , index)}/>
                <FormInput name="qty" label="Qty" type="number" value={product.qty} onChange={(e)=>changeHandler(e , index)}/>
                </div>
           <button onClick={()=>deleteHandler(index)}>delete</button>
                </div>
        ))
      }
    <button onClick={addHandler}>Add item</button>

    </div>
  );
}

export default ItemList;
