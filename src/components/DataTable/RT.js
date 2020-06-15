import React, { Component } from 'react'
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import { Input, Button } from "semantic-ui-react";

export default class RT extends Component {

    render() {

        const columns = [
            {
              Header: "FULL NAME",
              accessor: "name",
              sortable: true,
              filterable: false
            },
            {
              Header: "PHONE",
              accessor: "phone",
              sortable: true,
              filterable: false
            },
            {
              Header: "USER NAME",
              accessor: "username",
              sortable: true,
              filterable: false
            },
            {
              Header: "COMPANY NAME",
              accessor: "company.name",
              sortable: true,
              filterable: false
            }
          ]
        return (
            <div>
                <Input onChange={this.props.change}
                       placeholder="Search" 
                       name="searchInput">
                </Input>
                <Button onClick={this.props.reset}>Reset</Button>
                <ReactTable
                    columns={columns}
                    data = {this.props.data}
                    noDataText={"Loading Data"}
                    defaultPageSize={5}
                    showPaginationBottom> 
                </ReactTable>
            </div>
        )
    }
}