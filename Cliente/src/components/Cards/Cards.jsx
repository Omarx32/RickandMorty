/* eslint-disable react/prop-types */
import style from './Cards.module.css'
import Card from './Card/Card'

const Cards = ({ characters, onClose }) => {
    
    return <>
        <div className={style.container}>{
            characters.map(card => 
                <Card
                    key={card.id}
                    name={card.name}
                    status={card.status}
                    species={card.species}
                    gender={card.gender}
                    origin={card.origin.name}
                    image={card.image}
                    onClose={onClose}
                    id={card.id}
                ></Card>
            )}
        </div>
    
    </>
}; 

export default Cards