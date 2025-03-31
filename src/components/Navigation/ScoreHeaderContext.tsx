import HelpAudios from '@/constants/HelpAudios';

import { createContext } from 'react';
import { LevelPalette } from '@/constants/Colors';

type ScoreHeaderContextType = {
    theme: keyof typeof LevelPalette,
    helpAudio: keyof typeof HelpAudios,
};

export const ScoreHeaderContext = createContext<ScoreHeaderContextType>(
    { theme: "MainMenu", helpAudio: "MainMenu", }
);