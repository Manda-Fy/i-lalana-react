# Brainstorming - I-Lalana

## Catégories juridiques vulgarisées

L'idée : utiliser des termes basés sur les **situations de la vie quotidienne** plutôt que le jargon juridique.

| Terme technique | Terme vulgarisé (malgache) | Ce que ça couvre |
|---|---|---|
| Droit civil | **Fianakaviana** | Mariage, divorce, héritage, garde d'enfants |
| Droit foncier | **Tany sy trano** | Terrain, construction, conflit voisinage |
| Droit du travail | **Asa sy mpiasa** | Contrat, licenciement, droits du travailleur |
| Droit pénal | **Heloka sy fitoriana** | Porter plainte, vol, agression |
| Droit commercial | **Vola sy varotra** | Dette, contrat, commerce |
| Droit administratif | **Fandraisana andraikitra** | Démarches, papiers, droits civiques |

---

## Parcours guidés

Des chemins thématiques pour guider l'utilisateur selon son besoin :

- "Je veux porter plainte"
- "Je veux comprendre mes droits"
- "Je cherche une information sur une loi"

---

## Structure de l'apprentissage

```
src/components/pages/
├── home.jsx
├── explore.jsx          ← page principale d'apprentissage
└── article.jsx          ← page de détail d'un sujet

src/components/
├── pages/
├── static/
└── learning/
    ├── search-bar.jsx
    ├── category-grid.jsx
    ├── topic-card.jsx
    └── guided-paths.jsx
```
