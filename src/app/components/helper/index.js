import { decodeAES } from './AES/helper/decode';
import { encodeAES } from './AES/helper/encode';
const decoderCryptoJs = (data, key, method) => {
    switch (method) {
        case "AES":
        return decodeAES(data, key);
        case "RSA":
        return data;
        case "SHA":
        return data;
        default:
        return data;
    }
}

const encoderCryptoJs = (data, key,method) => {
    switch (method) {
        case "AES":
        return encodeAES(data, key);
        case "RSA":
        return data;
        case "SHA":
        return data;
        default:
        return data;
    }
}


export {
    decoderCryptoJs,
    encoderCryptoJs
}
