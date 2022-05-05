# MEM-ORY: RÉPONSES

# Step 0
## Question 1:
Play the whole game with size=2. By browsing the 3 views of the application, how many files did your browser download overall? How many time did it took to load them all?

- Pour la vue Welcome: le navigateur a chargé 5 fichiers en environ 60ms.
- Pour la vue Game: le navigateur a chargé 10 fichiers en environ 100ms
- Et pour la vue Score: le navigateur a chargé 6 fichiers en environ 65ms.

# Step 1
## Question 2:
Component-oriented programming for the web is considered more maintainable. Why?

C'est plus simple de programmer son code en organisant par composants plutôt que par type de fichiers car si l'on souhaite modifier un des composants cela évite de devoir le faire dans chaque fichier où il est utilisé et simplifie le maintien du code.

## Question 3:
If you look at the source code, every JS file wraps its code into a closure. Try to remove the 2 closures from both `card.component.js` & `game.component.js.` What happens? Why?

Les closures permettent d'éviter les conflits entre les variables d'environnement. Si on les retire alors cela crée des erreurs.

# Step 2:
## Question 4:
As you can see, npm install command also generated a package-lock.json file along with package.json. What is the purpose of this file?





