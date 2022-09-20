import React, { useContext } from 'react'
import { useState } from 'react';
import {data} from "./../../SpeakerData"
import Speaker from "./Speaker"
import { SpeakerListContext } from '../contexts/SpeakerFilterContext';

function SpeakersList() {
    const [speakerData, setSpeakerData] = useState(data);
    const {speakerFilter} = useContext(SpeakerListContext);

    function onFavoriteToggle(id) {
        const speakersRecPrev = speakerData.find(function (rec) {
            return rec.id === id;
        });
        const speakerRecUpd = {
            ...speakersRecPrev, favorite: !speakersRecPrev.favorite
        }
        const newSpeakerData = speakerData.map(function (rec) {
            return rec.id === id ? speakerRecUpd : rec;
        });
        setSpeakerData(newSpeakerData);
    }

    return(
        <div className='speakersList'>
            {speakerData.filter(function (person) {
                return (
                    person.first.toLowerCase().includes(speakerFilter) ||
                    person.last.toLowerCase().includes(speakerFilter)
                );
            }).map(personFiltered => (
                <Speaker 
                favoriteToggle={() => {onFavoriteToggle(personFiltered.id)}}
                key={personFiltered.id}
                obj={{...personFiltered}}/>
            ))
            }
        </div>
    )   
}






export default SpeakersList;