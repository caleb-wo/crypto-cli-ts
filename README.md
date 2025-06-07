# Overview

This project was my introduction to Typescript and unit testing with Vitest. It was such a fun time.  

I've recently grown intested in crypto and have started trading. I thought it'd be cool to make a tool I can use to check the price for certain coins. This is an **incredibly** simple CLI tool that takes a coin name and a currency (e.g. bictoin and usd) and gets the current price.


[Software Demo Video](https://youtu.be/WY-Gh8C6YeM)

# Development Environment

Of course, the main tool was Node.js and Typescript. However, instead of using npm as my package manager, I used pnpm to save space and boost efficiency.
I also used CoinGecko's API to fetch the data on the specified cryptocurrency. Along with that I used Vitest, Vite's native testing framework. I used it to make mock API responses and to spy on console logging and errors. This enabled me to efficiently and effectively test the business logic of my program.

As mentioned, I used Typescript. However, I was able to enhance my project by using the Commander and Axios libraries. Commander simplifies command-line arguement parsing. Axios brings more powerful and simple HTTP procedures, whiched helped with testing.

# Useful Websites

- [Typescript Docs](https://www.typescriptlang.org/docs/)
- [Vitest Guide](https://vitest.dev/guide/)
- [Google Gemini](https://gemini.google.com/); (*for learning only*)

# Future Work

- **Item 1**: I'd love to get more data. This tool is incredibly simple. Part of the reason I did this project was just so I could try Vitest! I want to get more data for a coin and add more parameters.
- **Item 2**: Adding a user interface. 
- **Item 3**: Integrating with a users trading data. 
