import React from 'react'
import { useState } from 'react';
import {data} from "./../../SpeakerData"
import Speaker from "./Speaker"

class SpeakersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {speakerData: data}
    }

    onFavoriteToggle(id) {
        console.log(this.state.speakerData);
        const speakersRecPrev = this.state.speakerData.find(function (rec) {
            return rec.id === id;
        });
        const speakerRecUpd = {
            ...speakersRecPrev, favorite: !speakersRecPrev.favorite
        }
        const newSpeakerData = this.state.speakerData.map(function (rec) {
            return rec.id === id ? speakerRecUpd : rec;
        });
        this.setState({speakerData: newSpeakerData})
        console.log(newSpeakerData);
    }

    render() {

        return(
            <div className='speakersList'>
                {this.state.speakerData.map(person => (
                    <Speaker onFavoriteToggle={() => {this.onFavoriteToggle(person.id)}} key={person.id} {...person}/>
                ))
                }
            </div>
        )   
    }
}

// function SpeakersList () {

//     const [speakerData, setSpeakerData] = useState(data);

//     function onFavoriteToggle(id) {
//         console.log(speakerData);
//         const speakersRecPrev = speakerData.find(function (rec) {
//             return rec.id === id;
//         });
//         const speakerRecUpd = {
//             ...speakersRecPrev, favorite: !speakersRecPrev.favorite
//         }
//         const newSpeakerData = speakerData.map(function (rec) {
//             return rec.id === id ? speakerRecUpd : rec;
//         });
//         setSpeakerData(newSpeakerData);
//         console.log(speakerData);
//     }

//     return(
//         <div className='speakersList'>
//             {speakerData.map(person => (
//                 <Speaker onFavoriteToggle={() => {onFavoriteToggle(person.id)}} key={person.id} {...person}/>
//             ))
//             }
//         </div>
//     )        
// }






export default SpeakersList;