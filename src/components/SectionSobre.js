import React from 'react';
import styled from 'styled-components'

const ContainerSobre = styled.section`
    background-color: gray;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    height: auto;

    img {
        width: 15%;
        height: fit-content;
        margin-right: 5vw;
        padding: 10px 0px 0px 10px;
    }
    p {
        font-size: 1.1rem;
        width: 70%;
        height: auto;
    }
`


export class SectionSobre extends React.Component {

    render() {
        return (
            <ContainerSobre>
                <img src={this.props.profilePhoto} alt='Foto de perfil de Ana Lívia Cruz' />
                <p>Oie, me chamo Ana Lívia, atualmente sou aluna do curso Desenvolvimento Web Full Stack na Labenu e graduanda de Análise de Sistemas na faculdade Uniateneu.
                    <br /><br />
                    Sou curiosa, adoro solucionar problemas, me sinto desafiada quando encontro um problema difícil, porém não intimidada!
                    <br /><br />
                    Já tive contato com programação há 10 anos e também passei por diversos tipos de trabalho que me fizeram ter a mente aberta e o conhecimento ampliado.
                    <br /><br />
                    Aprendi a lidar com pessoas, fechar e acompanhar vendas, experiências que me trouxeram algumas Soft Skills como comunicação, flexibilidade, empatia, inteligência emocional, pensamento crítico, negociação e capacidade analítica.
                    <br /><br />
                    Além das Hard Skills que hoje tenho posto em prática em alguns projetos: JavaScript, HTML, CSS, React, styled-components, REST API. </p>
            </ContainerSobre>
        )
    }
}