import React, { useState, useEffect } from 'react'
import swal from 'sweetalert'

const WalletConnect = ({ defaultAccountChange }) => {
    const [defaultAccount, setDefaultAccount] = useState(null)
    const [connectButtonText, setConnectButtonText] = useState("Connect Wallet")

    useEffect(() => {
        changingAccount();
    }, [defaultAccount])

    const changingAccount = async () => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', () => {
                connectWalletHandler()
            })
        }
    }

    const connectWalletHandler = async () => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(async (result) => {
                    await accountChangeHandler(result[0]);
                    defaultAccountChange(result[0]);
                    setConnectButtonText(`( ${result[0].slice(0, 4)}...${result[0].slice(-4)} )`);
                })
        } else {
            swal('Error', 'Need to install MetaMask!', 'error')
        }
    }

    const accountChangeHandler = async (newAccount) => {
        checkCorrectNetwork();
        setDefaultAccount(newAccount);
    }

    const checkCorrectNetwork = async () => {
        const { ethereum } = window
        const chainId = await ethereum.request({ method: 'eth_chainId' })
        if (chainId !== "0x38") console.log("Wrong Chain");
        console.log('Connected to chain:' + chainId)
    }

    return (
        <div className="btnConnect">
            <button
                onClick={connectWalletHandler}
                // className="btn btn-primary rounded-pill"
                style={{
                    maxWidth: '120px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '45px',
                    backgroundColor: 'transparent',
                    border: 'transparent',
                    color: '#ECD19A',
                    fontSize: '15px'
                }}
            >{connectButtonText}</button>
        </div>
    )
}

export default WalletConnect
