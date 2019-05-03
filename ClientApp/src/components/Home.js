import React from 'react';
import { connect } from 'react-redux';
import firebase from '../firebase'
import PressureHistory from './PressureHistory';
import EnterPressure from './EnterPressure';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export default class NavMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      currentReading: '',
      readings: []
    } 
  }
  componentDidMount() {
    const readingsRef = firebase.database().ref('readings');
    readingsRef.on('value', (snapshot) => {
      let readings = snapshot.val();
      let newState = [];
      let points = [];
      for (let reading in readings) {
        newState.push({
          key: readings[reading].key,
          readingDate: readings[reading].readingDate,
          systolic: readings[reading].systolic,
          diastolic: readings[reading].diastolic
        });
      }
      this.setState({
        readings: newState
      });
      this.setState({
        points: points
      });
    });
  }

  render () {
    return (
    <div>
        <EnterPressure></EnterPressure>
        <PressureHistory data={this.state.readings}/>
        <LineChart width={800} height={400} data={this.state.readings} >
          <Line type="monotone" dataKey="systolic" stroke="#FF3333" />
          <Line  type="monotone"  dataKey="diastolic" stroke="#3FFF33" />
          <CartesianGrid stroke="#ccc" />
          <YAxis />
        </LineChart>
    

    </div>
  );
      }
  
}
