import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import dragonImg from '../img/dragonImg/dragon1.jpg';
import dragonImg2 from '../img/dragonImg/dragon2.jpg';
import dragonImg3 from '../img/dragonImg/dragon3.jpg';
import dragonImg4 from '../img/dragonImg/dragon4.jpg';
import { ethers } from 'ethers'
import usdtabi from '../ABI/usdtabi.json'
import idoabi from '../ABI/idoabi.json'

const GallerySection = ({ defaultAccount }) => {
    const IDOContractAddress = "0xaD26a6143a0ddC0cdC44402caD59405973e1425d";
    const USDTContractAddress = "0xB42263540b731003ce96d02D5c82A1Eb586ED187";
    const defaultRef = "0x0D971B7B7520f1FCE9b90665CA59952ea2c52b04"

    console.log("In IDO " + defaultAccount)

    const dragons = [
        {
            name: 'Drakonius the Emberborne',
            price: '50 USDT',
            description: "Drakonius is a fiery dragon known for its vibrant red scales and fierce temperament. Its breath weapon is a scorching stream of flames that can reduce anything in its path to ashes. Drakonius is often associated with volcanic landscapes and is believed to guard hidden treasures deep within molten caverns.",
            imgSrc: dragonImg,
            amount: ethers.utils.parseEther("50")
        },
        {
            name: 'Aurelia the Sky Serpent',
            price: '100 USDT',
            description: "Aurelia is a majestic and elegant dragon that soars through the skies with grace. Its iridescent blue and silver scales shimmer in the sunlight, and its breath weapon manifests as freezing gusts of icy wind. Legends tell of Aurelia being a guardian of the heavens, bringing rain to parched lands and protecting against stormy weather.",
            imgSrc: dragonImg2,
            amount: ethers.utils.parseEther("100")
        },
        {
            name: 'Terrador the Earthshaker',
            price: '200 USDT',
            description: "Terrador is a massive and sturdy dragon that is closely tied to the earth and mountains. Its scales resemble granite, and it has the power to create earthquakes and manipulate the earth itself. Terrador's breath weapon releases a cloud of swirling stones that can pummel its enemies. It is often revered as a symbol of stability and strength.",
            imgSrc: dragonImg3,
            amount: ethers.utils.parseEther("200")
        },
        {
            name: 'Sylphira the Enchantress',
            price: '500 USDT',
            description: "Sylphira is a rare and enigmatic dragon with shimmering, multicolored scales that change like the hues of a rainbow. Known for its spellbinding abilities, Sylphira can cast illusions, create mesmerizing displays of light, and even entrance the minds of those who gaze upon it. This dragon is often associated with arcane secrets and mystical realms, captivating all who encounter its beauty.",
            imgSrc: dragonImg4,
            amount: ethers.utils.parseEther("500")
        }
    ];
    const [showDescriptions, setShowDescriptions] = useState(Array(dragons.length).fill(false));

    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [contract, setContract] = useState(null);
    const [usdtContract, setUsdtContract] = useState(null);
    const [ref, setRef] = useState(defaultRef);
    const [modalOpen, setModalOpen] = useState(false);
    const [content, setContent] = useState([null, null, null]);

    const updateEthers = async () => {
        try {
            const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
            setProvider(tempProvider);

            const tempSigner = tempProvider.getSigner();
            setSigner(tempSigner);

            const tempContract = new ethers.Contract(IDOContractAddress, idoabi, tempSigner)
            setContract(tempContract);

            const tempUsdtContract = new ethers.Contract(USDTContractAddress, usdtabi, tempSigner)
            setUsdtContract(tempUsdtContract);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (defaultAccount === null) return;
        updateEthers();
    }, [defaultAccount])


    const toggleDescription = (index) => {
        const newShowDescriptions = [...showDescriptions];
        newShowDescriptions[index] = !newShowDescriptions[index];
        setShowDescriptions(newShowDescriptions);
    };

    const approveAndSendTx = async (amount) => {
        handleOpenModal(true)

        try {
            const isApproved = await checkApproved(amount);
            if (!isApproved) {
                approveUsdtToIdo(amount);
                return;
            }
            sendTx(amount);
        } catch (error) {
            console.log(error)
        }
    }

    const approveUsdtToIdo = async (amount) => {
        const approvingAmount = ethers.utils.formatEther(amount);
        setContent([
            `Approve ${approvingAmount} USDT`,
            `This transaction would allow the IDO contract to use ${approvingAmount} USDT from your wallet`,
            null
        ])
        try {
            const result = await usdtContract.approve(
                IDOContractAddress, amount
            )

            setContent([
                `Approving ${approvingAmount} USDT`,
                `The approving transaction is now on chain, please wait.`,
                null
            ])
            provider
                .getTransaction(result.hash)
                .then((tx) => {
                    // 監聽交易上鍊事件
                    tx.wait().then(async (receipt) => {
                        //  授權成功
                        console.log(`交易已上鍊，區塊高度為 ${receipt.blockNumber}`)
                        try {
                            await sendTx(amount)
                        } catch (err) {
                            console.log(err)
                        }
                    })
                })
        } catch (error) {
            console.log(error)

            setContent([
                `Failed to Approve`,
                `Failed to approve ${approvingAmount} USDT to the IDO contract`,
                null
            ])
        }
    }

    const sendTx = async (amount) => {
        const idoAmount = ethers.utils.formatEther(amount);
        try {
            setContent([
                `Send ${idoAmount} USDT`,
                `This transaction would send ${idoAmount} USDT to the IDO contract`,
                null
            ])
            const result = await contract.makeIDO(ref, amount);

            setContent([
                `Sending ${idoAmount} USDT`,
                `Joining IDO with ${idoAmount}, please wait`,
                null
            ])
            provider
                .getTransaction(result.hash)
                .then((tx) => {
                    // 監聽交易上鍊事件
                    tx.wait().then(async (receipt) => {
                        //  授權成功
                        console.log(`交易已上鍊，區塊高度為 ${receipt.blockNumber}`)
                        try {
                            setContent([
                                `IDO Joined Successfully`,
                                `Watch this transaction on chain`,
                                `https://testnet.bscscan.com/tx/${result.hash}`
                            ])
                        } catch (err) {
                            console.log(err)
                        }
                    })
                })
        } catch (err) {
            console.log(err)
        }
    }


    const checkApproved = async (amount) => {
        try {
            const result = await usdtContract.allowance(
                defaultAccount, IDOContractAddress
            )
            if (+result >= +amount)
                return true;
            return false;
        } catch (err) {
            console.log(err)
        }
    }


    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setContent([null, null, null])
    };

    return (
        <div className="row pattern">
            <section className="ido" id="ido">
                <div className="container">
                    <div className="row items-container bottom-wrapper">
                        <p>&nbsp;<br />&nbsp;</p>
                    </div>

                    <Modal isOpen={modalOpen} onClose={handleCloseModal} content={content} />
                    <div className="row">
                        <h2 style={{ padding: '10px' }}>Choose your Dragon</h2>
                        {dragons.map((dragon, index) => (
                            <article key={index} className={`col-sm-5 col-md-3 box features-item thumbnail-100`} data-toggle="modal" data-target="#shop-modal">
                                <img className="features-img" src={dragon.imgSrc} alt={`${dragon.name} Hero Character`}
                                    style={{ padding: '20px' }}
                                    onClick={() => approveAndSendTx(dragon.amount)}
                                />
                                <h3 onClick={() => approveAndSendTx(dragon.amount)}>{dragon.price}</h3>
                                <h3>{dragon.name}</h3>
                                <div onClick={() => toggleDescription(index)} className="description-toggle-icon">
                                    <h3 style={{ fontSize: '15px' }}>Dragon info</h3>
                                </div>
                                {
                                    showDescriptions[index] &&
                                    <p
                                        className="features-p"
                                        style={{ padding: '20px' }}
                                    >{dragon.description}</p>}
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GallerySection;
