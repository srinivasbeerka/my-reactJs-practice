//by using array

const cricArr=[

    {
        imgUrl:"https://kalingatv.com/wp-content/uploads/2017/04/Virat-Kohli-RCB.jpg",
        title:"Virat kohli",
       description:"Virat Kohli is an Indian international cricketer and former captain of the India national cricket team. He plays for Delhi in domestic cricket and Royal Challengers Bangalore "

     },

    {
        imgUrl:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/11/11/937051-ab-de-villiers.jpg",
        title:"Ab devilliers",
        description:"Abraham Benjamin de Villiers (born 17 February 1984) is a former South African international cricketer. De Villiers was named as the ICC ODI Player of the Year three times"
    } ,

    {
        imgUrl:"https://sm.mashable.com/t/mashable_in/photo/default/untitled-design-20240520-180347-0000_gwq1.700.jpg",
        title:"Chirs Gayle",
        description:"Christopher Henry Gayle OD (born 21 September 1979) is a Jamaican cricketer who has played international cricket for the West Indies from 1999 to 2021. Nicknamed The Universe Boss"
    } 



]

const Second=()=>{
    
    return <>
           <Cricketer img={cricArr[0].imgUrl} title={cricArr[0].title} desc={cricArr[0].description} />
           <Cricketer img={cricArr[1].imgUrl} title={cricArr[1].title} desc={cricArr[1].description} />
           <Cricketer img={cricArr[2].imgUrl} title={cricArr[2].title} desc={cricArr[2].description} />
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

export default Second;