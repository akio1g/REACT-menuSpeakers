import { createContext, useEffect } from "react";
import useRequest from "../hooks/useRequest";

export const SpeakerRequestContext = createContext();

export function SpeakerRequestProvider({ children }) {

    const {
        speakerData,
        setSpeakerData,
        updateRequest,
        deleteRequest,
        insertRequest,
        onFavoriteToggle
    } = useRequest();

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