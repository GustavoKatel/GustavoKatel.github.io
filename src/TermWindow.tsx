import React from 'react';
import './TermWindow.scss';

import Term from "./Term";

export default class TermWindow extends React.Component<{}, {}> {

    public render() {
        return <div className="term">
            <div className="header">
                <div>_</div>
                <div>□</div>
                <div>x</div>
            </div>

            <Term />
        </div>;
    }

}