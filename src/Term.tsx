import React from 'react';
import { Terminal } from 'xterm';
import chalk from 'chalk';

import * as fit from 'xterm/lib/addons/fit/fit';

chalk.level = 3;
chalk.enabled = true;

const term = {
    allowTransparency: true,
    convertEol: true,
    fontSize: 14,
    fontFamily: 'Fira Code, Ubuntu Mono, Consolas, source-code-pro, courier-new, courier, monospace',
    theme: {
        background: '#000000',
        black: '#000000',
        // brightBlack: '#6272A4',
        // brightBlue: '#D6ACFF',
        // brightCyan: '#A4FFFF',
        // brightGreen: '#69FF94',
        // brightMagenta: '#FF92DF',
        // brightRed: '#FF6E6E',
        // brightWhite: '#FFFFFF',
        // brightYellow: '#FFFFA5',
        // blue: '#BD93F9',
        // cyan: '#8BE9FD',
        // green: '#50FA7B',
        // magenta: '#FF79C6',
        // red: '#FF5555',
        // white: '#F8F8F2',
        // yellow: '#F1FA8C',
    },
};

Terminal.applyAddon(fit);

export default class Term extends React.Component<{}, {}> {
    private xterm: Terminal|null = new Terminal(term);
    private containerRef: React.RefObject < HTMLDivElement > = React.createRef();
    private cumulativeTimeout = 0;
    private onResizeWindow = this.onResizeWindowUnbound.bind(this);

    public componentDidMount() {
        this.xterm = new Terminal(term);
        this.xterm.open(this.containerRef.current as HTMLElement);
        (this.xterm as any).fit();

        this.startTyping();

        window.addEventListener('resize', this.onResizeWindow);
    }

    public componentWillUnmount() {
        if (this.xterm) {
            this.xterm.destroy();
            this.xterm = null;
        }

        window.addEventListener('resize', this.onResizeWindow);
    }

    public startTyping() {
        this.write(chalk.green(' λ ') + chalk.cyan('Hello!'), 500);
        this.write(chalk.green(' λ ') + chalk.cyan('I\'m ') + chalk.red('Gustavo'), 500);
        this.write(chalk.green(' λ ') + chalk.cyan('A passionate software engineer'), 2000);
        this.write(chalk.green(' λ ') + chalk.cyan('You can find my contact info and some of my projects below'), 2000);
        this.write(chalk.green(' λ '));
    }

    public write(text: string, timeout: number = 1000) {
        this.cumulativeTimeout = this.cumulativeTimeout + timeout;
        setTimeout(() => this.xterm!.writeln(text), this.cumulativeTimeout);
    }

    public render() {
        return <div ref={this.containerRef} />;
    }

    private onResizeWindowUnbound() {
        if (this.xterm) {
            (this.xterm as any).fit();
        }
    }
}