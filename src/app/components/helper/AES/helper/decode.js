import { AES, enc } from 'crypto-js';

export const decodeAES = (encoded, key) => {
    try {
        console.log(AES.decrypt(encoded, key).toString(enc.Utf8))
        return AES.decrypt(encoded, key).toString(enc.Utf8);
    }
    catch (error) {
        return error;
    }
}
