import { ContactItem } from './ContactItem/ContactItem';

export const ContactList = ({ contacts, onDeleteBtn }) => {
  return (
    <ul>
      {contacts.map(item => {
        const { name, id, number } = item;
        return (
          <ContactItem
            id={id}
            key={id}
            name={name}
            number={number}
            handleDeleteBtn={onDeleteBtn}
          />
        );
      })}
    </ul>
  );
};
