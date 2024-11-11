import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__list">
        <ul className="footer__infos">
          <li className="footer__info__title">
            <Link href="#" className="footer__info_text_title">
              Produto
            </Link>
          </li>
          <li className="footer__info">
            <Link href="#" className="footer__info_text">
              Todos
            </Link>
          </li>
          <li className="footer__info">
            <Link href="#" className="footer__info_text">
              Sushi
            </Link>
          </li>
          <li className="footer__info">
            <Link href="#" className="footer__info_text">
              Premium
            </Link>
          </li>
        </ul>
        <ul className="footer__infos">
          <li className="footer__info__title">
            <Link href="#" className="footer__info_text_title">
              Informações
            </Link>
          </li>
          <li className="footer__info">
            <Link href="#" className="footer__info_text">
              Faq
            </Link>
          </li>
          <li className="footer__info">
            <Link href="#" className="footer__info_text">
              Blog
            </Link>
          </li>
          <li className="footer__info">
            <Link href="#" className="footer__info_text">
              Suport
            </Link>
          </li>
        </ul>
        <ul className="footer__infos">
          <li className="footer__info__title">
            <Link href="#" className="footer__info_text_title">
              Empresa
            </Link>
          </li>
          <li className="footer__info">
            <Link href="#" className="footer__info_text">
              Sobre nós
            </Link>
          </li>
          <li className="footer__info">
            <Link href="#" className="footer__info_text">
              Local
            </Link>
          </li>
          <li className="footer__info">
            <Link href="#" className="footer__info_text">
              Contatos
            </Link>
          </li>
        </ul>
        <ul className="footer__infos">
          <li className="footer__info__title">
            <Link href="#" className="footer__info_text_title">
              Social
            </Link>
          </li>
          <li className="footer__info">
            <Link href="#" className="footer__info_text">
              Facebook
            </Link>
          </li>
          <li className="footer__info">
            <Link href="#" className="footer__info_text">
              Instagram
            </Link>
          </li>
          <li className="footer__info">
            <Link href="#" className="footer__info_text">
              Twitter
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer__divider"> </div>
      <div className="footer__rodape">
        <Link href={"#"}>
          <img
            src="./logo.svg"
            crossOrigin="anonymous"
            alt="imagem do logo do estabelecimento foodjp"
            className="footer__image_logo"
          />
        </Link>
        <div className="footer__social">
          <Link href={"#"}>
            <img
              src="./facebook.svg"
              crossOrigin="anonymous"
              alt=""
              className="footer__social_img"
            />
          </Link>
          <Link href={"#"}>
            <img
              src="./instagram.svg"
              crossOrigin="anonymous"
              alt=""
              className="footer__social_img"
            />
          </Link>
          <Link href={"#"}>
            <img
              src="./twitter.svg"
              crossOrigin="anonymous"
              alt=""
              className="footer__social_img"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
