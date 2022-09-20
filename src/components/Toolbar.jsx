import React from 'react'
import { FormControlLabel, Switch, Button, ButtonGroup } from '@mui/material'
import { ThemeContext } from '../App';
import { useContext } from 'react';
import { SpeakerListContext } from './Speakers';

export default function Toolbar () {
    
    const {setTheme} = useContext(ThemeContext);
    const {showSessions, setShowSessions, speakerFilter, setSpeakerFilter} = useContext(SpeakerListContext);
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
                <select name="theme" id="theme" onChange={
                    (e) => {setTheme(e.target.value)}
                }>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>
            <div>
                <input 
                type="text"
                placeholder='search'
                value={speakerFilter}
                onChange={(e) => {
                    setSpeakerFilter(e.target.value);
                }}
                />
            </div>
        </div>
        
    )
}