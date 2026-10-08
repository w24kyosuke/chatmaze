#!/bin/bash
set -e

# ANSI colors for better output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}[*] Compiling the validation script...${NC}"
g++ -std=c++11 test/check_scc.cpp -o test/check_scc_bin

echo -e "${BLUE}[*] Running SCC validation on deck.js...${NC}"
./test/check_scc_bin src/deck.js
