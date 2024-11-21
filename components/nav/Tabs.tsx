import React from 'react'
import { Tab } from './Tab'

const Tabs = () => {
    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About us',
            path: '/about-us '
        },
        {
            title: 'Services',
            path: '/services'
        },
        {
            title: 'Projets',
            path: '/projets'
        },
        {
            title: "Gallery",
            path: '/gallery'
        },
        {
            title: "News",
            path: '/news'
        },
        {
            title: "Get in Touch",
            path: '/contact-us'
        }
    ]
    return (
        <>
            {links.map((link: any) => <Tab key={link.title} {...link} />)}
        </>
    )
}

export default Tabs