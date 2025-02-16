/** @type {import('./$types').PageServerLoad} */
export async function load() {
  try {
    const response = await fetch("https://valorant-api.com/v1/agents");
    const data = await response.json();
    let agents = data.data;

    return {
      agents: agents,
    };
  } catch (err) {
    console.log(err);

    return {
      error: "Error: Could not load agents.",
    };
  }
}
