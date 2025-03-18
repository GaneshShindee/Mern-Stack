import Product from "./Product";

function ProductTab(){

    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center"
    }
    return (
        <div style={styles}>
            <Product tittle="phone" price={30000} idx={0}></Product>
            <Product tittle="Laptop" price={40000} idx={1}></Product>
            <Product tittle="Pen" price={40000} idx={2}></Product>
            <Product tittle="Pen" price={40000} idx={3}></Product>
        </div>
    );
}
export default ProductTab;