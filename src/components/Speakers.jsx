import React from 'react'
import Toolbar from './Toolbar'
import SpeakersList from './SpeakersList'
import { SpeakerProvider } from '../contexts/SpeakerFilterContext';

export default function Speakers() {

        return (
            <SpeakerProvider>
                <div>
                    <Toolbar/>
                    <SpeakersList/>
                </div>
            </SpeakerProvider>
        );
}