#!/bin/bash

while true; do
  # Fetch latest changes from GitHub
  git fetch origin
  # Check if there are any new changes
  if ! git diff --quiet origin/main; then
    # Pull the latest changes
    git pull
    # Restart the bot
    # Use the appropriate command to stop your bot here if needed
    pkill node
    npm start &
  fi
  # Wait for 60 seconds before checking again
  sleep 60
done