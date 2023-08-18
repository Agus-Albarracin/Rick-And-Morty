import Card from "../card/Card";
import { connect } from "react-redux";
import styles from "../Favorites/favs.css"

const Favorites = ({myFavs}) => {
   return(
    
    <div className="div__Favorites">
        {
            myFavs.map(fav =>{
                return(
                    <Card
                    key={fav.id}
                    id={fav.id}
                    name={fav.name}
                    status={fav.status}
                    species={fav.species}
                    gender={fav.gender}
                    image={fav.image}
                    onClose={fav.onClose}
                    />
                )
            })
        }
    </div>
    
   )
}
const mapStateToProps = (state) =>{
    return{
        myFavs: state.myFav
    }
}
export default connect(mapStateToProps, null)(Favorites);


// el null solo se pone cuando se usa el dispatch (como segundo parametro)