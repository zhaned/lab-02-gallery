import React, { Component } from 'react'
import ImageItem from './ImageItem.js'

export default class ImageList extends Component {
    render() {
        const imageListNodes = this.props.images.map(imageItem => 
        <ImageItem 
              key={imageItem.title}
              imageItem={imageItem} />);
        return (
            <ul>
                {imageListNodes}
            </ul>
        )
    }
}
