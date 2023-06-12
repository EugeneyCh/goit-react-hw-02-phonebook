import React from 'react';
import css from './Contact.module.css';

class Contact extends React.Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    console.log(contacts);
    return contacts.map(({ name, number, id }) => (
      <li key={id} className={css.contactRow}>
        {name}:{number}{' '}
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    ));
  }
}

export default Contact;
