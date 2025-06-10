const accessToken =
  "ccdd8da75f5190fc99fa023adf1ef6181bf980e0259c15e7beabae64246d6d181767f23f4293f9f51660f118bca7bce7";
const lockdownToken = "s5MNWtjTM5TvCMkAzxov";

const headers = {
  "Content-Type": "application/json",
  "x-access-token": accessToken,
  "x-lockdown-token": lockdownToken,
  origin: "https://stake.com",
  referer: "https://stake.com/casino/games/mines",
};

const maxGameCount = 20; // Max total games to play
const baseAmount = 2; // Starting bet
const minesCount = 3;
const gemsCount = 3;
const onLoseMultiplier = 3;

let currentBetAmount = baseAmount;
let continuesLoseCount = 0;
let successCount = 0;
let failureCount = 0;
let totalProfit = 0;
let totalLoss = 0;

// Wait helper
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// Board state trackers
const frequencyMap = new Array(25).fill(0);
const history = [];

let staticSample = generateTimeBasedShuffledSample();
let sampleIndex = 0;

// Time-based shuffler
function generateTimeBasedShuffledSample() {
  const arr = Array.from({ length: 25 }, (_, i) => i);
  const seed = Date.now() ^ Math.floor(performance.now());

  for (let i = arr.length - 1; i > 0; i--) {
    const timeEntropy = (seed >> i % 8) & 0xff;
    const random = Math.floor(Math.random() * 1000);
    const j = (random ^ timeEntropy ^ i) % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

function getRandomTiles(count = 3) {
  if (count > 25) throw new Error("Max allowed is 25 tiles");

  if (sampleIndex + count > staticSample.length) {
    staticSample = generateTimeBasedShuffledSample();
    sampleIndex = 0;
  }

  const result = staticSample.slice(sampleIndex, sampleIndex + count);
  sampleIndex += count;

  result.forEach((n) => frequencyMap[n]++);
  history.push(result);

  return result;
}

// Show board in console
const displayBoard = (gems) => {
  const size = 5;
  const top = "┌" + "─────┬".repeat(size - 1) + "─────┐";
  const mid = "├" + "─────┼".repeat(size - 1) + "─────┤";
  const bottom = "└" + "─────┴".repeat(size - 1) + "─────┘";

  console.log("\n" + top);
  for (let row = 0; row < size; row++) {
    let line = "│";
    for (let col = 0; col < size; col++) {
      const index = row * size + col;
      const cell = gems.includes(index) ? " 💎 " : " ░░ ";
      line += `${cell}│`;
    }
    console.log(line);
    if (row < size - 1) console.log(mid);
  }
  console.log(bottom + "\n");
};

// Simulate one game
async function playOneGame(gameIndex) {
  try {
    console.log(`🎮 Game #${gameIndex + 1} | Bet Amount: ₹${currentBetAmount}`);

    const betRes = await fetch("https://stake.com/_api/casino/mines/bet", {
      method: "POST",
      headers,
      body: JSON.stringify({
        currency: "inr",
        amount: currentBetAmount,
        minesCount,
      }),
    }).then((r) => (r.ok ? r.json() : Promise.reject(r)));

    const bet = betRes?.minesBet;
    if (!bet?.active) throw new Error("Bet failed.");

    const tiles = getRandomTiles(gemsCount);
    displayBoard(tiles);

    for (const tile of tiles) {
      const moveRes = await fetch("https://stake.com/_api/casino/mines/next", {
        method: "POST",
        headers,
        body: JSON.stringify({ fields: [tile] }),
      }).then((r) => (r.ok ? r.json() : Promise.reject(r)));

      const move = moveRes?.minesNext;
      if (!move?.active) throw new Error(`Move failed at tile ${tile}`);
    }

    const cashoutRes = await fetch(
      "https://stake.com/_api/casino/mines/cashout",
      {
        method: "POST",
        headers,
        body: JSON.stringify({ identifier: bet.id }),
      }
    ).then((r) => (r.ok ? r.json() : Promise.reject(r)));

    const cashout = cashoutRes?.minesCashout;

    if (!cashout?.active) {
      const winAmount = cashout?.payoutMultiplier * currentBetAmount;
      successCount++;
      continuesLoseCount = 0;
      totalProfit += winAmount - currentBetAmount;
      currentBetAmount = baseAmount; // Reset
      console.log(
        `✔️ Game #${gameIndex + 1}: Cashout success | Won: ₹${winAmount.toFixed(
          2
        )} | Resetting bet`
      );
    } else {
      failureCount++;
      continuesLoseCount++;
      totalLoss += currentBetAmount;
      currentBetAmount *= onLoseMultiplier; // onLoseMultiplier
      console.log(
        `❌ Game #${
          gameIndex + 1
        }: Cashout failed | Next bet: ₹${currentBetAmount} | Loss Multiplier: ${onLoseMultiplier}`
      );
    }
  } catch (err) {
    failureCount++;
    continuesLoseCount++;
    totalLoss += currentBetAmount;
    currentBetAmount *= onLoseMultiplier;
    console.log(`❌ Game #${gameIndex + 1} failed:`, err.message || err);
  }
}

// Run full game session
(async () => {
  let i = 0;

  while (true) {
    if (continuesLoseCount >= 5) {
      console.log(`🚫 Stopping game: Reached 5 consecutive losses.`);
      break;
    }

    if (i >= maxGameCount && totalProfit - totalLoss > 0) {
      console.log(`✅ Stopping: Reached max games and you're in profit.`);
      break;
    }

    await playOneGame(i);
    i++;

    const randomDelay = Math.floor(Math.random() * 10000) + 1000;
    console.log(`⏳ Waiting ${randomDelay / 1000}s before next game...`);
    await delay(randomDelay);
  }

  console.log(`\n🎯 Session Completed`);
  console.log(`✅ Wins: ${successCount}`);
  console.log(`❌ Losses: ${failureCount}`);
  console.log(`📈 Total Profit: ₹${totalProfit.toFixed(2)}`);
  console.log(`📉 Total Loss: ₹${totalLoss.toFixed(2)}`);
  console.log(`💰 Net: ₹${(totalProfit - totalLoss).toFixed(2)}`);
})();
