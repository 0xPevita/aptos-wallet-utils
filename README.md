# aptos-wallet-utils

> Lightweight utility functions for Aptos wallet interactions and account management.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Aptos](https://img.shields.io/badge/Aptos-blue?style=flat-square)

## Features

- Generate new Aptos wallets
- Check account balances
- Validate Aptos addresses
- APT ↔ Octas conversion
- Address truncation for UI display

## Installation

```bash
npm install aptos-wallet-utils
```

## Usage

```typescript
import { generateWallet, getAccountBalance, isValidAptosAddress } from "aptos-wallet-utils";

// Generate a new wallet
const wallet = generateWallet();
console.log(wallet.address); // 0x1234...

// Check balance
const balance = await getAccountBalance(wallet.address);
console.log(`${balance} APT`);

// Validate address
console.log(isValidAptosAddress("0x1")); // true
```

## API

| Function | Description |
|----------|-------------|
| `generateWallet()` | Generate a new Ed25519 Aptos wallet |
| `getAccountBalance(address)` | Get APT balance for an address |
| `truncateAddress(address, chars?)` | Shorten address for display |
| `isValidAptosAddress(address)` | Validate Aptos address format |
| `aptToOctas(apt)` | Convert APT to Octas |
| `octasToApt(octas)` | Convert Octas to APT |

## License

MIT
