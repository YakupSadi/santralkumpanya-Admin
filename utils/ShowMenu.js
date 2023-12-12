let isButtonClicked = true


const handleClick = ( val ) => {

    isButtonClicked = val
}


const getClickStatus = () => {

    return isButtonClicked
}


module.exports = {

    handleClick,
    getClickStatus

}