import React from 'react'
import Navbar from './Navbar';
import styles from '../../styles/global.css'


export default function Layout({children}) {
    return (
        <div className="Layout">
            <Navbar/>
            <div className="content">
                {    children }
            </div>
            <footer>
                <p> ___________________________________</p>
                <p>Copyright 2021 Crisostomo Agripino</p>
            </footer>
            
        </div>
    )
}
