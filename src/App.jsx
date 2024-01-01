import CssBaseline from '@mui/material/CssBaseline';
import Navbar from "./components/Navbar.jsx";
// import ListCategoryContainer from './ListCategoryContainer';
import Footer from './components/Footer.jsx';
import Homepage from "./views/Homepage.jsx";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Homepage />
      <Footer />
    </>
  )
}

export default App
