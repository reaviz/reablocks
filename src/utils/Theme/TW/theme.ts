import {
  buttonTheme,
  ReaBlocksButtonTheme
} from '../../../elements/Button/ButtonTheme';

export interface ReaBlocksComponents {
  button: string;
}

export interface ReaBlocksTheme {
  components: {
    button: ReaBlocksButtonTheme;
    // select: ReaBlockSelectTheme;
  };
}

export const theme: ReaBlocksTheme = {
  components: {
    button: buttonTheme
  }
};
