import React from 'react';
import styled from 'styled-components'
import githubIcon from '../imgs/github-icon.svg';
import instagramIocn from '../imgs/instagram-icon.svg';
import linkedinIcon from '../imgs/linkedin-icon.svg';
import profilePhoto from '../imgs/analivia-profile.png';
import projetoControleTarefas from '../imgs/print-controle-tarefas.png';
import projetoWhatsLab from '../imgs/print-whatslab.png'
import projetoLabEcommerce from '../imgs/print-lab-ecommerce.png';
import { SectionSobre } from './SectionSobre';
import { SectionPortfolio } from './SectionPortfolio';
import { SectionHome } from './SectionHome';
import { SectionMidiasSociais } from './SectionMidiasSociais';
import { SectionMenu } from './SectionMenu';
import { ProjectDescription } from './ProjectDescription';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100vw;
`

const socialMediaLinks = [
  {
    link: 'https://github.com/Xoxo31',
    image: githubIcon
  },
  {
    link: ' https://www.instagram.com/analiviacruz/',
    image: instagramIocn
  },
  {
    link: 'https://www.linkedin.com/in/analiviacruz3108/',
    image: linkedinIcon
  }
]

const projetos = [
  {
    title: 'Projeto Controle de Tarefas',
    image: projetoControleTarefas,
    alt: 'print ro projeto Controle de Tarefas',
    description: <p>Esse foi um dos meus primeiros projetos usando React, feito de forma simples apenas com o intuito de testar as funcionalidades de um controlador de tarefas usando o localStorage, tal qual realizando a renderização de listas na tela via estados.
      <br /><br />
      Pode ser realizada a alteração de status para pendente ou completa por meio de um botão, podendo também deletar a tarefa. E a visualização das tarefas pode ser ajustada pelo filtro com o Select.
      <br /><br />
      Você pode testar as funcionalidades desse projeto clicando <a href='https://horrible-match.surge.sh' target="_blank" rel="noreferrer">aqui</a>!
    </p>
  },
  {
    title: 'Projeto Lab E-commerce',
    image: projetoLabEcommerce,
    alt: 'print ro projeto Lab-Ecommerce',
    description: <p>Esse foi projeto mais recente feito em grupo juntamente com <a href='https://github.com/elisabetealves' target="_blank" rel="noreferrer">Elisabete Alves</a> e <a href='https://github.com/Rafael563' target="_blank" rel="noreferrer">Rafael Santos da Silva</a> em parceria pelo curso de Desenvolvedor Web Full Stack da Labenu.
      <br /><br />
      Foi realizado um E-commerce com as funcionalidades de procurar itens filtrando pro nome, preço mínimo e preço máximo de forma simultanea ou não.
      <br /><br />
      Também é possível adicionar quantos produtos desejar ao carrinho e também removê-los. Ao clicar no carrinho é possível visualizar a quantidade de itens e o valor total.
      <br /><br />
      Você pode testar as funcionalidades desse projeto clicando <a href='https://perpetual-sound.surge.sh' target="_blank" rel="noreferrer">aqui</a>!
    </p>
  },
  {
    title: 'Projeto WhatsLab',
    image: projetoWhatsLab,
    alt: 'print ro projeto WhatsLab',
    description: <p>Esse projeto foi feito com a finalidade de utilizar a renderização de listas em tela para simular um chat de WhastApp.
      <br /><br />
      Quando é aplicado 'eu' no campo de 'Usuário' a mensagem fica na lateral direta e com a coloração verde.
      <br /><br />
      E quando qualquer outro nome de usuário é aplicado, é mostrado antes da mensagem e a mesma fica com a coloração branca no canto esquerdo da tela simulando o envio pelo outro usuário.
      <br /><br />
      Também ocorre a quebra de linha quando o texto é maior que o espaço delimitado para cada usuário.
      <br /><br />
      Você pode testar as suas funcionalidades clicando <a href='https://shallow-fifth.surge.sh' target="_blank" rel="noreferrer">aqui</a>!
    </p>
  }
]


export class Main extends React.Component {
  state = {
    escolha: 'Home',
    projetoClicado: false,
    projeto: ''
  }

  namesMenu2 = [
    { name: 'Home' },
    { name: 'Bio' },
    { name: 'Projects' },
    { name: 'Contact' }
  ]

  goToHome = () => {
    this.setState({ escolha: 'Home' })
  }

  goToBio = () => {
    this.setState({ escolha: 'Bio' })
  }

  goToProjects = () => {
    this.setState({ escolha: 'Projects', projetoClicado: false })
  }

  goToContact = () => {
    this.setState({ escolha: 'Contact' })
  }

  goToProjectTarefas = () => {
    this.setState({ escolha: 'Projects', projetoClicado: true, projeto: 'Projeto Controle de Tarefas' })
    console.log('Controle de Tarefas')
  }

  goToProjectWhatsLab = () => {
    this.setState({ escolha: 'Projects', projetoClicado: true, projeto: 'Projeto WhatsLab' })
    console.log('Projeto WhatsLab')
  }

  goToProjectEcommerce = () => {
    this.setState({ escolha: 'Projects', projetoClicado: true, projeto: 'Projeto Lab E-commerce' })
    console.log('Lab E-commerce')
  }

  renderTela() {
    switch (this.state.escolha) {
      case 'Home':
        return (
          <>
            <SectionHome menus={this.namesMenu2}
              clickHome={this.goToHome}
              clickBio={this.goToBio}
              clickProjects={this.goToProjects}
              clickContact={this.goToContact} ></SectionHome>
            <SectionSobre profilePhoto={profilePhoto} ></SectionSobre>
            <SectionPortfolio projetos={projetos}
              clickProjectTarefas={this.goToProjectTarefas}
              clickProjectWhatsLab={this.goToProjectWhatsLab}
              clickProjectEcommerce={this.goToProjectEcommerce} ></SectionPortfolio>
          </>
        )
      case 'Bio':
        return (
          <>
            <SectionMenu menus={this.namesMenu2}
              clickHome={this.goToHome}
              clickBio={this.goToBio}
              clickProjects={this.goToProjects}
              clickContact={this.goToContact} ></SectionMenu>
            <SectionSobre profilePhoto={profilePhoto} ></SectionSobre>
          </>
        )
      case 'Projects':
        if (!this.state.projetoClicado) {
          return (
            <>
              <SectionMenu menus={this.namesMenu2}
                clickHome={this.goToHome}
                clickBio={this.goToBio}
                clickProjects={this.goToProjects}
                clickContact={this.goToContact} ></SectionMenu>
              <SectionPortfolio projetos={projetos}
                clickProjectTarefas={this.goToProjectTarefas}
                clickProjectWhatsLab={this.goToProjectWhatsLab}
                clickProjectEcommerce={this.goToProjectEcommerce} ></SectionPortfolio>
            </>
          )
        } else {
          return (
            <>
              <SectionMenu menus={this.namesMenu2}
                clickHome={this.goToHome}
                clickBio={this.goToBio}
                clickProjects={this.goToProjects}
                clickContact={this.goToContact} ></SectionMenu>
            </>
          )
        }
      case 'Contact':
        return (
          <>
            <SectionMenu menus={this.namesMenu2}
              clickHome={this.goToHome}
              clickBio={this.goToBio}
              clickProjects={this.goToProjects}
              clickContact={this.goToContact} ></SectionMenu>
          </>
        )
      default:
        return (
          <>
            <SectionMenu menus={this.namesMenu2}
              clickHome={this.goToHome}
              clickBio={this.goToBio}
              clickProjects={this.goToProjects}
              clickContact={this.goToContact} ></SectionMenu>
          </>
        )
    }
  }

  renderProjects() {
    switch (this.state.projetoClicado && this.state.projeto) {
      case 'Projeto Controle de Tarefas':
        return (
          <ProjectDescription photoProject={projetos[0].image}
            title={projetos[0].title}
            description={projetos[0].description}
            alt={projetos[0].alt} />
        )
      case 'Projeto WhatsLab':
        return (
          <ProjectDescription photoProject={projetos[1].image}
            title={projetos[1].title}
            description={projetos[1].description}
            alt={projetos[1].alt} />
        )
      case 'Projeto Lab E-commerce':
        return (
          <ProjectDescription photoProject={projetos[2].image}
            title={projetos[2].title}
            description={projetos[2].description}
            alt={projetos[2].alt} />
        )
      default:
        return true
    }
  }



  render() {
    return (
      <MainContainer>
        {this.renderTela()}
        {this.renderProjects()}
        <SectionMidiasSociais links={socialMediaLinks} ></SectionMidiasSociais>
      </MainContainer>
    );
  }
}
