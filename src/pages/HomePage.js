import React from 'react';
import YoutubeEmbed from 'components/YoutubeEmbed/YoutubeEmbed';

const styles = {
  container: {
    margin: '0 0 40px',
    padding: '20px 40px 40px',
    // display: 'flex',
    // flexWrap: 'wrap',
    alingItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 24,
    textAlign: 'center',
  },
  video_box: {
    // maxWidth: "960px",
    // margin: "0px auto",
    // // padding: "0px 16px",
    // textAlign: "center",
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
      <div style={styles.video_box}>
        <YoutubeEmbed embedId="TMY4rQodTPc" />
      </div>

    </div>
  );
}

export default HomePage;
