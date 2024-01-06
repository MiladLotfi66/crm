import Link from "next/link";
import { useRouter } from "next/router";

function Card({ customer }) {
    const router=useRouter();

  // console.log(customer._id);
  const deleteHandler = async () => {
    const res = await fetch(`/api/delete/${customer._id}`, {
      method: "DELETE",
    });
    const data=await res.json();
    console.log(data);
    if(data.status==="success"){
        router.reload();
    }
  };
  return (
    <div className="card">
      <div className="card__details">
        <p>
          {customer.name} {customer.lastName}
        </p>
        y<p>{customer.email}</p>
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
