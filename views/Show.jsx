import React from 'react';
import characters from '../models/characters';

const background = {
	backgroundImage:
		"url('https://www.nawpic.com/media/2020/steven-universe-nawpic-14.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
};

const h2 = {
    textAlign: 'center'
}
const characterDiv = {
    display: 'flex',
    justifyContent: 'space-around'
}
class Show extends React.Component {
    render() {
        const character = this.props.characters
        return (
            <body style={background}>
                <header>
                    <h1>Steven Universe Character</h1>
                    <nav>
                        <a href='/characters'>Home</a>
                    </nav>
                </header>
                <div>
                    <h2 style={h2}>Meet: {character.name}</h2>
                    <div style={characterDiv}>
                    <img src={character.img} />
                    <h3>About the character: {character.description }</h3>
                    </div>
                </div>
            </body>
        );
    }
}

export default Show;
