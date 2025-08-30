---
title:  Ricorsione
description: Ricorsione
---

- [Esempi sugli array](#esempi-sugli-array)
  - [**1. Ricerca Lineare Ricorsiva**](#1-ricerca-lineare-ricorsiva)
    - [**2. Ricerca Binaria Ricorsiva (Array Ordinato)**](#2-ricerca-binaria-ricorsiva-array-ordinato)
    - [**3. Contare le Occorrenze di un Elemento**](#3-contare-le-occorrenze-di-un-elemento)
    - [**4. Verificare se un Array è Ordinato**](#4-verificare-se-un-array-è-ordinato)
    - [**5. Trovare il Massimo in un Array**](#5-trovare-il-massimo-in-un-array)
    - [**Consigli per la Ricorsione con Array**](#consigli-per-la-ricorsione-con-array)
  - [**Esercizi Approfondimento**](#esercizi-approfondimento)

**lezione strutturata sulla ricorsione in C#**, con teoria ed esempi pratici:

---

### **1. Introduzione alla Ricorsione**  

**Definizione**:  
Una funzione si dice **ricorsiva** quando chiama sé stessa direttamente o indirettamente per risolvere un problema suddividendolo in sotto-problemi più semplici.

**Componenti fondamentali**:  
- **Caso base**: Condizione che interrompe la ricorsione (senza di essa, loop infinito!).  
- **Passo ricorsivo**: Chiamata alla funzione stessa con un input ridotto o semplificato.

---

### **2. Come Funziona la Ricorsione in Memoria**  
- Ogni chiamata ricorsiva viene inserita nello **stack di chiamate** (call stack).  
- Se il caso base non viene raggiunto, si verifica un **stack overflow** (errore comune).  
- Esempio visuale:  
  ```csharp  
  Factorial(3)  
    → Factorial(2)  
      → Factorial(1)  
        → return 1  
      → return 2*1 = 2  
    → return 3*2 = 6  
  ```

---

### **3. Esempi Pratici in C#**  

#### **Esempio 1: Calcolo del Fattoriale**  
```csharp  
public int Factorial(int n)  
{  
    // Caso base  
    if (n == 0)  
        return 1;  
    // Passo ricorsivo  
    return n * Factorial(n - 1);  
}  
```  
**Spiegazione**:  
- Caso base: `Factorial(0) = 1`.  
- Passo ricorsivo: `n * Factorial(n-1)`.

---

#### **Esempio 2: Successione di Fibonacci**  
```csharp  
public int Fibonacci(int n)  
{  
    // Casi base  
    if (n == 0)  
        return 0;  
    if (n == 1)  
        return 1;  
    // Passo ricorsivo  
    return Fibonacci(n - 1) + Fibonacci(n - 2);  
}  
```  
**Nota**: Questo esempio mostra l'inefficienza della ricorsione "pura" per Fibonacci (problemi di performance per `n` grandi).

---

### **Esercizi**  

1. Scrivi una funzione ricorsiva per calcolare la somma dei numeri da 1 a `n`.  
2. Implementa una ricerca binaria ricorsiva in un array ordinato.  

---

### **6. Consigli per Evitare Errori**  

- **Testa sempre il caso base** (es. `n = 0`, `n = 1`).  
- Usa `Debug.WriteLine()` per tracciare le chiamate ricorsive.  
- Per problemi complessi, valuta se l'iterazione è più efficiente.  

---

### **7. Approfondimento: Ricorsione vs Iterazione**  

- **Ricorsione**:  

  ```csharp  
  int Factorial(int n) => (n == 0) ? 1 : n * Factorial(n - 1);  
  ```  

- **Iterazione**:  
  
  ```csharp  
  int Factorial(int n)  
  {  
      int result = 1;  
      for (int i = 1; i <= n; i++)  
          result *= i;  
      return result;  
  }  
  ```  

# Esempi sugli array

## **1. Ricerca Lineare Ricorsiva**  

**Obiettivo**: Trovare la posizione di un elemento in un array (non ordinato).  

```csharp  
public int LinearSearch(int[] arr, int target, int currentIndex = 0)  
{  
    // Caso base 1: elemento non trovato  
    if (currentIndex >= arr.Length)  
        return -1;  

    // Caso base 2: elemento trovato  
    if (arr[currentIndex] == target)  
        return currentIndex;  

    // Passo ricorsivo: cerca nel resto dell'array  
    return LinearSearch(arr, target, currentIndex + 1);  
}  
```  

**Utilizzo**:  

```csharp  
int[] numbers = { 4, 2, 7, 1, 9 };  
int position = LinearSearch(numbers, 7); // Restituisce 2  
```  

---

### **2. Ricerca Binaria Ricorsiva (Array Ordinato)**  

**Obiettivo**: Trovare un elemento in un array ordinato con complessità O(log n).  

```csharp  

public int BinarySearch(int[] arr, int target, int low, int high)  
{  
    // Caso base: elemento non presente  
    if (low > high)  
        return -1;  

    int mid = (low + high) / 2;  

    if (arr[mid] == target)  
        return mid;  
    else if (arr[mid] < target)  
        return BinarySearch(arr, target, mid + 1, high); // Cerca a destra  
    else  
        return BinarySearch(arr, target, low, mid - 1); // Cerca a sinistra  
}  
```  

**Utilizzo**:  

```csharp  
int[] sortedNumbers = { 1, 3, 5, 7, 9 };  
int position = BinarySearch(sortedNumbers, 7, 0, sortedNumbers.Length - 1); // Restituisce 3  
```  

---

### **3. Contare le Occorrenze di un Elemento**  

**Obiettivo**: Contare quante volte un elemento appare in un array.  

```csharp  

public int CountOccurrences(int[] arr, int target, int currentIndex = 0)  
{  
    // Caso base: fine dell'array  
    if (currentIndex >= arr.Length)  
        return 0;  

    // Se trova l'elemento, somma 1 + risultato del resto  
    if (arr[currentIndex] == target)  
        return 1 + CountOccurrences(arr, target, currentIndex + 1);  
    else  
        return CountOccurrences(arr, target, currentIndex + 1);  
}  

```  

**Utilizzo**: 

```csharp
int[] data = { 2, 5, 2, 8, 2 };  
int count = CountOccurrences(data, 2); // Restituisce 3  
```  

---

### **4. Verificare se un Array è Ordinato**  

**Obiettivo**: Controllare ricorsivamente se un array è ordinato in modo crescente.  

```csharp  

public bool IsSorted(int[] arr, int currentIndex = 0)  
{  
    // Caso base: raggiunta la fine dell'array  
    if (currentIndex >= arr.Length - 1)  
        return true;  

    // Se l'elemento corrente è maggiore del successivo, non è ordinato  
    if (arr[currentIndex] > arr[currentIndex + 1])  
        return false;  

    // Passo ricorsivo: controlla il resto  
    return IsSorted(arr, currentIndex + 1);  
}  
```  

**Utilizzo**:  

```csharp  
int[] arr1 = { 1, 3, 5, 7 };  
bool result = IsSorted(arr1); // Restituisce true  
```  

---

### **5. Trovare il Massimo in un Array**  

**Obiettivo**: Calcolare il valore massimo in un array usando la ricorsione.

```csharp  


public int FindMax(int[] arr, int currentIndex = 0)  
{  
    // Caso base: ultimo elemento  
    if (currentIndex == arr.Length - 1)  
        return arr[currentIndex];  

    // Confronta l'elemento corrente con il massimo del resto  
    int current = arr[currentIndex];  
    int maxOfRest = FindMax(arr, currentIndex + 1);  

    return (current > maxOfRest) ? current : maxOfRest;  
}  
```  

**Utilizzo**:  

```csharp  
int[] values = { 4, 12, 3, 8 };  
int max = FindMax(values); // Restituisce 12  
```  

---

### **Consigli per la Ricorsione con Array**  

1. **Parametro indice**: Usa un parametro (es. `currentIndex`) per tenere traccia della posizione corrente.  
2. **Casi base chiari**: Definisci sempre quando fermarsi (es. fine array, elemento trovato).  
3. **Attenzione alle performance**: Per array molto grandi, preferisci l’iterazione per evitare stack overflow.  

---

## **Esercizi Approfondimento**  

1. Scrivi una funzione ricorsiva per invertire un array (modifica l'array originale).  
2. Crea un metodo ricorsivo che calcoli la somma di tutti gli elementi di un array.
3. Crea un metodo ricorsivo che calcoli la somma di tutti gli elementi pari in un array.
4. Implementa una ricerca ricorsiva dell’elemento minimo.  
