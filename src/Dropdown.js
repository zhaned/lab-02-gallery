import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <>

                <select
                currentValue={this.props.value}
                onChange={this.props.handleChange}
                >
                    {
                        this.props.options.map(
                            dropList =>
                            <option value={dropList}>{dropList}</option>
                        )
                    }
                </select>
            </>
        )
    }
}
