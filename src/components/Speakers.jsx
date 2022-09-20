import React from 'react'
import Toolbar from './Toolbar'
import SpeakersList from './SpeakersList'
import { SpeakerProvider } from '../contexts/SpeakerFilterContext';
import { SpeakerRequestProvider } from '../contexts/SpeakerRequestContext';

export default function Speakers() {

        return (
            <SpeakerProvider>
                <div>
                    <Toolbar/>
                    <SpeakerRequestProvider>
                        <SpeakersList/>
                    </SpeakerRequestProvider>
                    
                </div>
            </SpeakerProvider>
        );
}