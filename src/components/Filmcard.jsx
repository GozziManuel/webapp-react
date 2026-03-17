export default function Filmcard({ abstract, title, image, rlsyear, id }) {
  return (
    <>
      <div class="card h-100">
        <img src={image} class="card-img-top" alt={image} />
        <div class="card-body">
          <h5>{title}</h5>
          <p class="card-text">{abstract}</p>
          <p>{rlsyear}</p>
        </div>
      </div>
    </>
  );
}
