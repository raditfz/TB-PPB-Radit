import React from 'react';

const MySup = () => { /*Halaman akun milik pengembang app*/
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>881,385,722</h1>
      <div style={styles.imageContainer}>
        <img src="https://pbs.twimg.com/media/F_pC3cVbEAE6SVv?format=jpg&name=large" alt="My Acc 1" style={styles.image} />
        <img src="https://pbs.twimg.com/media/F_o_wLPbgAAOmsJ?format=jpg&name=large" alt="My Acc 2" style={styles.image} />
        <img src="https://pbs.twimg.com/media/F_o_wrUbEAA0kgD?format=jpg&name=large" alt="My Acc 3" style={styles.image} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    marginBottom: "30px",
  },
  heading: {
    color: 'DodgerBlue',
    fontSize: '24px',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column', //biar gambar vertikal
    alignItems: 'center',
    marginTop: '20px',
  },
  image: {
    width: '100%',
    maxWidth: '720px',
    borderRadius: '10px',
    margin: '10px',
  },
};

export default MySup;
