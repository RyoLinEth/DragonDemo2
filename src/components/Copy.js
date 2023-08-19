import React, { useState } from 'react';
import CopyIconSvg from '../img/svg/CopyIconOrange.svg';
import swal from 'sweetalert';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CopyLinkIcon = ({ text }) => {
    const [copied, setCopied] = useState(false);

    const handleCopyClick = () => {
        swal("Copied", "Copied to Clipboard", "success")
    };

    const iconStyle = {
        position: 'relative',
        cursor: 'pointer'
    };

    return (
        <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
            <div
                style={iconStyle}
                onClick={handleCopyClick}
            >
                <img src={CopyIconSvg} width='15px' />
            </div>
        </CopyToClipboard>
    );

};

export default CopyLinkIcon;
