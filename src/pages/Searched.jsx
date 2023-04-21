import React from 'react'
import { useParams ,Link} from 'react-router-dom'
import { useEffect } from 'react'
import styled from 'styled-components';


const Searched = () => {

  const [searchrecipi, setsearchrecipi] = React.useState([])
  let params=useParams();

  const getsearch = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=f7f19bf6a69f4b9b8a8777fb730b33d4&query=${name}&number=12`
    );
   
    const recipes = await data.json();
    setsearchrecipi(recipes.results)
   
  };
  useEffect(() => {
    getsearch(params.search);
  }, [params.search]);

  
  return (
    <Grid>
     {searchrecipi.map((item)=>{
      return (
      <Card key={item.id}>
      <Link to={'/recipe/'+item.id}>
      <img src={item.image} alt={item.title} />
      <h4>{item.title}</h4>
      </Link>
      </Card>
     )})}
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
export default Searched
