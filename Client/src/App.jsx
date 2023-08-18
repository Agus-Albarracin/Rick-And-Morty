import './App.css';
import Cards from './components/cards/Cards.jsx';
import NavBar from './components/navBar/navBar';
import SearchBar from './components/searchBar/SearchBar.jsx';
import characters from './data.jsx';
import Favorites from './components/Favorites/Favs';
import './App.jsx';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/about';
import Detail from './components/Detail/detail';
import Login from './components/Login/login';
import Error from './components/Error/error';

function App() {


const navigate = useNavigate();
const [access, setAccess] = useState(false);
// const EMAIL = 'agus38b@gmail.com';
// const PASSWORD = 'cualquierpassword';



   const [characters, setCharacters] = useState([]);

   const location = useLocation();


   const URL = 'http://localhost:3001/rickandmorty/login/';

const login = async (userData)  => {
      try{
         const { email, password } = userData;
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access && navigate('/home');

      } catch (error) {

          (alert(error.message))
      }
}

   // function login(inputs) {
   //    if (inputs.password === PASSWORD && inputs.email === EMAIL) {
   //       setAccess(true);
   //       navigate('/home');
   //    }
   // }
 
   function logout() {
       
         setAccess(false);
         navigate('/');
      
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

const onSearch  = async (id)=> {

      try{ const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
   
                  if (data.name){  
   
                       let rptido =  characters.find((char) => char.id === data.id);
   
                       if(rptido)  {  alert('El personaje está invocado!'); } 
            
                       else {  setCharacters((allChars) => [...allChars, data]); }
                  }
                  console.log({data})

      } catch (error) {
         (alert('¡No hay personajes con este ID!'))
   
      }
}


const onClose = (id) =>{
      setCharacters(characters.filter((char) => char.id !== id ));
      // console.log(onClose)
  };



   return (
      <div class='App'>
         
         {
            location.pathname === "/" ? null :  
            // <section class="NavBar__App">
            <NavBar  logout={logout} onSearch={onSearch}/>
            // </section>
         }
        
         <Routes>
                <Route path="/" element={<Login login={login}/>}></Route>
                <Route path="/home"
                 element={
                          <section class='Cards__App'>
                              <Cards onClose={onClose} characters={characters} />
                          </section>
                }> </Route>
                <Route path="/about" element={<About />}></Route>

                <Route path="/detail/:id" element={<Detail />}></Route> 
                
                <Route path="/favorites" element={<Favorites />}></Route>
                
                  <Route path="*" element={<Error />}> </Route>
              
                
         </Routes>
        
         
         
      </div>
   );
}

export default App;
