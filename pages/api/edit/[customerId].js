import connectDb from "../../../utils/connectDB";
import Customer from "../../../models/Customer";

export default async function Handler(req, res) {
  try {
    await connectDb();
  } catch (err) {
    console.log(err.message);
    res.status(500).json({status:"failed",message:"conect to db failed"})
  }
  if (req.method === "PATCH") {
    const id=req.query.customerId;
    const data=req.body.data;
try {
    const customer = await Customer.findOne({_id:id})
    customer.name=data.name;
    customer.lastName=data.lastName;
    customer.email=data.email;
    customer.phone=data.phone;
    customer.address=data.address;
    customer.postalCode=data.postalCode;
    customer.date=data.date;
    customer.products=data.products;
    customer.upadtedAt=Date.now();
    customer.Save();

    res.status(200).json({status:"success",message:"delete customer success"})
} catch (err) {
    console.log(err.message);
    res.status(500).json({status:"FILED",message:"delete customer FILED"})
    
}
  }
}
