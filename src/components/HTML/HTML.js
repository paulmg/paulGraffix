/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component, PropTypes } from 'react';
import { GA_ID } from '../../config';

class Html extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    css: PropTypes.string,
    body: PropTypes.string.isRequired
  };

  static defaultProps = {
    title: '',
    description: ''
  };

  trackingCode() {
    return ({__html:
    `(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=` +
    `function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;` +
    `e=o.createElement(i);r=o.getElementsByTagName(i)[0];` +
    `e.src='https://www.google-analytics.com/analytics.js';` +
    `r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));` +
    `ga('create','${GA_ID}','auto');ga('send','pageview');`,
    });
  }

  render() {
    let comments = `
    <!--
    8888888b.                   888       .d8888b.                   .d888  .d888 d8b
    888   Y88b                  888      d88P  Y88b                 d88P"  d88P"  Y8P
    888    888                  888      888    888                 888    888
    888   d88P 8888b.  888  888 888      888        888d888 8888b.  888888 888888 888 888  888
    8888888P"     "88b 888  888 888      888  88888 888P"      "88b 888    888    888  Y8bd8P
    888       .d888888 888  888 888      888    888 888    .d888888 888    888    888   X88K
    888       888  888 Y88b 888 888      Y88b  d88P 888    888  888 888    888    888  d8""8b
    888       "Y888888  "Y88888 888       "Y8888P88 888    "Y888888 888    888    888 888  888
    -->
    `;

    return (
      <html className="no-js" lang="en">
      <head>
        <style dangerouslySetInnerHTML={{__html: comments}}></style>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{this.props.title}</title>
        <meta name="description" content={this.props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link href='https://fonts.googleapis.com/css?family=Oxygen:300,400,700' rel='stylesheet' type='text/css' />
        <link href='https://fonts.googleapis.com/css?family=Noto+Sans:400,700' rel='stylesheet' type='text/css' />

        <link href='css/foundation.min.css' rel='stylesheet' type='text/css' />

        <style id="css" dangerouslySetInnerHTML={{__html: this.props.css}} />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{__html: this.props.body}} />
        <div id="container"></div>

        <script src="/app.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/plugins/ScrollToPlugin.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r80/three.min.js"></script>

        <script src="js/EffectComposer.js"></script>
        <script src="js/CopyShader.js"></script>
        <script src="js/ConvolutionShader.js"></script>
        <script src="js/FXAAShader.js"></script>
        <script src="js/VignetteShader.js"></script>
        <script src="js/ShaderPass.js"></script>
        <script src="js/MaskPass.js"></script>
        <script src="js/RenderPass.js"></script>
        <script src="js/BloomPass.js"></script>

        <script src="js/lightWaves.js"></script>

        <script dangerouslySetInnerHTML={this.trackingCode()} />
      </body>
      </html>
    );
  }

}

export default Html;
