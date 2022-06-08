import React from 'react';
import styled from 'styled-components'
import imagemFundo from '../imgs/background-computer.png';

const ContainerHomeImagem = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: black;
    opacity: 80%;
    height: 10vh;
`


const MenuTotal = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 95vw;
    height: fit-content;
    /* border-top: 2px solid pink; */
`

const Titulo = styled.p`
    font-size: 1.1rem;
    padding-left: 3%;
    color: white;
`

const MenuButtons = styled.div`
    padding-right: 3%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 30%;
    height: fit-content;
    /* border-top: 2px solid pink; */

    a {
        padding: 0% 5%;
        text-decoration: none;
        color: white;
    }
    a:hover {
        background-color: gray;
        color: white;
        opacity: 0.7;
    }

`


export class SectionMenu extends React.Component {

    render() {
        return (
            <ContainerHomeImagem>
                    <MenuTotal>
                    <Titulo>{"<Ana Lívia Cruz/>"}</Titulo>
                    <MenuButtons>
                    {this.props.menus.map(
                            (item, index) => {
                                switch (item.name) {
                                    case 'Home':
                                        return (
                                            <a key={index} href='#' onClick={this.props.clickHome} >
                                                <p>{item.name}</p>
                                            </a>
                                        )
                                    case 'Bio':
                                        return (
                                            <a key={index} href='#' onClick={this.props.clickBio} >
                                                <p>{item.name}</p>
                                            </a>
                                        )
                                    case 'Projects':
                                        return (
                                            <a key={index} href='#' onClick={this.props.clickProjects} >
                                                <p>{item.name}</p>
                                            </a>
                                        )
                                    case 'Contact':
                                        return (
                                            <a key={index} href='#' onClick={this.props.clickContact} >
                                                <p>{item.name}</p>
                                            </a>
                                        )
                                }
                            }
                        )}
                    </MenuButtons>
                    </MenuTotal>
            </ContainerHomeImagem>
        )
    }
}