import React, { useEffect } from 'react'
import styled from 'styled-components';
import {Splide,SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';

import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom'


const Popular = () => {

  const [popular, setpopular] = React.useState([])

  useEffect(() => {
    getpopular();
    
  }, []);



  const getpopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setpopular (JSON.parse(check));
      } else {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=6ffaa202ab0e4997aee48097b5e01ec7&number=10`
    );

    const data = await api.json();
    localStorage.setItem("popular", JSON.stringify(data.recipes));
    setpopular(data.recipes)
  }
  }


  
  return (
    <div>
      <Wrapper>
        <h3>Popular Food Iteams</h3>
        <Splide options={{
          perPage:4,
          gap:"5rem",
          drag:"free"

        }}>
        {popular.map((recipe) => {
          return (
        <SplideSlide key={recipe.id}>
          <Card>
          <Link to={'/recipe/'+recipe.id}>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
              <Gradient />
              </Link>
          </Card>
        </SplideSlide>
          );
        })}
        </Splide>
      </Wrapper>

    </div>
  )
}


const Wrapper = styled.div`
margin: 4rem 1rem;
`;
const Card = styled.div`
border-radius:2rem;
min-height:15rem;
overflow:hidden;
position:relative;
img{
  border-radius:2rem ;
  max-height:25rem;
  position:absolute;
  left:0;
  width:100%;
  height:100%;
  object-fit:cover;

}
p{
  position: absolute;
z-index: 10;
left: 50%;
bottom: 0%;
transform: translate( -50%, 0%);
color: white;
width: 100%;
text-align: center;
font-weight: 600;
font-size: 1rem;
height: 40%;
display: flex;
justify-content: center;
align-items: center;
}

`;

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;


export default Popular
