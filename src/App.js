import "./App.css";
import { Toaster } from "react-hot-toast";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Router } from "./config/Router";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <div className="container w-full p-2 min-h-[84vh]">
        <Router />
      </div>
      <Footer />
    </>
  );
}

export default App;
