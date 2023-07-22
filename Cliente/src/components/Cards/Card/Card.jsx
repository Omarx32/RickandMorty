/* eslint-disable react/prop-types */
import style from './Card.module.css'


const Card = (props) => {
    const {
        id,
        name,
        status,
        species,
        gender,
        origin,
        image,
        onClose

    } = props

    return <>
        <div className={style.card}>
            <div className={style.imageBox}>
                <button className={style.btn} onClick={()=>onClose(id)}>x</button>
                <img className={style.img} src={image} alt=''/>
                <div className={style.name}>{name}</div>
                <div className={style.status}>{status}</div>
            </div>
            <div className={style.infoBox}>

                <div className={style.info}>
                    <div className={style.species}>{species}</div>
                    <div className={style.gender}>{gender}</div>
                    <div className={style.origin}>{origin}</div>
                </div>

            </div>
        </div>
    </>
};

export default Card