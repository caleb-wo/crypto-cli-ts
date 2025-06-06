#!/usr/bin/env node // shebang, points to the node interpreter

// IMPORTS
import { Command } from "commander";
import axios from "axios";


// Initialize CLI Program
const program = new Command();

program
  .name("crypto-cli")
  .description("A simple CLI to get cryptocurrency data from CoinGecko.")
  .version("0.0.1");


program
  .command("price")
  .description("Get the price of one or more cryptocurrencies.")
  .argument("<coin>", "The cryptocurrency you want to check.")
  .argument("<currency>", "The currency for the price (e.g. USD)")
  .action(async (coin: string, currency: string) =>{
    try{
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${currency}`
      );

      if(response.data[coin] && response.data[coin][currency]){
        const price = response.data[coin][currency];
        console.log(`The current price of ${coin} is: ${price} ${currency.toUpperCase()}`);
      } else{
        console.error(`Error: Couldn't find price data for "${coin}" in "${currency}." Try again.`);
      }
    } catch (error){
      console.error("Error: Failed to fetch data from API. Please try again.")
    }
  });

  program.parse();
