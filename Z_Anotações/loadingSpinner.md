#Loading Spinner
Um Loading Spinner é um circulo usado em telas de carregamento. Para faze-lo usando html e css é preciso fazer os seguintes passos:

```Html
<div class="spinner"></div>
```

```Css
.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;                   /* Cor do círculo */
  border-top: 5px solid #3498db;           /* Cor da parte animada */
  border-radius: 50%;                       /* Deixa redondo */
  animation: spin 1s linear infinite;       /* Faz girar */
}

/* Animação */
@keyframes spin {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```
Explicacao
- ```Border```: cria o círculo.
- A borda superior ```(border-top)``` é de cor diferente para dar o efeito de "giro".
- ```Border-radius```: 50% deixa o elemento redondo.
- Animation com ```rotate``` faz ele girar infinitamente.

O Resultado final será um circulo girando.