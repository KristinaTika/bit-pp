import React, { Component, Fragment } from 'react';
import { SearchBar } from '../components/search/SearchBar';
import { UserList } from '../components/UserList';
import { userService } from '../../services/userService';
import { Header } from '../partials/Header';
import { Footer } from '../partials/Footer';

export class Home extends Component {
    constructor() {
        super()

        this.state = {
            users: [],
            listView: true,
            inputValue: "",
        }
    }

    componentDidMount() {
        if (localStorage.getItem('users')) {
            let users = JSON.parse(localStorage.getItem('users'));
            this.setState({
                users: users
            });
        } else {
            this.getUsers();
        }
    }

    getUsers = () => {
        userService.fetchUsers()
            .then((response) => {
                response.forEach((user) => {
                    localStorage.setItem("updateTime", Date.now());
                    localStorage.setItem("users", JSON.stringify(response))
                });
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

    pinkColor = (user) => {
        if (user.gender === "female") {
            return "female-color";
        } else {
            return;
        }
    }

    searchInput = (event) => {
        this.setState({
            inputValue: event.target.value
        })
        
    }



    render() {
        return (
            <Fragment>
                <Header layout={this.renderView} listView={this.state.listView} getUsers={this.getUsers} />
                <SearchBar searchInput={this.searchInput} inputValue={this.state.inputValue} />
                <UserList listView={this.state.listView} users={this.state.users} inputValue={this.state.inputValue} pinkColor={this.pinkColor} searchInput={this.searchInput} />
            </Fragment>
        );
    }
}

