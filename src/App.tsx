import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';

import First_EN from './pages/1_en';
import First_SP from './pages/1_sp';
import Second_EN from './pages/2_en';
import Second_SP from "./pages/2_sp";
import Third_EN from './pages/3_en';
import Third_SP from './pages/3_sp';
import NotFound from './pages/404';
import Forth_EN from './pages/4_en';
import Forth_SP from './pages/4_sp';
import Fifth_EN from './pages/5_en';
import Fifth_SP from './pages/5_sp';
import Sixth_SP from './pages/6_en';
import S from './pages/7'
import New from './pages/8'
import Urgent from './pages/9'
import VeryNew from './pages/10'
import Midnight from './pages/Midnight'
import Visits from "./pages/visits";
import Test from './pages/111';
import Client from './pages/Client'
import Ip from './pages/ip'
import Newx from './pages/Newx'
import Party from './pages/Party';
import Food from './pages/Food';
import Late from './pages/Late';
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import VeryNew1 from './pages/11000'
import Ss from  './pages/SS'
import Ss2 from  './pages/SS2'
import VeryNew2 from './pages/1122'
import Sed from "./pages/open"
import Sed1 from "./pages/open1"
import Unique2 from './pages/Unique2';
import Unique3 from './pages/Unique3';
import Tsf from './pages/Tsf'

function App() {
 
  return (
    
    <Router>
      <div className="App">
        <Routes>
       
         {/* <Route path = "/engmedssd" element = {<Late/>} />
         <Route path = "/sbbeng" element = {<Ss/>} />
         <Route path = "/awneng" element = {<Ss2/>} />
         <Route path = "/engmedsf" element = {<Unique2/>} />
         <Route path = "/engmedsf2" element = {<Unique3/>} /> */}

          <Route path = "/engspan1" element = {<VeryNew />} />
          {/* <Route path = "/engmed-tsf" element = {<Tsf/>} /> */}
{/*          njxd */}
{/* <Route path = "/engmed900nb" element = {<Midnight />} />
          <Route path = "/engmed3300" element = {<VeryNew1 />} />
          <Route path = "/engmedpin" element = {<Sed />} />
          <Route path = "/engmedquo" element = {<Sed1 />} />
          <Route path = "/" element = {<VeryNew2 />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} /> */}
{/*           <Route path = "/engmedgdn" element = {<Party />} />
          <Route path = "/ip" element = {<Ip />} />
          <Route path = "/engaca1" element = {<First_EN />} />
          <Route path = "/spanaca1" element = {<First_SP />} />
          <Route path = "/engaca2" element = {<Second_EN />} />
          <Route path = "/spanaca2" element = {<Second_SP />} /> */}
          {/* <Route path = "/engmed1" element = {<Third_EN />} /> */}
             {/* <Route path = "/engmed1" element = {<S />} /> */}
{/*          <Route path = "/engmedssd" element = {<Late/>} />
             <Route path = "/engmed2" element = {<Newx />} />
             <Route path = "/engmed11" element = {<Food />} />
             <Route path = "/km-engmed1" element = {<VeryNew />} /> 
             <Route path = "/km-engmedgroc1" element = {<Urgent/>} />
          <Route path = "/engmedgroc1" element = {<New/>}/>
          <Route path = "/spanmed1" element = {<Third_SP />} />
          <Route path = "/hbosolar" element = {<Forth_EN />} />
          <Route path = "/spanfe1" element = {<Forth_SP />} />
          <Route path = "/engerc1" element = {<Fifth_EN />} />
          <Route path = "/spandeb1" element = {<Fifth_SP />} />
          <Route path = "/engdeb1" element = {<Sixth_SP />} />
          <Route path = "/engmedpn" element = {<Test />} />
          <Route path = "/engmed28if" element = {<Client />} /> */}
          {/* <Route path = "/a" element = {<S />} /> */}

          {/* <Route path = "/view" element = {<Visits />} /> */}
          <Route path = "/*" element = {<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
