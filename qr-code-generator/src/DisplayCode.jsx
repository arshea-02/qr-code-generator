const DisplayCode = ({qrCodeURL}) =>{
   
    return(
        <>
            {qrCodeURL ? 
                (<><img src={qrCodeURL} alt='QRCode'/><p>Scan QR Code</p>
                <a href={qrCodeURL} download='QRcode'>
                    <button type='button'>Save QR</button></a></>) :
                (<p>Enter a URL to generate a QR Code</p>)
            }
        </>   
    )
}

export default DisplayCode