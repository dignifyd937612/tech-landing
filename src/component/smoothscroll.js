export const scrollToview = (targeted_section) => {
  document.getElementById(targeted_section)?.scrollIntoView({
    block: "start",
  });
};
