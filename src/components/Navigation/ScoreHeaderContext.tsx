import { LevelClass } from '@/shared/Levels/LevelTypes';
import HelpAudios from '@/constants/HelpAudios';

import { createContext } from 'react';

type ScoreHeaderContextType = {
    theme?: LevelClass,
    helpAudio: keyof typeof HelpAudios,
};

export const ScoreHeaderContext = createContext<ScoreHeaderContextType>(
    { helpAudio: "MainMenu",}
);