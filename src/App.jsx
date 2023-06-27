import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AllCars } from "./pages/AllCars/AllCars";
import { Home } from "./pages/Home/Home";
import { SingleCar } from "./pages/SingleCar/SingleCar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/allCars" element={<AllCars />} />
          <Route path="/singleCar/:id" element={<SingleCar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
