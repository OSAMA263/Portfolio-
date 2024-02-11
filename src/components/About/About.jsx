/* eslint-isable react/no-unescaped-entities */
import tw from "tailwind-styled-components";
import { motion } from "framer-motion";
import PageWrapper from "../../Global-Comps/futures/PageWrapper";
import SectionHeader from "../../Global-Comps/futures/SectionHeader";
import ContentWrapper from "../../Global-Comps/futures/ContentWrapper";
import LetterReveal from "../../Global-Comps/futures/Text_animation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function About() {
  let letter_i = 0;
  return (
    <PageWrapper id="about">
      <ContentWrapper>
        <Wrapper>
          <Text>
            <SectionHeader>About Me</SectionHeader>
            <ul className="flex flex-col sm:gap-y-4 gap-y-3 h-full">
              {text.map((line, line_i) => (
                <li
                  className="w-fit flex 2xl:leading-relaxed xl:leading-normal lg:leading-tight"
                  key={line_i}
                >
                  <LetterReveal
                    opaDelay={0.01}
                    opaSpeed={0.06}
                    letter_i={letter_i++}
                    opaWaitTime={3}
                  >
                    -{"\u00A0"}
                  </LetterReveal>
                  {/* words */}
                  <div>
                    {line
                      .replaceAll("-", `${"\u00A0"}`)
                      .split(" ")
                      .map((word, word_i) => (
                        <p className="inline-block" key={word_i}>
                          {word.split("").map((letter, i) => (
                            // letter
                            <LetterReveal
                              opaDelay={0.01}
                              opaSpeed={0.06}
                              opaWaitTime={3}
                              letter_i={letter_i++}
                              key={i}
                            >
                              {letter}
                            </LetterReveal>
                          ))}
                        </p>
                      ))}
                  </div>
                </li>
              ))}
            </ul>
          </Text>
          {/* ------------ */}
          <ImgWrapper>
            <LazyLoadImage
              effect="blur"
              wrapperProps={{ style: { transitionDelay: "0s" } }}
              src="about-img.avif"
              className="object-cover w-full xl:h-full h-[30vh] shadow-2xl
              shadow-black"
              alt="about-img"
            />
          </ImgWrapper>
        </Wrapper>
      </ContentWrapper>
    </PageWrapper>
  );
}
const Wrapper = tw(motion.div)`
about
grid
xl:gap-x-10
gap-x-2
xl:grid-cols-2
xl:gap-y-0
items-center
gap-y-6
max-[375px]:!grid-rows-1
max-[350px]:text-sm
`;

const Text = tw(motion.div)`
flex
flex-col
lg:tracking-wide
max-[380px]:space-y-2
justify-start
`;

const ImgWrapper = tw(motion.div)`
w-full
block
max-h-fit
max-[640px]:hidden
`;

const text = [
  "Hello- again!",
  "As- a- frontend- ReactJS- developer,- I- use- React- alongside- with- important- libraries- like- Tailwind- for- styling- and- ChakraUI- for- superior- user- interface- elements.",
  "I- mostly- concentrate- on- useing- Framer- Motion- primarily- to- create- visually- charming- for- my- web- development- projects.",
  "Graduated- from- Delta- Academy- of- Science- with- a- bachelor's- degree- in- information- systems.",
  "I- am- looking- for- a- job- where- I- can- apply- my- knowledge- and- provide- appealing- websites- and- gain- guidance- from- experienced- colleagues.",
];