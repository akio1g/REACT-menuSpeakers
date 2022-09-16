import React from 'react'
import Favorite from './Favorite'
import SpeakerSocials from './SpeakerSocials'
import Sessions from './Sessions'

function toggleFavorite(id) {

}

class Speaker extends React.Component {
        
    render() {
        
        const {
            id,
            first,
            last,
            bio,
            company,
            twitterHandle,
            sessions,
            favorite,
            onFavoriteToggle
        } = this.props;

        return (
        <section className='speaker'>
            <div className='image'>
                <img src={`./images/speaker-${id}.jpg`} alt="" />
            </div>
            <Favorite toggleFavorite={onFavoriteToggle} favorite={favorite}/>
            <div className='nameAndDescription'>
                <h1>{first} {last}</h1>
                <h3>{bio}</h3>
            </div>
            <SpeakerSocials company={company} twitter={twitterHandle} />
            <Sessions {...sessions[0]}/>
        </section>
        )
    }
}
export default Speaker;