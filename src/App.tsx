import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Error } from './screens/inside';
import './App.css';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>

        <Route path = "/*" element = {<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
