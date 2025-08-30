---
title: Algoritmi ordinamento array
description: Ordinamento
---

# Il Merge Sort

Il Merge Sort è un algoritmo di ordinamento efficiente che utilizza il paradigma "dividi et impera". È un algoritmo stabile con complessità temporale O(n log n) in tutti i casi.

## Principio di Funzionamento

L'algoritmo si basa su due fasi principali:
1. **Divisione**: l'array viene diviso ricorsivamente a metà fino a ottenere sottoliste di un solo elemento
2. **Fusione (Merge)**: le sottoliste vengono combinate in modo ordinato per creare liste più grandi fino a ottenere l'array completo ordinato

## Schema Visuale dell'Algoritmo

Prendiamo come esempio l'array: [38, 27, 43, 3, 9, 82, 10]

```
                    [38, 27, 43, 3, 9, 82, 10]
                            /         \
                [38, 27, 43, 3]    [9, 82, 10]
                    /      \         /      \
            [38, 27]    [43, 3]   [9]    [82, 10]
            /    \      /    \           /     \
        [38]    [27]  [43]  [3]       [82]   [10]
            \    /      \    /           \     /
            [27, 38]    [3, 43]         [10, 82]
                \         /                 /
                [3, 27, 38, 43]      [9, 10, 82]
                        \               /
                    [3, 9, 10, 27, 38, 43, 82]
```

## Come Funziona la Fusione

Durante la fase di fusione (merge), il processo è il seguente:

1. Si confrontano gli elementi più piccoli di ciascuna sottolista
2. Si inserisce il minore dei due nella lista risultante
3. Si avanza nella sottolista da cui è stato preso l'elemento
4. Si ripete fino a esaurire tutti gli elementi

### Esempio di Fusione

Fusione di `[27, 38]` e `[3, 43]`:

```
Lista 1: [27, 38] ← puntatore1
Lista 2: [3, 43]  ← puntatore2

Passaggio 1: 3 < 27
Risultato: [3]

Passaggio 2: 27 < 43
Risultato: [3, 27]

Passaggio 3: 38 < 43
Risultato: [3, 27, 38]

Passaggio 4: aggiungi 43
Risultato finale: [3, 27, 38, 43]
```

## Vantaggi e Svantaggi

### Vantaggi:
- Garantisce complessità O(n log n) in tutti i casi
- È stabile (mantiene l'ordine relativo di elementi uguali)
- Ideale per ordinare liste concatenate

### Svantaggi:
- Richiede spazio aggiuntivo O(n)
- Per array piccoli, altri algoritmi come l'Insertion Sort possono essere più veloci

## Complessità

- **Temporale**:
  - Caso migliore: O(n log n)
  - Caso medio: O(n log n)
  - Caso peggiore: O(n log n)
- **Spaziale**: O(n)

## Implementazione di Esempio in Pseudocodice

```
mergeSort(array)
    se lunghezza(array) ≤ 1
        return array
        
    medio = lunghezza(array) / 2
    sinistra = mergeSort(array[0...medio])
    destra = mergeSort(array[medio...fine])
    
    return merge(sinistra, destra)

merge(sinistra, destra)
    risultato = []
    mentre sinistra non è vuoto AND destra non è vuoto
        se primo(sinistra) ≤ primo(destra)
            aggiungi primo(sinistra) a risultato
            rimuovi primo elemento da sinistra
        altrimenti
            aggiungi primo(destra) a risultato
            rimuovi primo elemento da destra
            
    aggiungi elementi rimanenti di sinistra a risultato
    aggiungi elementi rimanenti di destra a risultato
    return risultato
```

## Implementazione in CSharp

```csharp
public class MergeSort
{
    public static void Sort(int[] arr)
    {
        if (arr.Length <= 1) return;
        
        // Divide l'array a metà
        int medio = arr.Length / 2;
        int[] sinistra = new int[medio];
        int[] destra = new int[arr.Length - medio];
        
        // Copia gli elementi nelle due metà
        Array.Copy(arr, 0, sinistra, 0, medio);
        Array.Copy(arr, medio, destra, 0, arr.Length - medio);
        
        // Ordina ricorsivamente le due metà
        Sort(sinistra);
        Sort(destra);
        
        // Unisci le due metà ordinate
        Merge(arr, sinistra, destra);
    }
    
    private static void Merge(int[] arr, int[] sinistra, int[] destra)
    {
        int i = 0, j = 0, k = 0;
        
        // Confronta e unisci gli elementi delle due metà
        while (i < sinistra.Length && j < destra.Length)
        {
            if (sinistra[i] <= destra[j])
            {
                arr[k] = sinistra[i];
                i++;
            }
            else
            {
                arr[k] = destra[j];
                j++;
            }
            k++;
        }
        
        // Copia gli elementi rimanenti, se ce ne sono
        while (i < sinistra.Length)
        {
            arr[k] = sinistra[i];
            i++;
            k++;
        }
        
        while (j < destra.Length)
        {
            arr[k] = destra[j];
            j++;
            k++;
        }
    }
    
    // Esempio di utilizzo
    public static void Main()
    {
        int[] arr = { 38, 27, 43, 3, 9, 82, 10 };
        Console.WriteLine("Array originale: " + string.Join(", ", arr));
        
        Sort(arr);
        
        Console.WriteLine("Array ordinato: " + string.Join(", ", arr));
    }
}
```

### Output dell'esecuzione:
```
Array originale: 38, 27, 43, 3, 9, 82, 10
Array ordinato: 3, 9, 10, 27, 38, 43, 82
```

L'implementazione in C# mostra come l'algoritmo:
1. Divide l'array in due parti uguali
2. Ordina ricorsivamente ciascuna metà
3. Unisce le due metà ordinate in un unico array
4. Utilizza array temporanei per la fase di merge
5. Mantiene l'ordine stabile degli elementi