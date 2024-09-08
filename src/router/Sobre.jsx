import React from 'react';
import '../CSS/Sobre.css';
import sobreImage from '../assets/imgsobre.jpg';  

const Sobre = () => {
    return (
        <section className="sobre-container">
            <div className="sobre-content">
                <h1 className='hsob'>Sobre Nós</h1>
                <p>
                    Bem-vindo à <span className="highlight1">SynthicaSports</span>, a sua loja definitiva para tudo relacionado a esportes! Aqui, você encontra as melhores ofertas em equipamentos esportivos, roupas e acessórios para todas as modalidades. Seja para aprimorar seu desempenho ou para começar uma nova atividade, temos o que você precisa.
                </p>
                <p>
                    Nossa missão na <span className="highlight1">SynthicaSports</span> é fornecer produtos de alta qualidade que atendem às suas necessidades esportivas. Com uma equipe apaixonada por esportes, garantimos que você receba apenas o melhor em termos de performance e estilo. Explore nossa seleção e descubra produtos que vão elevar o seu jogo.
                </p>
                <p>
                    Navegue pelo nosso site para conferir nossa linha de <a href="/produtos" className="sobre-link">produtos</a> ou entre em <a href="/contato" className="sobre-link">contato</a> conosco para qualquer dúvida ou assistência. Estamos aqui para ajudar você a encontrar exatamente o que precisa!
                </p>
            </div>
            <div className="sobre-image-container">
                <img src={sobreImage} alt="Sobre nós" className="sobre-image"/>
            </div>
        </section>
    );
};

export default Sobre;
