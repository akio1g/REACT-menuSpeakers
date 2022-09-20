import React, { useContext, useState } from 'react'
import Speaker from "./Speaker"
import { SpeakerListContext } from '../contexts/SpeakerFilterContext';
import { SpeakerRequestContext, SpeakerRequestProvider } from '../contexts/SpeakerRequestContext';
import { data } from '../../SpeakerData';
import SpeakerRequest from './../hooks/useRequest'

function SpeakersList() {

    const {
        speakerData,
        onFavoriteToggle
    } = useContext(SpeakerRequestContext);

    const { speakerFilter } = useContext(SpeakerListContext);

    return (
        <div className='speakersList'>
            {speakerData.filter(function (person) {
                return (
                    person.first.toLowerCase().includes(speakerFilter) ||
                    person.last.toLowerCase().includes(speakerFilter)
                );
            }).map(personFiltered => (
                <Speaker
                    favoriteToggle={() => { onFavoriteToggle(personFiltered) }}
                    key={personFiltered.id}
                    obj={{ ...personFiltered }}
                />
            ))
            }
        </div>
    )
}

export default SpeakersList;