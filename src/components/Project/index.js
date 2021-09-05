import React from 'react';

const projectCard = (props) => {
    return (
        <div className="flex-row">
            <div>
                <img className="img-fluid" alt={props.name} src={props.image}></img>
                <a alt="jj" className="light" href={props.image}></a>
            </div>
            <div>
                <h4><a alt="jj" href={props.deploy}>{props.name}</a></h4>
                <p><a alt="hh" href={props.github}>Github</a></p>
            </div>
        </div>
    )
};

export default projectCard;