# DO NOT TOUCH THIS FILE!

# Description: This script is used to automatically update the bot for the host.

#!/bin/bash

# Restart the bot once before entering the update loop
echo "Initial bot restart..."
npm run dev &
echo "Bot restarted."

while true; do
  # Check if the Github has been updated
  git fetch origin Test

  # Check if there are any new changes
  if ! git diff --quiet origin/Test; then
    echo "New changes detected! Pulling updates..."
    # Pull the latest changes
    git pull origin Test

    echo "Restarting the bot..."
    # Restart the bot
    npm run dev &
    echo "Bot restarted."
  else
    echo "No new changes detected."
  fi

  sleep 5
done
