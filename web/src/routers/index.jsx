import React, { Component } from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import App from 'components/app';
import Blog from 'components/blog/index';
import Index from "components/index/index";
import Comment from 'components/comment/index';

function validate() {
    // 在路由群载入时做 filter 处理
}
class RoutesMap extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" onEnter={validate} component={App}>
                    <IndexRedirect to="index" />
                    <Route path="/index" component={Index} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/comment" component={Comment} />
                </Route>
                {/* <Route path="*" component={NotFound} /> */}
            </Router>);
    }
}


export default RoutesMap;
