import crypto from 'crypto';

const algorithm = 'aes-256-ctr';
const privateKey = '37LvDSm4XvjYOh9Y';

export const jwtSecret = 'e37cbbf4-62ec-4596-a71d-fad8564ccd84';

export const decrypt = function (password) {
    var decipher = crypto.createDecipher(algorithm, privateKey);
    var dec = decipher.update(password, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}

export const encrypt = function(password) {
    var cipher = crypto.createCipher(algorithm, privateKey);
    var crypted = cipher.update(password, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}