import React from 'react';

export class Icons extends React.Component {

    render() {
        return (
            <>
                <a href={this.props.link} target="_blank">
                    <img src={this.props.image} />
                </a>
            </>
        )
    }
}