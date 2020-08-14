import React, { useState, useEffect } from 'react';
import inst from './axios';
import reqs from './request';
import Row from './Row'

function App() {
  const [trendingShows, setTrendingShows] = useState([]);
  const [NFLXShows, setNFLXShows] = useState([]);

  useEffect(()=> {
    getAllsShowRows();
  }, []);

  const getAllsShowRows = async () => {
    const nflxRes = await inst.get(reqs.getNLFXOGs);
    setNFLXShows(nflxRes.data.results);

    const trendingRes = await inst.get(reqs.getTrending);
    setTrendingShows(trendingRes.data.results);
  }

  return (
    <div className="App">
      <Row title="NETFLIX Originals" shows={NFLXShows}/>
      <Row title="Trending Now" shows={trendingShows}/>
    </div>
  );
}

export default App;
