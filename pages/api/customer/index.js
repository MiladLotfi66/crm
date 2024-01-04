import Customer from "../../../models/Customer";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
    console.log("conected to db");
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "failed", message: "error in connecting to db" });
    return;
  }
  if(req.method==="POST"){
    
    const data=req.body.data;
    if(!data.name || !data.lastName || !data.email ) return res.status(400).json({status:"failed" , message :"invalid data"})

    try {
        const costumer=await Customer.create(data);
        res.status(201).json({status:"success" , message:"Data Created" ,data:costumer})
    } catch (err) {
        console.log(err);
        res.status(500).json({status:"failed" , message:"saved data in server failed"})
        
    }
  }
}
