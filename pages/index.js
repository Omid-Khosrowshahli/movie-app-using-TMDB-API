import TMDB from '../src/components/TMDB/TMDB';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <TMDB />
    </div>
  );
};
