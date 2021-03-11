import React, { Component } from 'react';
// This will import the “Link” class from the “react-router-dom” module.
// it acts just like the “Anchor <a>” tag in HTML.
import { Link } from "react-router-dom";
import MenuBtn from './MenuBtn';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navlinks: [
                {
                    item: 'Home',
                    path: process.env.PUBLIC_URL + '/'
                },
                {
                    item: 'About',
                    path: process.env.PUBLIC_URL + '/about'
                },
                {
                    item: 'Education',
                    path: process.env.PUBLIC_URL + '/education'
                },
                {
                    item: 'Skills',
                    path: process.env.PUBLIC_URL + '/skills'
                },
                {
                    item: 'Contact',
                    path: process.env.PUBLIC_URL + '/contact'
                }
            ]
        }
    }

    openMenu = (props) => {
        const menuBtn = props;
        let nav = document.getElementById('nav');
        let icon = menuBtn.children[0];
        menuBtn.style.zIndex = '100';

        if (!nav.classList.contains('show')) {
            // show menu
            nav.classList.add('show');

            // add 'x' icon
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            icon.style.color = '#fff';
        } else {
            nav.classList.remove('show');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            icon.style.color = '#000';
        }

        // close menu bar when reaching a certain width
        window.addEventListener('resize', () => {
            const width = window.innerWidth;
            if (width > 730) {
                nav.classList.remove('show');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                icon.style.color = '#000';
            }
        })
    }

    // mobileMenuState = () => {
    //     const nav = document.getElementById('nav');
    //     console.log(nav.children[0].children);
    //     console.log('hello')
    //     // if (nav.classList.contains('show')) {
    //     //     nav.classList.remove('show');
    //     //     icon.classList.remove('fa-times');
    //     //     icon.classList.add('fa-bars');
    //     //     icon.style.color = '#000';
    //     // }
    // }

    render() {
        return (
            <div className="nav-container">
                <MenuBtn open={this.openMenu}/>
                <nav id="nav">
                    <ul>
                    {this.state.navlinks.map(link => {
                        return (
                            <li id={link.item} key={link.item}>
                                <Link to={link.path}>{link.item}</Link>
                            </li>
                        )
                    })}
                    </ul>
                </nav>
            </div>
        )
    }

}


export default Sidebar;