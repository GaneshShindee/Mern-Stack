import "./Product.css";

function Product({tittle,price=1,features,features2="mahesh"}){
    // console.log(features)
    // if(price>30000){
        return (<div className="product" >
            <h2>{tittle}</h2>
            <p>Price : {price}</p>
            {/* <h5>Product description</h5> */}
            {/* <p>{features.map((feature)=> <li>{feature}</li>)}</p> */}
            {/* <p>{features2.a}</p> */}
            {/* <p>Discount of 5%   </p> */}
            {price>30000 &&  <p>Discount off 5%</p> }
        </div>
)
    // }
//     else{
//         return (<div className="product" >
//             <h2>{tittle}</h2>
//             <p>Price : {price}</p>
//             <h5>Product description</h5>
//             <p>{features.map((feature)=> <li>{feature}</li>)}</p>
//             <p>{features2.a}</p>
//         </div>
// )
//     }
    
};  

export default Product;