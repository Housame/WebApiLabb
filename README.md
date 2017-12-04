# WebApiLabb
Dag 4 Asp.Net uppgift
Kundregister utifrån databas

Syfte
- Kunna läsa och skriva till en databas
- Lära sig bygga API som jobbar mot en databas
- Kunna göra ajax-anrop med jQuery

Obs
- Använd inga vyer (*.cshtml) i projektet
- Använd bara en html-fil för gränsnittet (det kallas Single Page Application)
- Använd GIT för att lätt kunna ångra dig (rekommenderad klient: SourceTree)


Uppgift

Utgå ifrån projektet CustomerRegisterDatabaseStudent. (det är ett enkelt Web API med AJAX och databaskoppling).

Bygg vidare på projektet och gör ett kundregister. Du ska använda en databas som datakälla (istället för en textfil).

Användaren ska kunna ta bort, lägga till, visa och uppdatera kunder.

Anropen ska göras mha jQuery och AJAX.

Publicera

Skapa ett konto på https://www.smarterasp.net/ (60 dagar gratis). Publicera hemsidan där. Verifiera att allt fungerar som det ska.


Extra

Visa listan med kunder som en tabell och låt användaren enkelt kunna lägga till och ta bort en kund med en knapptryck (istället för att mata in ID)


 (det behöver inte se ut exakt som på bilden ovan)

Extra

Lägg till en knapp “Räkna” som skriver ut hur många kunder som finns i databasen.

Extra

Uppdatera databas och api så det går att hålla koll på när en kund är uppdaterad och när den är skapad.

Extra

Skapa ett interface ICustomerRepository som definierar metoder för att hämta, uppdatera, lägga till och ta bort kunder. T.ex:

	public interface ICustomerRepository
	{
		IEnumerable<Customer> GetAll();
		void Add(Customer customer);
		…
		...
	}



Skapa en klass CustomerRepository som implementerar ICustomerRepository.

Använd dependency injection (constructor injection) och låt ditt API förvänta sig en ICustomerRepository.

Extra

Skapa en seed-funktion. Lägg en textfil med kunder på hemsidan (du kan använda samma textfil som i förra projektet CustomerRegisterTextfile). När användaren trycker på en knapp “Seed” så raderas alla kunder i databasen och kunderna från textfilen läggs in.

Extra

Utöka programmet så användaren kan lägga till en eller flera adresser för en Customer. Det ska gå att lägga till, ta bort, uppdatera och visa adresser.
