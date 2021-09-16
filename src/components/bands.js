import React from "react";

const Bands = props => {
    const allBands = props.bands.map((band, index) => {
        return (
            <li key={index}>{band.name}</li>
            )
    })

    return <div>{allBands}</div> 

}

export default Bands







// const Todo = props => {
//   return (
//     <li>{props.text}</li>
//   );
// };

// export default Todo;