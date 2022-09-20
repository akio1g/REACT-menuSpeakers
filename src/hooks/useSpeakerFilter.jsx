import { useState } from "react";

function useSpeakerFilter() {
    const [showSessions, setShowSessions] = useState(true);
    const [speakerFilter, setSpeakerFilter] = useState("");

    return {
        showSessions,
        setShowSessions,
        speakerFilter,
        setSpeakerFilter
    };
}

export default useSpeakerFilter;
