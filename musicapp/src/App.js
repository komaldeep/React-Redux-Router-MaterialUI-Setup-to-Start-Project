import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { browserHistory } from 'react-router';
import { fetchuserdetails } from './Action/Index'

import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';


class App extends Component {


    componentWillMount(){
        this.props.fetchuserdetails();
    }


  render() {

      console.log(this.props.Reducers.fetching , 'all props will be here')

    return (
      <div className="App">

          <AppBar
              title="Title"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
          />

          <div className="App-header">
              <h2>Welcome to React</h2>
          </div>

           <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
           </p>

      </div>
    );
  }
}

Component.propTypes = {
    Reducers: PropTypes.string.isRequired,
};


function mapStateToProps(store) {
    // console.log(store ,'store in mapstatetoprops');
    return { Reducers: store.Reducers};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchuserdetails
    }, dispatch);
}


const AppList = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppList;
