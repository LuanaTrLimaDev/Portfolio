import React, { useState } from 'react';
import './App.css';
import avatarLua from "./img/avatar-lua.png"
import luanaLima from "./img/luana-lima.jpeg"
import adias from "./img/adias.png"
import maisvalor from "./img/mais-valor.png"
import embraer from "./img/embraer.png"
import { GraduationCap, FacebookLogo, LinkedinLogo, GithubLogo, List } from "phosphor-react";
import { Link } from "react-scroll"


function App() {
  const [showFront, setShowFront] = useState(false);
  const [showBack, setShowBack] = useState(false);
  const [showBanco, setShowBanco] = useState(false);
  const [showFerramenta, setShowFerramenta] = useState(false);
  const [mobile, setMobile] = useState(false);

  return (
    <>
      <div className='engloba-menu-logo'>
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
      <div className="banner">
        <div className="texto">
          <h1>
            <small>Olá meu nome é</small>
            <br />
            Luana
            <br />
            Trigueiro
          </h1>
          <h3 className='subtitulo-banner'>Desenvolvedora FrontEnd</h3>
          <a href="/Luana-Aparecida-Trigueiro-Lima.pdf" target="_blank" download className="btn-curriculo">Conheça meu currículo</a>
        </div>
        <img src={avatarLua} className="avatar-luana" />
      </div>
      <div className="sobre-mim" id="sobre">
        <img src={luanaLima} className="img-lua" />
        <div className='texto-sobre-mim'>
          <h2 className="titulo-sobremim">Sobre mim</h2>
          <p className="info-sobre">Meu nome é Luana Trigueiro, tenho 24 anos, com sete meses de experiência como programadora, atualmente trabalho na Adias Ar Condicionado como Programador FrontEnd Jr , onde desenvolvo aplicações em react fazendo a parte de diagramação, controle de rotas e gerenciamento de estados. Estou no último semestre da faculdade Análise e Desenvolvimento de Sistema, que concluo em junho de 2022 na Estácio. Atualmente moro em São Paulo - SP.</p>
          <p className="formacao"> <GraduationCap size={18} />Formação Acadêmica: Análise e Desenvolvimento de Sistemas – De 01/2020 a 06/2022</p>
        </div>
      </div>
      <div className="meus-conhecimentos" id="conhecimentos">
        <h2 className="titulo-conhecimentos">Conhecimentos</h2>
        <div className="engloba-btn-conhecimentos">
          <button className="btn-conhecimentos" onClick={() => setShowFront(!showFront)}>FrontEnd</button>
          <button className="btn-conhecimentos" onClick={() => setShowBack(!showBack)}>BackEnd</button>
          <button className="btn-conhecimentos" onClick={() => setShowBanco(!showBanco)}>Banco de dados</button>
          <button className="btn-conhecimentos" onClick={() => setShowFerramenta(!showFerramenta)}>Ferramentas</button>
        </div>
        <ul className='lista-conhecimentos'>
          {showFront && <React.Fragment>
            <li className='conhecimento'> HTML</li>
            <li className='conhecimento'> CSS</li>
            <li className='conhecimento'>Bootstrap</li>
            <li className='conhecimento'> FlexBox</li>
            <li className='conhecimento'>JavaScript</li>
            <li className='conhecimento'>Jquery</li>
            <li className='conhecimento'> React</li>
          </React.Fragment>}
          {showBack && <React.Fragment>
            <li className='conhecimento'>PHP</li>
            <li className='conhecimento'>Wordpress</li>
          </React.Fragment>}
          {showBanco && <React.Fragment>
            <li className='conhecimento'>MySQL</li>
          </React.Fragment>}
          {showFerramenta && <React.Fragment>
            <li className='conhecimento'> Git</li>
            <li className='conhecimento'> GitHub</li>
            <li className='conhecimento'> BitBucket</li>
          </React.Fragment>}
        </ul>
      </div>
      <div className="experiencia-profissional" id="experiencia">
        <h2 className="titulo-experiencia">Experiências profissional</h2>
        <div className='empresa'>
          <img src={adias} className="img-empresa" />
          <div className="texto-empresa" >
            <p><strong>ADIAS AR CONDICIONADO</strong></p>
            <p><strong>Cargo:</strong> Programador FrontEnd Jr.</p>
            <p><strong>Tempo de atuação:</strong> De Novembro de 2021 até atualmente</p>
            <p><strong>Funções exercidas:</strong> Desenvolver aplicações em react fazendo desde a parte de diagramação, controle de rotas e gerenciamento de estados.</p>
          </div>
        </div>
        <div className='empresa'>
          <img src={maisvalor} className="img-empresa" />
          <div className="texto-empresa">
            <p><strong>GRUPO MAIS VALOR</strong></p>
            <p><strong>Cargo:</strong> Estágio em programação</p>
            <p><strong>Tempo de atuação:</strong> De Agosto de 2019 até Outubro de 2019 </p>
            <p><strong>Funções exercidas:</strong> Desenvolvimento do site interno EAD em wordpress.</p>
          </div>
        </div>
        <div className='empresa'>
          <img src={embraer} className="img-empresa" />
          <div className="texto-empresa">
            <p><strong>EMBRAER S.A</strong></p>
            <p><strong>Cargo:</strong> Aprendiz SENAI</p>
            <p><strong>Tempo de atuação:</strong> De Janeiro 2014 a Janeiro 2016</p>
            <p><strong>Funções exercidas:</strong> controle e gestão do fluxo de produção, programa de excelência empressarial Embraer P3E.</p>
          </div>
        </div>
      </div>
      <div className="area-contato" id="contato">
        <h2 className="titulo-contato">Contato</h2>
        <div className="texto-contato">
          <p className="info-contato"><strong>Telefone:</strong> (11) 95834-4522 | (11) 95836-3777</p>
          <p className="info-contato"><strong>E-mail:</strong> luana.trigueiro.sjc@gmail.com</p>
          <p className="info-end"><strong>Residência:</strong> São Paulo - SP (próximo a linha 3 do metrô, região da penha)</p>
        </div>
        <button className="btn-whats">Conversar pelo whatsapp</button>
      </div>
      <footer className="footer-direitos">
        <button className="btn-voltar">Voltar ao topo</button>
        <p className="direitos">Luana Trigueiro - 2022 © todos os direitos reservados </p>
      </footer>
    </>
  );
}

export default App;
