import lugarImg from '../../assets/Lugares.svg';
import { Container } from './styles';

export function Header() {

    return (
        <Container>
            <img src={lugarImg} alt="Lugares" />
        </Container>
    )
}