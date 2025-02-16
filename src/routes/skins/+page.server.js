/** @type {import('./$types').PageServerLoad} */
export async function load() {
  try {
    const response = await fetch("https://valorant-api.com/v1/weapons/skins");
    const data = await response.json();
    let skins = data.data;

    skins = skins.filter(
      (skin) => !skin.displayName.toLowerCase().startsWith("standard")
    );

    skins = skins.filter(
      (skin) => skin.displayName.toLowerCase() !== "melee"
    )

    return {
      skins: skins,
    };
  } catch (err) {
    console.log(err);

    return {
      error: "Error: Could not load skins.",
    };
  }
}
