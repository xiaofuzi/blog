import 'bulma';
import './header.scss';
import '../common/markdown.scss';

import { Component } from 'react';

export default class Header extends Component {
    state = {
        isActive: ''
    }

    render () {
        return <nav className="navbar is-white" role="navigation" aria-label="main navigation">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="/">
                  <img style={{ maxHeight: "none" }} src="/static/img/logo.png" width="112" height="28" />
                </a>
                <div onClick={() => {this.toggleNavActiveClass(this.state.isActive)}} 
                    className={'navbar-burger burger ' + this.state.isActive} data-target="navMenuDocumentation">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
              </div>
                <div onClick={() => { this.toggleNavActiveClass(this.state.isActive) }} 
                    className={"navbar-menu " + this.state.isActive}>
                <div className="navbar-end">
                  <a href="/" className="navbar-item">文章</a>
                  <a href="/books"
                     className="navbar-item">读书</a>
                  <a href='/post/a1770bd3adecb9b5806c/'
                     className="navbar-item">导航</a>
                  <a href="/papers/"
                    className="navbar-item">周刊</a>
                  <a href="/post/ee0195143ab8688c92e5/"
                     className="navbar-item">关于</a>
                </div>
              </div>
            </div>
          </nav>;
    }

    toggleNavActiveClass = (classState) => {
        if (classState) {
            this.setState({
                isActive: ''
            });
        } else {
            this.setState({
                isActive: 'is-active'
            })
        }
    }
}

/*
<Link href='/'><a className="navbar-item">首页</a></Link>
<Link href='/post?id=e512e8fdd5418f746eca'><a className="navbar-item">Lab</a></Link>
*/