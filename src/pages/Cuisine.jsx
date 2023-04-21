import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components';
//import { motion } from 'framer-motion'
import { useParams ,Link } from 'react-router-dom'


function Cuisine(){

  const [cuisine, setcuisine] = React.useState([])
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=f7f19bf6a69f4b9b8a8777fb730b33d4&cuisine=${name}&number=12`
    );
    const recipes = await data.json();
    setcuisine(recipes.results)
   
  };
  useEffect(() => {
    getCuisine(params.type);
    
  }, [params.type]);

  return (
    <Grid>
    
      {cuisine.map((item) => {
        return (
          <Link to={'/recipe/'+item.id}>
          <Card key={item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </Card>
          </Link>
        );
      })}
    </Grid>
    
  )
}


const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
grid-grap: 3rem;
gap:20px;
align-items:center;
`;
const Card = styled.div`
img {
width: 100%;
border-radius: 2rem;

}
a {
text-decoration: none;
}
h4 {
text-align: center;
padding: 1rem;

}`;
export default Cuisine
