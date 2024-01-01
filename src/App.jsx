import CssBaseline from '@mui/material/CssBaseline';
import Navbar from "./Navbar";
import ListCategoryContainer from './ListCategoryContainer';
import Footer from './Footer';
import Homepage from "./views/Homepage.jsx";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Homepage />
      <ListCategoryContainer />
      <Footer />
    </>
  )
}

export default App
