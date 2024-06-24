import React from "react";


const Cards = ({teachers}) => {
        return (
            <div className="cardList">
                {teachers.map((teacher) => {
                    const {name, email, id} = teacher;
                    return (
                        <div className="cardContainer" key={id}>
                            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`Teachers ${name} `}/>
                            <h2>{name}</h2>
                            <p>{email}</p>
                        </div>
                        
                    );
                    })
                }
            </div>
        )
    
}


export default Cards