import { Link, Route, Routes } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => (
  <>
    <header>
      <Link to={"/"}>Adopt Me!</Link>
    </header>
    <Routes>
      <Route path="/" element={<SearchParams />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  </>
);

export default App;
