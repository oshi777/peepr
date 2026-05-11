// Economy Commands with aliases
const economyCommands = [
    { icon: "img:peeper-images/commands/profile.webp", name: "profile [@user]", aliases: "!prof", description: "View your profile or another user's profile" },
    { icon: "img:peeper-images/commands/balance.webp", name: "balance [@user]", aliases: "!bal, !b", description: "Check wallet & bank balance" },
    { icon: "img:peeper-images/commands/plant.webp", name: "plant <type>", aliases: "!pl", description: "Plant crops for passive income" },
    { icon: "img:peeper-images/commands/harvest.webp", name: "harvest [plot_id]", aliases: "!hv", description: "Harvest ready crops" },
    { icon: "img:peeper-images/commands/crops.webp", name: "crops", aliases: "!mycrops", description: "View your growing crops" },
    { icon: "img:peeper-images/commands/boosts.webp", name: "boosts [@user]", aliases: "!boost", description: "View active boosts and remaining time" },
    { icon: "img:peeper-images/commands/daily.webp", name: "daily", aliases: "!d", description: "Claim your daily money reward<br><strong>Reward:</strong> 2,500 coins<br><strong>Cooldown:</strong> 24 hours (30% reduced for Premium)" },
    { icon: "img:peeper-images/commands/work.webp", name: "work", aliases: "!w", description: "Earn money through work<br><strong>Reward:</strong> 1,000 coins<br><strong>Cooldown:</strong> 6 hours (30% reduced for Premium)" },
    { icon: "img:peeper-images/commands/weekly.webp", name: "weekly", aliases: "!wk", description: "Claim your weekly reward<br><strong>Unlocks at:</strong> 10,000 earned peepcash<br><strong>Reward:</strong> 15,000 cash + items (25,000 premium)<br><strong>Cooldown:</strong> 7 days" },
    { icon: "img:peeper-images/commands/monthly.webp", name: "monthly", aliases: "!mo", description: "Claim your monthly reward<br><strong>Unlocks at:</strong> 30,000 earned peepcash<br><strong>Reward:</strong> 60,000 cash + items (100,000 premium)<br><strong>Cooldown:</strong> 30 days" },
    { icon: "img:peeper-images/commands/deposit.webp", name: "deposit [amount|all]", aliases: "!dep", description: "Secure money in bank<br><strong>Usage:</strong> /deposit amount: 1000 or /deposit amount: all" },
    { icon: "img:peeper-images/commands/withdraw.webp", name: "withdraw [amount|all]", aliases: "!with", description: "Access bank funds<br><strong>Usage:</strong> /withdraw amount: 1000 or /withdraw amount: all" },
    { icon: "img:peeper-images/commands/leaderboard.webp", name: "leaderboard", aliases: "!lb, !l", description: "View wealth rankings" },
    { icon: "img:peeper-images/commands/inventorylb.webp", name: "inventorylb", aliases: "!ilb, !il", description: "View top collectors" },
    { icon: "img:peeper-images/commands/farmlb.webp", name: "farmlb", aliases: "!flb, !fl", description: "View farming profit leaderboard" },
    { icon: "img:peeper-images/commands/shop.webp", name: "shop", aliases: "!s", description: "Browse available items" },
    { icon: "img:peeper-images/commands/pay.webp", name: "pay @user amount [cover_fee]", aliases: "!p", description: "Transfer money (min 100, 5% fee)<br><strong>Usage:</strong> /pay user: @User amount: 1000 cover_fee: True/False" },
    { icon: "img:peeper-images/commands/buy.webp", name: "buy item [quantity]", aliases: "!by", description: "Purchase shop items" },
    { icon: "img:peeper-images/commands/sell.webp", name: "sell item [quantity]", aliases: "!sl", description: "Sell items for cash (50% value, 100% for Premium)" },
    { icon: "img:peeper-images/commands/inventory.webp", name: "inventory [@user]", aliases: "!inv, !i", description: "View collected items" },
    { icon: "img:peeper-images/commands/use.webp", name: "use item [quantity]", aliases: "!u", description: "Activate items from your inventory" },
    { icon: "img:peeper-images/commands/give.webp", name: "give @user item [quantity]", aliases: "!g", description: "Give an item to another user" },
    { icon: "img:peeper-images/commands/rob.webp", name: "rob @user", aliases: "!r", description: "Attempt to steal from another user<br><strong>Cooldown:</strong> 18 hours (30% reduced for Premium)" },
    { icon: "img:peeper-images/commands/fishing.webp", name: "fishing", aliases: "!fish", description: "Catch collectibles (requires rod)<br><strong>Cooldown:</strong> 4 hours (30% reduced for Premium)" },
    { icon: "img:peeper-images/commands/mining.webp", name: "mining", aliases: "!mine", description: "Mine minerals (requires pickaxe)<br><strong>Cooldown:</strong> 5 hours (30% reduced for Premium)" },
    { icon: "img:peeper-images/commands/detect.webp", name: "detect", aliases: "!det", description: "Find hidden items (requires detector)<br><strong>Cooldown:</strong> 5 hours (30% reduced for Premium)" },
    { icon: "img:peeper-images/commands/premium.webp", name: "premium", aliases: "!prem", description: "View premium benefits and status" },
    { icon: "img:peeper-images/commands/premiumdaily.webp", name: "premium_daily", aliases: "!pd", description: "Premium users: enhanced daily rewards<br><strong>Reward:</strong> 3,750 coins + bonus item<br><strong>Cooldown:</strong> 24 hours (30% reduced for Premium)" },
    { icon: "img:peeper-images/commands/redeem.webp", name: "redeem <code>", aliases: "!redeemcode", description: "Activate premium with a code" },
    { icon: "img:peeper-images/commands/peepmine.webp", name: "peepmine", aliases: "!pm", description: "Manage your PeepMine and earn peepcoins" },
    { icon: "img:peeper-images/commands/peepminelb.webp", name: "peepminelb", aliases: "!pmlb, !minelb", description: "View the top PeepMine leaderboard" },
    { icon: "img:peeper-images/commands/referral.webp", name: "referral", aliases: "!ref", description: "View your referral code and stats" },
    { icon: "img:peeper-images/commands/referralrewards.webp", name: "referral_rewards", aliases: "!refrewards", description: "View referral reward tiers" },
    { icon: "img:peeper-images/commands/join.webp", name: "join <code>", aliases: "!j", description: "Join using a referral code" },
    { icon: "img:peeper-images/commands/claimreferral.webp", name: "claim_referral", aliases: "!claimref", description: "Claim your referral rewards" }
];

