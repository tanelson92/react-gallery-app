import React from 'react';
const Photo = (props) => {
    let photo = props.photo;
    let url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
    let title = props.title;
    return (
        <li>
            <img src={url} alt={title} />
        </li>
    );
}
export default Photo;