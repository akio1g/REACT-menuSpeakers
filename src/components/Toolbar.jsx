import React from 'react'
import { FormControlLabel, Switch, Button, ButtonGroup } from '@mui/material'

export default class Toolbar extends React.Component {
    render() {
        const {showSessions, setShowSessions} = this.props;
        return (
            <div className='toolbar'>
                <div>
                    <FormControlLabel
                        value="Show Sessions"
                        control={<Switch color="primary" />}
                        label="Show Sessions"
                        labelPlacement="start"
                        checked={showSessions}
                        onChange={(event) => {
                            setShowSessions(event.target.checked);
                    }}
                    />
                </div>
                <div>
                    <span>Theme</span>
                    <select name="theme" id="theme">
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </div>
            </div>
            
        )
    }
}