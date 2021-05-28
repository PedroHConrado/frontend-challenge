import { useCards } from "../../context/useCards";
import { Card } from "../Card";
import { Container } from "./styles";



export function Cards() {
    const cards = useCards()
    console.log(cards)
    return (
        <Container className="card-content">
            {cards.map(card => (
                <Card key={card.id} name={card.name} locale={card.locale} meta={card.meta} />
            ))}
        </Container>

    )

}