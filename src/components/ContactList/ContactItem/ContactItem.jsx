export const ContactItem = ({ id, name, number, handleDeleteBtn }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={() => handleDeleteBtn(id)}>
        Delete
      </button>
    </li>
  );
};
