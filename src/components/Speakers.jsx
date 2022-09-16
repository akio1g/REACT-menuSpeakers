import React from 'react'
import Toolbar from './Toolbar'
import SpeakersList from './SpeakersList'

export default class Speakers extends React.Component {

    render() {
        return (
            <main>
                <Toolbar />
                <SpeakersList />
            </main>
        );
    }
}