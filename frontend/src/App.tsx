import Header from "./components/header";
import {Routes , Route} from 'react-router-dom';
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { Chat } from "./pages/chat";
import NotFound from "./pages/NotFound";

function App() {
  return( 
  <main>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/chat" element={<Chat/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </main>
  );
}

export default App
