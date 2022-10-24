import React from 'react'

export default function about() {
    return (
      <>
        <p id='about'>
          Notice in each path, we have the corresponding component. Then, we
          need to add content to our components. In this example, I am using the
          rebass component library, but feel free to use any component library
          you like. We are going to create three different cards for each of the
          links: HomeCard, AboutCard, and CuisineCard, which will each be the
          main component of the different pages. First, I import the component
          from rebass, choose an image to be in the card, and then add it to my
          App.js file. Let’s say I only wanted certain users to have access to
          my travel blog, because I am going to add personal pictures with my
          friends and family. Using feature flags is a great way to target
          specific users and make sure only the intended userbase sees your app
          or feature. To download Split, sign up for a free developer account.
          Then, find the Create a Split button on the left panel of the
          homepage. Enter a name for your flag that you will later input into
          your code. Then, select a treatment type. The treatment differentiates
          the people who see your app and the people who don’t. In this case,
          select user because you want to segment a group of users to be able to
          see your personal travel photos. Next, it’s time to add your targeting
          rules. In the Set Targeting Rules section, enter the email addresses
          of the users who should see the app, while keeping the default off.
          You’ll then want to enter the API key from the UI and insert that into
          your sdkConfig in your component. React Router to the Rescue React
          Router is a great way to build single-page applications because you
          prevent a page refresh every time a link is clicked. With client-side
          rendering, the page doesn’t refresh as you navigate through the
          different links. React Router is easy to understand, and simple to
          implement!
        </p>
      </>
    );
}