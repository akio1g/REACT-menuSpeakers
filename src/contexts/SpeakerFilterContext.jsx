import React, {useState, createContext} from "react";
import useSpeakerFilter from "../hooks/useSpeakerFilter";

export const SpeakerListContext = createContext();

export function SpeakerProvider({children}) {
    const {
        showSessions,
        setShowSessions,
        speakerFilter,
        setSpeakerFilter
    } = useSpeakerFilter();

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