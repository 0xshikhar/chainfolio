'use client';

import * as React from 'react';
import { RainbowKitProvider, getDefaultWallets, connectorsForWallets } from '@rainbow-me/rainbowkit';
import { argentWallet, trustWallet, ledgerWallet } from '@rainbow-me/rainbowkit/wallets';
// import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { configureChains, createClient, useAccount, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";

import { optimism, baseGoerli, optimismGoerli,sepolia } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

// import { RainbowKitSiweNextAuthProvider } from '@rainbow-me/rainbowkit-siwe-next-auth';
// import { SessionProvider } from 'next-auth/react';
// import type { Session } from 'next-auth';
// import { AppProps } from 'next/app';

const { chains, provider } = configureChains(
    [
        optimism,sepolia,
        baseGoerli,
        optimismGoerli,
        ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [optimismGoerli] : []),
    ],
    [alchemyProvider({ apiKey: String(process.env.ALCHEMY_API_KEY) }), publicProvider()]
);

const projectId = String(process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID);
console.log("projectId", projectId)

const { wallets } = getDefaultWallets({
    appName: 'ChainFolio',
    projectId,
    chains,
});

const demoAppInfo = {
    appName: 'ChainFolio App',
};

const connectors = connectorsForWallets([
    ...wallets,
    {
        groupName: 'Other',
        wallets: [
            argentWallet({ projectId, chains }),
            trustWallet({ projectId, chains }),
            ledgerWallet({ projectId, chains }),
        ],
    },
]);

// const wagmiConfig = createConfig({
//     autoConnect: true,
//     connectors,
//     publicClient,
//     webSocketPublicClient,
// });

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    // connectors: [
    //     new MetaMaskConnector({ chains }),
    //     new CoinbaseWalletConnector({
    //         chains,
    //         options: {
    //             appName: 'wagmi',
    //         },
    //     }),
    //     new WalletConnectConnector({
    //         chains,
    //         options: {
    //             projectId: '...',
    //         },
    //     }),
    //     new InjectedConnector({
    //         chains,
    //         options: {
    //             name: 'Injected',
    //             shimDisconnect: true,
    //         },
    //     }),
    // ],
    provider,
});
export function Providers({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);
    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains} appInfo={demoAppInfo}>
                {mounted && children}
            </RainbowKitProvider>
        </WagmiConfig>
    );
}



// import "@rainbow-me/rainbowkit/styles.css";
// import * as React from 'react';


// import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import { configureChains, createClient, useAccount, WagmiConfig } from "wagmi";
// import {
//     mainnet,
//     polygon,
//     optimism,
//     arbitrum,
//     goerli,
//     polygonMumbai,
//     optimismGoerli,
//     arbitrumGoerli,
// } from "wagmi/chains";
// import { alchemyProvider } from "wagmi/providers/alchemy";
// import { publicProvider } from "wagmi/providers/public";
// import { useRouter } from "next/router";

// const { chains, provider } = configureChains(
//     [
//         mainnet,
//         goerli,
//         polygon,
//         polygonMumbai,
//         optimism,
//         optimismGoerli,
//         arbitrum,
//         arbitrumGoerli,
//     ],
//     [alchemyProvider({ apiKey: String(process.env.ALCHEMY_API_KEY) }), publicProvider()]
// );
// const projectId = 'YOUR_PROJECT_ID';

// const { connectors } = getDefaultWallets({
//     appName: "My Alchemy DApp",
//     projectId,
//     chains,
// });

// const wagmiClient = createClient({
//     autoConnect: true,
//     connectors,
//     provider,
// });

// export { WagmiConfig, RainbowKitProvider };

// export default function Provider({ children }: { children: React.ReactNode }) {
//     const router = useRouter()
//     const account = useAccount({
//         onConnect({ address, connector, isReconnected }) {
//             if (!isReconnected) router.reload();
//         },
//     });
//     const [mounted, setMounted] = React.useState(false);
//     React.useEffect(() => setMounted(true), []);
//     return (
//         <WagmiConfig client={wagmiClient}>
//             <RainbowKitProvider
//                 modalSize="compact"
//                 chains={chains}
//             >
//                 {mounted && children}
//             </RainbowKitProvider>
//         </WagmiConfig>
//     );
// }



// // for wagmi - viem based integration

// import * as React from 'react';
// import {
//     RainbowKitProvider,
//     getDefaultWallets,
//     connectorsForWallets,
// } from '@rainbow-me/rainbowkit';
// import {
//     argentWallet,
//     trustWallet,
//     ledgerWallet,
// } from '@rainbow-me/rainbowkit/wallets';
// import { configureChains, createConfig, WagmiConfig } from 'wagmi';
// import {
//     mainnet,
//     polygon,
//     optimism,
//     arbitrum,
//     zora,
//     goerli,
// } from 'wagmi/chains';
// import { publicProvider } from 'wagmi/providers/public';

// const { chains, publicClient, webSocketPublicClient } = configureChains(
//     [
//         mainnet,
//         polygon,
//         optimism,
//         arbitrum,
//         zora,
//         ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
//     ],
//     [publicProvider()]
// );

// const projectId = String(process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID);

// const { wallets } = getDefaultWallets({
//     appName: 'RainbowKit demo',
//     projectId,
//     chains,
// });

// const demoAppInfo = {
//     appName: 'Rainbowkit Demo',
// };

// const connectors = connectorsForWallets([
//     ...wallets,
//     {
//         groupName: 'Other',
//         wallets: [
//             argentWallet({ projectId, chains }),
//             trustWallet({ projectId, chains }),
//             ledgerWallet({ projectId, chains }),
//         ],
//     },
// ]);

// const wagmiConfig = createConfig({
//     autoConnect: true,
//     connectors,
//     publicClient,
//     webSocketPublicClient,
// });


// export { WagmiConfig, RainbowKitProvider };

// export function Providers({ children }: { children: React.ReactNode }) {
//     const [mounted, setMounted] = React.useState(false);
//     React.useEffect(() => setMounted(true), []);
//     return (
//         <WagmiConfig config={wagmiConfig}>
//             <RainbowKitProvider chains={chains} appInfo={demoAppInfo}>
//                 {mounted && children}
//             </RainbowKitProvider>
//         </WagmiConfig>
//     );
// }
