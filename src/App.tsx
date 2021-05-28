import { Cards } from "./components/Cards";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { CardsProvider } from "./context/useCards";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <CardsProvider>
      <GlobalStyle />
      <Header />
      <Search />
      <Cards />
    </CardsProvider>
  );
}


