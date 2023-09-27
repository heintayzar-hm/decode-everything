import { AES } from 'crypto-js';

export const encodeAES = (decoded, key) => {
    try {
        return AES.encrypt(decoded, key).toString();
    }
    catch (error) {
        console.log(error)
        return error;
    }
}
