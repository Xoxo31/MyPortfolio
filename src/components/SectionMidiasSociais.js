import React from 'react';
import styled from 'styled-components'
import { Icons } from '../components/Icons';

const ContainerMidiasSociais = styled.section`
    display: flex;
    flex-direction: column;
    background-color: gray;
    align-items: center;
    width: 100%;
    height: auto;
    padding-bottom: 10px;

    img {
        width: 60px;
    }
    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

`


export class SectionMidiasSociais extends React.Component {

    render() {
        return (
            <ContainerMidiasSociais>
                <h2>Midias Sociais</h2>
                <div>
                    {this.props.links.map(
                        (item, index) => {
                            return (
                                <Icons key={index} link={item.link} image={item.image} />
                            )
                        }
                    )}
                </div>
            </ContainerMidiasSociais>
        )
    }
}