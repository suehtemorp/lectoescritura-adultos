import HelpAudios from '@/constants/HelpAudios';

import { createContext } from 'react';
import { LevelPalette } from '@/constants/Colors';

export type MainLayoutInformation = {
    theme: keyof typeof LevelPalette,
    helpAudio: keyof typeof HelpAudios,
};

export const MainLayoutContext = createContext<{
		mainLayoutInformation: MainLayoutInformation, 
		setMainLayoutInformation: React.Dispatch<React.SetStateAction<MainLayoutInformation>>
	} | undefined
>(undefined);
