import { ChainId, Token, Fetcher, WETH, Route, Trade, TokenAmount, TradeType } from "@uniswap/sdk";

import { ethers } from "ethers";

const chainID = ChainId.MAINNET;
const tokenAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const decimals = "18";
const wethAddress = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
const USDCaddr = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";



// Use the mainnet
const network = "homestead";


const provider = ethers.getDefaultProvider(network, {
    // Or if using a project secret:
    infura: {
      projectId: 'b8793be26d374ee59d50deeee3ba67ca',
      projectSecret: '1650e9059e8b41879dab93d7273c5efb',
    }
});

const init = async () =>  {
    const DAI = new Token(chainID, tokenAddress, decimals, "DAI");
    const USDC = new Token(chainID, USDCaddr, decimals, "USDC");
    const weth = WETH[chainID];
    const pair = await Fetcher.fetchPairData(DAI, weth);
    const daiUsdcPair = await Fetcher.fetchPairData(DAI, USDC);
    const usdcWethPair = await Fetcher.fetchPairData(USDC, weth);
    const route = new Route([pair], weth)
    // const route = new Route([daiUsdcPair, usdcWethPair ], weth);

    const trade = new Trade(
        route,
        new TokenAmount(weth, "1000000000000000000"),
        TradeType.EXACT_INPUT
    )

    console.log(trade.executionPrice.toSignificant(6));
    console.log(trade.nextMidPrice.toSignificant(6));
    // const trade = new Trade(route, new TokenAmount(weth, '1000000000000000000'))
}

init();