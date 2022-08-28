import { ChatBubbleOutline, DynamicFeed, HomeOutlined, MailOutline, MoneyOutlined, PermIdentity, Report, ReportOutlined, Storefront, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import "./sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                        <li className="sidebarListItem active">
                            <HomeOutlined className="sidebarIcon"/>Home
                        </li>
                        </Link>
                        
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>Sales
                        </li>

                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                        <li className="sidebarListItem">
                            <PermIdentity className="sidebarIcon"/>Users
                        </li>
                        </Link>
                        <Link to="/products"  className="link">
                        <li className="sidebarListItem">
                            <Storefront className="sidebarIcon"/>Products
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <MoneyOutlined className="sidebarIcon"/>Transactions
                        </li>
                        <li className="sidebarListItem">
                            <ReportOutlined className="sidebarIcon"/>Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <MailOutline className="sidebarIcon"/>Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcon"/>FeedBack
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcon"/>Messages
                        </li>

                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staffs</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon"/>Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon"/>Reports
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
