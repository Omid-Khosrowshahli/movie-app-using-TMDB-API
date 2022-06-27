import styles from './MovieDetailsHeader.module.css';

const imagePath = "https://image.tmdb.org/t/p/w500";
const originalImagePath = "https://image.tmdb.org/t/p/original";

const MovieDetailsHeader = ({ details }) => {
  return (
    <div
      className={styles.container} 
      style={{backgroundImage: `url(${originalImagePath}${details?.data?.backdrop_path})`}}
    >
      <span></span>
      <div className={styles.content}>
        <div className={styles.posterContainer}>
          <img className={styles.poster} src={`${imagePath}${details?.data?.poster_path}`} />
        </div>
        <div className={styles.details}>
          <div>
            <span style={{fontSize: 35, fontWeight: 700}}>{details?.data?.title} </span>
            <span>({details?.data?.release_date.slice(0, 4)})</span>
            <p>
              {details?.data?.release_date} ({details?.data?.production_countries[0].iso_3166_1}) .
              {details?.data?.genres.map((item) => <span> {item.name} -</span>)} 
              {Math.floor((details?.data?.runtime) / 60)}h {(details?.data?.runtime) % 60}m
            </p>
          </div>
          <div style={{fontSize: 18, color: '#999', fontStyle: 'italic' }}>{details?.data?.tagline}</div>
          <div>
            <p style={{fontSize: 25, fontWeight: 600}}>Overview</p>
            <p>{details?.data?.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsHeader;