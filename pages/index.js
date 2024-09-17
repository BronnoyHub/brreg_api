import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css"; // Import CSS-modulen

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Hold styr på gjeldende side
  const [totalPages, setTotalPages] = useState(1); // Hold styr på totalt antall sider
  const [expandedResult, setExpandedResult] = useState(null); // Hold styr på utvidet resultat
  const resultsPerPage = 20; // Antall resultater per side
  const paginationLimit = 10; // Maks antall pagineringsknapper som vises

  // Debounce function to avoid excessive API calls
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Function to fetch data from BRREG API with pagination
  const fetchEnheter = async (searchQuery, page = 1) => {
    if (!searchQuery) {
      setResults([]);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://data.brreg.no/enhetsregisteret/api/enheter?navn=${searchQuery}&page=${page}&size=${resultsPerPage}`
      );
      if (!response.ok) {
        throw new Error("Feil ved henting av data fra BRREG");
      }
      const data = await response.json();
      setResults(data._embedded?.enheter || []);
      setTotalPages(data.page.totalPages); // Set total pages from API response
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Create a debounced version of the fetchEnheter function
  const debouncedFetchEnheter = debounce(fetchEnheter, 500);

  // useEffect to trigger search as the user types or when the page changes
  useEffect(() => {
    debouncedFetchEnheter(query, currentPage);
  }, [query, currentPage]);

  // Håndter bytte av side
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Håndter utvidelse av resultat
  const handleToggleExpand = (organisasjonsnummer) => {
    if (expandedResult === organisasjonsnummer) {
      setExpandedResult(null); // Hvis allerede utvidet, skjul det
    } else {
      setExpandedResult(organisasjonsnummer); // Utvid valgt resultat
    }
  };

  // Generer pagineringsknapper med begrenset visning
  const generatePagination = () => {
    const startPage = Math.max(
      1,
      currentPage - Math.floor(paginationLimit / 2)
    );
    const endPage = Math.min(startPage + paginationLimit - 1, totalPages);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={
            i === currentPage ? styles.activePageButton : styles.pageButton
          }
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Finn enheter fra Brønnøysundregistrene
        </h1>
        <p className={styles.heroSubtitle}>
          Bruk vår søkefunksjon for å finne informasjon om enheter registrert i
          Brønnøysundregistrene mens du skriver.
        </p>
        <div className={styles.searchContainer}>
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCurrentPage(1); // Tilbakestill til side 1 ved nytt søk
            }}
            placeholder="Søk på enhetsnavn"
            className={styles.searchInput}
          />
        </div>
      </div>
      <p className={styles.heroSmal}>Tjenesten levert av NASDAG media & IT</p>
      {/* Loading and Error Handling */}
      {loading && <p className={styles.loading}>Laster...</p>}
      {error && <p className={styles.error}>Feil: {error}</p>}

      {/* Results Section */}
      {results.length > 0 ? (
        <div className={styles.results}>
          <h2 className={styles.resultsTitle}>Søkeresultater:</h2>
          <ul className={styles.resultsList}>
            {results.map((enhet) => (
              <li
                key={enhet.organisasjonsnummer}
                className={styles.resultItem}
                onClick={() => handleToggleExpand(enhet.organisasjonsnummer)} // Klikk for å utvide/skjule
              >
                <h3>{enhet.navn}</h3>
                <p>Organisasjonsnummer: {enhet.organisasjonsnummer}</p>
                {expandedResult === enhet.organisasjonsnummer && (
                  <div className={styles.expandedInfo}>
                    <p>
                      Overordnet enhet:{" "}
                      {enhet.overordnetEnhet || "Ingen overordnet enhet"}
                    </p>
                    <p>
                      Organisasjonsform:{" "}
                      {enhet.organisasjonsform?.kode ||
                        "Ingen organisasjonsform tilgjengelig"}
                    </p>
                    <p>
                      Antall ansatte:{" "}
                      {enhet.antallAnsatte || "Ikke tilgjengelig"}
                    </p>
                    <p>
                      Hjemmeside:{" "}
                      {enhet.hjemmeside || "Ingen hjemmeside tilgjengelig"}
                    </p>
                    <p>
                      Kommune (postadresse):{" "}
                      {enhet.postadresse?.kommune ||
                        "Ingen kommune tilgjengelig"}
                    </p>
                    <p>
                      Kommunenummer (postadresse):{" "}
                      {enhet.postadresse?.kommunenummer ||
                        "Ingen kommunenummer tilgjengelig"}
                    </p>
                    <p>
                      Registreringsdato:{" "}
                      {enhet.registreringsdatoEnhetsregisteret ||
                        "Ikke registrert"}
                    </p>
                    <p>
                      Registrert i Merverdiavgiftsregisteret:{" "}
                      {enhet.registrertIMvaregisteret ? "Ja" : "Nei"}
                    </p>
                    <p>
                      Registrert i Foretaksregisteret:{" "}
                      {enhet.registrertIForetaksregisteret ? "Ja" : "Nei"}
                    </p>
                    <p>
                      Registrert i Stiftelsesregisteret:{" "}
                      {enhet.registrertIStiftelsesregisteret ? "Ja" : "Nei"}
                    </p>
                    <p>
                      Registrert i Frivillighetsregisteret:{" "}
                      {enhet.registrertIFrivillighetsregisteret ? "Ja" : "Nei"}
                    </p>
                    <p>
                      Næringskode 1:{" "}
                      {enhet.naeringskode1?.kode ||
                        "Ingen næringskode 1 tilgjengelig"}
                    </p>
                    <p>
                      Næringskode 2:{" "}
                      {enhet.naeringskode2?.kode ||
                        "Ingen næringskode 2 tilgjengelig"}
                    </p>
                    <p>
                      Næringskode 3:{" "}
                      {enhet.naeringskode3?.kode ||
                        "Ingen næringskode 3 tilgjengelig"}
                    </p>
                    <p>
                      Hjelpeenhetskode:{" "}
                      {enhet.hjelpeenhetskode?.kode ||
                        "Ingen hjelpeenhetskode tilgjengelig"}
                    </p>
                    <p>
                      Kommune (forretningsadresse):{" "}
                      {enhet.forretningsadresse?.kommune ||
                        "Ingen kommune tilgjengelig"}
                    </p>
                    <p>
                      Kommunenummer (forretningsadresse):{" "}
                      {enhet.forretningsadresse?.kommunenummer ||
                        "Ingen kommunenummer tilgjengelig"}
                    </p>
                    <p>
                      Stiftelsesdato:{" "}
                      {enhet.stiftelsesdato ||
                        "Ingen stiftelsesdato tilgjengelig"}
                    </p>
                    <p>
                      Sektorkode:{" "}
                      {enhet.institusjonellSektorkode?.kode ||
                        "Ingen sektorkode tilgjengelig"}
                    </p>
                    <p>Konkurs: {enhet.konkurs ? "Ja" : "Nei"}</p>
                    <p>
                      Under avvikling: {enhet.underAvvikling ? "Ja" : "Nei"}
                    </p>
                    <p>
                      Under tvangsavvikling eller tvangsoppløsning:{" "}
                      {enhet.underTvangsavviklingEllerTvangsopplosning
                        ? "Ja"
                        : "Nei"}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Pagination Controls */}
          <div className={styles.pagination}>
            {/* Vis "Forrige"-knapp hvis vi ikke er på første side */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={styles.pageButton}
              disabled={currentPage === 1}
            >
              Forrige
            </button>

            {/* Generer pagineringsknappene */}
            {generatePagination()}

            {/* Vis "Neste"-knapp hvis vi ikke er på siste side */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={styles.pageButton}
              disabled={currentPage === totalPages}
            >
              Neste
            </button>
          </div>
        </div>
      ) : (
        !loading &&
        currentPage === totalPages && (
          <div>
            <p className={styles.noResults}>
              Det er ikke flere resultater å hente.
            </p>
            {/* Behold paginering */}
            <div className={styles.pagination}>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className={styles.pageButton}
                disabled={currentPage === 1}
              >
                Forrige
              </button>
              {generatePagination()}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className={styles.pageButton}
                disabled={currentPage === totalPages}
              >
                Neste
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}
