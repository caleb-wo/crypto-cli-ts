#!/usr/bin/env node

// IMPORTS
import { Command } from "commander";
import { getCryptoPrice } from "./cryptoService";

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
  .action(async (coin: string, currency: string) => {
    try {
      await getCryptoPrice(coin, currency);
    } catch (error) {
      console.error("Error: An unexpected error occurred.");
    }
  });

program.parse();
