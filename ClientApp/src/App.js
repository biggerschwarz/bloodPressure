
import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import EnterPressure from './components/EnterPressure';
import PressureHistory from './components/PressureHistory';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      readings: []
    }
  }

  render() {
    return (
      <Layout>
      <Route exact path='/' component={Home} />
      <Route path='/enterPressure' component={EnterPressure} />
      <Route path='/pressureHistory/:startDateIndex?' component={PressureHistory} />
    </Layout>
    );
  }
}

export default App;