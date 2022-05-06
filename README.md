# MEM-ORY: RÉPONSES  *Julia MASSET*


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

On ne peut pas faire de surcharges de méthodes et d'interfaces en ES6 contrairement à Java. 

## Question 8:
What are the differences between var and let?

`let` permet de déclarer des variables dont la portée est celle du bloc courant alors que `var` permet de définir une variable globale ou locale à une fonction sans distinction des blocs utilisés dans la fonction.

## Question 9:
What is the .bind(this) stuff? What does happen if you delete it? Is it needed when using an arrow function ?

La bind() est une méthode qui renvoie une nouvelle fonction lorsqu'elle est appelée. La nouvelle fonction créée est une copie de la méthode qui précède le bind(this). Le bind(this) n'est pas nécessaire lorsqu'on utilise une arrow function.


# Step 4
## Question 10:
What are the advantages of Promises?

Une promesse est un objet qui est renvoyé et auquel on attache des callbacks plutôt que de passer des callbacks à une fonction. Au lieu d'avoir une fonction qui prend deux callbacks en arguments, on aura une fonction qui renvoie une promesse et on attachera les callbacks sur cette promesse.
Les promesses permettent de résoudre les problèmes de cascades de callbacks en interceptant les différentes erreurs (exceptions et erreurs de programmation). C'est essentiel pour obtenir une composition fonctionnelle des opérations asynchrones.

## Question 11:
What version of ECMAScript `async`/`await` was released in?

`Async`/`await` ont été ajoutés dans la version ECMA-262 de 2017 (8ème édition).


# Step 5
## Question 12:

What does the `@` symbol mean in `@babel/***`?

Le symbole `@` indique l'auteur de la bibliothèque. Cela permet d'avoir plusieurs bibliothèques similaires avec des auteurs différents. Ici, babel étant l'auteur et après le symbole `/` se trouve la bibliothèque.

## Question 13:
Look at the files produced within `dist/ folder`. How babel transpile your class `WelcomeComponent`?

Babel ajoute des méthodes `require()` qui importent des fonctions déjà existantes en ES5 qui ont la même utilité que le code en ES6. 

## Question 14:
What is the weight of the transpiled sources compared to your original sources?

Les fichiers transpilés sont plus lourds que les fichiers originaux en ES6 car certaines fonctionnalités d'ES6 n'existent pas dans les versions antérieures et nécessitent plusieurs lignes pour arriver à un résultat identique. Exemple: le fichier `score.component.js` en ES6 est de 700 octets environ, alors que celui transpilé est de 1Ko.


# Step 6
## Question 15:
What is the difference between `import * from './utils'` and `import { parseUrl } from './utils'`?

`import *` permet d'importer toutes les fonctions (du dossier `./utils` ici), alors que `import { parseUrl }` permet d'importer uniquement la fonction `parseUrl` du dosssier.

## Question 16:
Why the `utils.js` will also be transpiled?

Le fichier `utils.js` est aussi transpilé car il se trouve dans le dossier `./app` et que tous les fichiers `.js` de ce dossier sont transpilés.

## Question 17:
What does the webpack `--config webpack.config.js` do ?

Cela permet de regrouper tous les fichiers de l'app et de la lire dans tous les navigateurs.


# Step 7
## Question 18:
Play the whole game with size=2. By browsing the 3 views of the application, how many files did your browser download in total? How many time did it took to load them all?

Le navigateur charge 9 fichiers au total en 589ms.

