
//render our footer, navigation bar and content in the middle 
import Head from 'next/head';
import {Box} from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

//the childern prop === whatever we pass into the layout component 
//so for ex. here children === <h1>test</h1>
{/* <Layout>
<h1>test</h1>
</Layout> */}

const Layout = ({children}) => (
    <>
    <Head>
        <title>Orchard</title>
    </Head>
    <Box maxWidth="1280px" m="auto">
        <header>
            <Navbar/>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <Footer/>
        </footer>
    </Box>
    </>
)

export default Layout; 