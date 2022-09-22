import React from 'react'

export default class Sessions extends React.Component {

    render () {
        const {title, room} = this.props;
        const name = room.name;
        
        return (
            <div className='session'>
                <h4>{title} <span>Room: {name}</span></h4>
            </div>
        )    
    }
}