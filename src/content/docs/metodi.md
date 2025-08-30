---
title: Esercizio Metodi e Array di struct
description: Esercizi

---

**Gestione Inventario Prodotti**  

**Obiettivo**  
Realizzare un’applicazione console in C# per gestire un inventario di prodotti utilizzando struct, array di struct e metodi con passaggio di parametri per valore e per riferimento.  

---

## Dati da gestire

- Id
- Nome
- Prezzo
- Quantità

- Un array di `Prodotti` con dimensione massima **100 elementi**.  
- Un contatore intero `prodottiInseriti` per tenere traccia dei prodotti effettivamente presenti nell’array.  

---

### **2. Metodi da Implementare**  

#### **2.1 Caricamento Manuale**  

```csharp
static void CaricaProdottoManuale(ref Prodotto[] prodotti, ref int count)
```  

**Funzionalità:**  

- Richiede all’utente di inserire i dati di un prodotto (ID, nome, prezzo, quantità).  
- Aggiunge il prodotto all’array e incrementa il contatore.  
- Gestisce l’errore "Archivio pieno" se si supera la capacità massima.  

---

#### **2.2 Caricamento Randomico**  

```csharp
static void CaricaProdottiRandom(ref Prodotto[] prodotti, ref int count)
```  

**Funzionalità:**  

- Genera tra 1 e 10 prodotti con dati casuali:  
  - **ID**: Numeri interi univoci (es. tra 1000 e 9999).  
  - **Nomi**: Scelti da una lista predefinita (es. "Penna", "Quaderno").  
  - **Prezzo e quantità**: Valori casuali (es. prezzo tra 1.00€ e 100.00€).  

---

#### **2.3 Ricerca Prodotto**

```csharp
static int RicercaProdotto(Prodotto[] prodotti, int count)
```  

**Funzionalità:**  

- Permette la ricerca per **ID** o **nome**.  
- Restituisce l’indice del prodotto trovato o `-1` se non trovato.  
- Stampa il risultato della ricerca.  

---

#### **2.4 Modifica Prodotto**  

```csharp
static void ModificaProdotto(ref Prodotto[] prodotti, int count)

```  

**Funzionalità:**

- Utilizza la ricerca per selezionare un prodotto.  
- Permette la modifica dei campi (nome, prezzo, quantità), mantenendo i valori precedenti se l’input è vuoto.  

---

#### **2.5 Ordinamento Prodotti**  

```csharp
static void OrdinaProdotti(ref Prodotto[] prodotti, int count)
```  

**Funzionalità:**  

- Ordina l’array per **nome** (A-Z) o **prezzo** (crescente) utilizzando un algoritmo a scelta (es. bubble sort).  

---

#### **2.6 Cancellazione Prodotto**  

```csharp
static void CancellaProdotto(ref Prodotto[] prodotti, ref int count)
```  

**Funzionalità:**  

- Elimina un prodotto dall’array, mantenendo l’ordine degli elementi.  
- Decrementa il contatore.  

---

#### **2.7 Visualizzazione Prodotti**

```csharp
static void VisualizzaProdotti(Prodotto[] prodotti, int count)
```  

**Funzionalità:**  

- Stampa tutti i prodotti in formato tabellare

---

### **3. Menu Interattivo**  

Implementare un menu con le seguenti opzioni:

```
1. Aggiungi prodotto (manuale)
2. Aggiungi prodotti (random)
3. Cerca prodotto
4. Modifica prodotto
5. Ordina prodotti
6. Elimina prodotto
7. Visualizza tutti
8. Esci

```  

- Il menu deve essere ripetuto finché non viene scelta l’opzione "Esci".  
- Gestire input non validi (es. caratteri al posto di numeri).  

---

### **4. Requisiti Tecnici**  

1. **Passaggio parametri**:  
   - Usare `ref` per metodi che modificano l’array o il contatore.  
   - Usare il passaggio per valore per metodi di sola lettura.  
2. **Controlli obbligatori**:  
   - Evitare overflow dell’array.  
   - Validare gli input utente (es. numeri dove richiesto).  

---

### **6. Opzionale**  

- Aggiungere ordinamento **decrescente**.  
