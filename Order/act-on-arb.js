require('dotenv').config();
const { response } = require('express');
const { default: got } = require('got/dist/source');
const arb = require('./../arbitrage');
const Binance = require('node-binance-api');

// const getDepth = async () => {
//     const resp1 = await got(`https://api.binance.us/api/v3/depth?symbol=${symbValJ[d.lv1]}`)
//     const eInfo1 = JSON.parse(resp1.body)
//     const resp2 = await got(`https://api.binance.us/api/v3/depth?symbol=${symbValJ[d.lv2]}`)
//     const eInfo2 = JSON.parse(resp2.body)
//     const resp3 = await got(`https://api.binance.us/api/v3/depth?symbol=${symbValJ[d.lv3]}`)
//     const eInfo3 = JSON.parse(resp3.body)
//     const askDepth1 = eInfo1.asks, bidDepth1 = eInfo1.bids
//     console.log(bidDepth1, askDepth1)
//     const askDepth2 = eInfo2.asks, bidDepth2 = eInfo2.bids
//     console.log(bidDepth2, askDepth2)
//     const askDepth3 = eInfo3.asks, bidDepth3 = eInfo3.bids
//     console.log(bidDepth3, askDepth3)
//   }
function actOnArb() {
  let positiveProfitPercentageList = [];
  opportunityList.push(d.value);
  const profitTarget = 0.05;
  const fees = 0.075;
  const profitableOpportunity = positiveProfitPercentageList[-1] - fees >= profitTarget;

  if (profitableOpportunity) {
    // getDepth();

    let order1 = `${symValJ[d.lv1]}, ${quantity}, ${symValJ['bidPrice']}, { type: 'LIMIT' }, (error, reponse) => {
        console.info("Limit Buy response", response);
        console.info("order id: " + response.orderId);
        }`;
    let order2 = `${symValJ[d.lv2]}, ${quantity}, ${symbValJ['bidPrice']}, { type: 'LIMIT' }, (error, reponse) => {
            console.info("Limit Buy response", response);
            console.info("order id: " + response.orderId);
        }`;
    let order3 = `${symValJ[d.lv3]}, ${quantity}, ${symValJ['bidPrice']}, { type: 'LIMIT' }, (error, reponse) => {
            console.info("Limit Buy response", response);
            console.info("order id: " + response.orderId);
        }`;
    const binance = new Binance().options({
      APIKEY: process.env.APIKEY,
      APISECRET: process.env.SECRET,
    });
    let buyLimitOrder = (pair, quantity, price) => binance.buy(pair, quantity, price);
    let sellLimitOrder = (pair, quantity, price) => binance.sell(pair, quantity, price);

    buyLimitOrder(binance.buy(order1));
    sellLimitOrder(binance.sell(order2));
    sellLimitOrder(binance.sell(order3));
  }
}
