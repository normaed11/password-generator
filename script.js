// where to get the Elements
const caracteramountrange = document.getElementById('caracteramountrange')
const caracteramountnumber = document.getElementById('carateramountnumber')
const includeuppercaseElement = document.getElementById('includeuppercase')
const includelowercaseElement = document.getElementById('includelowercase')
const includenumbersElement = document.getElementById('includenumbers')
const includeuppersymbolsElement = document.getElementById('includesymbols')
const form = document.getElementById('passwordgeneratorform')
const passwordDisplay = document.getElementById('passwordDisplay')

//list of variables 
const includeuppercase = array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')
const includelowercase = array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z')
const includenumbers = array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9')
const includesymbols = array('!', '@', '#', '$', '%', '^', '&', '*')

//Event listenerners
caracteramountrange.addEventListener('input', syncCharatersAmount)
caracteramountnumber.addEventListener('input', syncCharatersAmount)

//form input
form.addEventListener('submit', e => {
    e.preventDefault()
    const CharatersAmount = caracteramountnumber.value
    const includeuppercase = includeuppercaseElement.checked
    const includelowercase = includelowercaseElement.checked
    const includenumbers = includenumbersElement.checked
    const includesymbols = includeuppersymbolsElement.checked
    console.log(
        CharatersAmount,
        includelowercase,
        includeuppercase,
        includenumbers,
        includesymbols
    )

    const password = generatepassword(CharatersAmount, includeuppercase, includelower,
        includenumbers, includesymbols)
    passwordDisplay.innerText = password

})

function generatepassword(CharatersAmount, includeuppercase, includelower,
    includenumbers, includesymbols) {
    let includelowercase = array
    if (includelowercase) = array
    if (includeuppercase) = array
    if (includenumbers) = array
    if (includeuppercase) = array

}


function syncCharatersAmount(e) {
    const value = e.target.value
    caracteramountrange.value = value
    caracteramountnumber.value = value

}

