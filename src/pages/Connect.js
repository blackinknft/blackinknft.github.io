import React, {useEffect, useState} from 'react';
import { Container, Snackbar } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';
import styled from 'styled-components';

import { WalletDialogButton } from '@solana/wallet-adapter-material-ui';
import { useWallet } from '@solana/wallet-adapter-react';

import { getParsedNftAccountsByOwner, isValidSolanaAddress, createConnectionConfig } from "@nfteyez/sol-rayz";
import { Connection, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";

const ConnectButton = styled(WalletDialogButton)`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 5px;
  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

function Connect() {

    const wallet = useWallet();

    const [publicKey, setPublicKey] = useState(null)
    const [nfts, setNfts] = useState([])
    const [hasBlackInk, setHasBlacInk] = useState([])

    useEffect(() => {
        localStorage.removeItem("verified_key");
    }, [])
 
    useEffect(() => {
        verifyHolding();
    }, [nfts])

    useEffect(() => {
        setPublicKey(wallet.publicKey)
    }, [wallet.publicKey])

    useEffect(() => {
        async function getNft() {
            try {
                const address = publicKey;
                const connect =  createConnectionConfig(clusterApiUrl("devnet"));
         
                const nftArray = await getParsedNftAccountsByOwner({
                    publicAddress: address,
                    connection: connect,
                    serialization: true,
                  });
    
                setNfts(nftArray);
    
                return nftArray
    
              } catch (error) {
                    console.log("Error thrown, while fetching NFTs", error.message);
                    return [];
              }
        }

        getNft();

    }, [publicKey])


    // const getNfts = async () => {
    //     try {
    //         // const address = "38wbniAswchcZu913arzNZSFNzC46uj2tL174JPbjT21";
    //         const address = "2i3ANPvhABfF1oGi1BWv7Dp9Hr4q8YfLTR7VH9G9B1yZ";
    //         const connect =  createConnectionConfig(clusterApiUrl("devnet"));
    //         const valid_address = isValidSolanaAddress(address);
    //         console.log('valid_address ' + valid_address)
    //         console.log('connect ', connect)
    //         const nftArray = await getParsedNftAccountsByOwner({
    //             publicAddress: address,
    //             connection: connect,
    //             serialization: true,
    //           });

    //         setNfts(nftArray);

    //         return nftArray

    //       } catch (error) {
    //             console.log("Error thrown, while fetching NFTs", error.message);
    //             return [];
    //       }
    // }

    const setCookie = () => {
        localStorage.setItem("verified_key", 1);
      };

    const verifyHolding = async () => {
        const datas = nfts;
        const hasBlackInk = datas.some((nft) => {
            return nft.mint === process.env.REACT_APP_MINT_ID}
        )

        if (hasBlackInk) {
            setCookie();
            setHasBlacInk(true);
        }
    }

    const [alertState, setAlertState] = useState({
        open: false,
        message: '',
        severity: undefined,
      });

    const renderButton = () => {
        if (!wallet.connected) {
            return <ConnectButton>Connect Wallet</ConnectButton>
        }
        else {
            console.log(localStorage.getItem("verified_key"))

            if (!hasBlackInk) {
                return <div>Verified failed</div>
            }
            else {
                return <div>You already connect to your wallet successfully. Open your black ink mint bot and start minting</div>
            }
        }
    }

    return (
    <Container style={{ marginTop: 100 }}>
      <Container maxWidth="xs" style={{ position: 'relative' }}>
        <Paper
          style={{ padding: 24, backgroundColor: '#151A1F', borderRadius: 6 }}
        > 
          {/* {!wallet.connected ? (
            <ConnectButton>Connect Wallet</ConnectButton>
          ) : (
            <>
              <div>You already connect to your wallet. Open your black ink mint bot and start minting</div>
            </>
          )} */}
          {renderButton()}
        </Paper>
      </Container>

      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Connect;
