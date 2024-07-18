// Arreglo recursivo tal que cada elemento es una llave de un objeto o arreglo
// obtenido al utilizar las llaves anteriores en secuencia en el objeto
// o arreglo original
export type NestedPath<T> = T extends any[] ? (
	{
		[K in (`${number}` & keyof T)] : (
			T[K] extends object ? 
			    [K, ...NestedPath<T[K]>] :
			    [K]
		)
	}[(`${number}` & keyof T)]
    ) : T extends object ? (
		{
			[K in string & keyof T] : (
				T[K] extends object ? 
					[K, ...NestedPath<T[K]>] :
					[K]
			)
		}[string & keyof T]
	) : never;

// Lo mismo, pero con la condición de que el objeto obtenido al final debe
// ser de cierto tipo
export type NestedPathToType<T, Z> = T extends any[] ? (
	{
		[K in (`${number}` & keyof T)] : (
            T[K] extends Z ? 
                [K] : 
			    T[K] extends object ? 
			        [K, ...NestedPath<T[K]>] :
                    never
		)
	}[(`${number}` & keyof T)]
    ) : T extends object ? (
		{
			[K in string & keyof T] : (
                T[K] extends Z ? 
                    [K] : 
				    T[K] extends object ? 
					    [K, ...NestedPath<T[K]>] :
                        never
			)
		}[string & keyof T]
	) : never;

// Obtener un valor de cierto tipo anidado en un objeto
export const NestedValue = <T extends object, Z>(
    path : NestedPathToType<T, Z>, source : T
    ) : Z => {
    let currentlyAt : any = source;
    let pathConstrained : string[] = path as string[];

    pathConstrained.forEach(
        subKey => {
            const subKeyConstrained = subKey as string & 
                keyof typeof currentlyAt;

            currentlyAt = currentlyAt[subKeyConstrained];
        }
    );
    
    const valueConstrained : Z = currentlyAt as Z;
    return valueConstrained;
}
