import React, { useContext, useEffect } from 'react'
import Speaker from "./Speaker"
import { SpeakerListContext } from '../contexts/SpeakerFilterContext';
import { SpeakerRequestContext } from '../contexts/SpeakerRequestContext';
import AddIcon from '@mui/icons-material/Add';
import withAuth from './withAuth';

function SpeakersList({ login, setLogin }) {

    const {
        speakerData,
        onFavoriteToggle,
        insertRequest
    } = useContext(SpeakerRequestContext);

    const { speakerFilter } = useContext(SpeakerListContext);


    function Login() {
        return (
            <AddIcon
                onClick={() => {
                    const firstLast = window.prompt("Enter first and last name:", "").split(" ");
                    const first = firstLast[0];
                    const last = firstLast[1];

                    insertRequest(
                        {
                            id: speakerData.length + 1,
                            first: first,
                            last: last,
                            bio: "Bio not entered yet",
                            sessions: [
                                {
                                    id: "88888",
                                    title: `New Session For ${first}`,
                                    room: {
                                        name: "Main Ball Room",
                                    },
                                    eventYear: "2022",
                                },
                            ],
                        }
                    )
                }}
            />
        )
    }

    return (
        <>
            <div>
                {login ?
                    <Login /> :
                    null
                }
            </div>
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
        </>
    )
}

export default withAuth(SpeakersList);