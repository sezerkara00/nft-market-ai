"use client";

import { NFT_CONTRACTS } from "@/consts/nft_contracts";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <Flex>
      <Box mt="24px" m="auto">
        <Flex direction="column" gap="4">
          <Card border="1px" maxW="90vw" mx="auto">
            <CardHeader>
              <Heading size="md">Atatürk Üniversitesi</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Opensea Adresi
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    <a target="_blank" href="https://testnets.opensea.io/collection/atauni-1">https://testnets.opensea.io/collection/atauni-1</a>
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    NFT MİNT ETMEK İÇİN OLUŞTURULAN SİTE
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    <a target="_blank" href="https://atauni-ai-nft-mint-v2.vercel.app/">https://atauni-ai-nft-mint-v2.vercel.app//</a>
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    İletişim
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    Sezer Kara
                  </Text>
                  <Text pt="2" fontSize="sm">
                    Email: sezer.kara20@ogr.atauni.edu.tr || sezerkara949@gmail.com
                  </Text>
                  <Text pt="2" fontSize="sm">
                    Telefon: +90 537 386 86 14
                  </Text>
                  <Flex mt="4" gap="2">
                    <Button as="a" href="https://github.com/sezerkara00" target="_blank" leftIcon={<FaGithub />} colorScheme="gray">
                      GitHub
                    </Button>
                    <Button as="a" href="https://instagram.com/sezer.kara00" target="_blank" leftIcon={<FaInstagram />} colorScheme="pink">
                      Instagram
                    </Button>
                    <Button as="a" href="https://www.linkedin.com/in/sezer-kara-824938239/" target="_blank" leftIcon={<FaLinkedin />} colorScheme="linkedin">
                      LinkedIn
                    </Button>
                  </Flex>
                </Box>
              </Stack>
            </CardBody>
          </Card>

          <Heading ml="20px" mt="40px">
            Trending collections
          </Heading>
          <Flex
            direction="row"
            wrap="wrap"
            mt="20px"
            gap="5"
            justifyContent="space-evenly"
          >
            {NFT_CONTRACTS.map((item) => (
              <Link
                _hover={{ textDecoration: "none" }}
                w={300}
                h={400}
                key={item.address}
                href={`/collection/${item.chain.id.toString()}/${item.address}`}
              >
                <Image src={item.thumbnailUrl} />
                <Text fontSize="large" mt="10px">
                  {item.title}
                </Text>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
