import React from "react";


const obj={
     img:{
        height:"400px",
        width:"600px"
         },
     
     heading:{

        fontSize:"60px",
        color:"green"
      }

}


const Imagecomponent=()=>{

    return(
        <>
          {/* <img style={{height:400, width:600}} src="https://wallpapercave.com/wp/wp3982615.jpg" alt="" />  */}
          <img style={obj.img} src="https://wallpapercave.com/wp/wp3982615.jpg" alt="" />
        </>
    )
}

const Title=()=>{
    return(
        <>
          {/* <h1 style={{fontSize:60,color:"blue"}}>My dream home</h1> */}
          <h1 style={obj.heading}>My dream home</h1>
        </>
    )
}
const Movie=()=>{
    return(
        <>
          <Imagecomponent/>
          {/* <Title/>  */}
        </>
    )
}

const Cascading=()=>{
    return(
        <div className="container-fluid p-5 m-5">
          <Movie/>
          <Movie/>
          <Movie/>
          <Movie/>
        </div>
    )
}

export default Cascading