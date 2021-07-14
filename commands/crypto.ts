import { Command } from "../types";
import { CoinGeckoClient as CoinGecko } from "coingecko-api-v3";

const CoinGeckoClient = new CoinGecko();

const cmd: Command = {
  name: "!crypto",
  description: "exchange rates for cryptocurrencies",
  execute(msg, args = []) {
    (async () => {
      // First get the valid coin values
      //const coins = (await CoinGeckoClient.coinList({})).map(
      //(obj) => obj.symbol
      //);

      //// Then check if the args are valid
      //if (coins.indexOf(args[0]) === -1 || coins.indexOf(args[1]) === -1) {
      //msg.reply("Invalid crypto currencies");
      //return msg.reply("Usage: !crypto <from> <to>");
      //}
      const data = await CoinGeckoClient.simplePrice({
        ids: args[0],
        vs_currencies: args[1],
      });
      console.log(data);
      await msg.reply(data[args[0]][args[1]]);
    })().catch((err) => {
      msg.reply(JSON.stringify(err));
    });
  },
};

module.exports = cmd;
