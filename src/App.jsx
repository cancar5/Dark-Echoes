import { useState } from "react";

import "./App.css";

import { episodeList } from "./data.js";

//export default
function App() {
  // TODO
  //create State
  const [selectedEpisode, setselectedEpisode] = useState(null);
  function Header() {
    return (
      //come back and do class for header
      <header className="episodes-header">
        <h1>Dark Echoes</h1>
        <h2>Episodes</h2>
      </header>
    );
  }

  function EpisodeList() {
    const handleClick = (episode) => {
      setselectedEpisode(episode);
    };
    return (
      //create  classes
      <section>
        <ul className="episode-grid">
          {episodeList.map((episode) => {
            return (
              <li
                className="episode-item episode-item:hover"
                key={episode.id}
                onClick={() => handleClick(episode)}
              >
                {/* maybe try images */}
                <span>{episode.title}</span>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        //creat class for episode details
        <section className="episode-details episode h1">
          <h2>Episode Details</h2>
          <p>Select an episode for more details.</p>
        </section>
      );
    }
    return (
      <section className="episode-details episode h1">
        <h1>Episode: {selectedEpisode.id}</h1>
        <h2>{selectedEpisode.title}</h2>
        <p>{selectedEpisode.description}</p>
        <button>Watch Now</button>
      </section>
    );
  }

  //return functions created above here
  return (
    <main className="">
      <Header />
      <EpisodeList />
      <EpisodeDetails />
    </main>
  );
}

export default App;
