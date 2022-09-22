import { useEffect, useState } from "react";

const restUrl = 'api/speakers';

export default function useRequest() {

    const [speakerData, setSpeakerData] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch(restUrl);
            const data = await response.json();
            setSpeakerData(data);
        }
        getData();
    }, []);

    function onFavoriteToggle(speaker) {
        const originalData = [...speakerData];
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

        async function request() {
            try{
                await fetch(`${restUrl}/${speaker.id}`, {
                    method: 'PUT',
                    body: JSON.stringify(speakerRecUpd),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
            } catch (e) {
                console.log(e);
                setSpeakerData(originalData);
            }
        }
        request();
    }


    function updateRequest(speaker) {
        const originalData = [...speakerData];
        const newData = speakerData.map(function (person) {
            return person.id === speaker.id ? speaker : person;
        });
        setSpeakerData(newData);

        async function request() {
            try{
                await fetch(`${restUrl}/${speaker.id}`, {
                    method: 'PUT',
                    body: JSON.stringify(speaker),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
            } catch (e) {
                console.log(e);
                setSpeakerData(originalData);
            }
        }
        request();
    }

    function deleteRequest(speaker) {
        const originalData = [...speakerData];
        const newData = speakerData.filter(function (person) {
            return person.id !== speaker.id;
        })
        setSpeakerData(newData);
        async function request() {
            try{
                await fetch(`${restUrl}/${speaker.id}`, {
                    method: 'DELETE',
                })
            } catch (e) {
                console.log(e);
                setSpeakerData(originalData);
            }
        }
        request();
    }

    function insertRequest(speaker) {
        const originalData = [...speakerData];
        const newData = [speaker, ...speakerData];
        setSpeakerData(newData);

        async function request() {
            try{
                await fetch(`${restUrl}/${speaker.id}`, {
                    method: 'POST',
                    body: JSON.stringify(speaker),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
            } catch (e) {
                console.log(e);
                setSpeakerData(originalData);
            }
        }
        request();
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