// Dependencias
// Consultas y mutaciones
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Almacenamiento interno persistente
import AsyncStorage from '@react-native-async-storage/async-storage';

// Puntaje del jugador
export type Score = number;

const scoreStorageKey = "score";
const scoreQueryKey = ['score'];

// Obtener el puntaje del jugador 
export const useScore = () => {
    return useQuery({
        queryKey: scoreQueryKey, 

        // Buscar puntaje en almacenamiento
        queryFn: () => AsyncStorage.getItem(scoreStorageKey).then(
            (value) => typeof value === "string" ? parseInt(value) : 0
        )
    });
}

// Actualizar el puntaje
export const useScoreAssign = () => {
    const queryClient = useQueryClient();
    return useMutation({
        // Actualizar puntaje en almacenamiento
        mutationFn: (newScore: number) => AsyncStorage.setItem(
            scoreStorageKey, newScore.toString()
        ),

        // Forzar nuevas consultas usando valor nuevo
        onSuccess: (_, newScore) => {
            queryClient.setQueryData(scoreQueryKey, newScore);

            queryClient.invalidateQueries({
                queryKey: ['todos'], exact: true
            });
        }
    });
}
