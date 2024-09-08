import React from 'react';
import '../CSS/Sobre.css';
import sobreImage from '../assets/backgruond.jpg';  

const Sobre = () => {
    return (
        <section className="sobre-container">
            <div className="sobre-content">
                <h1 className='hsob'>Sobre Nós</h1>
                <p>
                    Bem-vindo ao <span className="highlight1">SynthicaSports</span>, o seu portal para tudo sobre esportes. Nosso objetivo é trazer as últimas notícias, análises e conteúdos sobre o mundo dos esportes, desde as modalidades tradicionais até as competições mais modernas.
                </p>
                <p>
                    Fundada com a missão de conectar fãs ao redor do mundo, <span className="highlight1">SynthicaSports</span> oferece uma plataforma dinâmica para amantes de esportes explorarem suas paixões e descobrirem novas histórias e eventos. Nossa equipe é formada por entusiastas dedicados que trabalham para trazer a você conteúdo de qualidade e de fácil acesso.
                </p>
                <p>
                    Navegue pelo nosso site para saber mais sobre nossos <a href="/produtos" className="sobre-link">produtos</a> ou entre em <a href="/contato" className="sobre-link">contato</a> conosco para tirar dúvidas. Estamos sempre à disposição para ajudar!
                </p>
            </div>
            <div className="sobre-image-container">
                <img src={sobreImage} alt="Sobre nós" className="sobre-image"/>
            </div>
        </section>
    );
};

export default Sobre;
