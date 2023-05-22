import BootstrapDemo from "./pages/BootstrapDemo";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import ImageDemo from "./pages/ImageDemo";
import MainBody from "./pages/MainBody";

// return JSX.
function App() {
  return (
    <div>
      <Header />
      <MainBody />
      <ImageDemo />
      <MainBody />
      <MainBody />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
