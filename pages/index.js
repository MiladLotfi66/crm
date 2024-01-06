import connectDb from "../utils/connectDB";
import Customer from "../models/Customer";
import Customers from "../components/template/Customers";

export default function Home({customers}) {
  return (
 <div>
<p>index page</p>
<Customers customers={customers}/>
 </div>
  )
}
export async function getServerSideProps() {
  try {
     await connectDb();
     const customers= await Customer.find();
     return{
      props:{
        customers:JSON.parse(JSON.stringify(customers))
      }
     }
  } catch (err) {
    return{
      notFound:true,
    }
  }
  
}