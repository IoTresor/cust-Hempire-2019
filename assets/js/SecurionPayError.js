class SecurionPayError extends Error {
    constructor() {
        super()

        //Class specific
        this.message = error.message;
        this.type = error.type;
        this.code = error.code;
        this.chargeId = error.chargeId;
        this.blacklistRuleId = error.blacklistRuleId;
    }

}

module.exports = SecurionPayError;