/**
 * @abstract Fallback error page.
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
  <Flex justify="center" style={{ height: "90vh" }} id="notfound">
    <Head>
      <title>Server Error - NextJS SSR Kit</title>
    </Head>
    <Center style={{ color: "#03a9f3" }}>
      <ErrorStatus>500</ErrorStatus>
      <ErrorMessage>Uh Oh! The server encountered an error!</ErrorMessage>
      <Link href="/">
        <HomeIcon />
        <span>Go Back</span>
      </Link>
    </Center>
  </Flex>
);

export default NotFound;
