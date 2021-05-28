import { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import { Container } from "./styles";

export function Search() {
    const [countries, setCountries] = useState([])

    const [name, setName] = useState('')
    const [locale, setLocale] = useState('')
    const [meta, setMeta] = useState('')


    useEffect(() => {
        axios.get('http://localhost:3333/countries')
            .then((response) => setCountries(response.data))
    }, [])

    function handleCreateNewCard(event: FormEvent) {

        event.preventDefault();


        axios.post('http://localhost:3333/saveCards', { name, locale, meta })

        setName('');
        setLocale('');
        setMeta('');
    }

    return (
        <Container onSubmit={handleCreateNewCard}>
            <label className="select">
                País
                    <select
                    id="pais"
                    name="pais"
                    value={name}
                    onChange={event => setName(event.target.value)}
                >
                    {countries.map((country) => {
                        const { name } = country
                        return <option key={name}>{name}</option>
                    })}
                </select>
            </label>

            <label className="local">
                Local
                    <input
                    type="text"
                    name="local"
                    id="local"
                    placeholder="Digite o local que deseja conhecer"
                    value={locale}
                    onChange={event => setLocale(event.target.value)}
                />
            </label>

            <label className="meta">
                Meta
                    <input
                    type="text"
                    name="data"
                    id="data"
                    placeholder="mês/ano"
                    value={meta}
                    onChange={event => setMeta(event.target.value)}
                />
            </label>

            <button type="submit">Adicionar</button>
        </Container>
    )
}