const TelegramBot = require('node-telegram-bot-api');

const token = "8846139785:AAEMX4lTXxHrOL8lqT95zO6Qjo6WZZtrd6E";
const bot = new TelegramBot(token, { polling: true });

// START MESSAGE
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id,
`🤖 Welcome to Nexus Bot

Use /menu to open dashboard`
    );
});

// MENU
bot.onText(/\/menu/, (msg) => {
    bot.sendMessage(msg.chat.id,
`📋 MAIN MENU

📱 /num - Lookup
🚗 /rc - Vehicle Info
👤 /admin - Admin Panel`
    );
});

// BASIC COMMANDS
bot.onText(/\/num/, (msg) => {
    bot.sendMessage(msg.chat.id, "📱 Number lookup active (demo mode)");
});

bot.onText(/\/rc/, (msg) => {
    bot.sendMessage(msg.chat.id, "🚗 Vehicle lookup active (demo mode)");
});

bot.onText(/\/admin/, (msg) => {
    bot.sendMessage(msg.chat.id, "🔐 Admin panel opened (demo)");
});
