import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import CalendarInput from './CalendarInput';
import '../../styles/activityInfo.css';
import 'react-day-picker/lib/style.css';

class ActivityInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initial: true,
            initialActivities: this.props.activities,
            changeInActivities: []
        }
        this.handleChangeInActivity = this.handleChangeInActivity.bind(this);
    }

    handleChangeInActivity(changeActivityInfo, activityInfo) {
        console.log(changeActivityInfo, activityInfo);
        this.setState({changeInActivities: changeActivityInfo, initial: activityInfo})
    }

    getCardBody() {
        let cardBody = [];
        console.log(this.state.initial, this.state.changeInActivities, this.state.initialActivities)
        if (this.state.initial) {
            cardBody = this.state.initialActivities.map((activity) => {
                return (
                    <Card.Body key={activity.start_time}>
                        <h5>Start Time : {activity.start_time} | End Time : {activity.end_time}</h5>
                    </Card.Body>
                )
            });
        } else {
            cardBody = this.state.changeInActivities.map((activity) => {
                return (
                    <Card.Body key={activity.start_time}>
                        <h5>Start Time : {activity.start_time} | End Time : {activity.end_time}</h5>
                    </Card.Body>
                )
            });
        }
        if (cardBody.length > 0) {
            return cardBody;
        } else {
            return "NO ACTIVITIES TO SHOW"
        }
    }

    render() {
        return (
            <div className="activity-card">
                <Card>
                    {this.getCardBody()}
                    <CalendarInput initialActivities={this.state.initialActivities} onCalendarClick={this.handleChangeInActivity} />
                </Card>
            </div>
        );
    }
}

export default ActivityInfo;