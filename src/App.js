import React, { useState, useEffect } from "react";
import reqs from "./request";
import Row from "./Row";
import "./App.css";
import Banner from "./Banner";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner reqURL={reqs.getNLFXOGs} />
      <Row title="NETFLIX Originals" reqURL={reqs.getNLFXOGs} />
      <Row title="Trending Now" reqURL={reqs.getTrending} useBackdrop="true" />
      <Row title="Top Rated" reqURL={reqs.getTopRated} useBackdrop="true" />
      <Row
        title="Action Movies"
        reqURL={reqs.getActiMovies}
        useBackdrop="true"
      />
    </div>
  );
}

export default App;
