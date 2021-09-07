import React from 'react';
import coverImage from '../../assets/cover/dogo.jpeg'

function About() {
    return (
        <section className="mx-5" >
            <h1 id="about" style={{ color: 'rgb(51, 161, 156)', textAlign: "end" }}>About Me</h1>
            <br />
            <img src={coverImage} className="mx-5" style={{ width: "40%" }} alt="cover" />
            <div className="mx-2">
                <br />
                <p>
                    Experienced Research Assistant with a demonstrated history of working in the higher
                    education industry. Skilled in front-end and back-end web development as well as data
                    analysis. Strong research professional with a Bachelor's degree focused in Linguistics
                    from California State University, Long Beach turned full-stack web developer. I am a
                    problem-solver and critical thinker who is always eager to learn new skills and
                    technologies. My experience working in research labs has turned me into an excellent
                    team player and organizer with great communication skills. Did I also mention that I am
                    an expert at googling?
                </p>
                <br />
            </div>
        </section>
    )
}

export default About;