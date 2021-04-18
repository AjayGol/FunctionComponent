
module.exports = {
    baseUrl: 'https://dev.bitubu.com/', // Production - https://bitubu.com/, Dev - https://dev.bitubu.com/,
    baseUrl2: 'https://bitubu.com/',
    userDetail : 'users/api/v1/accounts/me',
    login: 'users/api/v1/sessions',
    registration: 'users/api/v1/accounts',
    emailConfirmation: 'users/api/v1/accounts/confirm',
    forgotPassword: 'users/api/v1/security/reset_password',
    verifyPassword: 'users/api/v1/security/verify_code',
    generateQRText: 'users/api/v1/security/generate_qrcode',
    enable_2fa: 'users/api/v1/security/enable_2fa',
    disable_2fa: 'users/api/v1/security/disable_2fa',
    changePassword: 'users/api/v1/accounts/password',
    mostTrade: 'api/v2/tickers?most_trade=true',
    mostGainers: 'api/v2/tickers?gainers=true',
    mostLosers: 'api/v2/tickers?losers=true',
    favoriteList: 'api/v2/favorite_markets?',
    verificationCodeEmail: 'api/v2/send_code?',
    antiPishingCode: 'api/v2/members/anti_pishing?'
};
