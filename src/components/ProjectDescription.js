import React from 'react';
import styled from 'styled-components'

const ContainerProject = styled.section`
    background-color: gray;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: auto;

    h1{
        text-align: center;
    }
    div {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    img {
        width: 55%;
        height: fit-content;
        margin-right: 5vw;
        padding: 10px 0px 0px 10px;
    }
    p {
        font-size: 1.1rem;
        width: 90%;
        height: auto;
    }
`


export class ProjectDescription extends React.Component {

    render() {
        return (
            <ContainerProject>
                <h1>{this.props.title}</h1>
                <div>
                    <img src={this.props.photoProject} alt={this.props.alt} />
                    <p>{this.props.description}</p>
                </div>
            </ContainerProject>
        )
    }
}