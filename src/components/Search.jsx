import React from 'react'
import { FaSearch } from "react-icons/fa";
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom'

const Search = () => {

    const [input, setinput] = React.useState('')
    const navigate=useNavigate();

    const Submithandel = (e) => {
        e.preventDefault();
        navigate("/Searched/"+input)
    }
    return (
        <div>
            <FormStyle onSubmit={Submithandel}>
                <FaSearch></FaSearch>
                <input
                    onChange={(e) => setinput(e.target.value)}
                    type="text"
                    value={input}
                />
            </FormStyle>
        </div>
    )
}

const FormStyle = styled.form`
margin: 2rem 24rem;
position: relative;

input{
    border: none;
    background: black;
    font-size: 1em;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline:none;
    
}
svg {
  position: absolute;
  top: 40%;
  left: 5%;
  transform: translate (100%, -50%);
  color: white;
}
`

export default Search
