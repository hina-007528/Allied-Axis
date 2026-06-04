export default function DataLoading({ minHeight = '50vh' }) {
  return (
    <div
      className="loading-spinner"
      style={{ minHeight, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      role="status"
      aria-busy="true"
      aria-label="Loading"
    >
      <div className="spinner" />
    </div>
  );
}
