
import {Component, useEffect, useState} from 'react';

import ContainerCategories from '../../components/categories/categories'




const Home = () => {
  const [category, setCategory] = useState([])

  useEffect(()=>{
    fetch('https://hallfaste.com/Hally/user.json')
    .then(response => response.json())
    .then((event)=>setCategory(event))
  },[category])




  return (
    <div>
      
      <ContainerCategories category={category} />

    </div>
     )
     
    

 
}

export default Home;
