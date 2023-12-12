let isButtonClicked = false


const handleClick = () => {

    isButtonClicked = !isButtonClicked
}


const getClickStatus = () => {

    return isButtonClicked
}


module.exports = {

    handleClick,
    getClickStatus

}