import "./Product.css";

function Product({tittle,price=10,features,features2="mahesh"}){
    // console.log(features)
        let isDiscount=price>30000;
        let styles={backgroundColor: isDiscount ? "pink":""};
        return (<div className="product" style={styles} >
            <h2>{tittle}</h2>
            <p>Price : {price}</p>
            <p>{features}</p>
            <p>{features2.a}</p>
            {isDiscount &&  <p>Discount off 5%</p> }
        </div>
)
    
};  

export default Product;