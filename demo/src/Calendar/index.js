import React from 'react'
import { Calendar } from 'jgui'

export default class CalendarDemo extends React.Component {
    onPanelChange(value, mode) {
        console.log(value, mode);
    }
    
    render() {
        return (
            <div style={{ width: 290, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                <Calendar fullscreen={false} onPanelChange={this.onPanelChange.bind(this)} />
            </div>
        );
    }
}