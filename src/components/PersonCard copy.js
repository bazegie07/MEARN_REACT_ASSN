import React, { useState } from 'react';

// class PersonCardClass extends React.Component {
//     render() {
//         const {firstName, lastName, age, hairColor } = this.props;


//         return(
//         <di>
//             <h2> {lastName}, {firstName} </h2>
//             <p>Age: {age}</p>
//             <p>Hair Color: {hairColor}</p>
//         </di>
//         );
//     }
// }





const PersonCard = ({firstName, lastName, age, hairColor }) => {
            // const {firstName, lastName, age, hairColor } = props;

    const [currentAge, setCurrentAge] = useState(age);

    function handleClick() {
        setCurrentAge(currentAge + 1);
    }
    return (
        <di>
            <h2> {lastName}, {firstName} </h2>
            <p>Age: {currentAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick = {handleClick}>Increment Age</button>
        </di>
    ); 
}

export default PersonCard;