---
title:  Complessità Computazionale
description: Complessità
---

La complessità computazionale è una misura dell'efficienza di un algoritmo in termini di risorse utilizzate (tempo e memoria).

## Notazione O-grande (Big-O)

La notazione O-grande descrive il caso peggiore di un algoritmo:

- O(1): Complessità costante
- O(n): Complessità lineare
- O(n²): Complessità quadratica
- O(log n): Complessità logaritmica

## Esempi con Arrays in C sharp

### 1. Accesso Diretto - O(1)

```csharp
int[] numeri = { 1, 2, 3, 4, 5 };
int primo = numeri[0];  // Complessità O(1)
```

### 2. Ricerca Lineare - O(n)

```csharp
public static int TrovaElemento(int[] array, int target)
{
    for (int i = 0; i < array.Length; i++)
    {
        if (array[i] == target)
            return i;
    }
    return -1;
}
```

### 3. Bubble Sort - O(n²)

```csharp
public static void BubbleSort(int[] array)
{
    for (int i = 0; i < array.Length - 1; i++)
    {
        for (int j = 0; j < array.Length - 1 - i; j++)
        {
            if (array[j] > array[j + 1])
            {
                int temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}
```

### 4. Ricerca Binaria - O(log n)

```csharp
public static int RicercaBinaria(int[] array, int target)
{
    int left = 0;
    int right = array.Length - 1;

    while (left <= right)
    {
        int mid = (left + right) / 2;
        
        if (array[mid] == target)
            return mid;
        
        if (array[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return -1;
}
```

## Esempi Pratici di Ricerca e Ordinamento

### 1. Ricerca Sequenziale vs Binaria

```csharp
public class RicercaArray
{
    // Ricerca sequenziale - O(n)
    public static int RicercaSequenziale(int[] arr, int elemento)
    {
        for (int i = 0; i < arr.Length; i++)
        {
            if (arr[i] == elemento)
                return i;
        }
        return -1;
    }

    // Ricerca binaria - O(log n)
    public static int RicercaBinaria(int[] arr, int elemento)
    {
        int sinistra = 0;
        int destra = arr.Length - 1;
        
        while (sinistra <= destra)
        {
            int medio = (sinistra + destra) / 2;
            
            if (arr[medio] == elemento)
                return medio;
            
            if (arr[medio] < elemento)
                sinistra = medio + 1;
            else
                destra = medio - 1;
        }
        return -1;
    }
}
```

### 2. Metodi di Ordinamento

```csharp
public class OrdinamentoArray
{
    // Selection Sort - O(n²)
    public static void SelectionSort(int[] arr)
    {
        for (int i = 0; i < arr.Length - 1; i++)
        {
            int minIndex = i;
            for (int j = i + 1; j < arr.Length; j++)
            {
                if (arr[j] < arr[minIndex])
                    minIndex = j;
            }
            if (minIndex != i)
            {
                int temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        }
    }

    // Quick Sort - O(n log n)
    public static void QuickSort(int[] arr, int sinistra, int destra)
    {
        if (sinistra < destra)
        {
            int pivot = Partition(arr, sinistra, destra);
            QuickSort(arr, sinistra, pivot - 1);
            QuickSort(arr, pivot + 1, destra);
        }
    }

    private static int Partition(int[] arr, int sinistra, int destra)
    {
        int pivot = arr[destra];
        int i = sinistra - 1;

        for (int j = sinistra; j < destra; j++)
        {
            if (arr[j] <= pivot)
            {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        int temp1 = arr[i + 1];
        arr[i + 1] = arr[destra];
        arr[destra] = temp1;

        return i + 1;
    }
}
```

### Esempio di Utilizzo

```csharp
// Esempio di utilizzo
int[] array = { 64, 34, 25, 12, 22, 11, 90 };

// Ricerca
int elementoDaCercare = 25;
int posizioneSequenziale = RicercaArray.RicercaSequenziale(array, elementoDaCercare);
Console.WriteLine($"Elemento {elementoDaCercare} trovato in posizione: {posizioneSequenziale}");

// Ordinamento
OrdinamentoArray.SelectionSort(array);
Console.WriteLine("Array ordinato: " + string.Join(", ", array));

// Ora possiamo usare la ricerca binaria perché l'array è ordinato
int posizioneBinaria = RicercaArray.RicercaBinaria(array, elementoDaCercare);
Console.WriteLine($"Elemento {elementoDaCercare} trovato in posizione: {posizioneBinaria}");
```

### Confronto delle Prestazioni

| Algoritmo | Caso Migliore | Caso Medio | Caso Peggiore | Spazio |
|-----------|---------------|------------|---------------|---------|
| Ricerca Sequenziale | O(1) | O(n/2) | O(n) | O(1) |
| Ricerca Binaria | O(1) | O(log n) | O(log n) | O(1) |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) |

## Confronto delle Complessità

| Algoritmo | Complessità | Scenario |
|-----------|-------------|----------|
| Accesso diretto | O(1) | Ottimo per accessi puntuali |
| Ricerca lineare | O(n) | Semplice ma inefficiente su grandi dataset |
| Bubble Sort | O(n²) | Inefficiente su grandi dataset |
| Ricerca binaria | O(log n) | Efficiente su array ordinati |

## Conclusioni

La scelta dell'algoritmo giusto dipende dal contesto:
- Dimensione dei dati
- Frequenza di esecuzione
- Vincoli di memoria
- Requisiti di performance
