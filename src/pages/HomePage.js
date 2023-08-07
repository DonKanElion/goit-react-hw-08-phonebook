import React from 'react';
import YoutubeEmbed from 'components/YoutubeEmbed/YoutubeEmbed';

const s = {
  container: {
    margin: '0 0 40px',
    padding: '20px 40px 40px',
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
    <div style={s.container}>
      <h1 style={s.title}>
        Contacts manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
      <YoutubeEmbed embedId="TMY4rQodTPc" />
    </div>
  );
}

export default HomePage;
