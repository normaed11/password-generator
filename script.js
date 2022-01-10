const caracteramountrange = document.getElementById
    ('caracteramountrange')
const caracteramountnumber = document.getElementById
    ('carateramountnumber')
const includeuppercase = document.getElementById
    ('includeuppercase')
const includelowercase = document.getElementById
    ('includelowercase')
const includenumbers = document.getElementById
    ('includenumbers')
const includesymbols = document.getElementById
    ('includesymbols')

const form = document.getElementById("passwordgeneradorform")

caracteramountrange.addEventListener('input', syncCharatersAmount)
caracteramountnumber.addEventListener('input', syncCharatersAmount)

form.addEventListener('submit', e => {
    e.preventDefault()
    const CharatersAmount = caracteramountnumber.value
    const includeuppercase = includeuppercaseElement.checked
    const includelowercase = includelowercaseElement.checked
    const includenumbers = includenumbersElement.checked
    const includesymbols = includeuppersymbolsElement.checked
    const password = generatepassword(CharatersAmount, includeuppercase, includelower,
        includenumbers, includesymbols)

})

function generatepassword(CharatersAmount, includeuppercase, includelower,
    includenumbers, includesymbols) {
    function generatePassword() {
        var length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }

}

function syncCharatersAmount(e) {
    const value = e.target.value
    caracteramountrange.value = value
    caracteramountnumber.value = value

}

