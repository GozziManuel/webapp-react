export default function Starcreator({ vote, maxvote }) {
  function starPusher() {
    const stars = [];
    for (let i = 1; i <= maxvote; i++) {
      const starPainter = i <= vote ? "bi-star-fill" : "bi-star";
      stars.push(<i key={i} className={`bi ${starPainter}`}></i>);
    }
    console.log(stars);
    return stars;
  }
  console.log(vote, maxvote);

  return <>{starPusher()}</>;
}
