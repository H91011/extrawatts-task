import styles from "../styles/Home.module.sass";

export default function Filter({ categories }) {
  const { filterSelect, filterText } = styles;
  return (
    <div style={{ width: "100%" }}>
      <select className={filterSelect}>
        {categories.map((c) => (
          <option key={c.id} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>{" "}
      <span className={filterText}> Filter by: </span>
    </div>
  );
}
