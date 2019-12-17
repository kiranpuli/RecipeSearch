import React from 'react'

function Recipe(props){
    return(
        <div className=" m-1 p-4">
            <div className=" card card-res p-5 zoom">
                <img  className="card-img-top img" src={props.item.image} alt={props.item.source}></img>
                <div className="card-body ">
                <h3 className="card-title text-light">{props.item.label}</h3>
                <ol className="list-group">
                <p className="card-text text-light">Ingredients : </p>
                    {props.item.ingredients.map(function(i){
                        return(
                        <li className="list-group-item list-group-item-sm">{i.text}</li>
                        )
                    })}
                </ol>
                </div>
            </div>
        </div>
    )
}

export default Recipe