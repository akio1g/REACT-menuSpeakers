import React, {useState, createContext} from "react";

export const SpeakerListContext = createContext();

export function SpeakerProvider({children}) {
    const [showSessions, setShowSessions] = useState(true);
    const [speakerFilter, setSpeakerFilter] = useState('');

    return (
        <SpeakerListContext.Provider value={{
            showSessions,
            setShowSessions,
            speakerFilter,
            setSpeakerFilter
        }}>
            {children}
        </SpeakerListContext.Provider>
    )

}