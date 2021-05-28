import closeImg from '../../assets/mdi_close.svg'
import editImg from '../../assets/mdi_edit.svg'
import pais from '../../assets/eua.png'
import { Container } from "./styles";

interface CardProps {
    key: number;
    name: string;
    locale: string;
    meta: string;
}


export function Card({ name, locale, meta }: CardProps) {

    return (
        <Container>
            <div className="img-button">
                <img src={pais} alt="pais" />

                <button>
                    <img className="edit" src={editImg} alt="Fechar" />
                </button>

                <button>
                    <img className="close" src={closeImg} alt="Editar" />
                </button>

                <h2>{name}</h2>
            </div>

            <div className="meta">
                <p>Local: {locale}</p>
                <p>Meta: {meta}</p>
            </div>
        </Container>
    )

}