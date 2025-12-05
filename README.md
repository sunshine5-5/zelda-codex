README — Zelda Codex

L’encyclopédie interactive du monde de Zelda — Monstres, équipements & trésors ⚔️💎
Développée en React Native + Expo.

📌 Présentation

Zelda Codex est une application mobile permettant aux fans de The Legend of Zelda de découvrir les éléments iconiques du jeu :

🐲 Les monstres d’Hyrule

⚔️ Les équipements

💎 Les trésors

Chaque élément possède une fiche détaillée avec une image officielle, une description, et parfois les lieux où le trouver dans le jeu.

L’objectif : proposer une expérience immersive, rapide et intuitive, directement inspirée de l’univers Zelda.

✨ Fonctionnalités
Fonctionnalité	Description
🔎 Barre de recherche	Trouver rapidement un monstre
📚 Navigation simple	Accès direct aux catégories
📄 Fiche détail	Image + description + infos
🔊 Son natif (expo-av)	Effet sonore Zelda à l’ouverture
⭐ Persistance des favoris	Ajout dans une liste sauvegardée

Les données proviennent de :
➡️ Hyrule Compendium API (gratuite et sans clé)

🏗️ Architecture du projet
zelda-codex/
│
├── assets/              → Images, icônes, sons
│   ├── icons/
│   └── sounds/
│
├── components/          → Header, Cards, etc.
├── navigation/          → Stack Navigator
├── screens/             → Pages principales
│   ├── HomeScreen.js
│   ├── MonstersScreen.js
│   ├── TreasuresScreen.js
│   ├── EquipmentsScreen.js
│   ├── DetailMonsterScreen.js
│   └── …
│
├── store/               → Redux (favoris)
│
└── App.js

🛠️ Technologies utilisées

React Native + Expo

React Navigation

Redux Toolkit + AsyncStorage (persistance)

Expo-AV (son natif)

Fetch API (récupération des données)

🔧 Installation & Lancement
1️⃣ Cloner le projet
git clone https://github.com/TON-NOM/zelda-codex.git
cd zelda-codex

2️⃣ Installer les dépendances
npm install

3️⃣ Installer les modules Expo nécessaires
npx expo install @react-native-async-storage/async-storage
npx expo install expo-av
npx expo install react-native-screens react-native-safe-area-context

4️⃣ Lancer l’application
npx expo start


📱 Scanner le QR Code avec Expo Go sur Android / iOS

📡 Source des données

➡️ Hyrule Compendium API
API publique et gratuite :
https://botw-compendium.herokuapp.com/

🚧 Difficultés rencontrées

Gestion du Provider Redux autour de la navigation

Gestion correcte des assets (images/sons) dans Expo

Affichage conditionnel en cas d’absence de données

Optimisation du chargement (loader)

Ces difficultés ont permis d’améliorer la structure et la qualité du projet 🎯

📌 Améliorations possibles

🚀 Pour continuer l’évolution du projet :

Ajouter d’autres catégories (matériaux, nourriture…)

Ajouter un mode hors-ligne complet

Thèmes jour/nuit inspirés du jeu

Animation et effets sonores personnalisés

Traductions multilingues (FR/EN)
