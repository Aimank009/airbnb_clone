import './App.css'
import {Route,Routes} from "react-router-dom";
import Indexpage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Layout from './Layout';
import RegisterPage from './pages/Registerpage';
function App() {
  return (
   <Routes>
    <Route path='/' element={<Layout/>} >
      <Route index element={<Indexpage/>}/>
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/register' element={<RegisterPage/>}/>
    </Route>
   </Routes>
  )
}
export default App
