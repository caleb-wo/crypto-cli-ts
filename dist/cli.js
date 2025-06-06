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
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTS
const commander_1 = require("commander");
const cryptoService_1 = require("./cryptoService");
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
        yield (0, cryptoService_1.getCryptoPrice)(coin, currency);
    }
    catch (error) {
        console.error("Error: An unexpected error occurred.");
    }
}));
