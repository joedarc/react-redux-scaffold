import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {

  }
  render() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
}


function mapStateToProps() {
  return { };
}

export default connect(mapStateToProps, { })(App);
