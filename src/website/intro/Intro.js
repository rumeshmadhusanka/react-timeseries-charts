/**
 *  Copyright (c) 2016-present, The Regents of the University of California,
 *  through Lawrence Berkeley National Laboratory (subject to receipt
 *  of any required approvals from the U.S. Dept. of Energy).
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import React from "react";

import Highlighter from "../components/highlighter";
import Markdown from "react-markdown";
import logo from "../img/charts.png";

import markdownFile from "./intro.md";

export default React.createClass({
    mixins: [Highlighter],
    getInitialState() {
        return {
            markdown: null
        };
    },
    componentDidMount() {
        fetch(markdownFile)
            .then(response => {
                return response.text();
            })
            .then(markdown => {
                this.setState({ markdown });
            });
    },
    render() {
        if (this.state.markdown) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-2">
                            <img src={logo} alt="ESnet" width={120} height={120} />
                        </div>
                        <div className="col-md-9">
                            <Markdown source={this.state.markdown} />
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="row">
                    <div className="col-md-2">
                        <img src={logo} alt="ESnet" width={120} height={120} />
                    </div>
                    <div className="col-md-9">
                        <Markdown source={this.state.markdown} />
                    </div>
                </div>
            );
        }
    }
});
