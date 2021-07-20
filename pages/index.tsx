import * as React from "react";
import styled from "@emotion/styled";
import { FaCoffee, FaHashtag } from "react-icons/fa";
import Center from "lib/components/Layout/Center";
import Link from "lib/components/Navigation/Link";
import SubTitle from "lib/components/Layout/SubTitle";
import Header from "lib/components/Navigation/Header";
import { ReactElement } from "lib/types";

const PageContainer = styled.div`
  max-width: 850px;
  width: 100%;
  padding-top: 25vh;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

const Home = (): ReactElement => (
  <Center data-testid="home-page" style={{ height: "100%", color: "#0076ff" }}>
    <Header title="Home" url="/" />
    <PageContainer>
      <img
        style={{ marginBottom: "10px", width: "100%" }}
        src="/images/nextjsKit.png"
        alt="ssrLogoLight.png"
      />
      <SubTitle>Edit files in the root directory and save to reload.</SubTitle>
      <Link href="/users" className="mr-2">
        <FaCoffee className="mr-2" />
        View Users
      </Link>
      <Link href="/tags">
        <FaHashtag className="mr-2" />
        Tags
      </Link>
    </PageContainer>
  </Center>
);

export default Home;
