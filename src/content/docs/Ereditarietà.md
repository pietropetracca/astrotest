---
title: Ereditarietà
description: Ereditarietà C Sharp
---


# L'Ereditarietà nella Programmazione Orientata agli Oggetti in C#


## Introduzione all'Ereditarietà

L'ereditarietà è uno dei pilastri fondamentali della programmazione orientata agli oggetti (OOP) che permette di creare nuove classi basate su classi esistenti. Attraverso l'ereditarietà, una classe "figlia" (o derivata) eredita attributi e metodi dalla classe "genitore" (o base), consentendo:

- **Riutilizzo del codice**: evita duplicazioni implementando funzionalità comuni nella classe base
- **Estensibilità**: permette di aggiungere nuove funzionalità alle classi derivate
- **Polimorfismo**: consente di utilizzare oggetti di classi derivate attraverso riferimenti alla classe base

In C#, l'ereditarietà è implementata utilizzando il simbolo `:` per indicare che una classe deriva da un'altra.

## Sintassi di Base dell'Ereditarietà in C#

```csharp
public class ClasseBase
{
    // membri della classe base
}

public class ClasseDerivata : ClasseBase
{
    // membri aggiuntivi della classe derivata
}
```

## Ereditarietà e Costruttori

Uno degli aspetti più importanti da comprendere nell'ereditarietà è il funzionamento dei costruttori. Quando si crea un'istanza di una classe derivata, viene prima chiamato il costruttore della classe base e poi quello della classe derivata.

### Regole Fondamentali sui Costruttori:

1. Se non si specifica quale costruttore della classe base chiamare, viene invocato il costruttore predefinito senza parametri
2. Per chiamare un costruttore specifico della classe base, si usa la parola chiave `base` nel costruttore della classe derivata
3. Il costruttore della classe base viene sempre eseguito prima del costruttore della classe derivata

### Esempio di Costruttori nell'Ereditarietà:

```csharp
public class Persona
{
    // Campi privati
    private string _nome;
    private string _cognome;
    
    // Proprietà con getter e setter
    public string Nome 
    { 
        get { return _nome; } 
        set { _nome = value; } 
    }
    
    public string Cognome 
    { 
        get { return _cognome; } 
        set { _cognome = value; } 
    }
    
    // Costruttore predefinito
    public Persona()
    {
        _nome = "Sconosciuto";
        _cognome = "Sconosciuto";
        Console.WriteLine("Costruttore di Persona senza parametri");
    }
    
    // Costruttore con parametri
    public Persona(string nome, string cognome)
    {
        _nome = nome;
        _cognome = cognome;
        Console.WriteLine("Costruttore di Persona con parametri");
    }
}

public class Studente : Persona
{
    // Campo privato
    private string _matricola;
    
    // Proprietà con getter e setter
    public string Matricola 
    { 
        get { return _matricola; } 
        set { _matricola = value; } 
    }
    
    // Costruttore che richiama il costruttore predefinito della classe base
    public Studente()
    {
        _matricola = "000000";
        Console.WriteLine("Costruttore di Studente senza parametri");
    }
    
    // Costruttore che richiama un costruttore specifico della classe base
    public Studente(string nome, string cognome, string matricola) : base(nome, cognome)
    {
        _matricola = matricola;
        Console.WriteLine("Costruttore di Studente con parametri");
    }
}
```

Quando si crea un nuovo oggetto `Studente` con il costruttore parametrizzato:

```csharp
Studente s = new Studente("Mario", "Rossi", "12345");
```

L'ordine di esecuzione sarà:
1. Costruttore parametrizzato di `Persona`
2. Costruttore parametrizzato di `Studente`

## Ridefinizione del metodo ToString()

Il metodo `ToString()` è ereditato dalla classe `Object`, la classe base di tutte le classi in C#. Per impostazione predefinita, restituisce il nome completo del tipo dell'oggetto. Ridefinire questo metodo consente di fornire una rappresentazione testuale personalizzata dell'oggetto.

### Come Ridefinire ToString():

Per ridefinire il metodo `ToString()`, si utilizza la parola chiave `override`:

```csharp
public class Persona
{
    // Campi privati
    private string _nome;
    private string _cognome;
    
    // Proprietà con getter e setter
    public string Nome 
    { 
        get { return _nome; } 
        set { _nome = value; } 
    }
    
    public string Cognome 
    { 
        get { return _cognome; } 
        set { _cognome = value; } 
    }
    
    public Persona(string nome, string cognome)
    {
        _nome = nome;
        _cognome = cognome;
    }
    
    // Ridefinizione del metodo ToString()
    public override string ToString()
    {
        return $"{_nome} {_cognome}";
    }
}

public class Studente : Persona
{
    // Campo privato
    private string _matricola;
    
    // Proprietà con getter e setter
    public string Matricola 
    { 
        get { return _matricola; } 
        set { _matricola = value; } 
    }
    
    public Studente(string nome, string cognome, string matricola) : base(nome, cognome)
    {
        _matricola = matricola;
    }
    
    // Ulteriore ridefinizione di ToString() nella classe derivata
    public override string ToString()
    {
        // È possibile richiamare l'implementazione della classe base
        return $"{base.ToString()} - Matricola: {_matricola}";
    }
}
```

