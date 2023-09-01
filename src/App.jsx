import { Link, Route, Routes } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => (
  <>
    <Link to={"/"}>
      <div>
        <h1>Adopt Me!</h1>
      </div>
    </Link>
    <Routes>
      <Route path="/" element={<SearchParams />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  </>
);

export default App;
