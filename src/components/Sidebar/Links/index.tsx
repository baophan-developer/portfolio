import styled from "styled-components";
import { NameLinks } from "../../../constants";
import { motion, Variants } from "framer-motion";
import { useMemo } from "react";

const Container = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    a {
        font-size: 40px;
    }
`;

const Item = styled(motion.a)``;

const Links = () => {
    const variants: Variants = useMemo(() => {
        return {
            open: {
                transition: {
                    staggerChildren: 0.1,
                },
            },
            closed: {
                transition: {
                    staggerChildren: 0.05,
                    staggerDirection: -1,
                },
            },
        };
    }, []);

    const itemVariants: Variants = useMemo(() => {
        return {
            open: {
                y: 0,
                opacity: 1,
            },
            closed: {
                y: 50,
                opacity: 0,
            },
        };
    }, []);

    return (
        <Container variants={variants}>
            {NameLinks.map((item) => {
                return (
                    <Item
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.1,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        href={`#${item}`}
                        key={item}
                    >
                        {item}
                    </Item>
                );
            })}
        </Container>
    );
};

export default Links;
