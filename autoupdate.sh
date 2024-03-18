#!/bin/bash

# Description: This script is used to automatically update the bot for the host and reboot the PC after 24 hours.

# Function to restart the bot
restart_bot() {
  echo "Restarting the bot..."
  pkill node
  /home/aram/.nvm/versions/node/v19.9.0/bin/npm run dev &
  echo "Bot restarted."
}

# Initial bot restart
echo "Initial bot restart..."
restart_bot

# Record start time
start_time=$(date +%s)

while true; do
  # Calculate elapsed time in hours
  current_time=$(date +%s)
  elapsed_time=$((current_time - start_time))
  hours_elapsed=$((elapsed_time / 3600))

  # Check if 24 hours have passed
  if [ "$hours_elapsed" -ge 24 ]; then
    echo "24 hours have passed. Initiating reboot..."
    # Use 'sudo' for reboot command; may require password input or NOPASSWD configuration in /etc/sudoers
    sudo reboot
    break # Exit the script
  fi

  # Check if the Github has been updated
  git fetch origin

  # Check for any new changes
  if ! git diff --quiet origin/main; then
    echo "New changes detected! Pulling updates..."
    # Pull the latest changes
    git pull

    # Restart the bot
    restart_bot
  else
    echo "No new changes detected."
  fi

  # Wait for 5 seconds before the next iteration
  sleep 5
done
