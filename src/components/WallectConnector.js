import React, { useState, useEffect } from 'react'
import swal from 'sweetalert'

const WalletConnect = ({ defaultAccountChange, defaultChainChange }) => {
    const [defaultAccount, setDefaultAccount] = useState(null)
    const [connectButtonText, setConnectButtonText] = useState("Connect Wallet")
    const [currentNetworkName, setCurrentNetworkName] = useState(null)

    const networks = [
        // { id: "0x45c", name: "Core" },
        { id: "0x61", name: "BSCTest" },
        // { id: "0x2105", name: "Base" },
        // { id: "0xa", name: "OP" },
        // { id: "0x89", name: "Polygon" },
        // { id: "0xa4b1", name: "ARB" },
        { id: "0x38", name: "BSC" },
        { id: "0x1", name: "ETH" },
    ]


    useEffect(() => {
        changingAccount();
    }, [defaultAccount])

    const changingAccount = async () => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', () => {
                connectWalletHandler()
            })
            window.ethereum.on('chainChanged', () => {
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
        handleDefaultChainChange(chainId)
    }

    const handleDefaultChainChange = (value) => {
        console.log("Chain Change to " + value);
        const tempNetworkName = networks.find((currentNetwork) => currentNetwork.id === value)?.name || "Not Supported Chain";
        setCurrentNetworkName(tempNetworkName);
        defaultChainChange(tempNetworkName)
    }
    return (
        <div className="btnConnect">
            <button
                onClick={connectWalletHandler}
                // className="btn btn-primary rounded-pill"
                style={{
                    maxWidth: '160px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '45px',
                    backgroundColor: 'transparent',
                    border: 'transparent',
                    color: '#ECD19A',
                    fontSize: '15px'
                }}
            >
                {
                    currentNetworkName === null
                        ? ""
                        : <span>{currentNetworkName}<br /></span>
                }
                {
                    connectButtonText
                }
            </button>
        </div>
    )
}

export default WalletConnect
