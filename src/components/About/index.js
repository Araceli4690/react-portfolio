import React from 'react';
import coverImage from '../../assets/cover/dogo.jpeg'

function About() {
    return (
        <section className="mx-5">
            <h1 id="about">About Me</h1>
            <img src={coverImage} className="mx-5" style={{ width: "25%" }} alt="cover" />
            <div className="mx-2">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
                    condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
                    mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
                    Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
                    justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
                    dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
                    Curabitur imperdiet ultricies mollis. In ha
                </p>
            </div>
        </section>
    )
}

export default About;