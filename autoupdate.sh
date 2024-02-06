#!/bin/bash

while true; do
  # Fetch latest changes from GitHub
  git fetch origin

  # Check if there are any new changes
  if ! git diff --quiet origin/main; then
    echo "New changes detected! Pulling updates..."
    # Pull the latest changes
    git pull

    echo "Restarting the bot..."
    # Restart the bot
    # Use the appropriate command to stop your bot here if needed
    pkill node
    npm run dev &
    echo "Bot restarted."
  else
    echo "No new changes detected."
  fi
done
