import React, { Component } from 'react';
import { Link } from "react-router";
import "./index.scss";
import { Icon } from 'antd';

class Index extends Component {

    render() {
        return (
            <article className="index">
                <div className="layout-content">
                    <section>
                        梦想
                    </section>
                    <section>
                        热爱
                    </section>
                    <section>
                        坚持
                </section>
                </div>
                <footer className="layout-footer">
                    <article className="forent">
                        <section>
                            <h3>君梦无痕</h3>
                            <p>
                                君梦无痕是Jorkun在成长路上的一个缩影，也希望借此结交更多前辈好友。分享君君在前端、nodeJS、react和web的各个细节上的点点滴滴，愿与你共同分享，一起进步！
                            </p>
                        </section>
                        <section>
                            <h3>相关链接</h3>
                            <Link to="blog">博文</Link>
                        </section>
                        <section>
                            <h3>相关链接</h3>
                            <div>
                                <a href="javascript:void(0)">关于君君</a>
                                <a href="javascript:void(0)">关于君梦无痕</a>
                            </div>
                            <div>
                                <a href="javascript:void(0)"><i className="icon-logo-gray">君</i></a>
                                <a href="https://github.com/jorkun"><Icon type="github" /></a>
                            </div>
                        </section>
                    </article>
                    <hr/>
                    <section className="bottom">
                        <p>design & code by @Jorkun,base on nodeJS + mongoDB</p>
                        <div>感谢腾讯云！！！</div>
                    </section>
                </footer>
            </article>
        );
    }
}

export default Index;
