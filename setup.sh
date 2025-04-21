#!/bin/bash

# Check if nvm is installed
if ! command -v nvm &> /dev/null; then
    echo "nvm is not installed. Please install nvm first."
    echo "Visit https://github.com/nvm-sh/nvm for installation instructions."
    exit 1
fi

# Use the correct Node.js version
nvm use

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "pnpm is not installed. Installing pnpm..."
    npm install -g pnpm
fi

# Install dependencies
echo "Installing dependencies with pnpm..."
pnpm install

echo "Setup complete! You can now run 'pnpm dev' to start the development server."
