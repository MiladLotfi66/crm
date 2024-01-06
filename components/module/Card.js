import Link from "next/link";

function Card( {customer} ) {
    // console.log(customer._id);
const deleteHandler=()=>{
    
}
  return (
    <div className="card">
      <div className="card__details">
        <p>
          {customer.name} {customer.lastName}
        </p>y
        <p>{customer.email}</p>
        <div className="card__buttons">
          <button onClick={deleteHandler}>delete</button>
          <Link href={`/edit/${customer._id}`}>edit</Link>
          <Link href={`/custumer/${customer._id}`}>details</Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
