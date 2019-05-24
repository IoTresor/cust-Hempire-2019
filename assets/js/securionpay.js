var api = require('securionpay')(process.env.SECURE_KEY);

class SecurionPayService {
    //Edit Payment Variables here 
    constructor() {

    }

    // Load Gateway with Private Key
    SecurionPayGateway(privateKey) {
        var defaults = {
            url: 'https://api.securionpay.com'
        };
        var self = this;

        if (!privateKey) {
            throw new Error('Private key is required');
        }
    }

    //Basic create Customer Method
    async createCustomer() {
        return await api.csutomers.create({
            email: 'user@example.com',
        })
    }
}


module.export = SecurionPayService();