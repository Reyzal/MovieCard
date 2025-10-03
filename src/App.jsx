import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
import SingleMovie from "./components/MovieList/SingleMovie";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Routes>
          <Route
            path="/"
            element={<MovieList type="popular" title="Popular" emoji={Fire} />}
          ></Route>
          <Route
            path="/"
            element={
              <MovieList type="top_rated" title="Top Rated" emoji={Star} />
            }
          ></Route>
          <Route
            path="/"
            element={
              <MovieList type="upcoming" title="Upcoming" emoji={Party} />
            }
          ></Route>
          <Route path="/movie/:movieId" element={<SingleMovie />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
