---
title:  Lezione sul Quick Sort in C# con Schema ESD
description: Quick sort
---
---

## **(Spiegazione)**

Il **Quick Sort** è un algoritmo di ordinamento **divide et impera** che funziona selezionando un elemento "pivot" e partizionando l'array in modo che:

- Gli elementi minori del pivot siano alla sua sinistra.
- Gli elementi maggiori del pivot siano alla sua destra.

Il processo viene ripetuto ricorsivamente sui sotto-array sinistro e destro.  
**Complessità temporale**:

- Caso medio: **O(n log n)**.
- Caso peggiore (pivot mal scelto, es. array già ordinato): **O(n²)**.  
**Vantaggi**: 
- Efficienza nel caso medio.
- Ordinamento in loco (non richiede memoria aggiuntiva).  
**Svantaggi**: 
- Non stabile (non mantiene l'ordine degli elementi uguali).

---

### **2. Scheme (Schema di Funzionamento)**

1. **Scelta del Pivot**:  
   Si seleziona un elemento (es. ultimo elemento, primo, medio, o casuale).
2. **Partizionamento**:  
   - Riorganizza l’array in modo che gli elementi ≤ pivot siano a sinistra e quelli > pivot a destra.
   - Il pivot è ora nella posizione corretta.
3. **Ricorsione**:  
   Applica Quick Sort alle due partizioni (sinistra e destra del pivot).

**Esempio di Partizionamento**:

```

Array iniziale: [10, 7, 8, 9, 1, 5]  
Pivot scelto: 5 (ultimo elemento).  
Dopo il partizionamento: [1, 5, 8, 9, 10, 7]  

```
Il pivot (5) è posizionato correttamente. Gli elementi a sinistra (1) sono ≤ 5, quelli a destra (8,9,10,7) sono > 5.

---

### **3. Example (Implementazione in C#)**

#### Codice Quick Sort:

```csharp
using System;

public class QuickSortExample
{
    public static void Main()
    {
        int[] arr = { 10, 7, 8, 9, 1, 5 };
        Console.WriteLine("Array originale: " + string.Join(", ", arr));
        
        QuickSort(arr, 0, arr.Length - 1);
        
        Console.WriteLine("Array ordinato: " + string.Join(", ", arr));
    }

    private static void QuickSort(int[] arr, int low, int high)
    {
        if (low < high)
        {
            int pivotIndex = Partition(arr, low, high);
            QuickSort(arr, low, pivotIndex - 1); // Ordina la partizione sinistra
            QuickSort(arr, pivotIndex + 1, high); // Ordina la partizione destra
        }
    }

    private static int Partition(int[] arr, int low, int high)
    {
        int pivot = arr[high]; // Scegli l'ultimo elemento come pivot
        int i = low - 1; // Indice del più piccolo elemento a sinistra

        for (int j = low; j < high; j++)
        {
            if (arr[j] <= pivot)
            {
                i++;
                // Scambia arr[i] e arr[j]
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        // Posiziona il pivot al posto corretto
        int tempPivot = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = tempPivot;

        return i + 1; // Restituisce l'indice del pivot
    }
}
```

#### Output:

```
Array originale: 10, 7, 8, 9, 1, 5
Array ordinato: 1, 5, 7, 8, 9, 10
```

#### Spiegazione del Codice:

1. **QuickSort**: 
   - Se `low < high`, partiziona l'array e ordina ricorsivamente le due metà.
2. **Partition**: 
   - Usa l’ultimo elemento come pivot (`arr[high]`).
   - `i` tiene traccia della posizione degli elementi ≤ pivot.
   - Scambia gli elementi ≤ pivot con quelli a sinistra.
   - Alla fine, posiziona il pivot al centro e restituisce il suo indice.

---

### **Note Importanti**

- **Scelta del Pivot**: Una scelta casuale (es. `Random.Next(low, high)`) evita il caso peggiore O(n²).
- **Stabilità**: Quick Sort non è stabile. Usare Merge Sort se necessario.
- **Ottimizzazioni**: In C#, `Array.Sort()` usa un mix di Quick Sort e Insertion Sort per piccoli array.

---

**Esercizio**: Modifica il codice per scegliere il pivot come elemento medio anziché l’ultimo.