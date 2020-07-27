import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import UserActivityModal from './UserActivityModal.jsx';

class UserCard extends Component {
    constructor() {
        super();
        this.state = {
            modalShow: false
        }
    }


    render() {
        return (
            <div>
                <div className="card-container" onClick={() => { this.setState({ modalShow: true }) }}>
                    <Card>
                        <Card.Body>{this.props.user.real_name}</Card.Body>
                    </Card>
                </div>
                <UserActivityModal show={this.state.modalShow}
                    onHide={() => { this.setState({ modalShow: !this.state.modalShow }) }}
                    user={this.props.user} />
            </div>
        );
    }
}

export default UserCard;