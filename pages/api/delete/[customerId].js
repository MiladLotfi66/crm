import connectDb from "../../../utils/connectDB";
import Customer from "../../../models/Customer";

export default async function Handler(req, res) {
  try {
    await connectDb();
  } catch (err) {
    console.log(err.message);
    res.status(500).json({status:"failed",message:"conect to db failed"})
  }
  if (req.method === "DELETE") {
    const id=req.query.customerId;
try {
    await Customer.deleteOne({_id:id})
    res.status(200).json({status:"success",message:"delete customer success"})
} catch (err) {
    console.log(err.message);
    res.status(500).json({status:"filed",message:"delete customer filed"})
    
}
  }
}
