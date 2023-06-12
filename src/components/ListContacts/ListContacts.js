import React from 'react';

class ListContacts extends React.Component {
  render() {
    const { children } = this.props;
    console.log(children);
    return <ul>{children}</ul>;
  }
}

export default ListContacts;
