const caracteramountrange = document.getElementById
    ('caracteramountrange')
const caracteramountnumber = document.getElementById
    ('includeuppercase')
const caracteramountnumber = document.getElementById
    ('includelowercase')
const caracteramountnumber = document.getElementById
    ('includenumbers')
const caracteramountnumber = document.getElementById
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

}

function syncCharatersAmount(e) {
        const value = e.target.value
        caracteramountrange.value = value
        caracteramountnumber.value = value

    }

