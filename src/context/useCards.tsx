import axios from 'axios';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface CardsProviderProps {
    children: ReactNode;
}

interface Card {
    name: string;
    locale: string;
    meta: string;
    id: number
}


const CardsContext = createContext<Card[]>([]);

export function CardsProvider({ children }: CardsProviderProps) {
    const [cards, setCards] = useState<Card[]>([])

    useEffect(() => {
        axios.get('http://localhost:3333/saveCards')
            .then((response) => setCards(response.data))
    }, [])

    return (
        <CardsContext.Provider value={cards}>
            {children}
        </CardsContext.Provider>
    )
}

export function useCards() {
    const context = useContext(CardsContext)
    return context
}