import { motion, Variants } from "framer-motion";
import { useMemo, useState } from "react";
import styled from "styled-components";
import Links from "./Links";
import { Button } from "./Button";

const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: black;
    position: relative;
    z-index: 999;
`;

const Background = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 400px;
    background-color: white;
`;

const Sidebar = () => {
    const [open, setOpen] = useState<boolean>(false);

    const variants: Variants = useMemo(() => {
        return {
            open: {
                clipPath: "circle(1200px at 50px 50px)",
                transition: {
                    type: "spring",
                    stiffness: 20,
                },
            },
            closed: {
                clipPath: "circle(30px at 50px 50px)",
                transition: {
                    delay: 0.5,
                    type: "spring",
                    stiffness: 400,
                    damping: 40,
                },
            },
        };
    }, []);

    return (
        <Container animate={open ? "open" : "closed"}>
            <Background variants={variants}>
                <Links />
            </Background>
            <Button onClick={() => setOpen((prev) => !prev)} />
        </Container>
    );
};

export default Sidebar;
