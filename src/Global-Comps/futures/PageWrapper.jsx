import { motion } from "framer-motion";
import tw from "tailwind-styled-components";

export default function PageWrapper({ children, id }) {
  return (
    <Section id={id}>
      <RevealPage {...motionVariants} $id={id}>
        {children}
      </RevealPage>
    </Section>
  );
}

const motionVariants = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 1, delay: 0.8 },
};

const RevealPage = tw(motion.div)`
${(p) => p.$id === "home" && "!w-[98%] !mx-0"}
  flex
  h-[98%]
  my-auto
  lg:w-[80%]
  w-full
  lg:ms-[15%]
  lg:me-[10%]
  lg:mx-0
  mx-14
  max-sm:mx-2
  items-center
  overflow-hidden
  relative
`;

const Section = tw(motion.section)`
  scroll-snap
  flex
  justify-center
`;
