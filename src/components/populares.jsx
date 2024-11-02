export default function Populares(){
    return(<section className="populares">
        <h2 className="populares__title">Populares</h2>
        <ul className="populares__cards">
            <li className="populares__cards_item">
                <img src="first_populares.png" alt=" imagem ramen de frango" className="populares__cards_title_img"  />
                <h3 className="populares__cards_item_title">Ramen de frango</h3>
                <p className="populares__cards_item_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="populares__cards_item_preco">R$ 30</p>
            </li>
            <li className="populares__cards_item">
                <img src="second_populares.png" alt="imagem ramen apimentado" className="populares__cards_title_img" />
                <h3 className="populares__cards_item_title">Ramen apimentado</h3>
                <p className="populares__cards_item_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="populares__cards_item_preco">R$ 50</p>
            </li>
            <li className="populares__cards_item">
                <img src="three_populares.png" alt="imagem ramen tradicional" className="populares__cards_title_img" />
                <h3 className="populares__cards_item_title">Ramen tradicional</h3>
                <p className="populares__cards_item_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="populares__cards_item_preco">R$ 30</p>
            </li>
        </ul>
    </section>)
}