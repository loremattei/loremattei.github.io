import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import {
  Section,
  Box,
  LinkContact,
} from "../../components/Core";

const NoTopPaddingSection = styled(Section)`
  padding-top: 0px;
`;

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <NoTopPaddingSection className="position-relative">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg="11" xl="10" className="text-center">
              <Box>
                <Box
                  className="text-center d-flex justify-content-center"
                  mt={["3rem", null, "4rem"]}
                >
                  <div className="d-flex flex-column flex-lg-row justify-content-center">
                    <LinkContact
                      href="/#"
                      target="_blank"
                      className="mb-2 mb-lg-0"
                    >
                      ENGINEERING BLOG
                    </LinkContact>
                    <span className="divider mx-2 mx-lg-4 d-none d-lg-block">
                      |
                    </span>
                    <LinkContact
                      href="https://www.lorenzomattei.com"
                      target="_blank"
                    >
                      PHOTOGRAPHY STUDIO
                    </LinkContact>
                  </div>
                </Box>
              </Box>
            </Col>
          </Row>
        </Container>
      </NoTopPaddingSection>
    </>
  );
};

export default Hero;
