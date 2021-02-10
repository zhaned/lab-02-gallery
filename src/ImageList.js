import React, { Component } from 'react'

export default class ImageList extends Component {
    render() {
        return (
            <li className='List'>
                <p>{this.props.imageList.title}</p>
                <p>{this.props.imageList.description}</p>
                <p>{this.props.imageList.horns}</p>
            </li>
        )
    }
}
