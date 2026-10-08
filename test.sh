#!/bin/bash
set -e

# ANSI colors for better output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}[*] Building deck.js from YAML...${NC}"
npm run build

echo -e "${BLUE}[*] Compiling the validation script...${NC}"
g++ -std=c++11 test/validate_graph.cpp -o test/validate_graph_bin

echo -e "${BLUE}[*] Running graph validation on deck.js...${NC}"
./test/validate_graph_bin src/deck.js
