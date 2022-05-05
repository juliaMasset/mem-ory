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


# Step 2
## Question 4:
As you can see, `npm install` command also generated a `package-lock.json` file along with `package.json`. What is the purpose of this file?

Le fichier package-lock.json sert à garder des traces exactes des packages installées et/ou mis à jour dans le projet ce qui permet de le reproduire.

## Question 5:
By convention, all NPM dependencies use a 3-digit format for version numbers. How do you call this? Can you explain the meaning of the `^` symbol next to the bootstrap version?

Ce schéma de numérotaion de versions s'appelle le Semantic Versionning. Le symbole `^` signifie que l'on autorise seulement la version plus récente de niveau mineur ou correctif, c'est-à-dire au niveau du deuxième et troisième chiffre, mais pas du premier.

## Question 6:
What is a devDependency exactly? What are the differences with a dependency?

Lorsque l'on installe un package npm à l'aide de `npm install <package-name>`, on l'installe en tant que dépendance classique.
Elle est automatiquement répertoriée dans le fichier package.json dans `dependencies`. Quand on ajoute le `-D` cela l'installe en tant que dépendance de développement et l'ajoute à `devDependencies`. Les dépendances de développement ne sont pas nécessaires pour lancer le projet mais seulement pour le développement. 


# Step 3
## Question 7:
Can you think of at least 2 things that are possible with Java classes, but cannot be done with ES6 classes?






