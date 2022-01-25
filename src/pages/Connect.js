import React, {useEffect, useState} from 'react';
import { Container, Snackbar } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';
import styled from 'styled-components';
import Cookies from 'universal-cookie';

import { WalletDialogButton } from '@solana/wallet-adapter-material-ui';
import { useWallet } from '@solana/wallet-adapter-react';

import { getParsedNftAccountsByOwner, createConnectionConfig } from "@nfteyez/sol-rayz";
import { clusterApiUrl } from "@solana/web3.js";

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
    const [hasBlackInk, setHasBlackInk] = useState(false)

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
                const connect =  createConnectionConfig(clusterApiUrl(process.env.REACT_APP_SOLANA_NETWORK));
         
                const nftArray = await getParsedNftAccountsByOwner({
                    publicAddress: address,
                    connection: connect,
                    serialization: true,
                  });
    
                setNfts(nftArray);
    
              } catch (error) {
                    console.log("Error thrown, while fetching NFTs", error.message);
              }
        }

        getNft();

    }, [publicKey])


    const setCookie = (value) => {
        const cookies = new Cookies();
        let t = new Date();
        t.setSeconds(t.getSeconds() + 1800);
        cookies.set('verified', value, {expires: t});
      };

    const verifyHolding = async () => {
       
        const hasBlackInk = nfts.some((nft) => {
            return nft.mint === process.env.REACT_APP_MINT_ID}
        )

        console.log("Here", hasBlackInk)

        if (hasBlackInk) {
            setCookie(1);
            setHasBlackInk(true);
        }
        else {
          setCookie(0);
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
            
            if (!hasBlackInk) {
                return <div>Verified failed</div>
            }
            else {
                return <div id="verified">You already connect to your wallet successfully. Open your black ink mint bot and start minting</div>
            }
        }
    }

    return (
    <Container style={{ marginTop: 100 }}>
      <Container maxWidth="xs" style={{ position: 'relative' }}>
        <Paper
          style={{ padding: 24, backgroundColor: '#151A1F', borderRadius: 6 }}
        > 
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
