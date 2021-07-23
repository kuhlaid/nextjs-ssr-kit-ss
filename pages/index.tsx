import * as React from "react";
import styled from "@emotion/styled";
import { FaCoffee, FaHashtag } from "react-icons/fa";
import Center from "lib/components/Layout/Center";
import Button from "react-bootstrap/Button";
import Image from "next/Image";
import Header from "lib/components/Navigation/Header";
import { ReactElement } from "lib/types";
import imgnextjsKit from "public/images/640px-Nextjs-logo.svg.png";

const Home = (): ReactElement => (
  <Center data-testid="home-page" style={{ height: "100%", color: "#0076ff" }}>
    <Header title="Home" url="/" />
    <Image src={imgnextjsKit} alt="ssrLogoLight.png" height="300px" />
    <div className="text-primary h1">SSR Kit - Single Server</div>
    <div className="text-secondary h2">
      A framework for building NextJs apps.
    </div>
    <Button href="/users" variant="outline-primary" className="m-3 ps-4 pe-4">
      <FaCoffee className="m-1" />
      Users
    </Button>
    <Button href="/tags" variant="outline-primary" className="m-3 ps-4 pe-4">
      <FaHashtag className="m-1" />
      Tags
    </Button>
  </Center>
);

export default Home;
