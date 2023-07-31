// import '~video-react/dist/video-react.css';
import React from 'react';
import { Player } from 'video-react';

const styles = {
  container: {
    margin: '0 0 40px',
    padding: '40px',
    display: 'flex',
    flexWrap: 'wrap',
    alingItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 24,
    textAlign: 'center',
  },
};

function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Contacts manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
      <Player playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
        {/* <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" /> */}
      </Player>
    </div>
  );
}

export default HomePage;
