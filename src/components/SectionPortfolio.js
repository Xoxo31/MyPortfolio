import React from 'react';
import styled from 'styled-components'
import { CardProjeto } from './CardProjeto';

const ContainerPortfolio = styled.section`
    background-color: silver;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    /* flex-direction: row;
    justify-content: space-around; */
    width: 100%;
    height: auto;
    padding: 25px 0px;

`


export class SectionPortfolio extends React.Component {
    state = {
        click: ''
    }


    render() {
        return (
            <ContainerPortfolio>
                {this.props.projetos.map(
                    (item, index) => {
                        switch (item.title) {
                            case 'Projeto Controle de Tarefas':
                                return (
                                    <CardProjeto key={index} nomeProjeto={item.title}
                                        printProjeto={item.image}
                                        atlProjeto={item.alt}
                                        clickProject={this.props.clickProjectTarefas} >
                                    </CardProjeto>
                                )
                            case 'Projeto Lab E-commerce':
                                return (
                                    <CardProjeto key={index} nomeProjeto={item.title}
                                        printProjeto={item.image}
                                        atlProjeto={item.alt}
                                        clickProject={this.props.clickProjectWhatsLab} >
                                    </CardProjeto>
                                )
                            case 'Projeto WhatsLab':
                                return (
                                    <CardProjeto key={index} nomeProjeto={item.title}
                                        printProjeto={item.image}
                                        atlProjeto={item.alt}
                                        clickProject={this.props.clickProjectEcommerce} >
                                    </CardProjeto>
                                )
                        }
                    }
                )}
            </ContainerPortfolio>
        )
    }
}