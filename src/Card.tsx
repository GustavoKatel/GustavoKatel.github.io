import React from 'react';
import cx from 'classnames';

import './Card.scss';

export interface CardProps {
    title?: string;
    icon: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
}

export default class Card extends React.Component<CardProps, {}> {

    public render() {
        return <div className={cx('card', this.props.className)}>

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