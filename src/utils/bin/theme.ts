import Themes from '../../../themes.json';

export const theme = async (
  args: string[],
  callback?: (value: string) => string,
): Promise<string> => {
  let usage = `Usage: theme [arg]
Args:
  - ls: list all themes
  - set: set a theme
  - random: set a random theme

Example: 
  theme ls # to list all themes
  theme set Gruvbox # to set a theme`;

  if (args.length === 0) {
    return usage;
  }

  switch (args[0]) {
    case 'ls':
      let result = Themes.map((theme) => theme.name.toLowerCase()).join(', ');
      result += '\n\n';
      result += `You can preview all these themes <a href="https://github.com/sebsadface/sebliu.xyz/tree/terminal/docs/themes">in the docs</a>`;

      return result;
    case 'set':
      const selectedTheme = args[1];

      return callback(selectedTheme);
    case 'random':
      const randomTheme = Themes[Math.floor(Math.random() * Themes.length)];

      return callback(randomTheme.name.toLowerCase());
    default:
      return `Command '${args[0]}' not found.\n` + usage;
  }
};
