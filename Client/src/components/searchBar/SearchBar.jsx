import { useState } from 'react';
import style from './Search.module.css';

export default function SearchBar(props) {

const [characters, setCharacters] = useState('');
const handleChange = e => {
   const {value} = e.target;
   setCharacters(value);
}



   return (
      <div className={style.container}>

         
         <input className={style.inputCont} 
                
                type='search' 
                name='search'
                  id='search'
                  onChange={handleChange}
                  // onkeyup ={() => props.onSearch(characters)}
                 
            
         />
         
          
         <button className={style.buttonAgre} onClick={() => props.onSearch(characters)} >Agregar</button>
      </div>
      
   );
}
