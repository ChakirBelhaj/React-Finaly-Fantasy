Zelf heb ik geprobeerd om mijn gebouwde .NET core API in de Azure omgeving te hosten. Dit is helaas niet gelukt doordat Azure tegenwoordig om een credit card validatie vraagt, wat ik helaas niet bezit.
Hiernaast las ik dat .NET core op elke operation system draaide waardoor ik dacht dat het een goed idee was om mijn API op een normale linux server te hosten.
Doordat ik alles zelf moest configureren kreeg ik veel problemen met het hosten waardoor ik dit over heb geslagen.

De API werkt wel alleen staat hij niet online. Dit betekent dat hij via visualstudio aangezet moet worden zodat mijn react front-end hiermee connectie kan maken.

Requirements:
Visual studio


Backend
1. Open de meegegeven visualstudio solution in finalfantasyreact.
2. Start de applicatie op(IIS express). 
3. Controleer of de API url https://localhost:44323/ is.
   zo niet verander in React-Finaly-Fantasy\FnalFantasyFrontEnd\src\Helpers\config.js de API url naar de juiste URL
4. Hier kunt u alle endpoints van de API bekijken.

Frontend
3. Navigeer via een terminal naar React-Finaly-Fantasy\FnalFantasyFrontEnd.
4. npm install.
5. npm start


