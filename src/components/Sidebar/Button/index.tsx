import { motion } from "framer-motion";
import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export const Container = styled.button`
    width: 50px;
    height: 50px;
    position: fixed;
    top: 25px;
    left: 25px;
    background: transparent;
    border: none;
    cursor: pointer;
`;

const Path = styled(motion.path)``;

type ButtonProps = ButtonHTMLAttributes<unknown> & {
    icon?: React.ReactElement | React.ReactNode;
};

const IconDefault = () => {
    return (
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    open: { d: "M 3 16.5 L 17 2.5" },
                    closed: { d: "M 2 2.5 L 20 2.5" },
                }}
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
            ></Path>
            <Path
                variants={{
                    open: { opacity: 0 },
                    closed: { opacity: 1 },
                }}
                d="M 2 9.243 L 20 9.423"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
            ></Path>
            <Path
                variants={{
                    open: { d: "M 3 2.5 L 17 16.346" },
                    closed: { d: "M 2 16.346 L 20 16.346" },
                }}
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
            ></Path>
        </svg>
    );
};

export const Button = (props: ButtonProps) => {
    const { icon, children, ...rest } = props;

    return (
        <Container {...rest}>
            {icon ? icon : <IconDefault />}
            {children}
        </Container>
    );
};
