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

function App() {
    return (
        <div className="App">
            <ShopContextProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Shop />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/home" element={<Homepage />} />
                        <Route path="/about" element={<Aboutpage />} />
                        <Route path="/contact" element={<Contactpage />} />
                    </Routes>
                    <Footer />
                </Router>
            </ShopContextProvider>

        </div>
    );
}

export default App;
