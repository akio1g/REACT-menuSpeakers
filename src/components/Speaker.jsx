import React, { useContext } from 'react'
import Favorite from './Favorite'
import SpeakerSocials from './SpeakerSocials'
import Sessions from './Sessions'
import {SpeakerListContext} from '../contexts/SpeakerFilterContext';

function Speaker ({obj, favoriteToggle}) {
        
    const { showSessions } = useContext(SpeakerListContext);
    const {
    id,
    first,
    last,
    bio,
    company,
    twitterHandle,
    sessions,
    favorite
    } = obj;
    
    return (
        <section className='speaker'>
            <div className='image'>
                <img src={`./images/speaker-${id}.jpg`} alt="" />
            </div>
            <Favorite toggleFavorite={favoriteToggle} favorite={favorite}/>
            <div className='nameAndDescription'>
                <h1>{first} {last}</h1>
                <h3>{bio}</h3>
            </div>
            <SpeakerSocials company={company} twitter={twitterHandle} />
                {showSessions ? (<Sessions {...sessions[0]}/>) : null}
        </section>
    )
}
export default Speaker;