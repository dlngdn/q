import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { resetList } from '../actions/index';

//this component is to reset the list on the server
class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton(){
    const newState = !this.state.open;
    this.setState({ open: newState });
  }

  render() {
    return (
      <div onClick={ this.toggleButton } className={`settings ${this.state.open ? 'open' : 'close'}`}>
        <img className="settings-image" src="./images/gear.png"/>
        <div onClick={this.props.resetList} className="list-reset">
          <img className="reset-image" src="./images/reset-s.png"/>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({resetList}, dispatch);
}

export default connect(null, mapDispatchToProps)(Settings);
