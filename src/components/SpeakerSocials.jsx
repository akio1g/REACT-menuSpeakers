import React from 'react'

export default class SpeakerSocials extends React.Component {

    render () {

        const {company, twitter} = this.props;

        return (
            <div className='socials'>
                <div className='company'>
                    <h2>Company</h2>
                    <h4>{company}</h4>
                </div>
                <div className='twitter'>
                    <h2>Twitter</h2>
                    <h4>{twitter}</h4>
                </div>
            </div>
        )
    }
}