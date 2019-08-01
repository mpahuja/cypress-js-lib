function isValidURL(givenString) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return pattern.test(givenString);
}

function rewriteUrl(givenUrl) {
    if (isValidURL(givenUrl)) {
        return givenUrl
    } else {
        throw new Error("Please set correct value of the environment variable");
    }
}

module.exports = (config) => {
    config.baseUrl = rewriteUrl(process.env.WWW_COM_URL);
    config.env.BASE_HOST = rewriteUrl(process.env.WWW_COM_URL);
    return config;
};
