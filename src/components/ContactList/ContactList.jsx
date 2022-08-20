import { ContactItem } from './ContactItem/ContactItem';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(item => {
        const { name, id, number } = item;
        return <ContactItem key={id} name={name} number={number} />;
      })}
    </ul>
  );
};
