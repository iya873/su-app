import React from 'react'
import characters from '../models/characters'

const background = {
    background: 'linear-gradient(45deg, pink, blue) no-repeat',
    backgroundSize: 'cover',
    height: '80vh'
}
const header = {
	textAlign: 'center',
	color: '#E65B90',
};
const star = {
    width: '24px',
    height: '24px'

}
const cardContainer = {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexFlow: 'wrap',
    marginTop: '20%'
}
const nameCard = {
    border: '2px solid white',
    height: '50px',
    width: '100px',
    textAlign: 'center'
}

class Index extends React.Component {
    render() {
        return (
            <body style={background}>
                <h1 style={header}>Welcome to Steven's Universe! <span><img style={star} src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png'
                    alt='a yellow star' /></span></h1>
                <hr />
                <div style={cardContainer}>
                    {characters.map((character, i) => {
                        return (
                            <div style={nameCard}>{character.name}</div>
                       )
                   })}
                </div>
            </body>
        )
    }
}

export default Index