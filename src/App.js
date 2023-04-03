import { BrowserRouter, Routes, Route } from "react-router-dom";
import Moives from "./routes/Moives";
import Movie from "./routes/Movie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Moives />} />
        <Route path="/movies/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
