import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

import './CompanyCard.scss';
import Card from 'Card';

export interface CompanyCardProps {
    logo: string;
    title: string;
    timeset: string;
    location?: string;
    footer?: React.ReactNode;
}

export default class CompanyCard extends React.Component<CompanyCardProps, {}> {

    public render() {
        return <Card icon={<FontAwesomeIcon icon={faBriefcase} />} className="company-card" footer={this.props.footer}>
            <div className="logo">
                <img src={this.props.logo} alt={this.props.title}/>
            </div>
            <div className="name">{this.props.title}</div>
            <div className="timeset">{this.props.timeset}</div>
            <div className="location">{this.props.location}</div>
            {this.props.children}
        </Card>;
    }
}