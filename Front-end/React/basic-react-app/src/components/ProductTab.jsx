import Product from "./Product.jsx";


function ProductTab(){

    // let options =[<li>"hi"</li>,<li>"du"</li>,<li>"fa"</li>]
    let options =["hi","du","fa"]
    // let options2 ={a:"hi-tech",b:"durable",c:"fast"}
    return(  
        <>
            <Product tittle="phone"  price={5000} features={options} features2={{a:"hi-tech",b:"durable",c:"fast"}}/>
            <Product tittle="tablet" price={40000} features={options} features2={{a:"hi-tech"}} />
            <Product tittle="pen" features={options} features2={{c:"fast"}}/>
        </>
    );
}

export default ProductTab;