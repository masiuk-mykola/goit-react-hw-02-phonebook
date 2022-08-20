import { Component } from 'react';
import { Box } from 'components/Box';
import { nanoid } from 'nanoid';

export class Form extends Component {
  state = {
    name: {},
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ name: { [name]: value, id: nanoid() } });
    // data = { [name]: value };
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    e.target.elements.name.value = '';
  };

  render() {
    return (
      <Box p={10}>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </Box>
    );
  }
}
