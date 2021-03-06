import { Link } from "react-scroll";
import * as S from "./styles";

import { Container } from "styles/globals";
import { useEffect, useState } from "react";
import { relative } from "node:path";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const duration = 1000;

  useEffect(() => {
    isMenuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  });

  return (
    <S.Header>
      <Container>
        <S.ItemsWrapper>
          <Link
            to="home"
            spy={false}
            smooth="easeInOutQuart"
            duration={duration}
          >
            <img
              src="/img/icons8-alien-48.png"
              alt="Logo com as inicias 'C A'"
              width={50}
              height={50}
            />
          </Link>

          <S.Nav>
            <S.NavItens className={isMenuOpen ? "menu_active" : ""}>
              <S.NavItem>
                <Link
                  to="about"
                  smooth="easeInOutQuart"
                  duration={duration}
                  activeClass="active"
                >
                  About
                </Link>
              </S.NavItem>
              <S.NavItem>
                <Link
                  to="portfolio"
                  smooth="easeInOutQuart"
                  duration={duration}
                  activeClass="active"
                >
                  Portfolio
                </Link>
              </S.NavItem>
              <S.NavItem>
                <a href="https://github.com/C4RL0M" target="_blank" rel="noopener">
                  Github
                </a>
              </S.NavItem>
              <S.NavItem>
                <Link
                  to="contact"
                  smooth="easeInOutQuart"
                  duration={duration}
                  activeClass="active"
                >
                  Contact
                </Link>
              </S.NavItem>
            </S.NavItens>
          </S.Nav>

          <S.HambIcon
            className={isMenuOpen ? "menu_active" : ""}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </S.ItemsWrapper>
        <S.MobileWrapper
          id="hmocIu"
          className={isMenuOpen ? "menu_active" : ""}
        >
          <S.MobileItems>
            <S.MobileItem>
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="about"
                spy={true}
                smooth="easeInOutQuart"
                duration={duration}
              >
                About
              </Link>
            </S.MobileItem>
            <S.MobileItem>
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="portfolio"
                spy={true}
                smooth="easeInOutQuart"
                duration={duration}
              >
                Portfolio
              </Link>
            </S.MobileItem>
            <S.MobileItem>
              <a href="https://github.com/C4RL0M" target="_blank" rel="noopener">
              Github
              </a>
            </S.MobileItem>
            <S.MobileItem>
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="contact"
                spy={true}
                smooth="easeInOutQuart"
                duration={duration}
              >
                Contact
              </Link>
            </S.MobileItem>
          </S.MobileItems>
        </S.MobileWrapper>
      </Container>
    </S.Header>
  );
};

export default Header;
