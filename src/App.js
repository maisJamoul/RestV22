
import './App.css';
import {Content} from './components/Container/index';
import {Header,Footer,Hero,MenuReserv ,Contact, AboutUs, OurMenu } from "./components/sections/index";

import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import {RestProvider} from './hooks/RestContext';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="container-fliud">
    <RestProvider>
        
        <BrowserRouter >
        <Header />
        <Routes>
          <Route path='/' element={<Content />} />
          {/* <Route path='/about' element={<AboutUs />} />
          
          <Route path="/contact"  element={<Contact />} />
          <Route path="/menu"  element={<OurMenu />} /> */}
          {/* </Route> */}


          <Route path='/Reserv' element={<MenuReserv />} />


        </Routes>
        </BrowserRouter>
        
        <Footer />

    </RestProvider>
    </div>
  );
}

export default App;
