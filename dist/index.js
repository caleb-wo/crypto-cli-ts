#!/usr/bin/env node 
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTS
const commander_1 = require("commander");
const axios_1 = __importDefault(require("axios"));
// Initialize CLI Program
const program = new commander_1.Command();
program
    .name("crypto-cli")
    .description("A simple CLI to get cryptocurrency data from CoinGecko.")
    .version("0.0.1");
program
    .command("price")
    .description("Get the price of one or more cryptocurrencies.")
    .argument("<coin>", "The cryptocurrency you want to check.")
    .argument("<currency>", "The currency for the price (e.g. USD)")
    .action((coin, currency) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${currency}`);
        if (response.data[coin] && response.data[coin][currency]) {
            const price = response.data[coin][currency];
            console.log(`The current price of ${coin} is: ${price} ${currency.toUpperCase()}`);
        }
        else {
            console.error(`Error: Couldn't find price data for "${coin}" in "${currency}." Try again.`);
        }
    }
    catch (error) {
        console.error("Error: Failed to fetch data from API. Please try again.");
    }
}));
program.parse();
