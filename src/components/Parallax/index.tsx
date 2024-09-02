import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import styled from "styled-components";
import { ParallaxType } from "../../constants";

const Container = styled.div<{ $type?: `${ParallaxType}` }>`
    background: ${(props) => {
        switch (props.$type) {
            case ParallaxType.Introduce:
                return "linear-gradient(180deg, #111132, #0c0c1d)";
            default:
                return "linear-gradient(180deg, #111132, #505064)";
        }
    }};
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(motion.h1)`
    font-size: 100px;
`;

const Mountains = styled(motion.div)`
    background-image: url("/mountains.png");
    background-size: cover;
    background-position: bottom;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    z-index: 3;
`;

const Planets = styled(motion.div)`
    background-image: url("/planets.png");
    background-size: cover;
    background-position: bottom;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    z-index: 2;
`;

const Stars = styled(motion.div)`
    background-image: url("/stars.png");
    background-size: cover;
    background-position: bottom;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    z-index: 1;
`;

type ParallaxProps = {
    type: `${ParallaxType}`;
};
const Parallax = (props: ParallaxProps) => {
    const { type } = props;

    const ref = useRef<any>();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yHeading = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const renderTitle = useMemo(() => {
        switch (type) {
            case ParallaxType.Introduce:
                return "Introduce Myself";
            case ParallaxType.SkillTool:
                return "Skill & Tool";
            case ParallaxType.Education:
                return "Education";
            case ParallaxType.Experience:
                return "Experience";
            default:
                return "Introduce Myself";
        }
    }, [type]);

    return (
        <Container $type={type} ref={ref}>
            <Heading style={{ y: yHeading }}>{renderTitle}</Heading>
            <Mountains />
            <Planets style={{ y: yBg }} />
            <Stars style={{ y: yBg }} />
        </Container>
    );
};

export default Parallax;
