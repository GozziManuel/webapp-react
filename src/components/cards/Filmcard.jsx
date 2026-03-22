export default function Filmcard({ abstract, title, image, rlsyear, id }) {
  return (
    <>
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={image} />
        <div className="card-body">
          <h5>{title}</h5>
          <p className="card-text">{abstract}</p>
          <p>{rlsyear}</p>
        </div>
      </div>
    </>
  );
}
