
export const textMotion = (i = 1, delayTime = 0.1) => ({
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      stagger: delayTime,
      delay: i * delayTime,
      type: 'tween',
      ease: 'easeIn',
    },
  },
})

export const fadeIn = (i: number) => ({
  hidden: {
    scale: 0,
    opacity: 0
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: .2,
      ease: 'easeInOut',
    },
  },
});



  //To work on later