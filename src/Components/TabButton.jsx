export default function TabButton({ onSelect, children, active }) {
  return (
    <li>
      <button onClick={onSelect} className={active}>
        {children}
      </button>
    </li>
  );
}
