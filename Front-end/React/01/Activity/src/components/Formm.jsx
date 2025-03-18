function eventHandler(event){
    event.preventDefault();
    console.log("form was submitted")
}

function Formm(){
    return (<form onSubmit={eventHandler}>
        <input placeholder="write something"/>
        <button>submit</button>
    </form>
    );
}

export default Formm;