import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container'>
            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Authentication vs. Authorization</Accordion.Header>
    <Accordion.Body>
      <h3>Authentication</h3>
      <ul>
          <li>Authentication verifies who the user is.</li>
          <li>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</li>
          <li>Authentication is the first step of a good identity and access management process.</li>
          <li>Authentication is visible to and partially changeable by the user.</li>
      </ul>
      <h3>Authorization</h3>
      <ul>
          <li>Authorization determines what resources a user can access.</li>
          <li>Authorization works through settings that are implemented and maintained by the organization.</li>
          <li>Authorization always takes place after authentication.</li>
          <li>Authorization isn’t visible to or changeable by the user.</li>
      </ul>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
    <Accordion.Body>
    Firebase, Backend-as-a-Service (BaaS), is a platform by Google that provides functionalities and helps with the backend development of our Android, iOS, or web and even some products that support Unity3D too.

Top Alternatives to Firebase Authentication
<li>Auth0. A set of unified APIs and tools that instantly enables Single Sign </li>On and user management to all your applications. ...
<li>MongoDB. MongoDB stores data in JSON-like documents that can vary in </li>structure, offering. ...
<li>Passport</li>
<li>Okta</li>
<li>JSON Web Token</li>
<li>Amazon Cognito</li>
<li>Keycloak.</li>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>What other services does firebase provide other than authentication</Accordion.Header>
    <Accordion.Body>
    Top functionalities are:

<li>Firebase Database: used to store users data like chat messages, users details and other metadata</li>
<li>Firebase Cloud Storage: used to store user-generated content like the profile picture, multimedia messages, etc.</li>
<li>Firebase Cloud Messaging: used to send notification</li>
<li>Firebase Remote Config: used to perform A/B testing on the go</li>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
    );
};

export default Blogs;