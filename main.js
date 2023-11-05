const bg = document.querySelector(".background")
const wrap = document.querySelector(".wrap")

const settings = {
    'xPath' : './images/X.png',
    'oPath' : './images/O.png',
    'countSqares' : 9,
    'flag' : false,
    'store' : [],
    'winX': [],
    'winO': [],
    'once' : true,
    'winComb': [
        [1,2,3],
        [1,5,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [3,5,7],
        [4,5,6],
        [7,8,9]
    ]
}

const createElement = (tag,classElem, append) => {
    const element = document.createElement(tag)
    element.classList.add(classElem)
    append.append(element)
    }
    
const startGame = () => {
    for (let i = 0; i < settings.countSquares; i++) {
        createElement('div', 'square', wrap)
    }

    createElement('span', 'turn-text',bg)
    createElement('span', 'win-text',bg)
    createElement('button', 'restart-button',bg)
}

startGame()