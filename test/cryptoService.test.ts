import { describe,
         it,
         expect,
         vi,
         beforeEach
} from "vitest";
import axios from "axios";
import { getCryptoPrice } from "../src/cryptoService";

// Setup console imitaitons
const consoleSpy = vi.spyOn(console, "log").mockImplementation(()=>{});
const errorSpy = vi.spyOn(console, "error").mockImplementation(()=>{});


describe("getCryptoPrice testing", () => {
  // Reset mocks before each test
  beforeEach(()=>{
    consoleSpy.mockClear();
    errorSpy.mockClear();
  });

  it("should display the correct price for a valid coin and currency",
     async ()=>{
      // Mock API response
       vi.spyOn(axios, "get").mockResolvedValueOnce({
         data: {
           bitcoin: {
             usd: 60000
           }
         }
       });

       await getCryptoPrice("bitcoin", "usd");

       expect(consoleSpy).toHaveBeenCalledWith(
         // Checks the console output
         "The current price of bitcoin is: 60000 USD"
       );
       expect(errorSpy).not.toHaveBeenCalled();
     });

  it("should handle coin not found when fetching API data", 
     async ()=>{
       vi.spyOn(axios, "get").mockResolvedValueOnce({
         data: {
           ethereum: {
             usd: 3000,
           }
         }
       });

       await getCryptoPrice("fake_coin", "usd");

       expect(consoleSpy).not.toHaveBeenCalled();
       expect(errorSpy).toHaveBeenCalledWith(
         `Error: Couldn't find price data for "fake_coin" in "usd." Try again.`
       );
     });

  it("should handle currency not found for a valid coin", async () => {
      vi.spyOn(axios, "get").mockResolvedValueOnce({
        data: {
          bitcoin: {
            eur: 55000, // Simulating usd not being available
          },
        },
      });

      await getCryptoPrice("bitcoin", "jpy");

      expect(consoleSpy).not.toHaveBeenCalled();
      expect(errorSpy).toHaveBeenCalledWith(
         `Error: Couldn't find price data for "bitcoin" in "jpy." Try again.`
      );
  });

  it("should handle API call failure", async () => {
      // Mock axios.get to simulate a network error or API downtime
      vi.spyOn(axios, "get").mockRejectedValueOnce(new Error("Network Error"));

      await expect(getCryptoPrice("bitcoin", "usd")).rejects.toThrow(
        "Network Error"
      ); // Expect the function to re-throw the error
      expect(consoleSpy).not.toHaveBeenCalled();
      expect(errorSpy).toHaveBeenCalledWith(
        "Error: Failed to fetch data from API. Please try again."
      );
  });
});
