import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        const { //image destructuring
            imageItem:{
                url,
                title,
                description,
                keyword,
                horns
            }
        } = this.props;

        return (
            <li className='item'>
                <img alt={title} src={url} />
                <p>{title}</p>
                <p>{description}</p>
                <p>{keyword}</p>
                <p>{horns}</p>
            </li>
            
            // <li className='item'>
            //     <img alt={this.props.imageItem.title} src={this.props.imageItem.url} />
            //     <p>{this.props.imageItem.title}</p>
            //     <p>{this.props.imageItem.description}</p>
            //     <p>{this.props.imageItem.keyword}</p>
            //     <p>{this.props.imageItem.horns}</p>
            // </li>
        )
    }
}