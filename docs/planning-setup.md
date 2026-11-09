# Planning Com HTV : mise en ligne

Le calendrier est une page web autonome : `public/planning/index.html`.
Une fois le portfolio déployé, il est disponible à l'adresse **`https://<ton-site>/planning`**.

Pour s'en servir, l'équipe n'a besoin **ni de compte ni d'abonnement**. Il suffit d'avoir le lien et le code d'équipe.
Les données sont stockées dans Supabase. L'offre gratuite suffit largement pour une équipe com.

## 1. Créer la base (environ 5 minutes, à faire une seule fois)

1. Crée un compte gratuit sur https://supabase.com, puis un nouveau projet (choisis la région Europe, par exemple Paris).
2. Ouvre **SQL Editor > New query**.
3. Ouvre le fichier `docs/planning-supabase.sql`, remplace `CHANGEZ-MOI` par ton code d'équipe, puis colle le tout dans l'éditeur et clique sur **Run**.
   Choisis un code assez long, par exemple `htv-com-2026-mistral`.
4. Va dans **Project Settings > API** et copie deux valeurs :
   - **Project URL** (`https://xxxx.supabase.co`)
   - la clé **anon public**

## 2. Relier la page à la base

Dans `public/planning/index.html`, tout en haut du `<script>` principal, remplace les deux valeurs :

```js
const CONFIG = {
  url: 'https://xxxx.supabase.co',
  anonKey: 'eyJhbGciOi...',
};
```

La clé « anon public » peut être visible dans la page, c'est prévu pour. Ce qui protège l'accès, c'est le code d'équipe, qui n'est enregistré que dans Supabase.

Enregistre, commit, puis déploie (Vercel redéploie tout seul à chaque push).

## 3. Partager

Envoie à l'équipe :
- le lien `https://<ton-site>/planning`
- le code d'équipe

Chaque personne saisit le code une seule fois par appareil, va dans **Équipe** et choisit son nom dans « Je suis ».

## Bon à savoir

- **Synchronisation** : quand quelqu'un modifie une tâche, les autres pages ouvertes se mettent à jour en une ou deux secondes. Sinon, la page vérifie de toute façon toutes les 20 secondes.
- **Changer le code**, par exemple quand un stagiaire part : modifie-le dans `htv_check` (SQL Editor) et relance ce bloc. Tout le monde devra saisir le nouveau code.
- **Pause automatique** : en offre gratuite, Supabase met le projet en pause après une semaine sans aucune visite. Il suffit alors de cliquer sur « Restore » dans le tableau de bord Supabase.
- **Sauvegarde** : le bouton « Exporter en CSV » (dans Filtres) télécharge le planning pour Excel.
