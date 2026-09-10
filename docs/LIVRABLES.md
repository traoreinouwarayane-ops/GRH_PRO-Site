# GRH_PRO — Livrables site vitrine

## Sitemap

```
/ (landing unique)
├── #accueil          Hero
├── #probleme         Problème → solution
├── #fonctionnalites  Modules (ancres internes)
│   ├── #organisation
│   ├── #temps
│   ├── #conges
│   ├── #paie
│   ├── #pilotage
│   ├── #tableaux
│   ├── #securite
│   └── #experience
├── #pour-qui         Personas
├── #parcours         Comment ça marche
├── #confiance        Preuves de sérieux
└── #contact          CTA final + footer
```

## Headlines (variantes)

1. **Retenue (en ligne)** — Une seule plateforme pour gérer et piloter vos ressources humaines.
2. Pilotez vos ressources humaines. Une plateforme. Toute la clarté.
3. Gérer, faire travailler, piloter — les RH en un seul endroit.

## Microcopy CTA

| Emplacement | Primaire | Secondaire |
|---|---|---|
| Hero | Demander une démo | Découvrir les fonctionnalités |
| Header | Demander une démo | — |
| CTA final | Planifier une démo | Nous écrire |
| Micro | Réponse sous 48 h ouvrées — sans engagement. | — |

## Brief design

- **Direction** : vert forêt logo `#167568` + accent or `#f5a620` — aligné sur le monogramme GP
- **Typos** : Syne (display / marque) · DM Sans (corps)
- **Logo** : `/public/logo-grh-pro.png` (complet) · `/public/logo-grh-pro-icon.png` (icône)
- **CSS vars** : voir `src/app/globals.css` (`--ink`, `--teal`, `--accent`, surfaces, texte)
- **Motions** : entrée hero échelonnée, hover scale CTA, reveal sections au scroll
- **Hero** : full-bleed photo + dégradé ink, marque dominante, sans cards/badges/stats

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4
