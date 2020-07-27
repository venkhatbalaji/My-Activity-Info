import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ActivityInfo from './ActivityInfo.jsx';

class UserActivityModal extends Component {
    constructor(props) {
        super(props);
        this.state={
            modalShow: this.props.show,
        }
    }
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.user.real_name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ActivityInfo activities={this.props.user.activity_periods}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default UserActivityModal;