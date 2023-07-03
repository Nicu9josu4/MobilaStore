import './App.css';
import Homepage from './components/homepage/Homepage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar/Navbar"
import { Shop } from './pages/shop/shop'
import { Cart } from './pages/cart/cart'
import { ShopContextProvider } from './context/shop-context'
import Aboutpage from './components/aboutpage/Aboutpage'
import Contactpage from './components/contactpage/Contactpage'
import Footer from './components/footercomp/Footer'
import Tabelpage from './components/tabel/Tabel'
import Proiectepage from './components/footercomp/Proiecte/Proiectepage'
import Profile from './components/profile/Profilepage'
import Table from './components/tabel/Tabel'
import Admindata from './components/tabel/Datadisplay'

// categorii
import Bucatarii from './components/categories/Cat1/Bucatarii'
import Sufragerii from './components/categories/Cat2/Sufragerii'
import Usi from './components/categories/Cat3/Usi'
import Dormitoare from './components/categories/Cat4/Dormitoare'
import Altele from './components/categories/Cat5/Altele'

function App() {
  return (
    <div className="App">
    <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/proiecte" element={<Proiectepage />} />
          <Route path="/admintable" element={<Tabelpage />} />
          <Route path="profile" element={<Profile />} />
          {/* categorii routes */}
          <Route path="/bucatarii" element={<Bucatarii />} />
          <Route path="/dormitoare" element={<Dormitoare />} />
          <Route path="/usi" element={<Usi />} />
          <Route path="/sufragerii" element={<Sufragerii />} />
          <Route path="/altele" element={<Altele />} />
          <Route path="/table" element={<Table />} />
          <Route path="/admindata" element={<Admindata /> } />
        </Routes>
        <Footer />
      </Router>
      </ShopContextProvider>

    </div>
  );
}

export default App;
