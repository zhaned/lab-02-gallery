import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <li className='item'>
                <img alt={this.props.imageItem.title} src={this.props.imageItem.url} />
                <p>{this.props.imageItem.title}</p>
                <p>{this.props.imageItem.description}</p>
                <p>{this.props.imageItem.keyword}</p>
                <p>{this.props.imageItem.horns}</p>
            </li>
        )
    }
}