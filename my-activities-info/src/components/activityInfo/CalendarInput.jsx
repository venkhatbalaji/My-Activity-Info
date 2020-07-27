import React, { Component } from 'react';
import Calendar from './Calendar.jsx';
import '../../styles/calendar.css';
import {Button} from 'react-bootstrap';

class CalendarInput extends Component {
    constructor() {
        super();
        this.state = {
            canlendarClick: false
        }
    }

    handleClick(){
        this.setState({canlendarClick: false});
        this.props.onCalendarClick([], true);
    }

    render() {
        return (
            <div>
                {this.state.canlendarClick ?
                    <div>
                        <Calendar initialActivities={this.props.initialActivities} onCalendarClick={this.props.onCalendarClick}/>
                        <Button onClick={() => this.handleClick()}>Close</Button>
                    </div>
                    : <div className="calendar-container" onClick={() => { this.setState({ canlendarClick: true }) }}> <i className="fa fa-calendar fa-3x" aria-hidden="true"></i></div>}
            </div>
        );
    }
}

export default CalendarInput;