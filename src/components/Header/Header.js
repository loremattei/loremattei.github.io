import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import GlobalContext from "../../context/GlobalContext";
import Offcanvas from "../Offcanvas";
import NestedMenu from "../NestedMenu";
import { device } from "../../utils";
import Logo from "../Logo";
import { menuItems } from "./menuItems";

const SiteHeader = styled.header`
  padding: 0;
  position: absolute !important;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  @media ${device.lg} {
    position: fixed !important;
    transition: 0.4s;
    &.scrolling {
      transform: translateY(-100%);
      transition: 0.4s;
    }
    &.reveal-header {
      transform: translateY(0%);
      box-shadow: 0 12px 34px -11px rgba(65, 62, 101, 0.1);
      z-index: 9999;
      background: ${({ dark, theme }) => theme.colors.bg};
    }
  }
`;

const ToggleButton = styled.button`
  color: ${({ dark, theme }) => theme.colors.front}!important;
  border-color: ${({ dark, theme }) => theme.colors.front}!important;
`;

const Menu = styled.ul`
  @media ${device.lg} {
    display: flex;
    justify-content: flex-end;
  }
  .dropdown-toggle {
    cursor: pointer;
  }
  > li {
    > .nav-link {
      @media ${device.lg} {
        color: ${({ dark, theme }) => theme.colors.front}!important;
        transition: 0.4s;
        align-items: center;
        display: inline-flex;
        font-size: 15px;
        font-weight: 700;
        line-height: 24px;
        padding-top: 18px !important;
        padding-bottom: 18px !important;
        padding-left: 18px !important;
        padding-right: 18px !important;

        text-transform: lowercase;

        &.dropdown-toggle:after {
          margin-left: 10px;
          position: relative;
          transform: rotate(90deg);
          top: 1px;
          content: "\\ea06";
          border: none;
          font-family: "Grayic";
          font-size: 24px;
          transition: 0.4s;
          font-weight: 900;
          line-height: 14px;
        }
      }
    }
    &.nav-item:hover > .nav-link,
    &.nav-item.active > .nav-link {
      color: ${({ theme }) => theme.colors.primary} !important;
      &:after {
        transform: rotate(-90deg);
      }
    }
  }
  .nav-item.dropdown {
    @media ${device.lg} {
      position: relative;
      z-index: 99;
    }
    &:hover {
      > .menu-dropdown {
        @media ${device.lg} {
          top: 90%;
          right: 0;
          opacity: 1;
          pointer-events: visible;
        }
      }
    }
  }
`;

const Header = ({ isDark }) => {
  const gContext = useContext(GlobalContext);
  const [showScrolling, setShowScrolling] = useState(false);
  const [showReveal, setShowReveal] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < 0) {
      setShowScrolling(true);
    } else {
      setShowScrolling(false);
    }
    if (currPos.y < -300) {
      setShowReveal(true);
    } else {
      setShowReveal(false);
    }
  });

  return (
    <>
      <SiteHeader
        className={`sticky-header ${showScrolling ? "scrolling" : ""} ${
          showReveal ? "reveal-header" : ""
        }`}
        dark={isDark ? 1 : 0}
      >
        <Container fluid>
          <nav className="navbar px-0 px-md-3 site-navbar offcanvas-active navbar-expand-lg navbar-light">
            {/* <!-- Brand Logo--> */}
            <div className="brand-logo">
              <Logo color={isDark ? "light" : "dark"} />
            </div>
            <div className="collapse navbar-collapse">
              <div className="navbar-nav ml-lg-auto mr-3">
                <Menu
                  className="navbar-nav d-none d-lg-flex"
                  dark={isDark ? 1 : 0}
                >

                  {/* HOme */}
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/"
                    >
                      home.
                    </a>
                  </li>

                  {/* Open about modal */}
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/#"
                      onClick={(e) => {
                        e.preventDefault();
                        gContext.toggleAbout();
                      }}
                    >
                      about me.
                    </a>
                  </li>

                  {/* Open contact modal */}
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/#"
                      onClick={(e) => {
                        e.preventDefault();
                        gContext.toggleContact();
                      }}
                    >
                      contact.
                    </a>
                  </li>
                </Menu>
              </div>
            </div>

            <ToggleButton
              className={`navbar-toggler btn-close-off-canvas ml-3 ${
                gContext.visibleOffCanvas ? "collapsed" : ""
              }`}
              type="button"
              data-toggle="collapse"
              data-target="#mobile-menu"
              aria-controls="mobile-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={gContext.toggleOffCanvas}
              dark={isDark ? 1 : 0}
            >
              {/* <i className="icon icon-simple-remove icon-close"></i> */}
              <i className="icon icon-menu-34 icon-burger d-block"></i>
            </ToggleButton>
          </nav>
        </Container>
      </SiteHeader>
      <Offcanvas
        show={gContext.visibleOffCanvas}
        onHideOffcanvas={gContext.toggleOffCanvas}
      >
        <NestedMenu menuItems={menuItems} />
      </Offcanvas>
    </>
  );
};
export default Header;
