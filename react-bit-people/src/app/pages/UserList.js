import React, { Fragment } from 'react';
import { ListItem } from '../components/ListItem';
import { GridItem } from '../components/GridItem';

export const UserList = (props) => {

    const filterUsers = (users, value) => {
        return users.filter((user, index) => user.name.includes(value));
    }

    const renderListItem = (users) => {
        if (props.inputValue === "") {
            return (
                <div className="row">
                    {users.map((user, index) => {
                        return <ListItem key={index} user={user} />
                    })}
                </div>
            )
        } else {
            return (
                <div className="row">
                    {filterUsers(users, props.inputValue)
                        .map((user, index) => {
                            return <ListItem key={index} user={user} />
                        })}
                </div>
            )
        }
    }

    const renderGridItem = (users) => {
        if (props.inputValue === "") {
            return (
                <div className="row">
                    {users.map((user, index) => {
                        return <GridItem key={index} user={user} />
                    })}
                </div>
            )
        } else {
            return (
                <div className="row">
                    {filterUsers(users, props.inputValue)
                        .map((user, i) => {
                            return <GridItem key={i} user={user} />
                        })}
                </div>
            )
        }
    }

    const displayLayout = (users) => {
        const listView = localStorage.getItem("listView");

        return listView === "true"
            ? renderListItem(props.users)
            : renderGridItem(props.users)
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    {displayLayout(props.users)}
                </div>
            </div>
        </Fragment>
    );
}






