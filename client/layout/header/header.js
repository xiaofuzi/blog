import 'bulma';
import './header.scss';
import '../common/markdown.scss';

import { Component } from 'react';
import Link from 'next/link';

export default class Header extends Component {

    render () {
        return <nav className="navbar is-white" role="navigation" aria-label="main navigation">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="/">
                  <img style={{ maxHeight: "none" }} src="/static/img/logo.png" width="112" height="28" />
                </a>
              </div>
              <div className="navbar-menu">
                <div className="navbar-end">
                  <Link href="/">
                    <a className="navbar-item">文章</a>
                  </Link>
                  <Link href='/post/a1770bd3adecb9b5806c/'>
                    <a className="navbar-item">导航</a>
                  </Link>
                  <Link href="/papers/">
                    <a className="navbar-item">周刊</a>
                  </Link>
                  <Link href="/post/ee0195143ab8688c92e5/">
                    <a className="navbar-item">关于</a>
                  </Link>
                </div>
              </div>
            </div>
          </nav>;
    }
}

/*
<Link href='/'><a className="navbar-item">首页</a></Link>
<Link href='/post?id=e512e8fdd5418f746eca'><a className="navbar-item">Lab</a></Link>
*/