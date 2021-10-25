import React from 'react';
import ProjectCard from '../Project';
import projects from '../../projects.json';

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;

}

function Portfolio() {
    return (
        <section style={{ padding: '20px' }}>
            <h1>Portfolio</h1>
            <br></br>
            <Wrapper className="sample" >
                {projects.map((project) => (
                    < ProjectCard key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} />
                ))}
            </Wrapper>
        </section>
    );
}

export default Portfolio;