import FormInput from "../element/formInput";
function ItemList({ form, setForm }) {
const { products } = form ;

const changeHandler=()=>{}
const deleteHandler=()=>{}
const addHandler=()=>{
setForm({
    ...form,products:[...products,{name:""  , price:"" , qty:""}],
})
}
    return (
    <div className="item-list">
      <p>Purchased Products</p>
      {
        products.map((product)=>(
            <div className="form-input__list">

                <FormInput name="name" label="product name" type="text" value={product.name} onChange={changeHandler}/>
                <div>
                <FormInput name="price" label="Price" type="text" value={product.price} onChange={changeHandler}/>
                <FormInput name="qty" label="Qty" type="number" value={product.qty} onChange={changeHandler}/>
                </div>
           <button onClick={deleteHandler}>delete</button>
                </div>
        ))
      }
    <button onClick={addHandler}>Add item</button>

    </div>
  );
}

export default ItemList;
