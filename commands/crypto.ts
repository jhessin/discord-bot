import { Command } from "../types";
import { CoinGeckoClient as CoinGecko } from "coingecko-api-v3";

const CoinGeckoClient = new CoinGecko();

module.exports = new Command(
  "!crypto",
  "exchange rates for cryptocurrencies",
  (msg, ...args) => {
    (async () => {
      const [ids, vs_currencies] = args;
      const data = await CoinGeckoClient.simplePrice({
        ids,
        vs_currencies,
      });
      console.log(data);
      await msg.reply(data[ids][vs_currencies]);
    })().catch((err) => {
      msg.reply(JSON.stringify(err));
    });
  }
);
