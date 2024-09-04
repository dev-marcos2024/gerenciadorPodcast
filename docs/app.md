# Nome do Aplicativo
Podcast manger

### Descricao 
Um app estilo netlix, aonde possa centralizar diferentes epsodios 
podcasts separados por categorias

### Dominio 
Podcasst feitos em videos

### Features
- Listar os epsodios podcasts em sessoes de categorias
  - [saúde, fitness, mentalidade, humor]
- Filtrar epsódios por nome de podcast

## Como

#### Feature:
Listar os epsodios podcasts em sessoes de categorias

### Como vou implementar
Vou retornar uma api rest (jason) o 
nome podcast, nome epsodio, imagem de capa, link

```js
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  },
  {
    "podcastName": "flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    "categories": ["esporte", "corrida"]
  }
]
```