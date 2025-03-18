export default function Price({oldPrice,newPrice}){
    let oldstyles={
        textDecorationLine:"line-through",
    }

    let newstyles={
        fontWeight:"bold"
    }
    let styles={
        backgroundColor:"#e0c367",
        height:"3rem",
        borderBottomLeftRadius:"1rem",
        borderBottomRightRadius:"1rem"
    }
    
    return (
        <div style={styles}>
            <span style={oldstyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={newstyles}>{newPrice}</span>
        </div>
    )
}