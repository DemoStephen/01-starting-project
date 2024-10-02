import "./TabContent";
export default function TabContent({ title, description, code }) {
  return (
    <>
      {!title || !description || !code ? (
        "please select a topic"
      ) : (
        <div id="tab-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <code>{code}</code>
        </div>
      )}
    </>
  );
}
