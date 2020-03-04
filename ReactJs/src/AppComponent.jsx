import React from 'react';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Rishab'
    };
  }
  render() {
    const { name } = state;
    return(
      <div>
        <input name="input-component" defaultValue={name} type="text" />
      </div>
    );
  }
};

export default AppComponent;
