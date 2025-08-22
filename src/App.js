import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Titlebar from './components/layout/titlebar/index.js';
import PostDetail from './pages/postDetail.js';
function App() { 
  return (
    <BrowserRouter>
    <Titlebar/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/Post/:id"element={<PostDetail/>}/>
      </Routes>
    </BrowserRouter>  
  );
}
export default App;


