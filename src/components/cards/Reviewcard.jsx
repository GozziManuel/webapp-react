import Starcreator from "../UI/Starcreator";

export default function ReviewCard({ el }) {
  return (
    <div className="containeReview" key={el.id}>
      <h4 className="m-0">{el.name}</h4>
      <p className="mb-2">
        {el.text} <Starcreator vote={el.vote} maxvote={5} />
      </p>
    </div>
  );
}
