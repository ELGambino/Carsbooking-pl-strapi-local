import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { all_routes } from '../../router/all_routes'

const SettingsSidebar = () => {
    const route = all_routes
    const location = useLocation();
    const isLinkActive = (route:string) => {
        // Check if the current location matches the given route
        return location.pathname === route;
    };

return (
        <div className="col-lg-3 theiaStickySidebar">
            <div className="stickybar">
                <div className="settings-widget">
                    <div className="settings-menu">
                        <ul>
                            <li>
                                <Link to={route.settings} className={isLinkActive(route.settings) ? "active" : ""}>
                                    <i className="feather-user" /> Profil
                                </Link>
                            </li>
                            <li>
                                <Link to={route.security} className={isLinkActive(route.security) ? "active" : ""}>
                                    <i className="feather-shield" /> Bezpieczeństwo
                                </Link>
                            </li>
                            <li>
                                <Link to={route.preference} className={isLinkActive(route.preference) ? "active" : ""}>
                                    <i className="feather-star" /> Preferencje
                                </Link>
                            </li>
                            <li>
                                <Link to={route.notification} className={isLinkActive(route.notification) ? "active" : ""}>
                                    <i className="feather-bell" /> Notyfikacje
                                </Link>
                            </li>
                            <li>
                                <Link to={route.integration} className={isLinkActive(route.integration) ? "active" : ""}>
                                    <i className="feather-git-merge" /> Integracje
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
)
}

export default SettingsSidebar
