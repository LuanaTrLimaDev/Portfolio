import React, { useState } from 'react';
import './App.css';
import adias from "./img/adias.png"
import maisvalor from "./img/mais-valor.png"
import simpro from "./img/simpro.png"
import { FacebookLogo, LinkedinLogo, GithubLogo } from "phosphor-react";
import { Link } from "react-scroll"
import luanaavatar from "../src/img/luana.png"
import macbook from "../src/img/macbook.jpg"
import detalhe from "../src/img/datalhe.png"
import curriculoLuana from "../src/img/curriculo.pdf"
function App() {

  return (
    <>
      <div className='navbar-manu'>
        <div className='main-menu'>
          <h3 className="logo">L</h3>
          <nav className='menu'>
            <Link className='link-menu' to='sobre' smooth={true} duration={1000}>Sobre mim</Link>
            <Link className='link-menu' to='conhecimentos' smooth={true} duration={1000}>Conhecimentos</Link>
            <Link className='link-menu' to='experiencia' smooth={true} duration={1000}>Experiência profissional</Link>
            <Link className='link-menu' to='contato' smooth={true} duration={1000}>Contato</Link>
          </nav>
          <ul className="redes-sociais">
            <li className='menu-item'><a target='_blank' className='menu-link' href='https://www.facebook.com/luana.trigueiro.3' rel='noreferrer'><FacebookLogo size={30} /></a></li>
            <li className='menu-item'><a target='_blank' className='menu-link' href='https://www.linkedin.com/in/luana-trigueiro-60b095178/' rel='noreferrer'><LinkedinLogo size={30} /></a></li>
            <li className='menu-item'><a target='_blank' className='menu-link' href='https://github.com/LuanaTrLimaDev' rel='noreferrer'><GithubLogo size={30} /></a></li>
          </ul>
        </div>
        <div className='portfolio-img'>
          <h3 className='titulo-page'>Luana Trigueiro</h3>
          <div className='lua-img'>
            <img src={luanaavatar} className="img-luana" />
          </div>
          <h4 className='title-resumo'>Analista de desenvolvimento frontEnd</h4>
          <p className='text-resumo'>Com pouco mais de um dois anos de experiência como programadora, atualmente trabalho na Simpro Publicações e Teleprocessamento como Analista de desenvolvimento FrontEnd Jr. Sou formada em Análise e Desenvolvimento de Sistema, pela Estácio. Atualmente moro em São Paulo - SP.</p>
        </div>
      </div>


      <div className="sobre-contato" id="sobre">
        <div className='sobre-mim'>
          <h2 className="titulo-geral">Sobre mim</h2>
          <p className="text-geral">Meu nome é Luana, tenho 25 anos, e um pouco mais de um dois anos de experiência como programadora, atualmente trabalho na Simpro publicações e teleprocessamento como Analista de desenvolvimento FrontEnd Jr, realizando todo o frontend utilizando html, css e bootstrap para layout de modelo responsivo em angular, controle de rotas e consumo de API. Sou formada em Análise e Desenvolvimento de Sistema, pela Estácio. Atualmente moro em São Paulo - SP.</p>

          <a href={curriculoLuana} download className='btn-curriculo'>Baixe meu currículo</a>
        </div>
        <div className='contato'>
          <img src={macbook} className="macbook-contato" />
          <div>
            <h2 className='titulo-geral'>Contato</h2>
            <p className="text-contato"><strong>Telefone: </strong>(11) 95834-4522</p>
            <p className="text-contato"><strong>E-mail: </strong>luana.trigueiro.sjc@gmail.com</p>
            <p className="text-contato"><strong>Residência:</strong> São Paulo - SP (próximo a linha 3 do metrô, região da Penha)</p>
          </div>
        </div>
      </div>
      <div className="conhecimentos-experiencia" id="conhecimentos">
        <div>
          <h2 className='titulo-geral'>Conhecimentos</h2>
          <div className='conhecimentos'>
            <div className='list-conhecimentos'>
              <img src={detalhe} className="img-detalhes" />
              <h3 className='title-tecnologia'>FrontEnd</h3>
              <ul>
                <li>Html</li>
                <li>Css</li>
                <li>JavaScript</li>
                <li>Jquery</li>
                <li>React</li>
                <li>Angular</li>
                <li>TypeScript</li>
                <li>Styled Components</li>
                <li>Bootstrap</li>
                <li>Sass</li>
                <li>wordpress</li>
              </ul>
            </div>
            <div className='list-conhecimentos'>
              <img src={detalhe} className="img-detalhes" />
              <h3 className='title-tecnologia'>BackEnd</h3>
              <ul>
                <li>PHP</li>
                <li>Node Js</li>
                <li>API REST</li>
              </ul>
            </div>
            <div className='list-conhecimentos'>
              <img src={detalhe} className="img-detalhes" />
              <h3 className='title-tecnologia'>Ferramentas</h3>
              <ul>
                <li>Bitbucket</li>
                <li>GitHub</li>
                <li>GIT</li>
                <li>Json</li>
                <li>Scrum</li>
                <li>Figma</li>
                <li>Kanban</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="experiencia-profissional" id="experiencia">
        <h2 className="titulo-geral">Experiências profissional</h2>
        <div className='empresa'>
          <img src={simpro} className="img-empresa" />
          <div className="texto-empresa">
            <p><strong>SIMPRO Publicações e Teleprocessamento </strong></p>
            <p><strong>Cargo: </strong>Analista de desenvolvimento frontEnd</p>
            <p><strong>Tempo de atuação: </strong>Junho 2022 - atualmente </p>
            <p><strong>Funções exercidas: </strong>Desenvolvimento de aplicações utilizando html, css e bootstrap para layout de modelo responsivo em angular, controle de rotas e consumo de API</p>
          </div>
        </div>
        <div className='empresa'>
          <img src={adias} className="img-empresa" />
          <div className="texto-empresa" >
            <p><strong>Adias ar condicionado</strong></p>
            <p><strong>Cargo: </strong>Programador FrontEnd Jr.</p>
            <p><strong>Tempo de atuação: </strong>Novembro de 2021 até Abril 2022</p>
            <p><strong>Funções exercidas: </strong>Desenvolvimento aplicações em react fazendo desde a parte de diagramação, controle de rotas e gerenciamento de estados.</p>
          </div>
        </div>
        <div className='empresa'>
          <img src={maisvalor} className="img-empresa" />
          <div className="texto-empresa">
            <p><strong>Grupo mais valor</strong></p>
            <p><strong>Cargo: </strong>Estágio em programação</p>
            <p><strong>Tempo de atuação: </strong>Agosto de 2019 até Outubro de 2019 </p>
            <p><strong>Funções exercidas: </strong>Desenvolvimento de portal interno de educação a distância em wordpress, utilizando bootstrap</p>
          </div>
        </div>
      </div>
      <footer className="footer-direitos">
        <p className="direitos">Luana Trigueiro - 2022 © todos os direitos reservados </p>
      </footer>
    </>
  );
}

export default App;
