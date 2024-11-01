"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import * as multisig from "@sqds/multisig"
import { Connection, Keypair, PublicKey, Transaction, clusterApiUrl } from "@solana/web3.js";
import { createSquadsWallet } from "../utils/createSquadsWallet";
import CustomButton from "./ui/CustomButton";

export default function CreateWallet({ onWalletInfo }: { onWalletInfo: (walletInfo: { signature: string, multisig: string, vault: string }) => void }) {
    const {publicKey, connected, sendTransaction} = useWallet();

    const handleClick = async () => {
        try{    
            // console.log("clicked");
            const connection = new Connection(`https://api.devnet.solana.com`);
            if (!connected) return;
            if (!publicKey) return;

            const {tx, multisigPda} = await createSquadsWallet(publicKey);

            const txHash = await sendTransaction(tx, connection, {
                skipPreflight: true,
            });

            console.log(txHash);
            console.log(multisigPda.toBase58());

            const multisigVault = multisig.getVaultPda({
                multisigPda,
                index: 0,
                programId: multisig.PROGRAM_ID,
            })[0];

            const solBalance = await connection.getBalance(multisigVault);
 
            console.log(solBalance);
            console.log(multisigVault.toBase58());

            onWalletInfo({ signature: txHash, multisig: multisigPda.toBase58(), vault: multisigVault.toBase58() });
        } catch (error) {
            console.error(error);
        }
    }   

    return (
        <CustomButton onClick={handleClick} className="bg-none border-[1px] border-blueColor w-3/4 md:w-full">
            Create Wallet
        </CustomButton>
    )   
}