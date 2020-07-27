import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import Helmet from 'react-helmet';
import { Button } from 'react-bootstrap';
import calendarHelper from '../../util/calendarHelper/calendarHelper';

class Calendar extends Component {
    constructor() {
        super();
        this.state = {
            from: undefined,
            to: undefined
        }
    }

    handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, this.state);
        if(range.from && range.to){
            var input = this.props.initialActivities.filter((activity) => {
                return(calendarHelper.filterActivityRange(activity, range))
            });
            console.log(input);
            this.props.onCalendarClick(input, false);
        }
        this.setState(range);
    }

    handleResetClick(){
        this.setState({from: undefined, to: undefined});
        this.props.onCalendarClick([], true);
    }

    render() {
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };
        return (
            <div>
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from &&
                        to &&
                        `Selected from ${from.toLocaleDateString()} to
                    ${to.toLocaleDateString()}`}{' '}
                    {from && to && (
                        <Button className="link" onClick={() =>{this.handleResetClick()}}>
                            Reset
                        </Button>
                    )}
                </p>
                <DayPicker
                    className="Selectable"
                    numberOfMonths={2}
                    selectedDays={[from, { from, to }]}
                    modifiers={modifiers}
                    onDayClick={(day) => {this.handleDayClick(day)}}
                />
                <Helmet>
                    <style>{`
                            .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                                background-color: #f0f8ff !important;
                                color: #4a90e2;
                            }
                            .Selectable .DayPicker-Day {
                                border-radius: 0 !important;
                            }
                            .Selectable .DayPicker-Day--start {
                                border-top-left-radius: 50% !important;
                                border-bottom-left-radius: 50% !important;
                            }
                            .Selectable .DayPicker-Day--end {
                                border-top-right-radius: 50% !important;
                                border-bottom-right-radius: 50% !important;
                            }
                    `}</style>
                </Helmet>
            </div>
        );
    }
}

export default Calendar;