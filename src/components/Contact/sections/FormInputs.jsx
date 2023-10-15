import { FormControl, FormHelperText, FormLabel } from "@chakra-ui/react";
import { motion } from "framer-motion";
import tw from "tailwind-styled-components";

export default function FormInputs({ formik }) {
  const { handleBlur, handleChange, values, touched, errors } = formik;

  return (
    <>
      <FormControl {...formAnimation} custom={0} as={motion.div}>
        <FormLabel className="!cursor-none" htmlFor="name">
          Name
        </FormLabel>
        <input
          className={`max-sm:p-2 ${
            errors.name && touched.name && "invalid-input"
          }`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          type="text"
          id="name"
          name="name"
        />
        <FormHelperText>
          <p className="text-[#595e69] text-[10px">
            {errors.name && touched.name && errors.name}
          </p>
        </FormHelperText>
      </FormControl>

      <FormControl {...formAnimation} custom={1} as={motion.div}>
        <FormLabel className="!cursor-none"  htmlFor="email">
          Email
        </FormLabel>
        <input
          className={`max-sm:p-2 ${
            errors.email && touched.email && "invalid-input"
          }`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          type="email"
          id="email"
          name="email"
        />
        <FormHelperText>
          <p className="text-[#595e69] text-[10px">
            {errors.email && touched.email && errors.email}
          </p>
        </FormHelperText>
      </FormControl>

      <FormControl {...formAnimation} custom={2} as={motion.div}>
        <FormLabel className="!cursor-none"  htmlFor="message">
          Your message
        </FormLabel>
        <motion.textarea
          className={`max-sm:p-2 resize-none ${
            errors.message && touched.message && "invalid-input"
          }`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.message}
          id="message"
          name="message"
          rows="6"
        ></motion.textarea>
        <FormHelperText>
          <p className="text-[#595e69] text-[10px">
            {errors.message && touched.message && errors.message}
          </p>
        </FormHelperText>
      </FormControl>
      <Submit
        {...formAnimation}
        custom={3}
        id="submit"
        value="send"
        type="submit"
      >
        submit
      </Submit>
    </>
  );
}
const formAnimation = {
  initial: { x: "-98%", opacity: 0 },
  whileInView: (i) => ({
    x: "0%",
    opacity: 1,
    transition: {
      delay: 0.1 * i + 3.4,
      duration: 0.7,
      type: "tween",
    },
  }),
  viewport: { once: true },
};

const Submit = tw(motion.button)`
overflow-hidden
relative
bg-[#1f1f1f]
py-3 
md:w-fit
w-full
px-10
text-lg
border-[1px]
border-transparent
hover:text-[#0aff9d]
hover:border-[#0aff9dab]
`;