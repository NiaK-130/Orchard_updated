import Link from 'next/link';
import Image from 'next/Image';
import {Box, Flex, Text, Avatar} from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import millify from 'millify';
import DefaultImage from '../assets/images/house.png';


const Property = ({property: {coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalId}}) => (
    <Link href={`/property/${externalId}`} passHref>
        <Flex flexWrap = "wrap" w ="420px" p ="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
            <Box>
                <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width = {400} height={260} alt = "house" />
            </Box>
            <Box w="full">
                <Flex paddingTop ="2" alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center">
                        <Box paddingRight="3" color="green.400">{isVerified && <GoVerified/>}</Box>
                        <Text fontWeight="bold" fontSize="1g">AED {millify(price)}{rentFrequency && `/${rentFrequency}`} </Text>
                    </Flex>
                    <Box>
                        <Avatar size="sm" src={agency?.logo?.url}></Avatar>
                    </Box>
                </Flex>
                <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
                    {rooms} <FaBed/> | {baths} <FaBath/> | {millify(area)} sqft <BsGridFill/>
                </Flex>
                
                <Text fontSize="lg">
                    {title.length > 30 ? `${title.substring(0,30)}...`:title} 
                </Text>

            </Box>

        </Flex>
    </Link>
);

//in line 21, if there is a rentFrequency in that case we are going to render a template string `$/{rentFrequency}`
//in line 32 , if title is greater than 30 characters we are going to cut it from (0, 30)


export default Property; 