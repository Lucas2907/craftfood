export default function Hero(){
    return(
        <section className="hero">
            <img src="./hero__img.png" crossOrigin="anonymous" alt="sushi" className="hero__img" />
            <div className="hero__container">
                <h3 className="hero__title">Sobre nós</h3>
                <h2 className="hero__subtitle">Feita de forma
                tradicional</h2>
                <p className="hero__text">Cada prato &#34;feita de forma tradicional&#34; é uma ode à excelência. Desde o meticuloso corte do sashimi até a preparação delicada do sushi, cada etapa é uma reverência à herança culinária do Japão.</p>
            </div>
        </section>
    )
}