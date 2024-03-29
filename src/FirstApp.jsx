
// const newMessage = {
    //     nombre: 'Zenen',
    //     edad: 44
    // }
    
    // const getResult = (a, b) => {
    //     return a + b
    //     }

import PropsTypes from 'prop-types'

export const FirstApp = ({ title, subtitle, name }) => {     
    // console.log(props);  
    
        return (
            <>
            <h1>{ title }</h1>
            <h3>{ subtitle }</h3>
            <h3>{ name }</h3>
            </>
        )
}

FirstApp.propTypes = {
    title: PropsTypes.string.isRequired,
    subtitle: PropsTypes.number.isRequired
}

FirstApp.defaultProps = {
            title : 'No title',
    subtitle : 556,
    name: 'Zenen Peraza'
}
