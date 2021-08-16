import { ChainId, Token, Fetcher, WETH } from "@uniswap/sdk";

const chainID = ChainId.MAINNET;
const tokenAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const decimals = "18";
const wethAddress = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";

const DAI = new Token(chainID, tokenAddress, decimals, "DAI");
const weth = new Token(chainID, wethAddress, decimals, "WETH");



