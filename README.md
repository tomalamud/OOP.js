## `Objetos de OOP`
- Son prototipados por el doveloper
```jsx
function Student() {
	this.name = 'Nombre';
	this.age = '18';
	this.points = '750';
}

const Juanita = new Student();
```
A la hora de inspeccionar a Juanita en la consola:
![[Captura de Pantalla 2022-04-25 a la(s) 16.11.47.png]]
###### `class` = forma amigable de prototipos.
![[Untitled.png]]
###### Desafío platzi
![[Untitled (1).png]]

## 4 Pilares de la POO
### **Abstracción**
- Reducir complejidad permitiendo implementación y diseño eficiente.
- Evitamos codigo duplicado, es decir, reusamos codigo.
- Podemos crear múltiples instancias con una sola abstracción.
- Al encapsular datos, los estamos protegiendo
- Evitamos código a bajo nivel.
- Podemos cambiar implementaciones en la clase, sin perjudicar su funcionamiento.

### Encapsulamiento
¿Qué es encapsulamiento?

Es guardar, proteger, guardar o limitar el acceso de cierto atributos y/o propiedades en nuestros prototipos y objetos.

Cuando hablamos de `encapsulamiento` hablamos de:
- Esconder métodos y atributos 👻
- No permitir la alteración de métodos y atributos ❌

Nada debería cambiar (desde afuera) el comportamiento de nuestros métodos y atributos. Ni de los prototípos (clases), ni de las instancias.
    
#### **Encapsulamiento en JavaScript**
- Realmente no se puede esconder métodos y atributos en JS.

###### Pero se pueden tomar medidas
- Para no permitir la sobre escritura de métodos y atributos ❌

_Formas de aplicar encapsulamiento en JavaScript_:
- Getters y setters 🖐
- Módulo de ES6 🤝

También se podría con:
- Namespaces 🙂
- Object.defineProperties 🎈

##### Convenciones
Por default todo es público en JS, pero hay convenciones para que la gente del equipo no modifique ciertas cosas:
- usar `_myMethod`
- Si quisieramos acceder al valor de esta propiedad, utilizamos un **getter**.
```jsx
class Course {
	constructor(name, classes) {
		this._name = name;
		this._classes = classes;
	}
	get name() {
		return this._name;
	}
}

const cursoIntroCSS = new Course("Curso de introducción a CSS", 24);

cursoIntroCSS.name // 'Curso de introducción a CSS'
```            
- Y si quisieramos cambiaro usaríamos un **setter**.            
```jsx
class Course {
	constructor(name, classes) {
		this._name = name;
		this._classes = classes;
	};
	set classes(newLength) {
		return this._classes = newLength;
	};
};

const cursoIntroCSS = new Course("Curso de introducción a CSS", 24);

cursoIntroCSS.classes = 30;
```
                

### Herencia
La herencia nos permite crear “clases madre”, la cual servirá de molde para clases hijas, que compartirán sus métodos y atributos.

Usamos la palabra reservada `extends`

### Polimorfismo
- Heredo, pero cambiando el func de la herencia.

Tipos:
1.  Polimorfismo de Sobrecarga: ocurre cuando existen métodos con el mismo nombre y funcionalidad similar en clases totalmente independientes entre ellas.
2.  Polimorfismo Paramétrico: El polimorfismo paramétrico es la capacidad para definir varias funciones utilizando el mismo nombre, pero usando parámetros diferentes (nombre y/o tipo).
3.  Polimorfismo de Inclusión (JS): La habilidad para redefinir por completo el método de una superclase en una subclase.


## Useful methods
#### Object.defineProperty()
Permite seleccionar exactemente cómo queremos que una nueva propiedad sea o editar los permisos de una existente.
```js
Object.defineProperty(juan, "name", {
	writeble: false,
	configurable: false,
	value: "Juan"
})
juan.name = "Pedro" // error
delete juan.name // error
```
#### Object.seal()
Evita que se puedan borrar las propiedades del objeto. Es igual que ir uno por uno con Object.defineProperty(x,x, {configurable: false}) pero lo aplica a todas las propiedades de una sola vez.
```js
Object.seal(juan);

delete juan.name // error
```

###### Object.isSealed()
Verifica si todas las propiedades son {configurable: false}.


