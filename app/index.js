'use strict';

const yeoman = require('yeoman-generator');
const yosay  = require('yosay');

function cleanAppname(appname) {
    return appname.replace(/\s/g, '-');
}

module.exports = yeoman.Base.extend({
    prompting: function () {
        this.log(yosay(
            'You are about to build a simple React/Redux application!'
        ));

        const prompts = [
            {
                type   : 'input',
                name   : 'appname',
                message: 'Enter your application name',
                default: cleanAppname(this.appname)
            },
            {
                type   : 'input',
                name   : 'description',
                message: 'Enter your application description',
                default: ''
            },
            {
                type   : 'input',
                name   : 'authorName',
                message: 'Author name?',
                default: ''
            },
            {
                type: 'input',
                name: 'authorEmail',
                message: 'Author\'s email?',
                default: ''
            },
            {
                type   : 'confirm',
                name   : 'npmInstall',
                message: 'Would you like to install dependencies?',
                default: true
            }
        ];

        return this.prompt(prompts).then(props => {
            props.appname = cleanAppname(props.appname);

            this.props = props;
        });
    },

    writing: function () {
        // templated files
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'),
            this.props
        );

        this.fs.copyTpl(
            this.templatePath('index.js'),
            this.destinationPath('index.js'),
            this.props
        );

        // root files
        this.fs.copy(this.templatePath('.eslintrc'), this.destinationPath('.eslintrc'));
        this.fs.copy(this.templatePath('.babelrc'), this.destinationPath('.babelrc'));
        this.fs.copy(this.templatePath('webpack.config.js'), this.destinationPath('webpack.config.js'));

        // directories
        this.fs.copy(this.templatePath('config/'), this.destinationPath('config/'));
        this.fs.copy(this.templatePath('src'), this.destinationPath('src'));
    },

    install: function () {
        if (!this.props.npmInstall) {
            return;
        }

        this.npmInstall();
    }
});
