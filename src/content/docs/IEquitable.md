---
title: IEquatable
description: Interfaccia IEquatable in C Sharp
---

## Introduzione

L'interfaccia `IEquatable<T>` è una parte importante delle librerie di base di C# che permette di definire un metodo personalizzato per confrontare l'uguaglianza tra oggetti dello stesso tipo. Implementando questa interfaccia, le classi possono fornire un modo più efficiente per confrontare istanze rispetto al metodo `Equals()` predefinito della classe `Object`.

## Struttura dell'interfaccia

L'interfaccia `IEquatable<T>` è definita nel namespace `System` e contiene un solo metodo:

```csharp
public interface IEquatable<T>
{
    bool Equals(T other);
}
```

Il metodo `Equals(T other)` deve restituire:
- `true` se l'istanza corrente è uguale all'oggetto `other`
- `false` se non è uguale o se `other` è `null`

## Vantaggi dell'utilizzo di IEquatable<T>

1. **Miglior efficienza**: Evita il boxing/unboxing per i tipi di valore
2. **Tipizzazione forte**: Il confronto avviene con un tipo specifico, riducendo gli errori
3. **Prestazioni migliori**: Particolarmente utile nelle collezioni come `Dictionary<TKey, TValue>` o `HashSet<T>`
4. **Chiarezza del codice**: Rende esplicita l'intenzione di consentire confronti di uguaglianza

## Implementazione pratica

Vediamo un esempio pratico con una classe `Studente` che implementa `IEquatable<Studente>`:

```csharp
using System;
using System.Collections.Generic;

public class Studente : IEquatable<Studente>
{
    public int Matricola { get; set; }
    public string Nome { get; set; }
    public string Cognome { get; set; }

    public Studente(int matricola, string nome, string cognome)
    {
        Matricola = matricola;
        Nome = nome;
        Cognome = cognome;
    }

    // Implementazione del metodo Equals dell'interfaccia IEquatable<Studente>
    public bool Equals(Studente other)
    {
        // Se other è null, ritorna false
        if (other == null)
            return false;

        // Due studenti sono considerati uguali se hanno la stessa matricola
        return Matricola == other.Matricola;
    }

    // Override del metodo Equals ereditato da Object
    public override bool Equals(object obj)
    {
        // Se obj è null o non è di tipo Studente, ritorna false
        if (obj == null || !(obj is Studente))
            return false;

        // Utilizza il metodo Equals specificato nell'interfaccia
        return Equals((Studente)obj);
    }

    // Override di GetHashCode per mantenere la coerenza
    public override int GetHashCode()
    {
        return Matricola.GetHashCode();
    }

    public override string ToString()
    {
        return $"Studente: {Nome} {Cognome} (Matricola: {Matricola})";
    }
}
```

L'interfaccia `IEquatable<T>` è uno strumento potente per definire regole di uguaglianza personalizzate per i tuoi tipi. Implementandola correttamente, puoi migliorare le prestazioni del tuo codice e garantire un comportamento coerente nelle operazioni di confronto.
