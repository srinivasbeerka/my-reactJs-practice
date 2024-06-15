
const One=()=>{

    // const handler=(e,firstname)=>{
    //    console.log(e,"My name is srinivas",firstname);

    // }
    const handler=(e)=>{
        console.log(e,"My name is srinivas");
 
     }

    return(

        <div>

            <button className="btn btn-primary" onClick={handler}>Click me</button>
        </div>

        // <div>

        //     <button className="btn btn-primary" onClick={function(e){
        //         return handler(e,"virat")
        //     }}>Click me</button>
        // </div>

        // <div>

        //     <button className="btn btn-primary" onClick={(e)=>{
        //         return handler(e,"kohli")
        //     }}>Click me</button>
        // </div>
    )

}


export default One;