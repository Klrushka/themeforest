import { Theme } from '../interfaces/theme';

import { base } from './base';
import { lightTheme } from './light';
import { Themes } from './themes';

const themes = {
  [Themes.LIGHT]: lightTheme,
  [Themes.DARK]: lightTheme // TODO add dark theme
};

export const getTheme = (theme: Themes): Theme => {
  return { ...base, ...themes[theme] };
};
