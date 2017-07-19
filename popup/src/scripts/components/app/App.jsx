import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.addEventListener('click', () => {
      this.props.dispatch({
        type: 'ADD_COUNT'
      })
    });
  }

  render() {
    return (
      <div>
        Count popup: {this.props.count}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count
});


export default connect(mapStateToProps)(App);
