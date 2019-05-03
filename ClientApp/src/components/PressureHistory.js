import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
class PressureHistory extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data} height='150' scrollTop={ 'Bottom' }>

          
          <TableHeaderColumn isKey dataField='readingDate'>
            Date
          </TableHeaderColumn>
          <TableHeaderColumn dataField='systolic'>
            Systolic
          </TableHeaderColumn>
          <TableHeaderColumn dataField='diastolic'>
            Diastolic
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
 
export default PressureHistory;