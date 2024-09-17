export async function fetchBrregEnheter(query) {
  const url = `https://data.brreg.no/enhetsregisteret/api/enheter?navn=${query}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data from BRREG");
  }

  const data = await response.json();
  return data;
}
