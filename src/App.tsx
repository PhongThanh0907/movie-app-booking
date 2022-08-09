import { Routes, Route } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import MainTemplate from "./template/MainTemplate";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Login from "pages/Login";
import Detail from "pages/Detail";
import Register from "pages/Register";
import NotFound from "pages/Home/NotFound";
import Cinemas from "pages/Detail/Cinema/Cinemas";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainTemplate />}>
          <Route path="movies/:movieID" element={<Movie />} />
          <Route index element={<Home />} />
          <Route path="/detail/:detailID" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cinema/:cinemaID" element={<Cinemas />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
