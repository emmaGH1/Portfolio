import React, { ComponentType } from 'react';
import { motion } from 'framer-motion';

import { pageVariants } from '../utils/motion';

const PageWrapper = <P extends object>(Component: ComponentType<P>) => {

  return (props: P) => (
    <motion.div
    >
      <Component {...props} />
    </motion.div>
  );
};

export default PageWrapper;