#### Object.freeze()
todas las propiedades = {configurable: false, writeble: false}.
###### Object.isFrozen()
isSealed para freeze
## Factory pattern and RORO
Creando objetos con funciones.
### RORO
##### Recivo un objeto y retorno un objeto
```js
// this next function, will allow us to debug
// if the obloigatory artibutes are passing to
// in the creation of the object

function requiredParams(param) {
	throw new Error(param + " is required");
};

function createStudent({
	name = requiredParams("name"),
	email = requiredParams("email"),
	age,
	socialMedia = [], // Array default
	approvedCourses = [],
	learningPath = [],
} = {}) { // ensure there's no error sending e default object
	return {
	name,
	age,
	email,
	socialMedia,
	approvedCourses,
	learningPath,
	}
}

const arturito = createStudent({
	name: "Arturo",
	age: 16
})
```
### Factory
Crear objetos con una función.
##### Propiedades "privadas".
```js
function createStudent({
	name,
	email,
}) {
	const private = {
		"_email": email,
	}
	const public = {
		name,
		email,
		changeEmail(newEmail) {
			private._email = newEmail;
		},
		readEmail() {
			return private._email;
		},
	}
	return public;
}

const arturito = createStudent({
	name: "Arturo",
	email: "arturito@gmail.com",
})
```
En realidad lo que se hace es retornar sólo las propiedades públicas y se ofrecen métodos para retornar y editar las "privadas", que implicarán pasar por otro bloque de código `changeEmail()` en este caso, que hará todas las validaciones necesarias y pasará el nuevo email por el filtro de nuestra lógica.


##### Protegiendo las propiedades privadas
```js
function createStudent({
	name,
	email,
}) {
	const private = {
		"_email": email,
	}
	const public = {
		name,
		email,
		changeEmail(newEmail) {
			private._email = newEmail;
		},
		readEmail() {
			return private._email;
		},
	}
	
	Object.defineProperty(public, "changeEmail", {
		configurable: false,
		writable: false
	})
	
	Object.defineProperty(public, "readEmail", {
		configurable: false,
		writable: false
	})

	return public;
}

const arturito = createStudent({
	name: "Arturo",
	email: "arturito@gmail.com",
})
```
##### Getters and Setters
```js
function createStudent({
		name,
		email,
	}) {
		const private = {
			"_email": email,
		}
		const public = {
			name,
			get name() {
			return private._email;
		},
			set name(newEmail) {
				return private._email = newEmail;
			},
		}
	return public;
}

const arturito = createStudent({
	name: "Arturo",
	email: "arturito@gmail.com",
})
```
cabe aclarar que los métodos get y set se pueden modificar con el Object.defineProperty, y al hacerlo, estos dejarán de hacer referencia al objeto privado.
## Duck Typing
El duck typing es la forma de progamar donde identificamos a nuestros elementos dependiendo de los métodos y atributos que tengan por dentro.
Plantea el problema de que más allá de qué propiedades tiene un objeto, nos interesa de dónde salió, cual es su prototipo.
## Instance Of

## Métodos y atributos privados
Para asignar los métodos y atributos privados en Clases (ahora en ES21) seran con un **#**

El propio JavaScript aplica la encapsulación de privacidad de estas características de clase.

```
class ClassWithPrivateField {
  #privateField;
}
```

**Ahora vamos a ver un Ejemplo**

Metodos Privados

1.  Vamos a crear una clase llamada `People` y vamos a tener varios metodos.

```
class People {
  showName() {
    console.log("My name is David")
  }
  showAge() {
    console.log("David is 21")
  }
}
```

Para acceder a los metodos dentro de las clases, primero necesitamos instanciar la clase.

```
class People {
  showName() {
    console.log("My name is David")
  }
  showAge() {
    console.log("David is 21")
  }
}

const people = new People()

people.showName()
people.showAge()
```

Podemos ver `My name is David` y `David is 21` en la consola.  
Si queremos hacer `showAge()`, un método privado dentro de la clase People, por lo que fuera del alcance de la clase no es accesible.  
Simplemente agregamos `#` a `showAge()` algo asi `#showAge()`

```
class People {
  showName() {
    console.log("My name is David")
  }
  #showAge() {
    console.log("David is 21")
  }
}

const people = new People()

people.showName()
people.showAge() 
```

Podemos ver el resultado en nuestra consola. Un error es decir `people.showAge` que no es una función. Esto se debe a `#showAge()` que ahora es un método privado dentro de la clase `People` y solo se puede acceder a través de un método público dentro de la clase `People`.
