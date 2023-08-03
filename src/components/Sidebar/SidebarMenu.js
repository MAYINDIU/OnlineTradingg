import React, { useState } from 'react';
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import { FaAngleDown, FaAngleRight, FaAngleUp } from "react-icons/fa";
import { NavItem, NavLink } from 'reactstrap';

const SidebarMenu = ({ key, prop, closeCollapse }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => (
        setIsMenuOpen(!isMenuOpen)
    )


    return (
        <div>

            <div >
                <div className="d-flex justify-content-between align-items-center" onClick={toggleMenu}>
                    <NavItem key={key}>
                        <NavLink
                            to={prop.layout + prop.path}
                            tag={NavLinkRRD}
                            onClick={closeCollapse}
                        >
                            <i className={prop.icon} />
                            {prop.name}
                        </NavLink>
                    </NavItem>
                    {!isMenuOpen ? <FaAngleDown className='mr-4' /> : <FaAngleUp className='mr-4' />}
                </div>
                {
                    isMenuOpen && <div className='px-3'>
                        {
                            prop.subMenu.map((subRoute, key) => (
                                <NavItem key={key}>
                                    <NavLink
                                        to={subRoute.path}
                                        tag={NavLinkRRD}
                                        onClick={closeCollapse}
                                    >
                                        <i className={subRoute.icon} />
                                        {subRoute.name}
                                    </NavLink>
                                </NavItem>
                            ))
                        }
                    </div>

                }
            </div>

        </div>
    );
};

export default SidebarMenu;