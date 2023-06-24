const sender = require('../config/serverConfig');

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const respnse = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody 
        });
        console.log(respnse);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    sendBasicEmail
}