import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitterSquare, faTelegram, faMedium, faKeybase } from '@fortawesome/free-brands-svg-icons'
import { faAddressBook, faEnvelope, faProjectDiagram, faBriefcase, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'
import { Github } from 'react-social-github';
import cx from 'classnames';
import smoothscroll from 'smoothscroll-polyfill';

import './App.scss';
import TermWindow from './TermWindow';
import Card from './Card';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import CompanyCard from 'CompanyCard';

import avatyLogo from './logos/avaty.png';
import rnpLogo from './logos/rnp.png';
import actionsLogo from './logos/actions.png';
import esssLogo from './logos/esss.svg';

smoothscroll.polyfill();

const CreateContactButtons: React.FC = () => {
  return (
    <div className="contact-buttons">
      <a href="mailto:gbritosampaio@gmail.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="https://www.linkedin.com/in/gbritosampaio" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://twitter.com/GustavoKatel" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitterSquare} />
      </a>
      <a href="https://t.me/GustavoKatel" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTelegram} />
      </a>
      <a href="https://medium.com/@gustavokatel" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faMedium} />
      </a>
      <a href="https://keybase.io/gustavokatel" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faKeybase} />
      </a>
    </div>
  );
}

interface TagsProps {
  tags: string[];
}

const Tags: React.FC<TagsProps> = (props) => {
  const tags = props.tags || [];

  return <div className="tags">
    {
      tags.map((tag, i) => {
        return <div key={i} className="tag">{tag}</div>
      })
    }
  </div>
};

