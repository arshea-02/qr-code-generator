const DisplayCode = ({qrCodeURL}) =>{
    
    return(
        <>
            {qrCodeURL ? 
                (<><img src={qrCodeURL} alt='QRCode'/><p>Scan QR Code</p></>) :
                (<p>Enter a URL to generate a QR Code</p>)
            }
        </>   
    )
}

export default DisplayCode