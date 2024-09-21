import { motion, Variants } from "framer-motion";
import { useMemo } from "react";
import styled from "styled-components";
import { myInformation } from "../../database";

const Container = styled.div`
    height: calc(100vh - 100px);
    background: linear-gradient(180deg, #0c0c1d, #111132);
    overflow: hidden;
    position: relative;
`;

const ImageContainer = styled.div`
    height: 100%;
    position: absolute;
    right: 0;
    bottom: -20px;
`;

const WrapperTextContainer = styled.div`
    max-width: 1366px;
    height: 100%;
    margin: auto;
`;

const TextContainer = styled(motion.div)`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;

    h1 {
        font-size: 88px;
    }

    h2 {
        font-size: 30px;
        color: rebeccapurple;
        letter-spacing: 10px;
    }

    img {
        width: 50px;
    }
`;

const ButtonList = styled.div`
    z-index: 1;
    button {
        padding: 20px;
        border: 1px solid white;
        border-radius: 10px;
        background-color: transparent;
        color: white;
        margin-right: 20px;
        cursor: pointer;
        font-weight: 400;
    }
    :nth-child(2) {
        background-color: white;
        color: black;
    }
`;

const SlidingTextContainer = styled(motion.div)`
    position: absolute;
    font-size: 50vh;
    bottom: -120px;
    white-space: nowrap;
    color: #ffffff09;
    width: 100%;
    font-weight: bold;
    z-index: 0;
`;

const Hero = () => {
    const { firstName, lastName, currentLevel } = myInformation;

    const textVariants: Variants = useMemo(() => {
        return {
            initial: {
                x: -500,
                opacity: 0,
            },
            animate: {
                x: 0,
                opacity: 1,
                transition: {
                    duration: 1,
                    staggerChildren: 0.1,
                },
            },
            scrollButton: {
                opacity: 0,
                y: 10,
                transition: {
                    duration: 2,
                    repeat: Infinity,
                },
            },
        };
    }, []);

    const sliderVariants: Variants = useMemo(() => {
        return {
            initial: {
                x: 0,
            },
            animate: {
                x: "-220%",
                transition: {
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 40,
                },
            },
        };
    }, []);

    return (
        <Container>
            <WrapperTextContainer>
                <TextContainer
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>
                        {firstName}, {lastName}
                    </motion.h2>
                    <motion.h1 variants={textVariants}>
                        {currentLevel}
                    </motion.h1>
                    <ButtonList>
                        <motion.button variants={textVariants}>
                            See the Latest Works
                        </motion.button>
                        <motion.button variants={textVariants}>
                            Contact Me
                        </motion.button>
                    </ButtonList>
                    <motion.img
                        variants={textVariants}
                        animate="scrollButton"
                        src="/scroll.png"
                        alt="scroll-image"
                    />
                </TextContainer>
            </WrapperTextContainer>
            <SlidingTextContainer
                variants={sliderVariants}
                initial="initial"
                animate="animate"
            >
                {currentLevel}
            </SlidingTextContainer>
            <ImageContainer>
                <img src="/baoph.png" alt="image-information" />
            </ImageContainer>
        </Container>
    );
};

export default Hero;
