import styled from "styled-components";
import { Icons } from "../Icons";
import { motion } from "framer-motion";
import { myInformation } from "../../database";
import Sidebar from "../Sidebar";

const Container = styled.div`
    height: 100px;

    span {
        font-weight: bold;
    }
`;

const Wrapper = styled.div`
    max-width: 1366px;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Social = styled.div`
    display: flex;
    gap: 20px;
    font-size: 18px;
    align-items: center;
`;

const Name = styled(motion.span)``;

const Navbar = () => {
    const { firstName, lastName, currentLevel } = myInformation;
    return (
        <Container>
            <Sidebar />
            <Wrapper>
                <Name
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {firstName}, {lastName} - {currentLevel}
                </Name>
                <Social>
                    <Icons.Linkedin />
                    <Icons.Github />
                    <Icons.Phone /> +84 946310531
                </Social>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
