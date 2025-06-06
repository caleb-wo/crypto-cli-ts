import axios from "axios";

export async function getCryptoPrice(
  coin: string,
  currency: string
): Promise<void> {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${currency}`
    );

    if (response.data[coin] && response.data[coin][currency]) {
      const price = response.data[coin][currency];
      console.log(
        `The current price of ${coin} is: ${price} ${currency.toUpperCase()}`
      );
    } else {
      console.error(
        `Error: Couldn't find price data for "${coin}" in "${currency}." Try again.`
      );
    }
  } catch (error) {
    console.error("Error: Failed to fetch data from API. Please try again.");
    throw error; // Re-throw to allow higher-level error handling if needed
  }
}
