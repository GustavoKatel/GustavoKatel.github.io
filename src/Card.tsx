import React from 'react';

import './Card.scss';

export interface CardProps {
    title?: string;
    icon: React.ReactNode;
    footer?: React.ReactNode;
}

export default class Card extends React.Component<CardProps, {}> {

    public render() {
        return <div className="card">

            <div className="header">
                {this.props.icon}
            </div>

            <div className="content">
                {this.props.children}
            </div>

            <div className="footer">
                {this.props.footer ? this.props.footer : ''}
            </div>
        </div>
    }
}