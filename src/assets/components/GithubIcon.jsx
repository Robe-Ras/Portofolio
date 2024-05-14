import useDarkMode from "use-dark-mode";

export const GithubIcon = ({
  fill = 'currentColor',
  filled,
  size = 24,
  height = 30,
  width = 30,
  label,
  ...props
}) => {
  const darkMode = useDarkMode();
  const iconSrc = darkMode.value ? "https://img.icons8.com/glyph-neue/30/FFFFFF/github.png" : "https://img.icons8.com/glyph-neue/30/1A1A1A/github.png";

  return (
    <img
      src={iconSrc}
      alt="github"
      width={width}
      height={height}
      {...props}
    />
  );
};

