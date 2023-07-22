// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import './App.css';
import NavigateBar from './components/NavigateBar/NavigateBar/NavigateBar.jsx';
import Cards from './components/Cards/Cards';
import axios from "axios"

// const example = {
//     id: 1,
//     name: 'Morty Smith',
//     species: 'Human',
//     status: 'Rich',
//     gender: 'Male',
//     origin:{
//         name: "Earth (C-137)",
//         url:"https://rickandmortyapi.com/api/location/1",
//     },
//     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
//  };
  

function App() {

    function onSearch(id){
        axios(`http:localhost:3001/rickandmorty/character/${id}`).then(({data}) =>{
            if(data.name){
                setCharacters((oldChars)=>[...oldChars, data]);
            
            }else{
                window.alert('No hay personajes con este ID!');
            }
        }).catch(err => console.log(err))
    }

    const [characters, setCharacters] = useState([]);
  
    function onClose(id) {
       
        const result = characters.filter(e => e.id !== Number(id));
        setCharacters(result);
        
    }
    console.log(characters, "result")
    
    
    
    return <>
    
        <NavigateBar 
        onSearch={onSearch}  />
        <Cards characters={characters} onClose={onClose}/>
        
    </>
}

export default App

