import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default class Favorite extends React.Component {

    render () {
        const {toggleFavorite, favorite} = this.props;
        return (
            <div>
                <span onClick={toggleFavorite}>{favorite ? (< StarIcon />) : (<StarBorderIcon />)} Favorite</span>                
            </div>
        )
    }
}