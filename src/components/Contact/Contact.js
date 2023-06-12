import React from 'react';

class Contact extends React.Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    console.log(contacts);
    return contacts.map(({ name, number, id }) => (
      <li key={id}>
        {name}:{number}{' '}
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    ));
  }
}

export default Contact;
