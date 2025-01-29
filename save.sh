#!/bin/bash

# Check if a commit message was provided
if [ -z "$1" ]; then
  echo "Error: Commit message is required."
  echo "Usage: ./git_push.sh \"Your commit message\""
  exit 1
fi

# Get the commit message from the first argument
COMMIT_MESSAGE="$1"

# Add all changes
echo "Adding changes..."
git add .

# Commit changes
echo "Committing changes with message: \"$COMMIT_MESSAGE\""
git commit -m "$COMMIT_MESSAGE"

# Push changes to the repository
echo "Pushing changes..."
git push

echo "Done!"
