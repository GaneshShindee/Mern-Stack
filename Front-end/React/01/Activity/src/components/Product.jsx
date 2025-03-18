import "./Product.css"
import Price from "./Price";

function Product({tittle,idx}){
    let oldPrices=["2000","3000","4000","5000"];
    let newPrices=["1000","1500","2000","2000"];
    let description =[["8000 DPI","Programmable buttons"],
        ["Intuitive surface","Intuitive surface"],
        ["intivtive surface","Intuitive surface"],
        ["mahesh","Intuitive surface"]]
    return(
        <div className="product" >
            <h4>{tittle}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    )
}
export default Product;