const smoothScrollTo = (id: string) => {
  const el = document.getElementById(id.replace('#', ''));
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

interface FastLinkProps {
  animated: boolean;
  icon: IconDefinition;
  className?: string;
  href?: string;
  id?: string;
}

const FastLink: React.FC<FastLinkProps> = (props) => {
  return <div className={cx('fast-link', { 'animated bounce': props.animated }, props.className)} id={props.id} onClick={() => smoothScrollTo(props.href || '')}>
    <FontAwesomeIcon icon={props.icon} />
  </div>
}

const calcFabClass = (): string => {
  const el = document.getElementById('root');
  if (el) {
    if (el.scrollTop === 0) {
      return 'animate fadeOut'
    }
  }
  return 'animate fadeIn';
};

const App: React.FC = () => {
  const contactButtons = CreateContactButtons({});

  const fastLinkContact = (
    <FastLink icon={faAddressBook} className="content" animated={true} href="#contact" />
  );

  const fastLinkProjects = (
    <FastLink icon={faProjectDiagram} className="projects" animated={true} href="#projects" />
  );

  const fastLinkWork = (
    <FastLink icon={faBriefcase} className="work" animated={true} href="#work" />
  );

  return (
    <div className="App">
      <FastLink icon={faChevronCircleUp} className="scroll-top" animated={false} href="#header" />

      <header className="App-header" id="header">
        <TermWindow/>

        <div className="fast-links">
          { fastLinkContact }
          { fastLinkProjects }
          { fastLinkWork }
        </div>
      </header>

      <div id="content" className="App-content">

        <FastLink id="contact" animated={false} icon={faAddressBook} className="content-header" />

        <div className="contact-card">
          <Card icon={<FontAwesomeIcon icon={faAddressBook} />} footer={contactButtons}>
            <Github type="widget" tooltipOnHover={true} user="GustavoKatel" ></Github>
          </Card>
        </div>

        <FastLink id="projects" animated={false} icon={faProjectDiagram} className="content-header" />

        <div className="project-cards">
          <Card
            icon={<FontAwesomeIcon icon={faProjectDiagram} />}
            footer={
              <Tags tags={[
                'golang', 'p2p', 'libp2p',
                'distributed', 'storage', 'ipfs'
              ]} />
            }
          >
            <Github type="widget" tooltipOnHover={true} user="runletapp" repo="crabfs" ></Github>
          </Card>

          <Card
            icon={<FontAwesomeIcon icon={faProjectDiagram} />}
            footer={
              <Tags tags={[
                'golang', 'react', 'electron',
                'nodejs', 'rabbitmq', 'typescript', 'grpc'
              ]} />
            }
          >
            <Github type="widget" tooltipOnHover={true} user="runletapp" repo="runlet" ></Github>
          </Card>

          <Card
            icon={<FontAwesomeIcon icon={faProjectDiagram} />}
            footer={
              <Tags tags={[
                'golang', 'async', 'sync', 'utils'
              ]} />
            }
          >
            <Github type="widget" tooltipOnHover={true} user="GustavoKatel" repo="asyncutils" ></Github>
          </Card>

          <Card
            icon={<FontAwesomeIcon icon={faProjectDiagram} />}
            footer={
              <Tags tags={[
                'c++', 'python', 'pybind', 'ModSecurity', 'pytest', 'TDD', 'conda'
              ]} />
            }
          >
            <Github type="widget" tooltipOnHover={true} user="actions-security" repo="pymodsecurity" ></Github>
          </Card>

          <Card
            icon={<FontAwesomeIcon icon={faProjectDiagram} />}
            footer={
              <Tags tags={[
                'python', 'django', 'ModSecurity', 'pytest', 'TDD', 'conda'
              ]} />
            }
          >
            <Github type="widget" tooltipOnHover={true} user="GustavoKatel" repo="django-pymodsecurity" ></Github>
          </Card>

          <Card
            icon={<FontAwesomeIcon icon={faProjectDiagram} />}
            footer={
              <Tags tags={[
                'python', 'pushbullet api', 'pytest'
              ]} />
            }
          >
            <Github type="widget" tooltipOnHover={true} user="GustavoKatel" repo="pushbullet-cli" ></Github>
          </Card>

          <Card
            icon={<FontAwesomeIcon icon={faProjectDiagram} />}
            footer={
              <Tags tags={[
                'c++', 'raytracing', 'qt'
              ]} />
            }
          >
            <Github type="widget" tooltipOnHover={true} user="TecRen-UFPB" repo="RayTracerQt" ></Github>
          </Card>
        </div>

        <FastLink id="work" animated={false} icon={faBriefcase} className="content-header" />

        <div className="work-cards">

          <CompanyCard
            title="Engineering Simulation And Scientific Software (ESSS)"
            logo={esssLogo}
            footer={
              <Tags tags={[
                'python', 'pytest', 'c/c++', 'c#', 'Qt', 'Numpy', 'OpenGL', 'Flask'
              ]} />
            }
            timeset="January 2018 – December 2018"
            location="Florianópolis, Brazil"
          >
            Software engineer
          </CompanyCard>

          <CompanyCard
            title="Actions Security"
            logo={actionsLogo}
            footer={
              <Tags tags={[
                'python', 'pytest', 'c/c++', 'libuv', 'pybind11', 'tcp proxies'
              ]} />
            }
            timeset="July 2017 – December 2017"
            location="Remote"
          >
            Software engineer
          </CompanyCard>

          <CompanyCard
            title="RNP - UFPB"
            logo={rnpLogo}
            footer={
              <Tags tags={[
                'c/c++', 'libuv', 'Linux', 'http/https', 'tcp', 'network', 'tcp proxy'
              ]} />
            }
            timeset="September 2015 – July 2017"
            location="João Pessoa - PB, Brasil"
          >
            Software engineer. Developer of a mitigation tool to protect http servers from DoS attacks. Patent acquired
          </CompanyCard>

          <CompanyCard
            title="Avaty"
            logo={avatyLogo}
            footer={
              <Tags tags={[
                'android', 'java'
              ]} />
            }
            timeset="December 2015 – March 2016"
            location="João Pessoa - PB, Brasil"
          >
            Android engineer. Developer of android apps.
          </CompanyCard>

        </div>

      </div>
    </div>
  );
}

export default App;
