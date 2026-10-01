export const ease = [0.22, 1, 0.36, 1];
export const dur = {
  fast: 0.15,
  base: 0.3,
  slow: 0.6,
  hero: 1.2
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: dur.slow, ease } }
};

export const stagger = (s = 0.08) => ({
  show: { transition: { staggerChildren: s } }
});
