import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitterSquare, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faAddressBook, faChevronCircleDown, faEnvelope, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { Github } from 'react-social-github';

import './App.scss';
import TermWindow from './TermWindow';
import Card from './Card';

const CreateContactButtons: React.FC = () => {
  return (
    <div className="contact-buttons">
      <a href="mailto:gbritosampaio@gmail.com" target="_blank">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="https://www.linkedin.com/in/gbritosampaio" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://twitter.com/GustavoKatel" target="_blank">
        <FontAwesomeIcon icon={faTwitterSquare} />
      </a>
      <a href="https://t.me/GustavoKatel" target="_blank">
        <FontAwesomeIcon icon={faTelegram} />
      </a>
    </div>
  );
}

const App: React.FC = () => {
  const contactButtons = CreateContactButtons({});

  return (
    <div className="App">
      <header className="App-header">
        <TermWindow/>

        <div className="scroll-down">
          <a href="#content">
            <FontAwesomeIcon icon={faChevronCircleDown} className="button animated bounce" />
          </a>
        </div>
      </header>

      <div id="content" className="App-content">

        <div className="contact-card">
          <Card icon={<FontAwesomeIcon icon={faAddressBook} />} footer={contactButtons}>
            <Github type="widget" tooltipOnHover={true} user="GustavoKatel" ></Github>
          </Card>
        </div>

        <div className="other-cards">
          <Card icon={<FontAwesomeIcon icon={faProjectDiagram} />}>
            <Github type="widget" tooltipOnHover={true} user="runletapp" repo="runlet" ></Github>
          </Card>

          <Card icon={<FontAwesomeIcon icon={faProjectDiagram} />}>
            <Github type="widget" tooltipOnHover={true} user="actions-security" repo="pymodsecurity" ></Github>
          </Card>

          <Card icon={<FontAwesomeIcon icon={faProjectDiagram} />}>
            <Github type="widget" tooltipOnHover={true} user="GustavoKatel" repo="django-pymodsecurity" ></Github>
          </Card>

          <Card icon={<FontAwesomeIcon icon={faProjectDiagram} />}>
            <Github type="widget" tooltipOnHover={true} user="GustavoKatel" repo="pushbullet-cli" ></Github>
          </Card>

          <Card icon={<FontAwesomeIcon icon={faProjectDiagram} />}>
            <Github type="widget" tooltipOnHover={true} user="TecRen-UFPB" repo="RayTracerQt" ></Github>
          </Card>
        </div>

      </div>
    </div>
  );
}

export default App;
