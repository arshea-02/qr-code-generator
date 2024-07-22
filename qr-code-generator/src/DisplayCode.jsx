import gc from './GenerateCode'

const DisplayCode = ({url}) =>{

    return(
        gc(url)
    )
}

export default DisplayCode