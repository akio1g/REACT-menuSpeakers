import { createContext, useEffect } from "react";
import SpeakerRequest from "../hooks/useRequest";

export const SpeakerRequestContext = createContext();

export function SpeakerRequestProvider({ children }) {

    const {
        speakerData,
        setSpeakerData,
        updateRequest,
        deleteRequest,
        insertRequest,
        onFavoriteToggle
    } = SpeakerRequest();

    return (
        <SpeakerRequestContext.Provider value={{
            speakerData,
            setSpeakerData,
            updateRequest,
            deleteRequest,
            insertRequest,
            onFavoriteToggle
        }}>
            {children}
        </SpeakerRequestContext.Provider>
    )
}