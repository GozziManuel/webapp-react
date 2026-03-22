export default function ReviewForm({ onSubmit, data, setFormData }) {
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...data,
      [name]: value,
    });
  };
  console.log(data);

  return (
    <form onSubmit={onSubmit}>
      <div className="pt-2">
        <label htmlFor="">Name</label>
      </div>
      <input
        type="text"
        className="formText"
        //
        name="name"
        value={data.name}
        required
        onChange={handleFormChange}
      />
      <div className="pt-2">
        <label htmlFor="">Vote</label>
      </div>
      <input
        type="number"
        className="formText"
        name="vote"
        //
        value={data.vote}
        onChange={handleFormChange}
        max={5}
        min={1}
        required
      />
      <div className="pt-2">
        <label htmlFor="">Abstract</label>
      </div>
      <textarea
        type="text"
        className="formText"
        name="abstract"
        //
        value={data.abstract}
        onChange={handleFormChange}
        required
      />

      <div className="pt-2">
        <button class="btn btn-primary">Add review</button>
      </div>
    </form>
  );
}
