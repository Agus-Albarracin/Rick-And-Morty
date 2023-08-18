import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';
import { useState, useEffect } from 'react';
import {  useDispatch, useSelector } from "react-redux";
import basura from '../../../public/basura.png'
import like from "../../../public/like.png"
import dislike from "../../../public/dislike.png"



function Card(props) {
const { id, name, status, species, gender, origin, image, onClose} = props;
const dispatch = useDispatch();

const [isFav, setIsFav] = useState(false);
const { myFav } = useSelector((s) => s);

const  handleFavorite = () => {

if(isFav){ 
           setIsFav(false);
           dispatch(removeFav(id));}
else{
           setIsFav(true);
          dispatch(addFav(props)); }
}


useEffect(() => {
   myFav.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [myFav]);

return (
<div className={styles.boxesContainer}>
<div className={styles.cardBox}>
<div className={styles.card}>
     
<div className={styles.front}>

               <div className={styles.img}>
               <img className={styles.fotitos} src={props.image} alt={props.name} />
               </div>

</div>
{/* div front  */}

<div className={styles.back}>
                <div className={styles.buttons} onClick={handleFavorite}>
                {isFav?
                 <img src={like} className={styles.likes}/>
                 :
                 <img src={dislike}  className={styles.dislikes}/>
                 }

                 {/* /<div className={styles.divButtonCont}>
                <button className={styles.buttonX} onClick={() => props.onClose(props.id)}> X </button>
                </div>  */}

                {
                 location.pathname !== "/favorites" && <img src={basura} className={styles.buttonX} onClick={() => props.onClose(props.id)} />
                }
                </div>
                <Link to={`/detail/${props.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}} >
               <div className={styles.divDataNameCont}>
               <h2>{props.name}</h2>
               </div>
               <div className={styles.divDatasCont}>
               <h2>{props.species}</h2>
               <h2>{props.gender}</h2>
               
               </div>
               </Link> 
</div>
{/* div back  */}
 
    

</div>
{/* div card */}
</div>
{/*div cardBox */}


</div>
// /*div BoxesContainer */ 
);}

// const mapDispatchToProps = (dispatch) => {
//    return {
//       addFav: (character) => {dispatch(addFav(character))},
      
//       removeFav: (id) => {dispatch(removeFav(id))}
//    }
// };

// const mapStateToProps = (state) =>{
//    return{
//       myFav: state.myFav
//    }    
// }
export default Card;
// export default connect(mapStateToProps, mapDispatchToProps)(Card);


