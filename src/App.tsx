
import {Component, useEffect, useState} from 'react';
import ContainerCategories from './components/categories/categories'




const App = () => {
  const [category, setCategory] = useState([])

  useEffect(()=>{
    fetch('https://hallfaste.com/Hally/user.json')
    .then(response => response.json())
    .then((event)=>setCategory(event))
  },[category])




  return (
      <ContainerCategories category={category} />


     )
     
    

 
}

export default App;
