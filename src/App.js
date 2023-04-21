
import Pages from './pages/Pages'
import Catagory from './components/Catagory'
import Search from './components/Search'
import './App.css';
import {BrowserRouter,Link} from 'react-router-dom'
import styled from 'styled-components'
import {GiKnifeFork} from 'react-icons/gi'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Nav>
      <GiKnifeFork className='icon'/>
      <Logo to={'/'}>Delecious</Logo>
    </Nav>
    <Search />
    <Catagory/>
     <Pages />
     </BrowserRouter>
     
    </div>
  );
}

const Logo=styled(Link)`
text-decoration:none;
font-size:1.5rem;
font-weight:400;
font-family:cursive;
color: #c2003d;
`
const Nav=styled.div`
padding:2rem 0rem;
display:flex;
justify-content:flex-start;
align-iteam:center;
`
export default App;
