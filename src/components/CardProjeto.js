import React from 'react';
import styled from 'styled-components'

const ContainerCard = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: auto;

    img {
        width: 90%;
        max-width: 400px;
        height: auto;
    }
`


export class CardProjeto extends React.Component {

    render() {
        return (
            <ContainerCard>
                <h2>{this.props.nomeProjeto}</h2>
                <a href='#' onClick={this.props.clickProject} >
                    <img src={this.props.printProjeto}
                        alt={this.props.atlProjeto} ></img>
                </a>
            </ContainerCard>
        )
    }
}