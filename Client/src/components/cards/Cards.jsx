import Card from '../card/Card';
import styles from '../cards/cards.css'


export default function Cards( {characters, onClose} ) {
 
   return (
   <div  className="div__deCards"> 

 {characters.map(character =>(
    <Card
    key={character.id}
    id={character.id}
    name={character.name}
    status={character.status}
    species={character.species}
    gender={character.gender}
    originName={character.origin?.name}
    image={character.image}
    onClose={onClose}
     />
 ))
 }

   </div>
   );
}

