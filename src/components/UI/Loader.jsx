export default function Loader() {
  return (
    <div className="loader-overlay">
      <div
        className="containerLoader spinner-border text-primary"
        role="status"
      >
        <span className="visually-hidden">Loading.....</span>
      </div>
    </div>
  );
}