// Game Commands with aliases
const gameCommands = [
    { icon: "img:peeper-images/commands/rockpaperscissors.webp", name: "rockpaperscissors [@user] [bet]", aliases: "!rps", description: "Rock Paper Scissors<br><strong>Cooldown:</strong> 15 seconds" },
    { icon: "img:peeper-images/commands/blackjack.webp", name: "blackjack [bet]", aliases: "!bj", description: "Blackjack card game<br><strong>Cooldown:</strong> 15 seconds" },
    { icon: "img:peeper-images/commands/tictactoe.webp", name: "tictactoe [@user] [bet]", aliases: "!ttt", description: "Classic Tic Tac Toe<br><strong>Cooldown:</strong> 15 seconds" },
    { icon: "img:peeper-images/commands/connect4.webp", name: "connect4 [@user] [bet]", aliases: "!c4", description: "Connect Four<br><strong>Cooldown:</strong> 15 seconds" },
    { icon: "img:peeper-images/commands/guessgame.webp", name: "guess_game [bet]", aliases: "!guess, !gtn", description: "Guess the Number<br><strong>Cooldown:</strong> 15 seconds<br>7 attempts to guess correctly" },
    { icon: "img:peeper-images/commands/hangman.webp", name: "hangman [bet]", aliases: "!hm", description: "Word guessing game<br><strong>Cooldown:</strong> 15 seconds" }
];

// Utility Commands with aliases
const utilityCommands = [
    { icon: "img:peeper-images/commands/help.webp", name: "help", aliases: "!h, !cmd, !cmds", description: "Shows all available commands" },
    { icon: "img:peeper-images/commands/vote.webp", name: "vote", aliases: "!v", description: "Vote for the bot and earn streak bonuses! (12h cooldown per platform)" },
    { icon: "img:peeper-images/commands/badges.webp", name: "badges", aliases: "!badge", description: "Show how to earn badges" },
    { icon: "img:peeper-images/commands/bug.webp", name: "bug", aliases: "!report", description: "Report a Bug and earn rewards" },
    { icon: "img:peeper-images/commands/announcement.webp", name: "announcement", aliases: "!ann", description: "Read the latest announcement" },
    { icon: "img:peeper-images/commands/ping.webp", name: "ping", aliases: "-", description: "Check bot latency and response time" },
    { icon: "img:peeper-images/commands/settings.webp", name: "settings", aliases: "!set", description: "Manage your notification settings<br>Plant alerts, vote reminders, cooldown DMs, rob alerts, mine full alerts" },
    { icon: "img:peeper-images/commands/cooldowns.webp", name: "cooldowns", aliases: "!cd, !cds", description: "Check your command cooldowns and when they expire" }
];
