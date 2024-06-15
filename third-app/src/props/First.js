
const virat={
         imgUrl:"https://kalingatv.com/wp-content/uploads/2017/04/Virat-Kohli-RCB.jpg",
         title:"Virat kohli",
        description:"Virat Kohli is an Indian international cricketer and former captain of the India national cricket team. He plays for Delhi in domestic cricket and Royal Challengers Bangalore "

}  
const abd={
    imgUrl:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/11/11/937051-ab-de-villiers.jpg",
    title:"Ab devilliers",
    description:"Abraham Benjamin de Villiers (born 17 February 1984) is a former South African international cricketer. De Villiers was named as the ICC ODI Player of the Year three times"
} 

const First=()=>{
    
    return <>

         <Cricketer img={virat.imgUrl} title={virat.title} desc={virat.description} />  
         <Cricketer img={abd.imgUrl} title={abd.title} desc={abd.description} />
    
    </>
    


}
// Props are arguments passed into React components. Props are passed to components via HTML attributes. props stands for properties.

const Cricketer=(props)=>{
    return(
        <div className="container-fluid card-shadow">
            <img src={props.img} style={{height:400,width:600}}></img>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    )
}


export default First;




