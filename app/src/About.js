import React from 'react';
import styled from 'styled-components';

export const About = () => (
    <div>

        <h1 className="subtitle">
            Inspiration
        </h1>
        <p className ="paragraph">
           We all felt very lonely this last quarter and over the summer. We can't go outside, we can't meet our friends, and we can't meet new ones!
        </p>
        <h1 className="subtitle">
                     What It Does
        </h1>
        <p className ="paragraph">
                   We all felt very lonely this last quarter and over the summer. We can't go outside, we can't meet our friends, and we can't meet new ones!
                   You sign up on our web app using your email, and you fill in a bunch of information. Your graduation year, interests, classes, major, etc. We query our database in order to match you up with friends who most closely resemble your profile! Then, you can chat with them in the messaging app. You can also create study groups with people who share classes with you, so you never feel left out of a class!
        </p>
        <h1 className="subtitle">
              How We Built It
        </h1>
        <p className ="paragraph">
                                  We used Google Cloud Firebase throughout the entire project. Our database is hosted on Google Cloud Firestore, and we have back-end python code that interacts with our front-end react code in order to communicate with Firestore (using custom-built APIs in Flask)! We also use Firebase Authentication for user sign-in, so getting started is as seamless as possible.
        </p>
        <h1 className="subtitle">
                      Challenges We Ran Into
        </h1>
        <p className ="paragraph">
                                  Getting the authentication setup for Firebase was a challenge and in the beginning, it seemed like it wasn't working no matter what I did. After a bit of tinkering in the system files and a little bit of ingenuity, however, we were able to get a fully-functional Firebase application up and running!
        </p>
        <h1 className="subtitle">
                              Accomplishments That We Are Proud Of
        </h1>
        <p className ="paragraph">
                                  Getting a mini social-media app working in less than 24 hours is a feat to be proud of! I am also very proud of how quickly our team was able to pick up new technologies and implement them into our code.
        </p>
        <h1 className="subtitle">
                                      What We Learned
        </h1>
        <p className ="paragraph">
                                  Starting this project, I had no knowledge of Firebase, Firestore, or Flask (all three of which I learned and implemented in the backend myself). I am astonished by how simple and intuitive everything is to work with once setup is complete!
        </p>
        <h1 className="subtitle">
                                              What's Next For Mingle
        </h1>
         <p className ="paragraph">
                                  Messaging on Mingle is fine, but what if you could use your phone and enter into a virtual VR space and meet the person you just matched up with? This was an idea that we had, but didn't have enough time to implement into our idea. The general idea is a meeting place for your friends, study group, or maybe even office hours!
         </p>

        <style jsx>{`
          .subtitle {
            max-width: 50rem;
            padding: 0 1rem;
            margin: 3rem auto;
              font-size: 2.5rem;
              line-height: 1.2;
              font-weight: 800;
              letter-spacing: -0.05rem;
          }

          .paragraph {
            max-width: 50rem;
            padding: 0 1rem;
            margin: 3rem auto 3rem;
          }

          .header {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .headerImage {
            width: 6rem;
            height: 6rem;
          }

          .headerHomeImage {
            width: 8rem;
            height: 8rem;
          }

          .backToHome {
            margin: 3rem 0 0;
          }

      `}</style>
  </div>
)