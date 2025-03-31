// Dependencias
// Consultas y mutaciones
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Almacenamiento interno persistente
import AsyncStorage from '@react-native-async-storage/async-storage';

// Información sobre tipos de niveles
import { LevelClass } from "../Levels/LevelTypes";

// Puntaje del jugador
export type UserProgress = {
    points: number,
    levels_completed : {
        [K in LevelClass] : number
    }
};

const progressStorageKey = "userProgress";
const progressQueryKey = ['userProgress'];

// Obtener progresión del jugador 
export const useProgress = () => {
    return useQuery({
        queryKey: progressQueryKey, 

        // Buscar progreso en almacenamiento
        queryFn: () => AsyncStorage.getItem(progressStorageKey).then(
            (value) => {
                console.debug("Requested user progress...");

                if (value === null) {
                    console.debug("No previous user progress stored. Returning default");

                    return {
                        points: 0, levels_completed: {
                            "AmbiguousConsonant" : 0,
                            "SimpleConsonant" : 0,
                            "Vowel" : 0
                        }
                    } as UserProgress;
                }

                // TODO: Hacer chequeos type-safe
                console.debug("Previous user progress found");
                return JSON.parse(value) as UserProgress;
            }
        )
    });
}

// Actualizar progresión del jugador
export const useProgressAssign = () => {
    const queryClient = useQueryClient();
    return useMutation({
        // Actualizar puntaje en almacenamiento
        mutationFn: (newProgress: UserProgress) => {
            console.debug("Requested user progress update...");

            return AsyncStorage.setItem(
                progressStorageKey, JSON.stringify(newProgress)
            );
        },

        // Forzar nuevas consultas usando valor nuevo
        onSuccess: (_, newProgress) => {
            console.debug("User progress update successfull");

            queryClient.setQueryData(progressQueryKey, newProgress);

            queryClient.invalidateQueries({
                queryKey: progressQueryKey, exact: true
            });
        }
    });
}
