
export async function getCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = response.data()
    return data;
}