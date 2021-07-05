import React from "react";
import { Box } from "../components/Core";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing/Hero";
import MainLinks from "../sections/landing/MainLinks";

const IndexPage = () => {
  return (
    <>
      <PageWrapper darkTheme>
        <Box>
          <Hero />
          <MainLinks />
        </Box>
      </PageWrapper>
    </>
  );
};  
export default IndexPage;
