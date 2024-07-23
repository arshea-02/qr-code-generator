import express from 'express'
import cors from 'cors'
import QRcode from 'qrcode'

const PORT = 3000
const app = express()
app.use(express.json()) 
app.use(cors({
    origin: 'http://localhost:5173'
}))
app.post('/qrcode', (req, res)=>{
    const {url} = req.body;
    QRcode.toDataURL(url, (error, qr)=>{
        if(error){
            res.status(500).send('Internal Server Error')
        }
        else{
            res.json({qr})
        }
    });
});

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
})