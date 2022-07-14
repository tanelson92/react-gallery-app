import React from 'react';
import Photo from './Photo';
const PhotoContainer = (props) => {
    let results = props.results;
    let photos = results.map((photo, index) =>
        <Photo photo={photo} key={index} />
    );
    return (
        <div className="photo-container">
            <div>
                <h2>{props.search}</h2>
                <ul>
                    {photos}
                </ul>
            </div>
        </div>
    );
}
export default PhotoContainer;