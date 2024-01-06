import Card from "../module/Card";

function Customers({ customers }) {

  return (
    <div>
      {customers.map((customer) => (

          <Card key={customer._id} customer={customer} />
        //   console.log("customer");
          
      )
    
    )}
    </div>
  );
}

export default Customers;
