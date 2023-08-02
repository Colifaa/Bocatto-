import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack , StackDivider ,Flex, Avatar,Box,Heading,Text, IconButton,BsThreeDotsVertical,Image,Button,BiLike ,BiChat,BiShare  } from '@chakra-ui/react'
function Cards() {
  return (
    <Card>
    <CardHeader>
      <Heading size='md'>Client Report</Heading>
    </CardHeader>
  
    <CardBody>
      <Stack divider={<StackDivider />} spacing='4'>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Summary
          </Heading>
          <Text pt='2' fontSize='sm'>
            View a summary of all your clients over the last month.
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Overview
          </Heading>
          <Text pt='2' fontSize='sm'>
            Check out the overview of your clients.
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Analysis
          </Heading>
          <Text pt='2' fontSize='sm'>
            See a detailed analysis of all your business clients.
          </Text>
        </Box>
      </Stack>
    </CardBody>
  </Card>
  )
}

export default Cards
