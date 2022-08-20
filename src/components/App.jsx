import { Component } from 'react';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Box } from './Box';
// import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleSubmitForm = contact => {
    // console.log(obj);
    // const { contact } = obj;

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <Box>
        <Form onSubmit={this.handleSubmitForm}></Form>

        <ContactList contacts={this.state.contacts}></ContactList>
      </Box>
    );
  }
}
