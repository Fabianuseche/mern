export function Card({ children }) {
  return (
    <div
      className="max-w-md w-full p-10 rounded-md"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      {children}
    </div>
  );
}
