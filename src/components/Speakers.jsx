import React, {useState} from 'react'
import Toolbar from './Toolbar'
import SpeakersList from './SpeakersList'

export default function Speakers() {

        const [showSessions, setShowSessions] = useState(true);
        return (
            <div>
                <Toolbar showSessions={showSessions} setShowSessions={setShowSessions}/>
                <SpeakersList showSessions={showSessions}/>
            </div>
        );
}