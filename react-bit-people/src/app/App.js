import React, { Fragment, Component } from 'react';
import './App.css';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { UserList } from './pages/UserList';
import { About } from './pages/About';
import { userService } from '../services/userService';


export class App extends Component {
  constructor() {
    super()

    this.state = {
      users: [],
      listView: true,
      inputValue: "",
    }
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    userService.fetchUsers()
      .then((response) => {
        this.setState({
          users: response
        })
      })
      .catch(message => {
        console.log(message)
        alert("Failed to load users.")
      });
  }

  renderView = (view) => {
    if (view === true) {
      this.setState({ listView: false })
      localStorage.setItem("listView", this.state.listView);
    } else {
      this.setState({ listView: true })
      localStorage.setItem("listView", this.state.listView);
    }
  }


  render() {

    return (
      <Fragment>
        <Header layout={this.renderView} listView={this.state.listView} getUsers={this.getUsers} />
        <UserList  listView={this.state.listView} users={this.state.users} inputValue={this.state.inputValue} />
        <Footer />
      </Fragment>
    )
  }
}


