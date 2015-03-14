# imdb-scraper
Node module for scrapping imdb movies data

## Usage
```javascript
var IMDb = require('imdb-scraper');
```
###Get movie data by IMDb id:
```javascript
IMDb.title('tt2084970').then(function(movie){
  console.log(movie);
});
```
Result:
```javscript
{
  id: 'tt2084970',
  name: 'The Imitation Game',
  poster: 'http://ia.media-imdb.com/images/M/MV5BNDkwNTEyMzkzNl5BMl5BanBnXkFtZTgwNTAwNzk3MjE@._V1_SY317_CR0,0,214,317_AL_.jpg',
  duration: '114 min',
  genre: ['Biography', 'Drama', 'Thriller'],
  year: '2014',
  description: 'During World War II, mathematician Alan Turing tries to crack the enigma code with help from fellow mathematicians.',
  storyline: ' Based on the real life story of legendary cryptanalyst Alan Turing, the film portrays the nail-biting race against time by Turing and his brilliant team of code-breakers at Britain\'s top-secret Government Code and Cypher School at Bletchley Park, during the darkest days of World War II. Written by Studio Canal ',
  director: {
    id: 'nm0878763',
    name: 'Morten Tyldum'
  },
  stars:[{
    id: 'nm1212722',
    name: 'Benedict Cumberbatch'
  },{
    id: 'nm0461136',
    name: 'Keira Knightley'
  },{
    id: 'nm0328828',
    name: 'Matthew Goode'
  }],
  rating: {
    value: '8.2',
    best: '10',
    count: '190,134'
  }
}
```

### Search for movie by title:

```javascript
IMDb.title.find('The Imitation Game').then(function(movies){
  console.log(movies);
  });
```
Result:
```javscript
[{
  id: 'tt2084970',
  name: ' The Imitation Game (2014) '
},{
  id: 'tt1632635',
  name: ' The Imitation Game (2008) (Short) '
},{
  id: 'tt0357780',
  name: ' The Imitation Game (1980) (TV Episode) - Play for Today (1970) (TV Series)  '
}]
```
### Search for movie by title and return the details of the first match:

```javascript
IMDb.title.first('The Imitation Game').then(function(movies){
  console.log(movies);
  });
```
Result:
```javscript
{
  id: 'tt2084970',
  name: 'The Imitation Game',
  poster: 'http://ia.media-imdb.com/images/M/MV5BNDkwNTEyMzkzNl5BMl5BanBnXkFtZTgwNTAwNzk3MjE@._V1_SY317_CR0,0,214,317_AL_.jpg',
  duration: '114 min',
  genre: ['Biography', 'Drama', 'Thriller'],
  year: '2014',
  description: 'During World War II, mathematician Alan Turing tries to crack the enigma code with help from fellow mathematicians.',
  storyline: ' Based on the real life story of legendary cryptanalyst Alan Turing, the film portrays the nail-biting race against time by Turing and his brilliant team of code-breakers at Britain\'s top-secret Government Code and Cypher School at Bletchley Park, during the darkest days of World War II. Written by Studio Canal ',
  director: {
    id: 'nm0878763',
    name: 'Morten Tyldum'
  },
  stars:[{
    id: 'nm1212722',
    name: 'Benedict Cumberbatch'
  },{
    id: 'nm0461136',
    name: 'Keira Knightley'
  },{
    id: 'nm0328828',
    name: 'Matthew Goode'
  }],
  rating: {
    value: '8.2',
    best: '10',
    count: '190,134'
  }
}
```
