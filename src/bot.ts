import os
import random
from telegram.ext import Updater, CommandHandler

# Define the Telegram bot token
TOKEN = os.environ.get('TELEGRAM_TOKEN')

# Define the five random commands
def start(update, context):
    context.bot.send_message(chat_id=update.effective_chat.id, text="Hi there! I'm a random bot.")

def flip(update, context):
    flip_result = random.choice(['Heads', 'Tails'])
    context.bot.send_message(chat_id=update.effective_chat.id, text=f"The coin landed on {flip_result}!")

def roll(update, context):
    roll_result = random.randint(1, 6)
    context.bot.send_message(chat_id=update.effective_chat.id, text=f"You rolled a {roll_result}.")

def quote(update, context):
    quotes = [
        "Be yourself; everyone else is already taken. - Oscar Wilde",
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams. - Dr. Seuss"
    ]
    random_quote = random.choice(quotes)
    context.bot.send_message(chat_id=update.effective_chat.id, text=random_quote)

def fact(update, context):
    facts = [
        "A group of flamingos is called a flamboyance.",
        "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
        "In Switzerland, it is illegal to own just one guinea pig because they are social animals and need companionship."
    ]
    random_fact = random.choice(facts)
    context.bot.send_message(chat_id=update.effective_chat.id, text=random_fact)

# Set up the Telegram bot updater and dispatcher
updater = Updater(token=TOKEN, use_context=True)
dispatcher = updater.dispatcher

# Add the command handlers for the random commands
dispatcher.add_handler(CommandHandler('start', start))
dispatcher.add_handler(CommandHandler('flip', flip))
dispatcher.add_handler(CommandHandler('roll', roll))
dispatcher.add_handler(CommandHandler('quote', quote))
dispatcher.add_handler(CommandHandler('fact', fact))

# Start the bot
updater.start_polling()
