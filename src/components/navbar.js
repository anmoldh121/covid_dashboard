import React from 'react';

import "./navbar.css";

export default function Navbar() {
    return (
        <div className="nav-container">
            <div className="cov-icon">
                <svg id="Capa_1" enableBackground="new 0 0 512 512" height="50" viewBox="0 0 512 512" width="50" xmlns="http://www.w3.org/2000/svg"><g id="XMLID_37_"><g id="XMLID_1644_"><circle id="XMLID_1645_" cx="424.357" cy="424.357" fill="#b7eabc" r="32.643"/></g><g id="XMLID_1642_"><circle id="XMLID_1643_" cx="424.357" cy="424.357" fill="#b7eabc" r="32.643"/></g><g id="XMLID_1640_"><circle id="XMLID_1641_" cx="87.643" cy="424.357" fill="#b7eabc" r="32.643"/></g><g id="XMLID_1638_"><circle id="XMLID_1639_" cx="87.643" cy="424.357" fill="#b7eabc" r="32.643"/></g><g id="XMLID_1636_"><circle id="XMLID_1637_" cx="424.357" cy="87.643" fill="#b7eabc" r="32.643"/></g><g id="XMLID_1634_"><circle id="XMLID_1635_" cx="424.357" cy="87.643" fill="#b7eabc" r="32.643"/></g><g id="XMLID_1632_"><circle id="XMLID_1633_" cx="87.643" cy="87.643" fill="#b7eabc" r="32.643"/></g><g id="XMLID_1630_"><circle id="XMLID_1631_" cx="87.643" cy="87.643" fill="#b7eabc" r="32.643"/></g><g fill="#b7eabc"><circle id="XMLID_1629_" cx="470.5" cy="256" r="31.5"/><circle id="XMLID_1628_" cx="41.5" cy="256" r="31.5"/><circle id="XMLID_1627_" cx="256" cy="470.5" r="31.5"/><circle id="XMLID_1626_" cx="256" cy="41.5" r="31.5"/><circle id="XMLID_1625_" cx="470.5" cy="256" r="31.5"/><circle id="XMLID_1624_" cx="41.5" cy="256" r="31.5"/><circle id="XMLID_1623_" cx="256" cy="470.5" r="31.5"/><circle id="XMLID_1622_" cx="256" cy="41.5" r="31.5"/></g><path id="XMLID_1595_" d="m365.785 365.785c-23.01 23.01-51.326 37.279-81.069 42.824l-6.089 1.108c-13.104 2.384-22.627 13.797-22.627 27.115 0-13.318-9.523-24.731-22.627-27.115l-5.968-1.108c-29.743-5.545-58.18-19.814-81.19-42.824s-37.279-51.326-42.824-81.069l-1.108-6.089c-2.384-13.104-13.797-22.627-27.115-22.627 13.318 0 24.731-9.523 27.115-22.626l1.108-5.968c5.545-29.743 19.814-58.18 42.824-81.19s51.447-37.279 81.19-42.824l5.968-1.108c13.104-2.385 22.627-13.798 22.627-27.116 0 13.318 9.523 24.731 22.626 27.115l6.089 1.108c29.743 5.545 58.059 19.814 81.069 42.824s37.279 51.447 42.824 81.19l1.108 5.968c2.385 13.104 13.798 22.627 27.116 22.627-13.318 0-24.731 9.523-27.115 22.626l-1.108 6.089c-5.546 29.744-19.814 58.06-42.824 81.07z" fill="#ff9171"/><circle id="XMLID_1672_" cx="290.833" cy="299.883" fill="#b7eabc" r="43.167"/><circle id="XMLID_1671_" cx="190.744" cy="228.342" fill="#b7eabc" r="28.374"/><circle id="XMLID_1670_" cx="283.152" cy="181.147" fill="#b7eabc" r="25.147"/><g id="XMLID_255_"><path id="XMLID_273_" d="m470.5 214.5c-19.013 0-35.068 12.856-39.96 30.328-5.586-2.146-9.862-7.072-10.991-13.281l-1.11-5.975c-5.512-29.563-18.855-56.713-38.742-79.126l22.43-22.43c6.478 3.974 14.09 6.269 22.231 6.269 23.513 0 42.643-19.129 42.643-42.643s-19.13-42.642-42.644-42.642-42.643 19.129-42.643 42.643c0 8.14 2.296 15.753 6.27 22.231l-22.429 22.429c-22.42-19.902-49.533-33.246-79.048-38.749l-6.09-1.108c-6.181-1.125-11.1-5.4-13.245-10.985 17.472-4.893 30.328-20.948 30.328-39.961 0-22.883-18.617-41.5-41.5-41.5s-41.5 18.617-41.5 41.5c0 19.005 12.846 35.055 30.307 39.954-1.931 4.984-6.076 8.988-11.379 10.552-5.297 1.563-8.324 7.125-6.761 12.421 1.563 5.298 7.126 8.322 12.421 6.761 6.609-1.951 12.387-5.665 16.877-10.531 5.372 5.817 12.595 9.958 20.87 11.464l6.047 1.101c28.761 5.362 54.983 19.216 75.831 40.064 20.83 20.83 34.684 47.093 40.063 75.945l1.102 5.932c1.503 8.257 5.63 15.468 11.427 20.836-5.797 5.368-9.925 12.579-11.427 20.835l-1.101 6.047c-5.362 28.761-19.216 54.983-40.064 75.831s-47.069 34.702-75.789 40.057l-6.088 1.108c-8.256 1.502-15.466 5.629-20.834 11.425-5.363-5.795-12.564-9.919-20.803-11.418l-5.961-1.107c-28.858-5.38-55.122-19.234-75.952-40.064-20.848-20.848-34.702-47.069-40.057-75.789l-1.108-6.088c-1.502-8.256-5.629-15.466-11.425-20.834 5.795-5.363 9.919-12.564 11.418-20.803l1.107-5.961c5.38-28.858 19.234-55.122 40.064-75.952 2.633-2.634 5.395-5.194 8.21-7.61 4.19-3.598 4.671-9.911 1.073-14.102-3.598-4.19-9.91-4.67-14.102-1.073-.683.587-1.362 1.184-2.039 1.785l-22.413-22.413c3.974-6.478 6.269-14.09 6.269-22.231.002-23.513-19.127-42.642-42.64-42.642s-42.643 19.129-42.643 42.643 19.129 42.643 42.643 42.643c8.14 0 15.753-2.296 22.231-6.269l22.43 22.43c-19.888 22.413-33.231 49.563-38.744 79.133l-1.115 6.004c-1.125 6.181-5.4 11.1-10.985 13.245-4.892-17.473-20.947-30.329-39.96-30.329-22.883 0-41.5 18.617-41.5 41.5s18.617 41.5 41.5 41.5c19.013 0 35.068-12.856 39.96-30.328 5.585 2.145 9.86 7.064 10.985 13.246l1.116 6.131c5.496 29.477 18.839 56.586 38.741 79.006l-22.429 22.429c-6.478-3.974-14.09-6.269-22.231-6.269-23.513 0-42.642 19.129-42.642 42.642 0 23.514 19.129 42.643 42.643 42.643s42.643-19.129 42.643-42.643c0-8.14-2.296-15.753-6.269-22.231l22.43-22.43c22.414 19.887 49.565 33.231 79.134 38.744l6.004 1.115c6.181 1.125 11.1 5.4 13.245 10.985-17.472 4.891-30.328 20.947-30.328 39.96 0 22.883 18.617 41.5 41.5 41.5s41.5-18.617 41.5-41.5c0-19.013-12.856-35.069-30.328-39.96 2.145-5.585 7.064-9.86 13.246-10.985l6.131-1.116c29.477-5.496 56.586-18.839 79.006-38.741l22.429 22.429c-3.974 6.478-6.27 14.091-6.27 22.231 0 23.513 19.129 42.643 42.643 42.643 23.512-.001 42.641-19.13 42.641-42.644 0-23.513-19.129-42.643-42.643-42.643-8.14 0-15.753 2.296-22.231 6.269l-22.429-22.429c19.902-22.421 33.246-49.533 38.749-79.048l1.108-6.09c1.125-6.181 5.4-11.1 10.985-13.245 4.891 17.472 20.947 30.328 39.96 30.328 22.883 0 41.5-18.617 41.5-41.5s-18.616-41.499-41.499-41.499zm-236-173c0-11.855 9.645-21.5 21.5-21.5s21.5 9.645 21.5 21.5-9.645 21.5-21.5 21.5-21.5-9.645-21.5-21.5zm189.857 23.5c12.486 0 22.643 10.157 22.643 22.643 0 12.485-10.157 22.643-22.643 22.643-12.485 0-22.643-10.157-22.643-22.643s10.158-22.643 22.643-22.643zm-336.714 45.285c-12.486 0-22.643-10.157-22.643-22.642 0-12.486 10.157-22.643 22.643-22.643 12.485 0 22.643 10.157 22.643 22.643-.001 12.485-10.158 22.642-22.643 22.642zm-46.143 167.215c-11.855 0-21.5-9.645-21.5-21.5s9.645-21.5 21.5-21.5 21.5 9.645 21.5 21.5-9.645 21.5-21.5 21.5zm46.143 169.5c-12.486 0-22.643-10.157-22.643-22.643 0-12.485 10.157-22.643 22.643-22.643 12.485 0 22.643 10.157 22.643 22.643-.001 12.486-10.158 22.643-22.643 22.643zm189.857 23.5c0 11.855-9.645 21.5-21.5 21.5s-21.5-9.645-21.5-21.5 9.645-21.5 21.5-21.5 21.5 9.645 21.5 21.5zm146.857-68.785c12.485 0 22.643 10.157 22.643 22.643 0 12.485-10.157 22.642-22.643 22.642-12.485 0-22.643-10.157-22.643-22.643 0-12.485 10.158-22.642 22.643-22.642zm46.143-124.215c-11.855 0-21.5-9.645-21.5-21.5s9.645-21.5 21.5-21.5 21.5 9.645 21.5 21.5-9.645 21.5-21.5 21.5z"/><path id="XMLID_601_" d="m290.833 353.049c29.316 0 53.167-23.851 53.167-53.166 0-29.316-23.851-53.167-53.167-53.167s-53.167 23.851-53.167 53.167 23.851 53.166 53.167 53.166zm0-86.333c18.288 0 33.167 14.878 33.167 33.167 0 18.288-14.878 33.166-33.167 33.166s-33.167-14.878-33.167-33.166c.001-18.289 14.879-33.167 33.167-33.167z"/><path id="XMLID_1336_" d="m152.371 228.342c0 21.16 17.214 38.374 38.374 38.374s38.374-17.214 38.374-38.374c0-21.159-17.214-38.373-38.374-38.373-21.16-.001-38.374 17.214-38.374 38.373zm56.747 0c0 10.131-8.243 18.374-18.374 18.374s-18.374-8.243-18.374-18.374 8.242-18.373 18.374-18.373c10.131-.001 18.374 8.241 18.374 18.373z"/><path id="XMLID_1340_" d="m283.152 216.295c19.38 0 35.147-15.767 35.147-35.147s-15.767-35.148-35.147-35.148-35.147 15.767-35.147 35.148c-.001 19.38 15.766 35.147 35.147 35.147zm0-50.295c8.353 0 15.147 6.795 15.147 15.148 0 8.352-6.795 15.147-15.147 15.147-8.353 0-15.147-6.795-15.147-15.147-.001-8.353 6.794-15.148 15.147-15.148z"/><path id="XMLID_1341_" d="m193.02 124.06c2.63 0 5.21-1.07 7.07-2.93s2.93-4.44 2.93-7.07c0-2.64-1.07-5.21-2.93-7.08-1.86-1.86-4.44-2.92-7.07-2.92s-5.21 1.06-7.07 2.92c-1.86 1.87-2.93 4.44-2.93 7.08 0 2.63 1.07 5.21 2.93 7.07s4.44 2.93 7.07 2.93z"/></g></g></svg>
            </div>
            <p>
                Covid-19 Tracker Dashboard
            </p>
        </div>
    )
}