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
exports.getCryptoPrice = getCryptoPrice;
const axios_1 = __importDefault(require("axios"));
function getCryptoPrice(coin, currency) {
    return __awaiter(this, void 0, void 0, function* () {
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
            throw error; // Re-throw to allow higher-level error handling if needed
        }
    });
}
