import { data } from "../../SpeakerData";
import { useState } from "react";

export default function SpeakerRequest() {
    const [speakerData, setSpeakerData] = useState(data);

    function onFavoriteToggle(speaker) {
        const speakersRecPrev = speakerData.find(function (rec) {
            return rec.id === speaker.id;
        });
        const speakerRecUpd = {
            ...speakersRecPrev, favorite: !speakersRecPrev.favorite
        }
        const newSpeakerData = speakerData.map(function (rec) {
            return rec.id === speaker.id ? speakerRecUpd : rec;
        });
        setSpeakerData(newSpeakerData);
    }


    function updateRequest(speaker) {
        const newData = speakerData.map(function (person) {
            return person.id === speaker.id ? speaker : person;
        });
        setSpeakerData(newData);
    }

    function deleteRequest(speaker) {
        const newData = speakerData.filter(function (person) {
            return person.id !== speaker.id;
        })
        setSpeakerData(newData);
    }

    function insertRequest(speaker) {
        const newData = [speaker, ...speakerData];
        setSpeakerData(newData);
    }

    return {
        speakerData,
        setSpeakerData,
        updateRequest,
        deleteRequest,
        insertRequest,
        onFavoriteToggle
    }
}