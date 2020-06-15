import React, { Component } from 'react';
import styled from 'styled-components';
import DND from './components/DND/DragDrop/DragDrop';
import RT from './components/DataTable/RT';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';

const AppWrapper = styled.div`
display: flex;
justify-content: center;
margin-top: 100px;
`;

const Container = styled.div`
vertical-align: center;
`;

export default class App extends Component {

 state = {
   data: [],
   users: [],
   searchInput: ''
 }

 componentDidMount(){
   const url = "https://jsonplaceholder.typicode.com/users";
   fetch(url, {
     method: "GET"
   }).then(response => response.json()).then(apidata => {
     this.setState({users: apidata, data: apidata})
   })
 }

 handleChange = event => {
  this.setState({ searchInput: event.target.value }, () => {
  this.globalSearch()
 });
 }

 globalSearch = () => {
    let { searchInput } = this.state;
    let filteredData = this.state.users.filter(value => {
      return (
        value.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.username.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.company.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.phone
        .toString()
        .toLowerCase()
        .includes(searchInput.toLowerCase())
    );
  });
    this.setState({ users: filteredData });
};

reset = () => {
  this.setState({users: this.state.data});
}

  render() {
    return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/assignment">
          <Link to="/dashboard">Back to Dashboard</Link>
            <AppWrapper>        
              <Container>
                <RT data = {this.state.users} change={(event) => this.handleChange(event)} reset={this.reset}></RT><br/><br/>
                <DND></DND>
              </Container>
            </AppWrapper>
          </Route>
          <Route path="/logout" component={Logout}></Route>
        </Switch>
      </BrowserRouter> 
    )
  }
}