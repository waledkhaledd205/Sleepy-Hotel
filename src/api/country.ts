

export async function country() {
  try  {
const res = await fetch("https://restcountries.com/v2/all?fields=name,flag") ;
    const countries = await res.json();
    return countries ;
  } catch  {
throw new Error ("Failed to fetch data") ;}

  }
