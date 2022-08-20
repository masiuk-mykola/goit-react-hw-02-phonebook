import { ContactItem } from './ContactItem/ContactItem';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(item => {
        console.log(item.id);
        return <ContactItem key={item.id} item={item.name} />;
      })}
    </ul>
  );
};
