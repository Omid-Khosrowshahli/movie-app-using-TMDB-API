import styles from './TvDetailsHeader.module.css';

const imagePath = "https://image.tmdb.org/t/p/w500";
const originalImagePath = "https://image.tmdb.org/t/p/original";

const TvDetailsHeader = ({ details }) => {
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
            <span style={{fontSize: 35, fontWeight: 700}}>{details?.data?.name} </span>
            <span>({details?.data?.first_air_date.slice(0, 4)})</span>
            <p>
              {details?.data?.genres.map((item) => <span> {item.name} -</span>)} 
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

export default TvDetailsHeader;