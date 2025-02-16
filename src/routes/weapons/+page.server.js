/** @type {import('./$types').PageServerLoad} */
export async function load() {
  try {
    const response = await fetch("https://valorant-api.com/v1/weapons");
    const data = await response.json();
    let weapons = data.data;

    return {
      weapons: weapons,
    };
  } catch (err) {
    console.log(err);

    return {
      error: "Error could not load weapons.",
    };
  }
}
