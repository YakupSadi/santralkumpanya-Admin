let isButtonClicked = false
let contentMargin   = '0'
let menuMargin      = '0'


const handleClick = () => {

    let width = window.innerWidth

    if( 992 >= width )
    {
        contentMargin = isButtonClicked ? '-14rem' : '0'
    }

    menuMargin = isButtonClicked ? '-14rem' : '0'

    isButtonClicked = !isButtonClicked
}


const setMargin = () => {

    let width = window.innerWidth

    if( 992 >= width )
    {
        contentMargin = isButtonClicked ? '-14rem' : '0'
    }
    else
    {
        contentMargin = '0'
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