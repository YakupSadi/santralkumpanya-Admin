let isButtonClicked = false
let contentMargin   = '0'
let menuMargin      = '0'


const handleClick = () => {

    isButtonClicked = !isButtonClicked

    let width = window.innerWidth

    if( width >= 992 )
    {
        contentMargin = isButtonClicked ? '-14rem' : '0'
    }

    menuMargin = isButtonClicked ? '-14rem' : '0'
}


const setMargin = () => {

    let width = window.innerWidth

    if( width >= 992 )
    {
        contentMargin = isButtonClicked ? '0' : '-14rem'
    }
    else
    {
        contentMargin = '-14rem'
    }
}


const getMargin = () => {

    return { menuMargin, contentMargin }
}


module.exports = {

    setMargin,
    getMargin,
    handleClick,

}