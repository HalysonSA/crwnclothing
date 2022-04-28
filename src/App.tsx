import {Routes, Route} from 'react-router-dom'
import Home from './routes/home'

const App = () => {
  return (
  <Routes>  
      <Route path="/home" element={<Home/>}/>
      <Route path="/shop" element={'ola'}/>


  </Routes>
  
  )
}
export default App;