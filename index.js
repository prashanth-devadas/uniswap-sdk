import { ChainId, Token, Fetcher, WETH, Route, Trade, TokenAmount } from "@uniswap/sdk";

const chainID = ChainId.MAINNET;
const tokenAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const decimals = "18";
const wethAddress = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";

const init = async () =>  {
    const DAI = new Token(chainID, tokenAddress, decimals, "DAI");
    const weth = WETH[chainID];
    const pair = await Fetcher.fetchPairData(DAI, weth);
    // const route = new Route([pair], weth)
    const route = new Route([pair], weth);

    console.log(route.midPrice.toSignificant(6));
    console.log(route.midPrice.invert().toSignificant(6));
    // const trade = new Trade(route, new TokenAmount(weth, '1000000000000000000'))
}

init();