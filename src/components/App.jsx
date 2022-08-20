import { Component } from 'react';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Box } from './Box';
// import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmitForm = obj => {
    const { name } = obj;

    this.setState(prevState => ({
      contacts: [...prevState.contacts, name],
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
