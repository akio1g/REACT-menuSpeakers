import React, {createContext, useState} from 'react'
import Toolbar from './Toolbar'
import SpeakersList from './SpeakersList'

export const SpeakerListContext = createContext();

export default function Speakers() {

        const [showSessions, setShowSessions] = useState(true);
        const [speakerFilter, setSpeakerFilter] = useState('');

        return (
            <SpeakerListContext.Provider value={{
                    showSessions,
                    setShowSessions,
                    speakerFilter,
                    setSpeakerFilter
                }}>
                <div>
                    <Toolbar/>
                    <SpeakersList/>
                </div>
            </SpeakerListContext.Provider>
        );
}