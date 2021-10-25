import React from 'react';

const ProjectCard = (props) => {

    return (
        <div className="container" >
            <div className="flex-row" >
                <div>
                    <img style={{ width: "60%" }} alt={props.name} src={require(`../../assets/cover/${props.image}`).default}></img>
                    {/* {<a alt="jj" className="light" href={props.image}></a>} */}
                </div>
                <div style={{ padding: '10px' }} >
                    <h5><a style={{ color: 'black' }} alt="jj" href={props.deploy}>{props.name}</a></h5>
                    <p><a style={{ color: 'black' }} alt="hh" href={props.github}>Github</a></p>
                    <br />
                </div>

            </div>
        </div>
    )
};

export default ProjectCard;