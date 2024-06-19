import React from 'react';

class Tooltip extends React.Component {
  classN = () => {
    return `${this.props.position}`;
  }

  render() {
    return (
      <div className={this.classN()}>
        Thanks for hovering '{this.props.position}' position!!
      </div>
    );
  }
}

export default Tooltip;