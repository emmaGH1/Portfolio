import React, { ComponentType } from 'react';
import { motion } from 'framer-motion';

const PageWrapper = <P extends object>(Component: ComponentType<P>) => {

  return (props: P) => (
    <motion.div className='bg-yellow-900'
    >
      <Component {...props} />
    </motion.div>
  );
};

export default PageWrapper;
