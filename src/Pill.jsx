const Pill = ({ type, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: isSelected ? "#edc40b" : "#e9e7e7ff",
        border: "1px solid #006b7eff",
        padding: 8,
        borderRadius: 30,
        marginBottom: 30,
        color: isSelected ? "#e9e7e7ff" : "#303030",
        cursor: "pointer",
        outline: isSelected ? "2px solid #303030" : "none",
      }}
    >
      {type}
    </div>
  );
};

export default Pill;
