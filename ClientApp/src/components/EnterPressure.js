import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Pressure';
import firebase from '../firebase'

export default class EnterPressure extends Component {
  constructor(props) {
    super(props);
    this.onChangeSystolic = this.onChangeSystolic.bind(this);
    this.onChangeDiastolic = this.onChangeDiastolic.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
        systolic: '',
        diastolic: '' 
    }
}
onChangeSystolic(e) {  
  this.setState({
    systolic: e.target.value 
  });
}
onChangeDiastolic(e) {
  this.setState({
    diastolic: e.target.value
  })   
}

handleSubmit(e) {
  e.preventDefault();
  console.log(`writing values  ${this.state.systolic}, ${this.state.diastolic}`)
  const readingsRef = firebase.database().ref('readings');
  const reading = {
    readingDate: new Date().toDateString(),
    systolic: this.state.systolic,
    diastolic: this.state.diastolic
  }
  readingsRef.push(reading);
  
  this.setState({
    systolic : '',
    diastolic: ''
  })
}


  render() {
      return (
          <div style={{marginTop: 10}}>
              <h3>Add New Reading</h3>
              <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                      <label>Systolic:  </label>
                      <input type="text" className="form-control"
                        value={this.state.systolic}
                        onChange={this.onChangeSystolic}/>
                  </div>
                  <div className="form-group">
                      <label>Diastolic: </label>
                      <input type="text" className="form-control"
                        value={this.state.diastolic}
                        onChange={this.onChangeDiastolic}/>
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Register Reading" className="btn btn-primary"/>
                  </div>
              </form>
          </div>
      )
  }
}
