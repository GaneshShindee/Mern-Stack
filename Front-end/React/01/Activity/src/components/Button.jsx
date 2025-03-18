function doSomething(){
    console.log("Hello World!")

}

function printBye(){
    console.log("Bye")
}

function dblClick(){
    console.log("Double clicked")
}

function eventHandler(event){
    console.log(event)
}

export default function Button(){
    return (
        <div>
            <button onClick={eventHandler}>Click me</button>
            <p onMouseOver={printBye}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ut velit odio soluta sint ducimus sit nisi, ea vel architecto corrupti a dignissimos quod, officia magni dicta qui facilis voluptas?
            Quos vitae, omnis vel veniam repudiandae, placeat sapiente laborum odio quisquam numquam praesentium exercitationem assumenda cum rerum rem nisi accusamus, dolore obcaecati delectus dolor sint culpa quae ad? Pariatur, suscipit!</p>
        </div>
    )
}