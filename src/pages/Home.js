const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alingItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSeze: 36,
    textAlign: 'center',
  }
};

export default function Home() {

return (
    <div style={styles.container}>
        <h1 style={styles.title}>
        Contacts manager welcome page{' '} 
            <span role="img" aria-label="Greeting icon">
            💁‍♀️
            </span>
        </h1>
    </div>
)
}
