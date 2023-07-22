import style from './NavigateBar.module.css'
import SearchBar from '../SearchBar/SearchBar'

const NavigateBar = (props) => {
    return <>
       
  
 
        <div className={style.nav}>
            <SearchBar onSearch={props.onSearch}/>
    
        </div>
      
    </>
};

export default NavigateBar