import Product from "./Product.jsx";


function ProductTab(){

    // let featureoptions =[<li>"hi"</li>,<li>"du"</li>,<li>"fa"</li>]
    let featureoptions =["hi","du","fa"]
    let featureoption ={a:"hi-tecg",b:"durable",c:"fast"}
    return(  
        <>
            <Product tittle="phone"  price={50000} features={featureoptions}/>
            <Product tittle="tablet" price={40000} features={featureoptions} features2={featureoption}/>
            <Product tittle="pen" features={featureoptions} />
        </>
    );
}

export default ProductTab;