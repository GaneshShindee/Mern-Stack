import { useState } from "react";

function Counter(){

    let[count,setCount]=useState(0);
    function incCount(){
        setCount(count+1);
        console.log(count);
    }
    return (
        <>  
            <button onClick={incCount}>Count {count}</button>
        </>
    );
}

export default Counter;