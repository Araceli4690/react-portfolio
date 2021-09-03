import React, { useState } from 'react';

const Projects = () => {

    const [projectSample] = useState([
        {
            name: "dogo",
            description: "Dog enjoying the sun"
        },
        {

            name: "dogo-2",
            description: "Dog enjoying the sun"
        },
        {

            name: "dogo-3",
            description: "Dog enjoying the sun"
        },
        {

            name: "dogo-4",
            description: "Dog enjoying the sun"
        }
    ]);

    return (
        <section>
            <h1>Portfolio</h1>
            <div>
                <div className="flex=row">
                    {projectSample.map(() => (
                        <img src={require(`../../assets/cover/${projectSample.name}.jpeg`)}
                            alt={projectSample.name}
                            className="img-thumbnail mx-1"
                            key={projectSample.name}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Projects;