### Esempio di utilizzo:

```csharp
Persona p = new Persona("Mario", "Rossi");
Console.WriteLine(p); // Output: Mario Rossi

Studente s = new Studente("Luigi", "Verdi", "12345");
Console.WriteLine(s); // Output: Luigi Verdi - Matricola: 12345

// Polimorfismo
Persona pStud = new Studente("Anna", "Bianchi", "67890");
Console.WriteLine(pStud); // Output: Anna Bianchi - Matricola: 67890
```

## Esempio Completo: Gerarchia di Forme Geometriche

Vediamo ora un esempio completo di ereditarietà che include costruttori e ridefinizione di ToString():

```csharp
public class Forma
{
    // Campo privato
    private string _colore;
    
    // Proprietà con getter e setter
    public string Colore 
    { 
        get { return _colore; } 
        set { _colore = value; } 
    }
    
    public Forma()
    {
        _colore = "Bianco";
    }
    
    public Forma(string colore)
    {
        _colore = colore;
    }
    
    // Metodo virtuale che può essere ridefinito
    public virtual double CalcolaArea()
    {
        return 0;
    }
    
    public override string ToString()
    {
        return $"Forma di colore {_colore}";
    }
}

public class Rettangolo : Forma
{
    // Campi privati
    private double _base;
    private double _altezza;
    
    // Proprietà con getter e setter
    public double Base 
    { 
        get { return _base; } 
        set { _base = value; } 
    }
    
    public double Altezza 
    { 
        get { return _altezza; } 
        set { _altezza = value; } 
    }
    
    public Rettangolo() : base()
    {
        _base = 0;
        _altezza = 0;
    }
    
    public Rettangolo(double baseRett, double altezza, string colore) : base(colore)
    {
        _base = baseRett;
        _altezza = altezza;
    }
    
    public override double CalcolaArea()
    {
        return _base * _altezza;
    }
    
    public override string ToString()
    {
        return $"Rettangolo di colore {Colore}, base {_base}, altezza {_altezza}, area {CalcolaArea()}";
    }
}

public class Cerchio : Forma
{
    // Campo privato
    private double _raggio;
    
    // Proprietà con getter e setter
    public double Raggio 
    { 
        get { return _raggio; } 
        set { _raggio = value; } 
    }
    
    public Cerchio() : base()
    {
        _raggio = 0;
    }
    
    public Cerchio(double raggio, string colore) : base(colore)
    {
        _raggio = raggio;
    }
    
    public override double CalcolaArea()
    {
        return Math.PI * Math.Pow(_raggio, 2);
    }
    
    public override string ToString()
    {
        return $"Cerchio di colore {Colore}, raggio {_raggio}, area {CalcolaArea():F2}";
    }
}
```

### Test della gerarchia di forme:

```csharp
// Creazione e utilizzo delle forme
Forma f1 = new Forma("Nero");
Rettangolo r1 = new Rettangolo(5, 3, "Blu");
Cerchio c1 = new Cerchio(2, "Rosso");

Console.WriteLine(f1); // Output: Forma di colore Nero
Console.WriteLine(r1); // Output: Rettangolo di colore Blu, base 5, altezza 3, area 15
Console.WriteLine(c1); // Output: Cerchio di colore Rosso, raggio 2, area 12,57

// Dimostrazione del polimorfismo
Forma[] forme = { f1, r1, c1 };

foreach (var forma in forme)
{
    // Il metodo ToString() chiamato è quello della classe effettiva dell'oggetto
    Console.WriteLine(forma);
    Console.WriteLine($"Area: {forma.CalcolaArea()}");
    Console.WriteLine();
}
```

## Punti Chiave da Ricordare

1. **Ereditarietà singola**: C# supporta solo l'ereditarietà singola per le classi (una classe può ereditare solo da una classe base)
2. **Costruttori**: I costruttori non vengono ereditati, ma è possibile richiamare i costruttori della classe base
3. **Parola chiave `base`**: Permette di accedere ai membri della classe base
4. **Modificatore `override`**: Necessario per ridefinire i metodi della classe base
5. **Modificatore `virtual`**: I metodi della classe base devono essere dichiarati `virtual` per poter essere ridefiniti
6. **Polimorfismo**: Consente di trattare oggetti di classi derivate come oggetti della classe base
7. **Incapsulamento**: L'uso di campi privati con proprietà pubbliche protegge i dati interni delle classi

## Esercizi Proposti

1. Creare una gerarchia di classi per rappresentare diversi tipi di veicoli (ad es. `Veicolo` → `Automobile` → `SUV`)
2. Implementare una gerarchia di classi per un sistema di gestione dipendenti (ad es. `Dipendente` → `Manager` → `Dirigente`)
3. Estendere l'esempio delle forme geometriche aggiungendo altre forme come `Triangolo` e `Quadrato`
