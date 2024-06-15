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
    } ,

    {
        imgUrl:"https://www.mykhel.com/img/2023/03/dinesh-karthik-india-1680199163.jpg",
        title:"Dinesh karthik",
        description:"Krishnakumar Dinesh Karthik (born 1 June 1985) is an Indian professional cricketer and commentator who plays for the India national cricket team"
    } 



]


const Third=()=>{
    return <>

       {
        cricArr.map((eachObj)=>{
             const {imgUrl,title,description}=eachObj;    //this is called destructuring

             return <Cricketer img={imgUrl} title={title} desc={description}/>
        })
       }
    </>
}

const Cricketer=(props)=>{

        const {img,title,desc}=props; //destructuring
    return <>

       <div className="container-fluid card m-5">
            <img src={img} style={{height:400,width:600}}></img>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    
    </>
}

export default Third;

// cricArr.map((eachObj)=>{
//     return  <Cricketer img={eachObj.imgUrl} title={eachObj.title} desc={eachObj.description}/>
// })