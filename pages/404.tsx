/**
 * @abstract This document overrides the default error page.
 */
import Head from "next/head";
import Center from "lib/components/Layout/Center";
import ErrorMessage from "lib/components/Layout/ErrorMessage";
import ErrorStatus from "lib/components/Layout/ErrorStatus";
import Flex from "lib/components/Layout/Flex";
import HomeIcon from "lib/components/Layout/HomeIcon";
import Link from "lib/components/Navigation/Link";
import { ReactElement } from "lib/types";

const NotFound = (): ReactElement => (
  <Flex
    data-testid="not-found-page"
    justify="center"
    style={{ height: "90vh" }}
    id="notfound"
  >
    <Head>
      <title>Not Found - NextJS SSR Kit</title>
    </Head>
    <Center
      style={{
        color: "#03a9f3",
        background: "#fff",
        boxShadow: "0 4px 14px 0 rgba(130, 130, 130, 0.19)",
        padding: 40
      }}
    >
      <ErrorStatus>404</ErrorStatus>
      <ErrorMessage>Uh Oh! Page not found!</ErrorMessage>
      <Link href="/">
        <HomeIcon />
        <span>Go Back</span>
      </Link>
    </Center>
  </Flex>
);

export default NotFound;
