import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

const Recipe = () => {

  const [details, setdetails] = React.useState({})
  const [activetab, setactivetab] = React.useState('instructions');
  let params=useParams();

  const fetchdetails= async ()=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=56ad645331944ae5a6a1d5e76ffff578`);
    const detaildata = await data.json();
    
    setdetails(detaildata);
   
  }
  useEffect(()=>{
    fetchdetails();
  },[params.name])


  return (
    <Detailwrapper>
    <div>
      <h2>{details.title}</h2>
      <img src={details.image} alt="" />
    </div>
    <Info>
      <Button className={activetab==='instructions'?"active":""}
       onClick={()=>setactivetab("instructions")}>Instructions</Button>
      <Button className={activetab==='ingridients'?"active":""}
      onClick={()=>setactivetab("ingridients")}>Ingridients</Button>
      {activetab==='instructions' && (
        <div>
        <h3  dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
      </div>
      )}
      {activetab==='ingridients' && (
        <ol>
       {details.extendedIngredients.map((ingridient)=>(
        <li key= {ingridient.id}>{ingridient.original}</li>
       ))}
      </ol>
      )}
    
    </Info>
    </Detailwrapper>
  )
}

const Detailwrapper=styled.div`
margin-bottom: 5rem;
  margin-top: 6rem;
  display: flex;
  margin-left:20px;
.active{
  background-color:hwb(0 15% 83%);
  color: white;
}
h2{
  margin-bottom:1.5rem;
font-size:15px;

}
h3{
  
font-size:12px;

}
img{
  max-width:250px;
}
li{
  font-size:1rem;
  line-height:2rem;

}

ul{
  margin-top:1.5rem;
}
`;
const Button=styled.button`
padding:1rem 2rem;
color:#313131;
font-size:15px;
background:white;
border:2px solid black;
margin-right:2rem;
fount-weight:800;

`;
const Info=styled.div`
margin-left:10rem;
`;
export default Recipe
