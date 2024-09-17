import { useState } from "react";
import { fetchBrregEnheter } from "../lib/brreg";

export default function EnheterPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const data = await fetchBrregEnheter(query);
      setResults(data._embedded.enheter || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Søk etter enheter i Brønnøysundregistrene</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Søk på navn"
      />
      <button onClick={handleSearch}>Søk</button>

      {results.length > 0 && (
        <ul>
          {results.map((enhet) => (
            <li key={enhet.organisasjonsnummer}>
              <p>{enhet.navn}</p>
              <p>Organisasjonsnummer: {enhet.organisasjonsnummer}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
