import React from 'react';

const ProjectCard = (props) => {

    return (
        <div className="container">
            <div className="flex-row">
                <div>
                    <img className="mx-5" style={{ width: "30%" }} alt={props.name} src={require(`../../assets/cover/${props.image}`).default}></img>
                    {/* {<a alt="jj" className="light" href={props.image}></a>} */}
                </div>
                <div>
                    <h4><a alt="jj" href={props.deploy}>{props.name}</a></h4>
                    <p><a alt="hh" href={props.github}>Github</a></p>
                    <br />
                </div>

            </div>
        </div>
    )
};

export default ProjectCard;