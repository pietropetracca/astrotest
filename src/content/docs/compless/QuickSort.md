---
title:  Quick sort
description: Quick sort
---

Il Quick Sort è un algoritmo di ordinamento efficiente che utilizza l'approccio "dividi et impera". È uno degli algoritmi di ordinamento più veloci nella pratica, con una complessità media di O(n log n).

## Principio di Funzionamento

L'algoritmo si basa su tre passaggi fondamentali:
1. **Scelta del pivot**: si seleziona un elemento dell'array come pivot
2. **Partizione**: si riorganizzano gli elementi in modo che:
   - Gli elementi minori del pivot vanno a sinistra
   - Gli elementi maggiori del pivot vanno a destra
3. **Ricorsione**: si applica lo stesso processo alle due partizioni create

## Spiegazione Dettagliata del Partizionamento

Vediamo come funziona il processo di partizionamento con un esempio pratico.
Array iniziale: [7, 2, 1, 6, 8, 5, 3, 4]
Scegliamo come pivot l'ultimo elemento (4)

```
Step 1: Stato iniziale
[7, 2, 1, 6, 8, 5, 3, 4]  Pivot = 4
 ^                     ↑
 j                   pivot

Step 2: Confrontiamo ogni elemento con il pivot
- j=0: 7 > 4? Sì, non facciamo nulla
[7, 2, 1, 6, 8, 5, 3, 4]  i=-1
 ^
 j

- j=1: 2 < 4? Sì, incrementiamo i e scambiamo
[2, 7, 1, 6, 8, 5, 3, 4]  i=0
     ^
     j

- j=2: 1 < 4? Sì, incrementiamo i e scambiamo
[2, 1, 7, 6, 8, 5, 3, 4]  i=1
        ^
        j

- j=3: 6 > 4? Sì, non facciamo nulla
[2, 1, 7, 6, 8, 5, 3, 4]  i=1
           ^
           j

- j=4: 8 > 4? Sì, non facciamo nulla
[2, 1, 7, 6, 8, 5, 3, 4]  i=1
              ^
              j

- j=5: 5 > 4? Sì, non facciamo nulla
[2, 1, 7, 6, 8, 5, 3, 4]  i=1
                 ^
                 j

- j=6: 3 < 4? Sì, incrementiamo i e scambiamo
[2, 1, 3, 6, 8, 5, 7, 4]  i=2
                    ^
                    j

Step 3: Posizionamento finale del pivot
Scambiamo il pivot (4) con l'elemento in posizione i+1
[2, 1, 3, 4, 8, 5, 7, 6]
         i  ↑
            pivot nella sua posizione finale
```

## Schema Completo dell'Ordinamento

Vediamo ora l'intero processo di ordinamento:

```
1. Array iniziale:
[7, 2, 1, 6, 8, 5, 3, 4]

2. Dopo prima partizione (pivot = 4):
[2, 1, 3, 4, 8, 5, 7, 6]
         ↑
      pivot fisso

3. Quick Sort sulla partizione sinistra [2, 1, 3]:
   3.1 Scegli pivot = 3
   [2, 1, 3]
   3.2 Dopo partizione:
   [1, 2, 3]
        ↑
     pivot fisso

4. Quick Sort sulla partizione destra [8, 5, 7, 6]:
   4.1 Scegli pivot = 6
   [8, 5, 7, 6]
   4.2 Dopo partizione:
   [5, 6, 7, 8]
      ↑
   pivot fisso

5. Risultato finale:
[1, 2, 3, 4, 5, 6, 7, 8]
```

## Visualizzazione dell'Albero di Ricorsione

```
                    [7, 2, 1, 6, 8, 5, 3, 4]
                    /                        \
        [2, 1, 3]                      [8, 5, 7, 6]
        /         \                     /          \
    [1, 2]       [3]              [5, 6]        [7, 8]
    /    \                        /    \        /    \
  [1]    [2]                    [5]    [6]    [7]    [8]
```

## Implementazione in C#

```csharp
public class QuickSort
{
    public static void Sort(int[] arr)
    {
        QuickSortRecursive(arr, 0, arr.Length - 1);
    }

    private static void QuickSortRecursive(int[] arr, int low, int high)
    {
        if (low < high)
        {
            // Trova l'indice di partizione
            int pi = Partition(arr, low, high);

            // Ordina gli elementi separatamente prima e dopo la partizione
            QuickSortRecursive(arr, low, pi - 1);
            QuickSortRecursive(arr, pi + 1, high);
        }
    }

    private static int Partition(int[] arr, int low, int high)
    {
        // Sceglie l'ultimo elemento come pivot
        int pivot = arr[high];
        
        // Indice dell'elemento più piccolo
        int i = (low - 1);

        for (int j = low; j < high; j++)
        {
            // Se l'elemento corrente è minore del pivot
            if (arr[j] < pivot)
            {
                i++;    // Incrementa l'indice dell'elemento più piccolo
                
                // Scambia arr[i] e arr[j]
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        // Scambia arr[i+1] e arr[high] (il pivot)
        int temp1 = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp1;

        return i + 1;
    }

    // Esempio di utilizzo
    public static void Main()
    {
        int[] arr = { 7, 2, 1, 6, 8, 5, 3, 4 };
        Console.WriteLine("Array originale: " + string.Join(", ", arr));
        
        Sort(arr);
        
        Console.WriteLine("Array ordinato: " + string.Join(", ", arr));
    }
}
```

### Output dell'esecuzione:
```
Array originale: 7, 2, 1, 6, 8, 5, 3, 4
Array ordinato: 1, 2, 3, 4, 5, 6, 7, 8
```

## Complessità

- **Temporale**:
  - Caso migliore: O(n log n)
  - Caso medio: O(n log n)
  - Caso peggiore: O(n²) - quando l'array è già ordinato o invertito
- **Spaziale**: O(log n) - per lo stack delle chiamate ricorsive

## Vantaggi e Svantaggi

### Vantaggi:
- Molto efficiente nella pratica
- Ordinamento in-place (non richiede memoria extra per array temporanei)
- Funziona bene con la cache della CPU grazie all'accesso sequenziale alla memoria

### Svantaggi:
- Non è stabile (può cambiare l'ordine relativo di elementi uguali)
- Prestazioni quadratiche nel caso peggiore
- La scelta del pivot può influenzare significativamente le prestazioni

## Ottimizzazioni Comuni

1. **Scelta del pivot**:
   - Mediana di tre elementi (primo, medio, ultimo)
   - Pivot casuale
   - Pivot mediano

2. **Insertion Sort per partizioni piccole**:
   - Per array di dimensione minore di 10-20 elementi, l'Insertion Sort è più efficiente

3. **Three-Way Partitioning**:
   - Gestione efficiente di elementi duplicati
   - Particolarmente utile quando ci sono molti elementi uguali