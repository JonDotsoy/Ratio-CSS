Ratio CSS
=========

Es un simple framework CSS que facilita la creación de componentes responsivos con relacionada de aspectos. [wiki](http://es.wikipedia.org/wiki/Relaci%C3%B3n_de_aspecto)

![16x9](http://placehold.it/320x180&text=16x9)

![4x3](http://placehold.it/160x120&text=4x3)

Ejemplo HTML:
------------

Sin Ratio CSS

```
<div>
    <img src="http://placehold.it/620x280" alt="">
</div>
```

Con Ratio CSS

```
<div class="ratio ratio-16by9">
    <img src="http://placehold.it/620x280" alt="" class="ratio-item">
</div>
```
### Ejemplo en vivo

<http://fiddle.jshell.net/44Qkd/4/show/light/>

## Versiones

### [v1.2.0](https://github.com/alfa30/Ratio-CSS/tree/v1.2.0)

Agregar relaciones de tipo libro: 

- De bolsillo
    - css: .ratio-1302by2032
    - Dimensión: 13,02 x 20,32 cm
- Comercial
    - css: .ratio-1524by2286
    - Dimensión: 15,24 x 22,86 cm
- Cuadrado pequeño
    - css: .ratio-1746by1683
    - Dimensión: 17,46 x 16,83 cm
- Vertical estándar
    - css: .ratio-2000by2477
    - Dimensión: 20,00 x 24,77 cm
- Apaisado estándar
    - css: .ratio-2410by2032
    - Dimensión: 24,10 x 20,32 cm
- Apaisado grande
    - css: .ratio-3238by2762
    - Dimensión: 32,38 x 27,62 cm
- Cuadrado grande
    - css: .ratio-3025by3048
    - Dimensión: 30,25 x 30,48 cm
- Revista
    - css: .ratio-2794by2159
    - Dimensión: 27,94 x 21,59 cm

### [v1.1.0](https://github.com/alfa30/Ratio-CSS/tree/v1.1.0)

Ingresar control javascript.

Permite dimensionar la imagen sin perder la relación original, eliminando lo que no cabe dentro del componente. Para lo que ocupa la etiqueta `data-media="<proporción>"`.

### [v1.0.0](https://github.com/alfa30/Ratio-CSS/tree/v1.0)

Esta versión incluye las siguientes relaciones:

- 5x3
    - css: .ratio-5by3
    - URL Example: <http://placehold.it/500x300&text=5x3>
- 3x2
    - css: .ratio-3by2
    - URL Example: <http://placehold.it/300x200&text=3x2>
- 4x3
    - css: .ratio-4by3
    - URL Example: <http://placehold.it/400x300&text=4x3>
- 5x4
    - css: .ratio-5by4
    - URL Example: <http://placehold.it/500x400&text=5x4>
- 14x9
    - css: .ratio-14by9
    - URL Example: <http://placehold.it/140x90&text=14x9>
- 16x9
    - css: .ratio-16by9
    - URL Example: <http://placehold.it/160x90&text=16x9>
- 16x10
    - css: .ratio-16by10
    - URL Example: <http://placehold.it/160x100&text=16x10>
- 17x9
    - css: .ratio-17by9
    - URL Example: <http://placehold.it/170x90&text=17x9>
- 21x9
    - css: .ratio-21by9
    - URL Example: <http://placehold.it/210x90&text=21x9>
- 185x100
    - css: .ratio-185by100
    - URL Example: <http://placehold.it/185x100&text=185x100>
- 239x100
    - css: .ratio-239by100
    - URL Example: <http://placehold.it/239x100&text=239x100>


# Autor

Jonathan Delgado Zamorano <jonad.correo@gmail.com>

# Licencia

Licencia MIT <http://opensource.org/licenses/MIT>
