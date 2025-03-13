import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <img src="/thekopend.jpg" alt="Banquet Hall" className={styles.image} />
      <div className={styles.content}>
        <h2>The Kop End</h2>
        <p>There's nothing more nostalgic than hearing the kop end roar and chant with pride.</p>
      </div>
    </div>
  );
};

export default Card;