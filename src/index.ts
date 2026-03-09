import { Account, Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

export const createAptosClient = (network: Network = Network.TESTNET) =>
  new Aptos(new AptosConfig({ network }));

export const generateWallet = () => {
  const account = Account.generate();
  return {
    address: account.accountAddress.toString(),
    privateKey: account.privateKey.toString(),
    publicKey: account.publicKey.toString(),
  };
};

export const getAccountBalance = async (address: string): Promise<number> => {
  const aptos = createAptosClient();
  try {
    const resources = await aptos.getAccountResources({ accountAddress: address });
    const coin = resources.find((r) => r.type === "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>");
    if (!coin) return 0;
    return Number((coin.data as any).coin.value) / 1e8;
  } catch { return 0; }
};

export const truncateAddress = (address: string, chars = 4): string =>
  `${address.slice(0, chars + 2)}...${address.slice(-chars)}`;

export const isValidAptosAddress = (address: string): boolean =>
  /^0x[0-9a-fA-F]{1,64}$/.test(address);

export const aptToOctas = (apt: number): number => Math.floor(apt * 1e8);
export const octasToApt = (octas: number): number => octas / 1e8;
