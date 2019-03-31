/ *!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Incluye Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation y otros colaboradores.
 * Lanzado bajo la licencia MIT
 * https://jquery.org/license
 *
 * Fecha: 2018-01-20T17: 24Z
 * /
(función (global, fábrica) {

	"uso estricto";

	if (typeof module === "object" && typeof module.exports === "object") {

		// Para entornos similares a CommonJS y CommonJS donde una 'ventana' adecuada
		// está presente, ejecuta la fábrica y obtén jQuery.
		// Para entornos que no tienen una `ventana` con un` documento`
		// (como Node.js), expone una fábrica como module.exports.
		// Esto acentúa la necesidad de crear una 'ventana' real.
		// p. ej. var jQuery = require ("jquery") (ventana);
		// Vea el boleto # 14549 para más información.
		module.exports = global.document?
			fábrica (global, verdadero):
			función (w) {
				si (! w.document) {
					lanzar nuevo error ("jQuery requiere una ventana con un documento");
				}
				retorno de fábrica (w);
			};
	} else {
		fábrica (global);
	}

// Pasa esto si la ventana aún no está definida.
}) (typeof window! == "undefined"? window: this, function (window, noGlobal) {

// Edge <= 12 - 13+, Firefox <= 18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// lanzar excepciones cuando el código no estricto (por ejemplo, ASP.NET 4.5) accede al modo estricto
// argument.callee.caller (trac-13335). Pero a partir de jQuery 3.0 (2016), el modo estricto debería ser común
// basta con que todos esos intentos estén protegidos en un bloque try.
"uso estricto";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call (Object);

soporte var = {};

var isFunction = function isFunction (obj) {

      // Soporte: Chrome <= 57, Firefox <= 52
      // En algunos navegadores, typeof devuelve "function" para elementos <object> HTML
      // (es decir, `typeof document.createElement (" object ") ===" function "`).
      // No queremos clasificar * ningún * nodo DOM como una función.
      devuelve typeof obj === "function" && typeof obj.nodeType! == "number";
  };


var isWindow = función isWindow (obj) {
		return obj! = null && obj === obj.window;
	};




	var preserveScriptAttributes = {
		tipo: verdadero,
		src: verdadero,
		noModule: true
	};

	función DOMEval (código, documento, nodo) {
		doc = doc || documento;

		var i
			script = doc.createElement ("script");

		script.text = código;
		if (nodo) {
			para (i en preservScriptAtributos) {
				si (nodo [i]) {
					script [i] = nodo [i];
				}
			}
		}
		doc.head.appendChild (script) .parentNode.removeChild (script);
	}


función toType (obj) {
	if (obj == null) {
		devuelve obj + "";
	}

	// Soporte: Android <= 2.3 solamente (función RegExp)
	tipo de objeto devuelto === "objeto" || typeof obj === "function"?
		class2type [toString.call (obj)] || "objeto":
		typeof obj;
}
/ * Símbolo global * /
// Definir este global en .eslintrc.json crearía un peligro de usar el global
// sin vigilancia en otro lugar, parece más seguro definir global solo para este módulo



var
	version = "3.3.1",

	// Definir una copia local de jQuery
	jQuery = función (selector, contexto) {

		// El objeto jQuery es en realidad solo el constructor init 'mejorado'
		// Necesita inicio si se llama a jQuery (solo permita que se produzca un error si no está incluido)
		devolver nuevo jQuery.fn.init (selector, contexto);
	}

	// Soporte: Android <= 4.0 solamente
	// Asegúrate de recortar BOM y NBSP
	rtrim = / ^ [\ s \ uFEFF \ xA0] + | [\ s \ uFEFF \ xA0] + $ / g;

jQuery.fn = jQuery.prototype = {

	// La versión actual de jQuery en uso
	jquery: version,

	constructor: jQuery,

	// La longitud predeterminada de un objeto jQuery es 0
	longitud: 0,

	toArray: function () {
		devolver slice.call (esto);
	}

	// Obtener el elemento Nth en el conjunto de elementos coincidentes O
	// Obtener el conjunto completo de elementos emparejados como una matriz limpia
	obtener: función (num) {

		// Devuelve todos los elementos en una matriz limpia
		if (num == null) {
			devolver slice.call (esto);
		}

		// Devuelve solo un elemento del conjunto
		devuelve num <0? este [num + this.length]: este [num];
	}

	// Toma una matriz de elementos y empújalo en la pila
	// (devolviendo el nuevo conjunto de elementos coincidentes)
	pushStack: function (elems) {

		// Construye un nuevo conjunto de elementos coincidentes de jQuery
		var ret = jQuery.merge (this.constructor (), elems);

		// Añadir el objeto antiguo a la pila (como referencia)
		ret.prevObject = esto;

		// Devuelve el conjunto de elementos recién formado
		volver ret
	}

	// Ejecutar una devolución de llamada para cada elemento en el conjunto coincidente.
	each: function (callback) {
		return jQuery.each (this, callback);
	}

	mapa: función (devolución de llamada) {
		devuelve this.pushStack (jQuery.map (this, function (elem, i) {
			return callback.call (elem, i, elem);
		}));
	}

	slice: function () {
		devuelve this.pushStack (slice.apply (this, argumentos));
	}

	primero: function () {
		devuelve this.eq (0);
	}

	last: function () {
		devuelve this.eq (-1);
	}

	eq: función (i) {
		var len = this.length,
			j = + i + (i <0? len: 0);
		devuelve this.pushStack (j> = 0 && j <len? [this [j]]: []);
	}

	end: function () {
		devuelve this.prevObject || este.constructor ();
	}

	// Sólo para uso interno.
	// Se comporta como el método de un Array, no como el método jQuery.
	empuja empuja,
	ordenar: arr.sort,
	empalme: arr.splice
};

jQuery.extend = jQuery.fn.extend = function () {
	opciones de var, nombre, fuente, copia, copyIsArray, clon,
		target = argumentos [0] || {},
		i = 1,
		longitud = argumentos.longitud,
		profundo = falso;

	// Manejar una situación de copia profunda
	if (typeof target === "boolean") {
		profundo = objetivo;

		// Salta el booleano y el objetivo.
		target = argumentos [i] || {};
		i ++;
	}

	// Manejar caso cuando el objetivo es una cadena o algo (posible en copia profunda)
	if (typeof target! == "object" &&! isFunction (target)) {
		target = {};
	}

	// Extiende jQuery si solo se pasa un argumento
	if (i === longitud) {
		objetivo = esto;
		yo--;
	}

	para (; i <longitud; i ++) {

		// Solo tratar con valores no nulos / indefinidos
		si ((opciones = argumentos [i])! = nulo) {

			// Extender el objeto base
			para (nombre en opciones) {
				src = target [nombre];
				copia = opciones [nombre];

				// Prevenir el bucle interminable
				if (target === copy) {
					continuar;
				}

				// Recurse si estamos fusionando objetos simples o matrices
				if (deep && copy && (jQuery.isPlainObject (copy) ||
					(copyIsArray = Array.isArray (copia)))) {

					if (copyIsArray) {
						copyIsArray = false;
						clone = src && Array.isArray (src)? src: [];

					} else {
						clone = src && jQuery.isPlainObject (src)? src: {};
					}

					// Nunca muevas objetos originales, clónalos
					target [nombre] = jQuery.extend (deep, clone, copy);

				// No traer valores indefinidos
				} else if (copia! == indefinido) {
					target [nombre] = copiar;
				}
			}
		}
	}

	// Devolver el objeto modificado
	objetivo de retorno
};

jQuery.extend ({

	// Único para cada copia de jQuery en la página
	expando: "jQuery" + (version + Math.random ()) .replace (/ \ D / g, ""),

	// Supongamos que jQuery está listo sin el módulo listo
	isReady: verdadero,

	error: función (msg) {
		lanzar nuevo error (msg);
	}

	noop: function () {},

	isPlainObject: function (obj) {
		var proto, ctor;

		// Detectar negativos obvios
		// Use toString en lugar de jQuery.type para capturar objetos del host
		if (! obj || toString.call (obj)! == "[object Object]") {
			falso retorno;
		}

		proto = getProto (obj);

		// Los objetos sin prototipo (por ejemplo, `Object.create (null)`) son simples
		si (! proto) {
			devuelve verdadero
		}

		// Los objetos con prototipo son simples si fueron construidos por una función de objeto global
		Ctor = hasOwn.call (proto, "constructor") && proto.constructor;
		devuelva typeof Ctor === "function" && fnToString.call (Ctor) === ObjectFunctionString;
	}

	isEmptyObject: function (obj) {

		/ * eslint-disable no-unused-vars * /
		// Ver https://github.com/eslint/eslint/issues/6125
		nombre var

		para (nombre en obj) {
			falso retorno;
		}
		devuelve verdadero
	}

	// Evalúa un script en un contexto global
	globalEval: función (código) {
		DOMEval (código);
	}

	each: function (obj, callback) {
		longitud var, i = 0;

		if (isArrayLike (obj)) {
			longitud = obj.length;
			para (; i <longitud; i ++) {
				if (callback.call (obj [i], i, obj [i]) === false) {
					descanso;
				}
			}
		} else {
			para (i en obj) {
				if (callback.call (obj [i], i, obj [i]) === false) {
					descanso;
				}
			}
		}

		volver obj;
	}

	// Soporte: Android <= 4.0 solamente
	recortar: función (texto) {
		devuelve texto == nulo?
			"":
			(texto + "") .replace (rtrim, "");
	}

	// los resultados son solo para uso interno
	makeArray: función (arr, resultados) {
		var ret = resultados || [];

		if (arr! = null) {
			if (isArrayLike (Object (arr))) {
				jQuery.merge (ret,
					typeof arr === "string"?
					[arr]: arr
				);
			} else {
				push.call (ret, arr);
			}
		}

		volver ret
	}

	inArray: function (elem, arr, i) {
		volver arr == null? -1: indexOf.call (arr, elem, i);
	}

	// Soporte: Android <= 4.0 solamente, PhantomJS 1 solamente
	// push.apply (_, arraylike) lanza en el antiguo WebKit
	fusionar: función (primero, segundo) {
		var len = + second.length,
			j = 0,
			i = first.length;

		para (; j <len; j ++) {
			primero [i ++] = segundo [j];
		}

		first.length = i;

		regresa primero
	}

	grep: function (elems, callback, invert) {
		var callbackInverse,
			concuerda = [],
			i = 0,
			longitud = elems.length,
			callbackExpect =! invert;

		// Ir a través de la matriz, solo guardando los elementos
		// que pasa la función de validador
		para (; i <longitud; i ++) {
			callbackInverse =! callback (elems [i], i);
			if (callbackInverse! == callbackExpect) {
				fósforos.push (elems [i]);
			}
		}

		partidos de vuelta;
	}

	// arg es solo para uso interno
	map: function (elems, callback, arg) {
		longitud var, valor,
			i = 0,
			ret = [];

		// Ir a través de la matriz, traduciendo cada uno de los elementos a sus nuevos valores
		if (isArrayLike (elems)) {
			longitud = elems.length;
			para (; i <longitud; i ++) {
				valor = devolución de llamada (elems [i], i, arg);

				si (valor! = nulo) {
					ret.push (valor);
				}
			}

		// Ir a través de cada tecla en el objeto,
		} else {
			para (i in elems) {
				valor = devolución de llamada (elems [i], i, arg);

				si (valor! = nulo) {
					ret.push (valor);
				}
			}
		}

		// Aplanar cualquier matriz anidada
		devolver concat.apply ([], ret);
	}

	// Un contador GUID global para objetos
	guid: 1,

	// jQuery.support no se usa en Core pero otros proyectos adjuntan sus
	// propiedades a ella por lo que necesita existir.
	soporte soporte
});

if (typeof Symbol === "function") {
	jQuery.fn [Symbol.iterator] = arr [Symbol.iterator];
}

// Rellenar el mapa class2type
jQuery.each ("Booleano Número Cadena Función Array Fecha RegExp Objeto Símbolo de error" .split (""),
función (i, nombre) {
	class2type ["[object" + name + "]"] = name.toLowerCase ();
});

función isArrayLike (obj) {

	// Soporte: solo iOS 8.2 real (no reproducible en simulador)
	// `in 'check usado para prevenir el error JIT (gh-2145)
	// hasOwn no se usa aquí debido a falsos negativos
	// con respecto a la longitud de Nodelist en IE
	var length = !! obj && "length" en obj && obj.length,
		type = toType (obj);

	if (isFunction (obj) || isWindow (obj)) {
		falso retorno;
	}

	tipo de retorno === "array" || longitud === 0 ||
		typeof length === "number" && length> 0 && (length - 1) en obj;
}
var Sizzle =
/ *!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright de la Fundación jQuery y otros colaboradores.
 * Lanzado bajo la licencia MIT
 * http://jquery.org/license
 *
 * Fecha: 2016-08-08
 * /
(función (ventana) {

var i
	apoyo,
	Expr,
	getText
	isXML,
	tokenizar
	compilar,
	seleccionar,
	contexto externo,
	sortInput,
	ha duplicado,

	// Vars de documentos locales
	setDocument,
	documento,
	docem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	partidos,
	contiene,

	// Datos específicos de la instancia
	expando = "chisporrotear" + 1 * nueva Fecha (),
	preferredDoc = window.document,
	dirruns = 0,
	hecho = 0,
	classCache = createCache (),
	tokenCache = createCache (),
	compilerCache = createCache (),
	sortOrder = función (a, b) {
		si (a === b) {
			hasDuplicate = true;
		}
		devuelve 0;
	}

	// Métodos de instancia
	hasOwn = ({}). hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use un índice reducido, ya que es más rápido que el nativo
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = función (lista, elemento) {
		var i = 0,
			len = list.length;
		para (; i <len; i ++) {
			if (list [i] === elem) {
				regreso i;
			}
		}
		devuelve -1;
	}

	booleans = "seleccionado | seleccionado | async | autofocus | autoplay | controles | diferir | deshabilitado | oculto | ismap | loop | multiple | open | readonly | required | scoped",

	// Expresiones regulares

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\ x20 \\ t \\ r \\ n \\ f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?: \\\\. | [\\ w-] | [^ \ 0 - \\ xa0]) +",

	// Selectores de atributos: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\ [" + whitespace + "* (" + identifier + ") (?:" + whitespace +
		// Operador (captura 2)
		"* ([* ^ $ |! ~]? =)" + espacios en blanco +
		// "Los valores de atributo deben ser identificadores de CSS [captura 5] o cadenas [captura 3 o captura 4]"
		"* (?: '((?? \\\\. | [^ \\\\']) *) '| \" ((?: \\\\. | [^ \\\\\ "] ) *) \ "| (" + identifier + "))))) + whitespace +
		"* \\]",

	pseudos = ":(" + identifier + ") (?: \\ ((" +
		// Para reducir el número de selectores que necesitan tokenize en el prefiltro, prefiera los argumentos:
		// 1. citado (captura 3; captura 4 o captura 5)
		"('(((?: \\\\. | [^ \\\\']) *) '| \" ((?: \\\\. | [^ \\\\\ "]) *) \ ") |" +
		// 2. simple (captura 6)
		"((?: \\\\. | [^ \\\\ () [\\]] |" + atributos + ") *) |" +
		// 3. cualquier otra cosa (captura 2)
		". *" +
		") \\) |)",

	// Espacios en blanco al final y sin escape, que capturan algunos caracteres que no son espacios en blanco que preceden al último
	rwhitespace = new RegExp (espacio en blanco + "+", "g"),
	rtrim = new RegExp ("^" + espacio en blanco + "+ | ((?: ^ | [^ \\\\]) (?: \\\\.) *)" + espacio en blanco + "+ $", "g "),

	rcomma = new RegExp ("^" + espacio en blanco + "*," + espacio en blanco + "*"),
	rcombinators = new RegExp ("^" + espacio en blanco + "* ([> + ~] |" + espacio en blanco + ")" + espacio en blanco + "*"),

	rattributeQuotes = new RegExp ("=" + espacio en blanco + "* ([^ \\] '\"] *?) "+ espacio en blanco +" * \\] "," g "),

	rpseudo = new RegExp (pseudos),
	ridentifier = new RegExp ("^" + identifier + "$"),

	matchExpr = {
		"ID": nuevo RegExp ("^ # (" + identifier + ")"),
		"CLASE": nuevo RegExp ("^ \\. (" + Identifier + ")"),
		"TAG": nuevo RegExp ("^ (" + identifier + "| [*])"),
		"ATTR": nuevo RegExp ("^" + atributos),
		"PSEUDO": nuevo RegExp ("^" + pseudos),
		"CHILD": nuevo RegExp ("^ :( solo | primero | último | nth | nth-last) - (child | of-type) (?: \\ (" + whitespace +
			"* (par | impar | (([+ -] |) (\\ d *) n |)" + espacio en blanco + "* (?: ([+ -] |)" + espacio en blanco +
			"* (\\ d +) |))" + espacio en blanco + "* \\) |)", "i"),
		"bool": nuevo RegExp ("^ (?:" + booleans + ") $", "i"),
		// Para uso en bibliotecas implementando .is ()
		// Lo usamos para la coincidencia de puntos de venta en `select`
		"needsContext": new RegExp ("^" + espacio en blanco + "* [> + ~] |: (incluso | impar | eq | gt | lt | nth | first | last) (?: \\ (" +
			espacio en blanco + "* ((?: - \\ d)? \\ d *)" + espacio en blanco + "* \\) |) (? = [^ -] | $)", "i")
	}

	rinputs = / ^ (?: input | select | textarea | button) $ / i,
	rheader = / ^ h \ d $ / i,

	rnativo = / ^ [^ {] + \ {\ s * \ [nativo \ w /,

	// Selectores de ID o TAG o CLASS fácilmente analizables / recuperables
	rquickExpr = /^(?:#([\w-◆+)|(\w+)|\.([\w-◆+))$/,

	rsibling = / [+ ~] /,

	// escapes CSS
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp ("\\\\ ([\\ da-f] {1,6}" + espacio en blanco + "? | (" + espacio en blanco + ") |.)", "ig"),
	funescape = function (_, escaped, escapedWhitespace) {
		var alto = "0x" + escapado - 0x10000;
		// NaN significa no codepunto
		// Soporte: Firefox <24
		// Interpretación numérica errónea de la solución de + "0x"
		retorno alto! == alto || escapado en el espacio en blanco?
			escapado :
			alto <0?
				// punto de código BMP
				String.fromCharCode (alto + 0x10000):
				// Punto de código del plano suplementario (par suplente)
				String.fromCharCode (alto >> 10 | 0xD800, alto y 0x3FF | 0xDC00);
	}

	// CSS serie / identificador de serialización
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = / ([\ 0- \ x1f \ x7f] | ^ -? \ d) | ^ - $ | [^ \ 0- \ x1f \ x7f- \ uFFFF \ w -] / g,
	fcssescape = function (ch, asCodePoint) {
		if (comoCodePoint) {

			// U + 0000 NULL se convierte en U + FFFD CARACTER DE SUSTITUCIÓN
			if (ch === "\ 0") {
				devuelve "\ uFFFD";
			}

			// Los caracteres de control y los números (dependientes de la posición) se escapan como puntos de código
			devuelve ch.slice (0, -1) + "\\" + ch.charCodeAt (ch.length - 1) .toString (16) + "";
		}

		// Otros caracteres ASCII potencialmente especiales obtienen una barra invertida-escapada
		devuelve "\\" + ch;
	}

	// Utilizado para iframes
	// Ver setDocument ()
	// La eliminación del envoltorio de la función provoca un "Permiso denegado"
	// error en IE
	unloadHandler = function () {
		setDocument ();
	}

	disabledAncestor = addCombinator (
		función (elem) {
			devuelva elem.disabled === true && ("formulario" en elem || "etiqueta" en elem);
		}
		{dir: "parentNode", siguiente: "legend"}
	);

// Optimizar para push.apply (_, NodeList)
tratar {
	aplicar
		(arr = slice.call (preferredDoc.childNodes)),
		preferredDoc.childNodes
	);
	// Soporte: Android <4.0
	// Detecta silenciosamente fallando push.apply
	arr [preferredDoc.childNodes.length] .nodeType;
} atrapar (e) {
	push = {apply: arr.length?

		// Aprovechar la porción si es posible
		función (objetivo, els) {
			push_native.apply (target, slice.call (els));
		}:

		// Soporte: IE <9
		// De lo contrario, agregue directamente
		función (objetivo, els) {
			var j = target.length,
				i = 0;
			// No puedo confiar en NodeList.length
			while ((target [j ++] = els [i ++])) {}
			target.length = j - 1;
		}
	};
}

función Sizzle (selector, contexto, resultados, semilla) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType por defecto es 9, ya que el contexto por defecto es el documento
		nodeType = context? context.nodeType: 9;

	resultados = resultados || [];

	// Retorno temprano de llamadas con selector o contexto inválido
	if (typeof selector! == "string" ||! selector ||
		nodeType! == 1 && nodeType! == 9 && nodeType! == 11) {

		resultados de retorno
	}

	// Intente realizar accesos directos a las operaciones de búsqueda (a diferencia de los filtros) en documentos HTML
	si (! semilla) {

		if ((context? context.ownerDocument || context: preferredDoc)! == document) {
			setDocument (contexto);
		}
		contexto = contexto || documento;

		if (documentIsHTML) {

			// Si el selector es lo suficientemente simple, intente usar un método DOM "obtener * por *"
			// (exceptuando el contexto DocumentFragment, donde los métodos no existen)
			if (nodeType! == 11 && (match = rquickExpr.exec (selector))) {

				// selector de ID
				if ((m = match [1])) {

					// Contexto del documento
					if (nodeType === 9) {
						if ((elem = context.getElementById (m))) {

							// Soporte: IE, Opera, Webkit
							// TODO: identificar versiones
							// getElementById puede hacer coincidir elementos por nombre en lugar de ID
							if (elem.id === m) {
								resultados.push (elem);
								resultados de retorno
							}
						} else {
							resultados de retorno
						}

					// contexto del elemento
					} else {

						// Soporte: IE, Opera, Webkit
						// TODO: identificar versiones
						// getElementById puede hacer coincidir elementos por nombre en lugar de ID
						if (newContext && (elem = newContext.getElementById (m)) &&
							contiene (contexto, elem) &&
							elem.id === m) {

							resultados.push (elem);
							resultados de retorno
						}
					}

				// Selector de tipo
				} else if (match [2]) {
					push.apply (results, context.getElementsByTagName (selector));
					resultados de retorno

				// selector de clase
				} else if ((m = match [3]) && support.getElementsByClassName &&
					context.getElementsByClassName) {

					push.apply (results, context.getElementsByClassName (m));
					resultados de retorno
				}
			}

			// Aprovecha QuerySelectorAll
			si (support.qsa &&
				! compilerCache [selector + ""] &&
				(! rbuggyQSA ||! rbuggyQSA.test (selector))) {

				si (nodeType! == 1) {
					newContext = context;
					newSelector = selector;

				// qSA mira fuera del contexto del elemento, que no es lo que queremos
				// Gracias a Andrew Dupont por esta técnica de solución.
				// Soporte: IE <= 8
				// Excluir elementos de objeto
				} else if (context.nodeName.toLowerCase ()! == "object") {

					// Capture el ID de contexto, configurándolo primero si es necesario
					if ((nid = context.getAttribute ("id"))) {
						nid = nid.replace (rcssescape, fcssescape);
					} else {
						context.setAttribute ("id", (nid = expando));
					}

					// Prefijo cada selector en la lista
					groups = tokenize (selector);
					i = grupos.longitud;
					mientras yo-- ) {
						grupos [i] = "#" + nid + "" + toSelector (grupos [i]);
					}
					newSelector = groups.join (",");

					// Expandir el contexto para los selectores de hermanos
					newContext = rsibling.test (selector) && testContext (context.parentNode) ||
						contexto;
				}

				if (newSelector) {
					tratar {
						push.apply (resultados,
							newContext.querySelectorAll (newSelector)
						);
						resultados de retorno
					} catch (qsaError) {
					} finalmente {
						if (nid === expando) {
							context.removeAttribute ("id");
						}
					}
				}
			}
		}
	}

	// Todos los otros
	return select (selector.replace (rtrim, "$ 1"), contexto, resultados, semilla);
}

/ **
 * Crear cachés clave-valor de tamaño limitado
 * @returns {function (string, object)} Devuelve los datos del Objeto después de almacenarlo en sí mismo con
 * nombre de la propiedad la cadena (con sufijo de espacio) y (si el caché es más grande que Expr.cacheLength)
 * eliminando la entrada más antigua
 * /
función createCache () {
	teclas var = [];

	función caché (clave, valor) {
		// Use (clave + "") para evitar la colisión con las propiedades del prototipo nativo (ver Problema # 157)
		if (keys.push (key + "")> Expr.cacheLength) {
			// Mantener solo las entradas más recientes.
			eliminar caché [keys.shift ()];
		}
		return (caché [clave + ""] = valor);
	}
	caché de retorno
}

/ **
 * Marca una función para uso especial de Sizzle.
 * @param {Función} fn La función a marcar
 * /
función markFunction (fn) {
	fn [expando] = verdadero;
	retorno fn;
}

/ **
 * Soporte de pruebas utilizando un elemento.
 * @param {Función} fn Pasó el elemento creado y devuelve un resultado booleano
 * /
función aser (fn) {
	var el = document.createElement ("fieldset");

	tratar {
		volver !! fn (el);
	} atrapar (e) {
		falso retorno;
	} finalmente {
		// Eliminar de su padre por defecto
		if (el.parentNode) {
			el.parentNode.removeChild (el);
		}
		// liberar memoria en IE
		el = nulo;
	}
}

/ **
 * Agrega el mismo controlador para todos los atributos especificados
 * @param {String} attrs Lista de atributos separados por tuberías
 * @param {Función} handler El método que se aplicará
 * /
función addHandle (attrs, handler) {
	var arr = attrs.split ("|"),
		i = arr.length;

	mientras yo-- ) {
		Expr.attrHandle [arr [i]] = controlador;
	}
}

/ **
 * Verifica el orden del documento de dos hermanos.
 * @param {Elemento} a
 * @param {Elemento} b
 * @returns {Number} Devuelve menos de 0 si a precede a b, mayor a 0 si a sigue a b
 * /
función siblingCheck (a, b) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex si está disponible en ambos nodos
	si (dif) {
		retorno dif
	}

	// Comprueba si b sigue a
	if (cur) {
		while ((cur = cur.nextSibling)) {
			si (cur === b) {
				devuelve -1;
			}
		}
	}

	devolver un? 1: -1;
}

/ **
 * Devuelve una función para usar en pseudos para tipos de entrada
 * @param {String} type
 * /
función createInputPseudo (tipo) {
	función de retorno (elem) {
		nombre var = elem.nodeName.toLowerCase ();
		nombre de retorno === "entrada" && elem.type === tipo;
	};
}

/ **
 * Devuelve una función para usar en pseudos para botones.
 * @param {String} type
 * /
función createButtonPseudo (tipo) {
	función de retorno (elem) {
		nombre var = elem.nodeName.toLowerCase ();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/ **
 * Devuelve una función para usar en pseudos para: habilitado /: deshabilitado
 * @param {Boolean} deshabilitado true para: deshabilitado; falso para: habilitado
 * /
función createDisabledPseudo (deshabilitado) {

	// Conocido: deshabilitado falsos positivos: fieldset [deshabilitado]> leyenda: nth-of-type (n + 2): can-disable
	función de retorno (elem) {

		// Solo ciertos elementos pueden coincidir: habilitado o: deshabilitado
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ("forma" en elem) {

			// Verifique la incapacidad heredada en elementos relevantes no deshabilitados:
			// * enumeró los elementos asociados al formulario en un fieldset deshabilitado
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * elementos de opción en un optgroup deshabilitado
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// Todos estos elementos tienen una propiedad "formulario".
			if (elem.parentNode && elem.disabled === false) {

				// Los elementos de la opción se remiten a un grupo optativo padre si está presente
				if ("label" en elem) {
					if ("label" en elem.parentNode) {
						devolver elem.parentNode.disabled === deshabilitado;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Soporte: IE 6 - 11
				// Use la propiedad de acceso directo isDisabled para verificar los antepasados ​​deshabilitados de conjuntos de campos
				devolver elem.isDisabled === deshabilitado ||

					// Donde no hay isDisabled, verifique manualmente
					/ * jshint -W018 * /
					elem.isDisabled! ==! disabled &&
						disabledAncestor (elem) === disabled;
			}

			return elem.disabled === disabled;

		// Intente descifrar elementos que no puedan ser deshabilitados antes de confiar en la propiedad deshabilitada.
		// Algunas víctimas quedan atrapadas en nuestra red (etiqueta, leyenda, menú, pista), pero no debería
		// Incluso existen en ellos, y mucho menos tener un valor booleano.
		} else if ("label" en elem) {
			return elem.disabled === disabled;
		}

		// Los elementos restantes no son: habilitados ni: deshabilitados
		falso retorno;
	};
}

/ **
 * Devuelve una función para usar en pseudos para posicionales.
 * @param {Función} fn
 * /
función createPositionalPseudo (fn) {
	devolver markFunction (function (argumento) {
		argumento = + argumento;
		return markFunction (función (semilla, coincidencias) {
			var j
				matchIndexes = fn ([], seed.length, argumento),
				i = matchIndexes.length;

			// Coincidir elementos encontrados en los índices especificados
			mientras yo-- ) {
				if (semilla [(j = matchIndexes [i])]) {
					semilla [j] =! (coincide con [j] = semilla [j]);
				}
			}
		});
	});
}

/ **
 * Comprueba la validez de un nodo como contexto Sizzle
 * @param {Elemento | Objeto =} contexto
 * @returns {Elemento | Objeto | Booleano} El nodo de entrada si es aceptable, de lo contrario es un valor falso
 * /
función testContext (contexto) {
	devolver contexto && typeof context.getElementsByTagName! == "undefined" && context;
}

// Exponer vars de soporte por conveniencia
support = Sizzle.support = {};

/ **
 * Detecta nodos XML
 * @param {Elemento | Objeto} elem Un elemento o un documento
 * @returns {Boolean} Verdadero si elem es un nodo XML no HTML
 * /
isXML = Sizzle.isXML = function (elem) {
	// documentElement se verifica para los casos donde aún no existe
	// (como cargar iframes en IE - # 4833)
	var documentElement = elem && (elem.ownerDocument || elem) .documentElement;
	volver documentElement? documentElement.nodeName! == "HTML": falso;
};

/ **
 * Establece variables relacionadas con el documento una vez basadas en el documento actual
 * @param {Elemento | Objeto} [doc] Un elemento u objeto de documento a usar para configurar el documento
 * @returns {Objeto} Devuelve el documento actual
 * /
setDocument = Sizzle.setDocument = function (node) {
	var hasCompare, subWindow,
		doc = nodo? node.ownerDocument || nodo: preferredDoc;

	// Regresa temprano si el documento no es válido o ya está seleccionado
	if (doc === document || doc.nodeType! == 9 ||! doc.documentElement) {
		documento de devolución
	}

	// Actualizar variables globales
	documento = doc;
	docElem = document.documentElement;
	documentIsHTML =! isXML (documento);

	// Soporte: IE 9-11, Edge
	// El acceso a los documentos iframe después de la descarga arroja errores de "permiso denegado" (jQuery # 13936)
	if (preferredDoc! == document &&
		(subWindow = document.defaultView) && subWindow.top! == subWindow) {

		// Soporte: IE 11, Edge
		if (subWindow.addEventListener) {
			subWindow.addEventListener ("unload", unloadHandler, false);

		// Soporte: IE 9 - 10 solamente
		} else if (subWindow.attachEvent) {
			subWindow.attachEvent ("onunload", unloadHandler);
		}
	}

	/ * Atributos
	-------------------------------------------------- -------------------- * /

	// Soporte: IE <8
	// Verifique que getAttribute realmente devuelva atributos y no propiedades
	// (exceptuando los booleanos de IE8)
	support.attributes = assert (function (el) {
		el.className = "i";
		return! el.getAttribute ("className");
	});

	/ * getElement (s) By *
	-------------------------------------------------- -------------------- * /

	// Comprueba si getElementsByTagName ("*") devuelve solo elementos
	support.getElementsByTagName = assert (function (el) {
		el.appendChild (document.createComment (""));
		return! el.getElementsByTagName ("*"). length;
	});

	// Soporte: IE <9
	support.getElementsByClassName = rnative.test (document.getElementsByClassName);

	// Soporte: IE <10
	// Comprueba si getElementById devuelve elementos por nombre
	// Los métodos getElementById rotos no recogen nombres establecidos por programación,
	// así que usa una prueba de rotulación getElementsByName
	support.getById = assert (function (el) {
		docElem.appendChild (el) .id = expando;
		volver! document.getElementsByName || ! document.getElementsByName (expando) .length;
	});

	// filtro de ID y encontrar
	if (support.getById) {
		Expr.filter ["ID"] = función (id) {
			var attrId = id.replace (runescape, funescape);
			función de retorno (elem) {
				devolver elem.getAttribute ("id") === attrId;
			};
		};
		Expr.find ["ID"] = función (id, contexto) {
			if (typeof context.getElementById! == "undefined" && documentIsHTML) {
				var elem = context.getElementById (id);
				volver elem? [elem]: [];
			}
		};
	} else {
		Expr.filter ["ID"] = función (id) {
			var attrId = id.replace (runescape, funescape);
			función de retorno (elem) {
				var node = typeof elem.getAttributeNode! == "undefined" &&
					elem.getAttributeNode ("id");
				return node && node.value === attrId;
			};
		};

		// Soporte: IE 6 - 7 solamente
		// getElementById no es confiable como acceso directo de búsqueda
		Expr.find ["ID"] = función (id, contexto) {
			if (typeof context.getElementById! == "undefined" && documentIsHTML) {
				nodo var, i, elems,
					elem = context.getElementById (id);

				if (elem) {

					// Verificar el atributo id
					node = elem.getAttributeNode ("id");
					if (node ​​&& node.value === id) {
						return [elem];
					}

					// Retrocede en getElementsByName
					elems = context.getElementsByName (id);
					i = 0;
					while ((elem = elems [i ++])) {
						node = elem.getAttributeNode ("id");
						if (node ​​&& node.value === id) {
							return [elem];
						}
					}
				}

				regreso [];
			}
		};
	}

	// etiqueta
	Expr.find ["TAG"] = support.getElementsByTagName?
		función (etiqueta, contexto) {
			if (typeof context.getElementsByTagName! == "undefined") {
				devolver context.getElementsByTagName (etiqueta);

			// Los nodos DocumentFragment no tienen gEBTN
			} else if (support.qsa) {
				devolver context.querySelectorAll (etiqueta);
			}
		}:

		función (etiqueta, contexto) {
			var elem
				tmp = [],
				i = 0,
				// Por feliz coincidencia, también aparece un gEBTN (roto) en los nodos DocumentFragment
				results = context.getElementsByTagName (etiqueta);

			// Filtrar posibles comentarios
			si (etiqueta === "*") {
				while ((elem = resultados [i ++])) {
					if (elem.nodeType === 1) {
						tmp.push (elem);
					}
				}

				devuelve tmp;
			}
			resultados de retorno
		};

	// Clase
	Expr.find ["CLASS"] = support.getElementsByClassName && function (className, context) {
		if (typeof context.getElementsByClassName! == "undefined" && documentIsHTML) {
			devolver context.getElementsByClassName (className);
		}
	};

	/ * QSA / matchesSelector
	-------------------------------------------------- -------------------- * /

	// Soporte de QSA y matchSelector

	// matchesSelector (: active) informa de falso cuando es verdadero (IE9 / Opera 11.5)
	rbuggyMatches = [];

	// qSa (: focus) informa de falso cuando es verdadero (Chrome 21)
	// Permitimos esto debido a un error en IE8 / 9 que produce un error
	// cada vez que se accede a `document.activeElement` en un iframe
	// Entonces, permitimos: enfocar pasar a través de QSA todo el tiempo para evitar el error de IE
	// Ver https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ((support.qsa = rnative.test (document.querySelectorAll))) {
		// Construir expresiones regulares QSA
		// Regex estrategia adoptada de Diego Perini
		afirmar (función (el) {
			// Seleccionar se establece en cadena vacía a propósito
			// Esto es para probar el tratamiento de IE no explícitamente
			// estableciendo un atributo de contenido booleano,
			// ya que su presencia debería ser suficiente
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild (el) .innerHTML = "<a id='" + expando + "'> </a>" +
				"<select id = '" + expando + "- \ r \\' msallowcapture = ''>" +
				"<option selected = ''> </option> </select>";

			// Soporte: IE8, Opera 11-12.16
			// No se debe seleccionar nada cuando las cadenas vacías siguen ^ = o $ = o * =
			// El atributo de prueba debe ser desconocido en Opera pero "seguro" para WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if (el.querySelectorAll ("[msallowcapture ^ = '']"). length) {
				rbuggyQSA.push ("[* ^ $] =" + espacio en blanco + "* (?: '' | \" \ ")");
			}

			// Soporte: IE8
			// Los atributos booleanos y el "valor" no se tratan correctamente
			if (! el.querySelectorAll ("[selected]"). length) {
				rbuggyQSA.push ("\\ [" + whitespace + "* (?: value |" + booleans + ")");
			}

			// Soporte: Chrome <29, Android <4.4, Safari <7.0+, iOS <7.0+, PhantomJS <1.9.8+
			if (! el.querySelectorAll ("[id ~ =" + expando + "-]") .length) {
				rbuggyQSA.push ("~ =");
			}

			// Webkit / Opera -: seleccionado debería devolver los elementos de opción seleccionados
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 arroja un error aquí y no verá las pruebas posteriores
			if (! el.querySelectorAll (": checked"). length) {
				rbuggyQSA.push (": check");
			}

			// Soporte: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// Error en el selector de combinador de hermanos en la página `selector # id.
			if (! el.querySelectorAll ("a #" + expando + "+ *") .length) {
				rbuggyQSA.push (". #. + [+ ~]");
			}
		});

		afirmar (función (el) {
			el.innerHTML = "<a href='' disabled='disabled'> </a>" +
				"<select disabled = 'disabled'> <option /> </select>";

			// Soporte: Windows 8 Native Apps
			// Los atributos de tipo y nombre están restringidos durante la asignación de .innerHTML
			var input = document.createElement ("input");
			input.setAttribute ("type", "hidden");
			el.appendChild (input) .setAttribute ("name", "D");

			// Soporte: IE8
			// Exigir mayúsculas y minúsculas del atributo de nombre
			if (el.querySelectorAll ("[name = d]"). length) {
				rbuggyQSA.push ("nombre" + espacio en blanco + "* [* ^ $ |! ~]? =");
			}

			// FF 3.5 -: habilitado /: deshabilitado y elementos ocultos (los elementos ocultos todavía están habilitados)
			// IE8 arroja un error aquí y no verá las pruebas posteriores
			if (el.querySelectorAll (": enabled"). length! == 2) {
				rbuggyQSA.push (": enabled", ": disabled");
			}

			// Soporte: IE9-11 +
			// IE: selector deshabilitado no recoge los hijos de los conjuntos de campos deshabilitados
			docElem.appendChild (el) .disabled = true;
			if (el.querySelectorAll (": disabled"). length! == 2) {
				rbuggyQSA.push (": enabled", ": disabled");
			}

			// Opera 10-11 no lanza pseudos inválidos postcoma
			el.querySelectorAll ("* ,: x");
			rbuggyQSA.push (",. *:");
		});
	}

	if ((support.matchesSelector = rnative.test ((coincide = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector)))) {

		afirmar (función (el) {
			// Compruebe si es posible hacer coincidenciasSelector
			// en un nodo desconectado (IE 9)
			support.disconnectedMatch = matches.call (el, "*");

			// Esto debería fallar con una excepción
			// Gecko no da error, devuelve falso en su lugar
			matches.call (el, "[s! = '']: x");
			rbuggyMatches.push ("! =", pseudos);
		});
	}

	rbuggyQSA = rbuggyQSA.length && nuevo RegExp (rbuggyQSA.join ("|"));
	rbuggyMatches = rbuggyMatches.length && new RegExp (rbuggyMatches.join ("|"));

	/ * Contiene
	-------------------------------------------------- -------------------- * /
	hasCompare = rnative.test (docElem.compareDocumentPosition);

	// Elemento contiene otro
	// A propósito auto-exclusivo
	// Al igual que en, un elemento no se contiene a sí mismo
	contiene = hasCompare || rnative.test (docElem.contains)?
		función (a, b) {
			var adown = a.nodeType === 9? a.documentElement: a,
				bup = b && b.parentNode;
			devuelve un === bup || !! (bup && bup.nodeType === 1 && (
				adown.contains?
					adown.contains (bup):
					a.compareDocumentPosition && a.compareDocumentPosition (bup) y 16
			));
		}:
		función (a, b) {
			si (b) {
				while ((b = b.parentNode)) {
					si (b === a) {
						devuelve verdadero
					}
				}
			}
			falso retorno;
		};

	/ * Clasificación
	-------------------------------------------------- -------------------- * /

	// Ordenación de documentos
	sortOrder = hasCompare?
	función (a, b) {

		// Marcar para la eliminación de duplicados
		si (a === b) {
			hasDuplicate = true;
			devuelve 0;
		}

		// Ordenar por existencia de método si solo una entrada tiene compareDocumentPosition
		var compare =! a.compareDocumentPosition -! b.compareDocumentPosition;
		si (comparar) {
			retorno comparar
		}

		// Calcular posición si ambas entradas pertenecen al mismo documento
		compare = (a.ownerDocument || a) === (b.ownerDocument || b)?
			a.compareDocumentPosition (b):

			// De lo contrario sabemos que están desconectados.
			1;

		// Nodos desconectados
		si (comparar y 1 ||
			(! support.sortDetached && b.compareDocumentPosition (a) === compare)) {

			// Elija el primer elemento que está relacionado con nuestro documento preferido
			if (a === document || a.ownerDocument === preferredDoc && contiene (preferredDoc, a)) {
				devuelve -1;
			}
			if (b === document || b.ownerDocument === preferredDoc && contiene (preferredDoc, b)) {
				devuelve 1;
			}

			// Mantener el orden original
			devuelve sortInput?
				(indexOf (sortInput, a) - indexOf (sortInput, b)):
				0;
		}

		volver comparar y 4? -1: 1;
	}:
	función (a, b) {
		// Salir temprano si los nodos son idénticos
		si (a === b) {
			hasDuplicate = true;
			devuelve 0;
		}

		var cur
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [a],
			bp = [b];

		// Los nodos sin padres son documentos o están desconectados
		si (! aup ||! bup) {
			devolver un documento ===? -1:
				b === documento? 1:
				aup? -1:
				bup? 1:
				sortInput?
				(indexOf (sortInput, a) - indexOf (sortInput, b)):
				0;

		// Si los nodos son hermanos, podemos hacer una revisión rápida
		} else if (aup === bup) {
			return siblingCheck (a, b);
		}

		// De lo contrario necesitamos listas completas de sus ancestros para la comparación.
		cur = a;
		while ((cur = cur.parentNode)) {
			ap.unshift (cur);
		}
		cur = b;
		while ((cur = cur.parentNode)) {
			bp.unshift (cur);
		}

		// Camina por el árbol buscando una discrepancia.
		while (ap [i] === bp [i]) {
			i ++;
		}

		volver i?
			// Verifica si los nodos tienen un ancestro común
			siblingCheck (ap [i], bp [i]):

			// De lo contrario los nodos en nuestro documento ordenan primero
			ap [i] === preferredDoc? -1:
			bp [i] === preferredDoc? 1:
			0;
	};

	documento de devolución
};

Sizzle.matches = function (expr, elements) {
	return Sizzle (expr, null, null, elements);
};

Sizzle.matchesSelector = function (elem, expr) {
	// Establecer vars de documento si es necesario
	if ((elem.ownerDocument || elem)! == document) {
		setDocument (elem);
	}

	// Asegúrate de que los selectores de atributos estén citados
	expr = expr.replace (rattributeQuotes, "= '$ 1']");

	if (support.matchesSelector && documentIsHTML &&
		! compilerCache [expr + ""] &&
		(! rbuggyMatches ||! rbuggyMatches.test (expr)) &&
		(! rbuggyQSA ||! rbuggyQSA.test (expr))) {

		tratar {
			var ret = matches.call (elem, expr);

			// El selector de coincidencias de IE 9 devuelve falso en nodos desconectados
			if (ret || support.disconnectedMatch ||
					// Además, se dice que los nodos desconectados están en un documento
					// fragmento en IE 9
					elem.document && elem.document.nodeType! == 11) {
				volver ret
			}
		} atrapar (e) {}
	}

	devuelve Sizzle (expr, document, null, [elem]) .length> 0;
};

Sizzle.contains = function (context, elem) {
	// Establecer vars de documento si es necesario
	if ((context.ownerDocument || context)! == document) {
		setDocument (contexto);
	}
	return contiene (contexto, elemento);
};

Sizzle.attr = function (elem, name) {
	// Establecer vars de documento si es necesario
	if ((elem.ownerDocument || elem)! == document) {
		setDocument (elem);
	}

	var fn = Expr.attrHandle [name.toLowerCase ()],
		// No te dejes engañar por las propiedades de Object.prototype (jQuery # 13807)
		val = fn && hasOwn.call (Expr.attrHandle, name.toLowerCase ())?
			fn (elem, nombre,! documentIsHTML):
			indefinido

	devuelve val! == undefined?
		val
		support.attributes || ! documentIsHTML?
			elem.getAttribute (nombre):
			(val = elem.getAttributeNode (nombre)) && val.specified?
				val.valor:
				nulo;
};

Sizzle.escape = function (sel) {
	return (sel + "") .replace (rcssescape, fcssescape);
};

Sizzle.error = function (msg) {
	lanzar un nuevo error ("Error de sintaxis, expresión no reconocida:" + msg);
};

/ **
 * Clasificación de documentos y eliminación de duplicados.
 * @param {ArrayLike} resultados
 * /
Sizzle.uniqueSort = function (resultados) {
	var elem
		duplicados = [],
		j = 0,
		i = 0;

	// A menos que * sepamos * podemos detectar duplicados, asumir su presencia
	hasDuplicate =! support.detectDuplicates;
	sortInput =! support.sortStable && results.slice (0);
	results.sort (sortOrder);

	if (hasDuplicate) {
		while ((elem = resultados [i ++])) {
			if (elem === resultados [i]) {
				j = duplicados.push (i);
			}
		}
		mientras que (j--) {
			results.splice (duplicados [j], 1);
		}
	}

	// Borrar entrada después de ordenar para liberar objetos
	// Ver https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	resultados de retorno
};

/ **
 * Función de utilidad para recuperar el valor de texto de una matriz de nodos DOM
 * @param {Array | Element} elem
 * /
getText = Sizzle.getText = function (elem) {
	nodo var,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	si (! nodeType) {
		// Si no hay nodeType, se espera que esto sea una matriz
		while ((node ​​= elem [i ++])) {
			// No atravesar los nodos de comentario
			ret + = getText (nodo);
		}
	} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
		// Usar textContent para elementos
		// Se eliminó el uso del texto interior para mantener la coherencia de las nuevas líneas (jQuery # 11153)
		if (typeof elem.textContent === "string") {
			devolver elem.textContent;
		} else {
			// Atraviesa a sus hijos
			para (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				ret + = getText (elem);
			}
		}
	} else if (nodeType === 3 || nodeType === 4) {
		devuelve elem.nodeValue;
	}
	// No incluir los nodos de instrucción de procesamiento o comentario

	volver ret
};

Expr = Sizzle.selectors = {

	// Puede ser ajustado por el usuario
	cacheLength: 50,

	createPseudo: markFunction,

	partido: matchExpr,

	attrHandle: {},

	encontrar: {},

	relativo: {
		">": {dir: "parentNode", first: true},
		"": {dir: "parentNode"},
		"+": {dir: "previousSibling", first: true},
		"~": {dir: "previousSibling"}
	}

	prefiltro: {
		"ATTR": función (coincidencia) {
			match [1] = match [1] .replace (runescape, funescape);

			// Mueve el valor dado para que coincida con [3] ya sea entre comillas o no.
			match [3] = (match [3] || match [4] || match [5] || "") .replace (runescape, funescape);

			if (match [2] === "~ =") {
				match [3] = "" + match [3] + "";
			}

			devuelve match.slice (0, 4);
		}

		"NIÑO": función (emparejar) {
			/ * resultados de matchExpr ["CHILD"]
				1 tipo (solo | nth | ...)
				2 qué (niño | de tipo)
				3 argumento (par | impar | \ d * | \ d * n ([+ -] \ d +)? | ...)
				4 componente xn del argumento xn + y ([+ -]? \ D * n |)
				5 signo de componente xn
				6 x de componente xn
				7 signo de componente y
				8 y de componente y
			* /
			match [1] = match [1] .toLowerCase ();

			if (coincide con [1] .slice (0, 3) === "nth") {
				// nth- * requiere argumento
				si (! match [3]) {
					Sizzle.error (match [0]);
				}

				// Parámetros x e y numéricos para Expr.filter.CHILD
				// recuerda que falso / verdadero emitido respectivamente a 0/1
				match [4] = + (match [4]? match [5] + (match [6] || 1): 2 * (match [3] === "even" || match [3] === " impar" ) );
				match [5] = + ((match [7] + match [8]) || match [3] === "odd");

			// otros tipos prohíben argumentos
			} else if (match [3]) {
				Sizzle.error (match [0]);
			}

			partido de vuelta
		}

		"PSEUDO": función (emparejar) {
			exceso de var
				unquoted =! match [6] && match [2];

			if (matchExpr ["CHILD"]. test (match [0])) {
				retorno nulo
			}

			// Aceptar los argumentos citados como están
			si (coinciden [3]) {
				match [2] = match [4] || partido [5] || "";

			// Eliminar el exceso de caracteres de los argumentos sin comillas
			} else if (no citado && rpseudo.test (no citado) &&
				// Obtener el exceso de tokenize (recursivamente)
				(exceso = tokenize (sin comillas, verdadero)) &&
				// avanzar al siguiente paréntesis de cierre
				(exceso = unquoted.indexOf (")", unquoted.length - exceso) - unquoted.length)) {

				// el exceso es un índice negativo
				match [0] = match [0] .slice (0, exceso);
				match [2] = unquoted.slice (0, exceso);
			}

			// Devuelve solo las capturas que necesita el método de pseudo filtro (tipo y argumento)
			devuelve match.slice (0, 3);
		}
	}

	filtro: {

		"TAG": función (nodeNameSelector) {
			var nodeName = nodeNameSelector.replace (runescape, funescape) .toLowerCase ();
			devuelve nodeNameSelector === "*"?
				function () {return true; }:
				función (elem) {
					devolver elem.nodeName && elem.nodeName.toLowerCase () === nodeName;
				};
		}

		"CLASS": función (className) {
			var pattern = classCache [className + ""];

			patrón de retorno ||
				(patrón = nuevo RegExp ("(^ |" + espacio en blanco + ")" + nombre de clase + "(" + espacio en blanco + "| $)")) &&
				classCache (className, function (elem) {
					return pattern.test (typeof elem.className === "string" && elem.className || typeof elem.getAttribute! == "undefined" && elem.getAttribute ("class") || "");
				});
		}

		"ATTR": función (nombre, operador, cheque) {
			función de retorno (elem) {
				var resultado = Sizzle.attr (elem, nombre);

				si (resultado == nulo) {
					operador de retorno === "! =";
				}
				if (! operador) {
					devuelve verdadero
				}

				resultado + = "";

				operador de retorno === "="? resultado === cheque:
					operador === "! ="? resultado! == cheque:
					operador === "^ ="? check && result.indexOf (check) === 0:
					operador === "* ="? check && result.indexOf (check)> -1:
					operador === "$ ="? check && result.slice (-check.length) === check:
					operador === "~ ="? ("" + result.replace (rwhitespace, "") + "") .indexOf (check)> -1:
					operador === "| ="? resultado === cheque || result.slice (0, check.length + 1) === check + "-":
					falso;
			};
		}

		"NIÑO": función (tipo, qué, argumento, primero, último) {
			var simple = type.slice (0, 3)! == "nth",
				adelante = tipo.slice (-4)! == "último",
				ofType = what === "of-type";

			devuelve primero === 1 && último === 0?

				// Atajo para: nth - * (n)
				función (elem) {
					volver !! elem.parentNode;
				}:

				función (elemento, contexto, xml) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple! == adelante? "nextSibling": "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase (),
						useCache =! xml &&! ofType,
						diff = falso;

					si (padre) {

						//: (primero | último | solo) - (hijo | de tipo)
						if (simple) {
							while (dir) {
								nodo = elem;
								while ((node ​​= node [dir])) {
									si (de tipo?
										node.nodeName.toLowerCase () === nombre:
										node.nodeType === 1) {

										falso retorno;
									}
								}
								// Dirección inversa para: only- * (si aún no lo hemos hecho)
								start = dir = type === "only" &&! start && "nextSibling";
							}
							devuelve verdadero
						}

						inicio = [adelante? parent.firstChild: parent.lastChild];

						// non-xml: nth-child (...) almacena datos de caché en `parent`
						if (forward && useCache) {

							// Busca `elem` de un índice previamente almacenado en caché

							// ... de una manera amigable con el gzip
							nodo = padre;
							outerCache = nodo [expando] || (nodo [expando] = {});

							// Soporte: IE <9 solamente
							// Defender contra attroperties clonadas (jQuery gh-1709)
							uniqueCache = outerCache [node.uniqueID] ||
								(outerCache [node.uniqueID] = {});

							cache = uniqueCache [tipo] || [];
							nodeIndex = cache [0] === dirruns && cache [1];
							diff = nodeIndex && cache [2];
							node = nodeIndex && parent.childNodes [nodeIndex];

							while ((node ​​= ++ nodeIndex && node && node [dir] ||

								// Fallback para buscar `elem` desde el principio.
								(diff = nodeIndex = 0) || start.pop ())) {

								// Cuando se encuentra, almacena en caché los índices en `parent` y rompe
								if (node.nodeType === 1 && ++ diff && node === elem) {
									uniqueCache [tipo] = [dirruns, nodeIndex, diff];
									descanso;
								}
							}

						} else {
							// Usar el índice de elementos previamente en caché si está disponible
							if (useCache) {
								// ... de una manera amigable con el gzip
								nodo = elem;
								outerCache = nodo [expando] || (nodo [expando] = {});

								// Soporte: IE <9 solamente
								// Defender contra attroperties clonadas (jQuery gh-1709)
								uniqueCache = outerCache [node.uniqueID] ||
									(outerCache [node.uniqueID] = {});

								cache = uniqueCache [tipo] || [];
								nodeIndex = cache [0] === dirruns && cache [1];
								diff = nodeIndex;
							}

							// xml: nth-child (...)
							// o: nth-last-child (...) o: nth (-last)? - of-type (...)
							si (dif === falso) {
								// Usa el mismo bucle anterior para buscar `elem` desde el principio
								while ((node ​​= ++ nodeIndex && node && node [dir] ||
									(diff = nodeIndex = 0) || start.pop ())) {

									if ((ofType?
										node.nodeName.toLowerCase () === nombre:
										node.nodeType === 1) &&
										++ diff) {

										// Cachear el índice de cada elemento encontrado
										if (useCache) {
											outerCache = nodo [expando] || (nodo [expando] = {});

											// Soporte: IE <9 solamente
											// Defender contra attroperties clonadas (jQuery gh-1709)
											uniqueCache = outerCache [node.uniqueID] ||
												(outerCache [node.uniqueID] = {});

											uniqueCache [type] = [dirruns, diff];
										}

										if (node ​​=== elem) {
											descanso;
										}
									}
								}
							}
						}

						// Incorporar el offset, luego comparar con el tamaño del ciclo
						diff - = último;
						volver dif === primero || (diff% first === 0 && diff / first> = 0);
					}
				};
		}

		"PSEUDO": función (pseudo, argumento) {
			// los nombres de pseudoclases no distinguen entre mayúsculas y minúsculas
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Priorice la sensibilidad por caso en caso de que se agreguen pseudos personalizados con letras mayúsculas
			// Recuerda que setFilters hereda de pseudos
			var args
				fn = Expr.pseudos [pseudo] || Expr.setFilters [pseudo.toLowerCase ()] ||
					Sizzle.error ("pseudo no admitido:" + pseudo);

			// El usuario puede usar createPseudo para indicar que
			// se necesitan argumentos para crear la función de filtro
			// tal como lo hace Sizzle
			if (fn [expando]) {
				devuelve fn (argumento);
			}

			// Pero mantén el soporte para firmas antiguas
			if (fn.length> 1) {
				args = [pseudo, pseudo, "", argumento];
				devuelve Expr.setFilters.hasOwnProperty (pseudo.toLowerCase ())?
					markFunction (función (semilla, coincidencias) {
						var idx,
							emparejado = fn (semilla, argumento),
							i = matched.length;
						mientras yo-- ) {
							idx = indexOf (semilla, coincidente [i]);
							seed [idx] =! (coincide con [idx] = matched [i]);
						}
					}):
					función (elem) {
						devuelve fn (elem, 0, args);
					};
			}

			retorno fn;
		}
	}

	pseudos: {
		// Pseudos potencialmente complejos
		"no": markFunction (función (selector) {
			// Recortar el selector pasado para compilar
			// para evitar el tratamiento de liderar y arrastrar
			// espacios como combinadores
			entrada var = [],
				resultados = [],
				matcher = compile (selector.replace (rtrim, "$ 1"));

			volver matcher [expando]?
				markFunction (función (semilla, coincidencias, contexto, xml) {
					var elem
						unmatched = matcher (seed, null, xml, []),
						i = longitud de semilla;

					// Unir elementos no emparejados por `matcher`
					mientras yo-- ) {
						if ((elem = sin emparejar [i])) {
							semilla [i] =! (coincide con [i] = elem);
						}
					}
				}):
				función (elemento, contexto, xml) {
					entrada [0] = elem;
					matcher (entrada, nulo, xml, resultados);
					// No conserves el elemento (problema # 299)
					entrada [0] = nulo;
					return! results.pop ();
				};
		}),

		"has": markFunction (function (selector) {
			función de retorno (elem) {
				devuelve Sizzle (selector, elem) .length> 0;
			};
		}),

		"contiene": markFunction (función (texto) {
			text = text.replace (runescape, funescape);
			función de retorno (elem) {
				return (elem.textContent || elem.innerText || getText (elem)) .indexOf (text)> -1;
			};
		}),

		// "Si un elemento está representado por un selector: lang ()
		// se basa únicamente en el valor de idioma del elemento
		// siendo igual al identificador C,
		// o comenzando con el identificador C inmediatamente seguido de "-".
		// La comparación de C con el valor de idioma del elemento se realiza sin distinción de mayúsculas y minúsculas.
		// El identificador C no tiene que ser un nombre de idioma válido ".
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction (function (lang) {
			// el valor lang debe ser un identificador válido
			if (! ridentifier.test (lang || "")) {
				Sizzle.error ("lang no compatible:" + lang);
			}
			lang = lang.replace (runescape, funescape) .toLowerCase ();
			función de retorno (elem) {
				var elemLang;
				hacer {
					if ((elemLang = documentIsHTML?
						elem.lang:
						elem.getAttribute ("xml: lang") || elem.getAttribute ("lang"))) {

						elemLang = elemLang.toLowerCase ();
						devuelve elemLang === lang || elemLang.indexOf (lang + "-") === 0;
					}
				} while ((elem = elem.parentNode) && elem.nodeType === 1);
				falso retorno;
			};
		}),

		// Misceláneo
		"target": function (elem) {
			var hash = window.location && window.location.hash;
			volver hash && hash.slice (1) === elem.id;
		}

		"root": function (elem) {
			devuelve elem === docElem;
		}

		"focus": function (elem) {
			devuelva elem === document.activeElement && (! document.hasFocus || document.hasFocus ()) && !! (elem.type || elem.href || ~ elem.tabIndex);
		}

		// propiedades booleanas
		"habilitado": createDisabledPseudo (false),
		"deshabilitado": createDisabledPseudo (true),

		"revisado": función (elem) {
			// En CSS3,: checked debería devolver tanto los elementos seleccionados como los seleccionados
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase ();
			return (nodeName === "input" && !! elem.checked) || (nodeName === "option" && !! elem.selected);
		}

		"seleccionado": función (elem) {
			// Accediendo a esta propiedad hace seleccionado por defecto
			// las opciones en Safari funcionan correctamente
			if (elem.parentNode) {
				elem.parentNode.selectedIndex;
			}

			devuelve elem.selected === true;
		}

		// Contenidos
		"vacío": función (elem) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			//: vacío es negado por el elemento (1) o los nodos de contenido (texto: 3; cdata: 4; entidad ref: 5),
			// pero no por otros (comentario: 8; instrucción de procesamiento: 7; etc.)
			// nodeType <6 funciona porque los atributos (2) no aparecen como hijos
			para (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				if (elem.nodeType <6) {
					falso retorno;
				}
			}
			devuelve verdadero
		}

		"padre": función (elem) {
			volver! Expr.pseudos ["empty"] (elem);
		}

		// Tipos de elementos / entradas
		"header": function (elem) {
			return rheader.test (elem.nodeName);
		}

		"entrada": función (elem) {
			return rinputs.test (elem.nodeName);
		}

		"botón": función (elem) {
			nombre var = elem.nodeName.toLowerCase ();
			nombre de retorno === "entrada" && elem.type === "botón" || nombre === "botón";
		}

		"texto": función (elem) {
			var attr;
			devuelve elem.nodeName.toLowerCase () === "input" &&
				elem.type === "texto" &&

				// Soporte: IE <8
				// Los nuevos valores de atributos HTML5 (por ejemplo, "búsqueda") aparecen con elem.type === "texto"
				((attr = elem.getAttribute ("type")) == null || attr.toLowerCase () === "text");
		}

		// Posición en la colección
		"first": createPositionalPseudo (function () {
			retorno [0];
		}),

		"last": createPositionalPseudo (function (matchIndexes, length) {
			return [longitud - 1];
		}),

		"eq": createPositionalPseudo (function (matchIndexes, length, argumento) {
			devuelve [argumento <0? argumento + longitud: argumento];
		}),

		"even": createPositionalPseudo (function (matchIndexes, length) {
			var i = 0;
			para (; i <longitud; i + = 2) {
				matchIndexes.push (i);
			}
			devuelve matchIndexes;
		}),

		"impar": createPositionalPseudo (función (matchIndexes, length) {
			var i = 1;
			para (; i <longitud; i + = 2) {
				matchIndexes.push (i);
			}
			devuelve matchIndexes;
		}),

		"lt": createPositionalPseudo (función (matchIndexes, length, argumento) {
			var i = argumento <0? argumento + longitud: argumento;
			para (; --i> = 0;) {
				matchIndexes.push (i);
			}
			devuelve matchIndexes;
		}),

		"gt": createPositionalPseudo (función (matchIndexes, length, argumento) {
			var i = argumento <0? argumento + longitud: argumento;
			para (; ++ i <longitud;) {
				matchIndexes.push (i);
			}
			devuelve matchIndexes;
		})
	}
};

Expr.pseudos ["nth"] = Expr.pseudos ["eq"];

// Añadir botón / tipo de entrada pseudos
para (i in {radio: true, casilla de verificación: true, file: true, password: true, image: true}) {
	Expr.pseudos [i] = createInputPseudo (i);
}
para (i en {submit: true, reset: true}) {
	Expr.pseudos [i] = createButtonPseudo (i);
}

// API fácil para crear nuevos setFilters
función setFilters () {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters ();

tokenize = Sizzle.tokenize = function (selector, parseOnly) {
	var emparejado, partido, fichas, tipo,
		soFar, grupos, prefiltros,
		cached = tokenCache [selector + ""];

	if (en caché) {
		volver parseOnly? 0: caché.slice (0);
	}

	soFar = selector;
	grupos = [];
	preFilters = Expr.preFilter;

	while (tanFar) {

		// coma y primera corrida
		if (! matched || (match = rcomma.exec (soFar))) {
			si (emparejar) {
				// No consumas comas finales como válidas
				soFar = soFar.slice (match [0] .length) || hasta aquí;
			}
			groups.push ((tokens = []));
		}

		emparejado = falso;

		// combinadores
		if ((match = rcombinators.exec (soFar))) {
			emparejado = match.shift ();
			tokens.push ({
				valor: emparejado,
				// Emitir combinadores descendientes al espacio.
				tipo: match [0] .replace (rtrim, "")
			});
			soFar = soFar.slice (matched.length);
		}

		// Filtros
		para (escriba Expr.filter) {
			if ((match = matchExpr [type] .exec (soFar)) && (! preFilters [type] ||
				(match = prefiltros [tipo] (match)))) {
				emparejado = match.shift ();
				tokens.push ({
					valor: emparejado,
					tipo: tipo
					partidos: partido
				});
				soFar = soFar.slice (matched.length);
			}
		}

		si (! coincidente) {
			descanso;
		}
	}

	// Devuelve la longitud del exceso inválido
	// si solo estamos analizando
	// De lo contrario, lanza un error o devuelve tokens.
	volver parseOnly?
		soFar.length:
		hasta aquí ?
			Sizzle.error (selector):
			// Cachear los tokens
			tokenCache (selector, grupos) .slice (0);
};

función toSelector (tokens) {
	var i = 0,
		len = tokens.length,
		selector = "";
	para (; i <len; i ++) {
		selector + = fichas [i] .value;
	}
	selector de retorno;
}

función addCombinator (matcher, combinator, base) {
	var dir = combinator.dir,
		skip = combinator.next,
		tecla = saltar || dir
		checkNonElements = base && key === "parentNode",
		doneName = done ++;

	volver combinator.first?
		// Verificar contra el antepasado más cercano / elemento precedente
		función (elemento, contexto, xml) {
			while ((elem = elem [dir])) {
				if (elem.nodeType === 1 || checkNonElements) {
					return matcher (elem, context, xml);
				}
			}
			falso retorno;
		}:

		// Comprobar contra todos los elementos antecesores / precedentes
		función (elemento, contexto, xml) {
			var oldCache, uniqueCache, outerCache,
				newCache = [dirruns, doneName];

			// No podemos establecer datos arbitrarios en nodos XML, por lo que no se benefician del almacenamiento en caché del combinador
			if (xml) {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						if (matcher (elem, context, xml)) {
							devuelve verdadero
						}
					}
				}
			} else {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						outerCache = elem [expando] || (elem [expando] = {});

						// Soporte: IE <9 solamente
						// Defender contra attroperties clonadas (jQuery gh-1709)
						uniqueCache = outerCache [elem.uniqueID] || (outerCache [elem.uniqueID] = {});

						if (skip && skip === elem.nodeName.toLowerCase ()) {
							elem = elem [dir] || elem
						} else if ((oldCache = uniqueCache [clave]) &&
							oldCache [0] === dirruns && oldCache [1] === doneName) {

							// Asignar a newCache para que los resultados se propaguen a elementos anteriores
							return (newCache [2] = oldCache [2]);
						} else {
							// Reutilizar newcache para que los resultados se propaguen a elementos anteriores
							uniqueCache [clave] = newCache;

							// Una coincidencia significa que hemos terminado; un fallo significa que tenemos que seguir comprobando
							if ((newCache [2] = matcher (elem, context, xml)) {
								devuelve verdadero
							}
						}
					}
				}
			}
			falso retorno;
		};
}

función elementMatcher (matchers) {
	volver matchers.length> 1?
		función (elemento, contexto, xml) {
			var i = matchers.length;
			mientras yo-- ) {
				if (! matchers [i] (elem, context, xml)) {
					falso retorno;
				}
			}
			devuelve verdadero
		}:
		emparejadores [0];
}

Función multipleContexts (selector, contextos, resultados) {
	var i = 0,
		len = contexts.length;
	para (; i <len; i ++) {
		Sizzle (selector, contextos [i], resultados);
	}
	resultados de retorno
}

función condensar (no coincidente, mapa, filtro, contexto, xml) {
	var elem
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map! = null;

	para (; i <len; i ++) {
		if ((elem = sin emparejar [i])) {
			if (! filter || filter (elem, context, xml)) {
				nuevoUnmatched.push (elem);
				if (mapeado) {
					map.push (i);
				}
			}
		}
	}

	devuelve newUnmatched;
}

función setMatcher (prefiltro, selector, comparador, postfiltro, postFinder, postSelector) {
	if (postFilter &&! postFilter [expando]) {
		postFilter = setMatcher (postFilter);
	}
	if (postFinder &&! postFinder [expando]) {
		postFinder = setMatcher (postFinder, postSelector);
	}
	return markFunction (función (semilla, resultados, contexto, xml) {
		temp temp, yo, elem,
			preMap = [],
			postMap = [],
			preexistente = resultados.longitud,

			// Obtener elementos iniciales de semilla o contexto
			elems = semilla || multipleContexts (selector || "*", context.nodeType? [context]: context, []),

			// Prefiltro para obtener la entrada del emparejador, preservando un mapa para la sincronización de resultados de semilla
			matcherIn = prefiltro && (selector ||! semilla)?
				Condensar (elementos, preMap, prefiltro, contexto, xml):
				elems,

			matcherOut = matcher?
				// Si tenemos un postFinder, una semilla filtrada o un filtro posterior no semilla o resultados preexistentes,
				postFinder || (¿Semilla? PreFilter: preexistente || postFilter)?

					// ... el procesamiento intermedio es necesario
					[]:

					// ... de lo contrario, usa los resultados directamente
					resultados:
				matcherIn;

		// Buscar coincidencias primarias
		if (matcher) {
			matcher (matcherIn, matcherOut, context, xml);
		}

		// Aplicar postFilter
		if (postFilter) {
			temp = condensar (matcherOut, postMap);
			postFilter (temp, [], context, xml);

			// Desmarca los elementos defectuosos moviéndolos de nuevo a matcherIn
			i = temp.length;
			mientras yo-- ) {
				if ((elem = temp [i])) {
					matcherOut [postMap [i]] =! (matcherIn [postMap [i]] = elem);
				}
			}
		}

		si (semilla) {
			if (postFinder || preFilter) {
				if (postFinder) {
					// Obtenga el final matcherOut condensando este intermedio en contextos postFinder
					temp = [];
					i = matcherOut.length;
					mientras yo-- ) {
						if ((elem = matcherOut [i])) {
							// Restaurar matcherIn ya que elem aún no es una coincidencia final
							temp.push ((matcherIn [i] = elem));
						}
					}
					postFinder (null, (matcherOut = []), temp, xml);
				}

				// Mover elementos coincidentes de semilla a resultados para mantenerlos sincronizados
				i = matcherOut.length;
				mientras yo-- ) {
					if ((elem = matcherOut [i]) &&
						(temp = postFinder? indexOf (seed, elem): preMap [i])> -1) {

						semilla [temp] =! (resultados [temp] = elem);
					}
				}
			}

		// Añadir elementos a los resultados, a través de postFinder si está definido
		} else {
			matcherOut = condensar (
				matcherOut === resultados?
					matcherOut.splice (preexistente, matcherOut.length):
					matcherOut
			);
			if (postFinder) {
				postFinder (nulo, resultados, matcherOut, xml);
			} else {
				push.apply (resultados, matcherOut);
			}
		}
	});
}

función matcherFromTokens (tokens) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative [tokens [0] .type],
		implicitRelative = leadingRelative || Relativo [""],
		i = LeadingRelative? 1: 0,

		// El comparador fundamental garantiza que los elementos sean accesibles desde el contexto (s) de nivel superior
		matchContext = addCombinator (function (elem) {
			devuelve elem === checkContext;
		}, implicitRelative, true),
		matchAnyContext = addCombinator (function (elem) {
			return indexOf (checkContext, elem)> -1;
		}, implicitRelative, true),
		matchers = [función (elemento, contexto, xml) {
			var ret = (! leadingRelative && (xml || context! == outermostContext)) || (
				(checkContext = context) .nodeType?
					matchContext (elem, context, xml):
					matchAnyContext (elem, context, xml));
			// Evita colgarte en el elemento (problema # 299)
			checkContext = null;
			volver ret
		}];

	para (; i <len; i ++) {
		if ((matcher = Expr.relative [tokens [i] .type])) {
			matchers = [addCombinator (elementMatcher (matchers), matcher)];
		} else {
			matcher = Expr.filter [tokens [i] .type] .apply (null, tokens [i] .matches);

			// Regreso especial al ver un emparejador posicional
			if (matcher [expando]) {
				// Encuentre el siguiente operador relativo (si lo hay) para un manejo adecuado
				j = ++ i;
				para (; j <len; j ++) {
					if (Expr.relative [tokens [j] .type]) {
						descanso;
					}
				}
				devuelve setMatcher (
					i> 1 && elementMatcher (matchers),
					i> 1 && toSelector (
						// Si el token anterior era un combinador descendente, inserte un elemento * * `implícito
						tokens.slice (0, i - 1) .concat ({value: tokens [i - 2] .type === ""? "*": ""})
					) .replace (rtrim, "$ 1"),
					emparejador
					i <j && matcherFromTokens (tokens.slice (i, j)),
					j <len && matcherFromTokens ((tokens = tokens.slice (j))),
					j <len && toSelector (tokens)
				);
			}
			matchers.push (matcher);
		}
	}

	devolver elementMatcher (matchers);
}

function matcherFromGroupMatchers (elementMatchers, setMatchers) {
	var bySet = setMatchers.length> 0,
		porElemento = elementMatchers.length> 0,
		superMatcher = function (semilla, contexto, xml, resultados, más externo) {
			var elem, j, emparejador,
				matchedCount = 0,
				i = "0",
				incomparable = semilla && [],
				setMatched = [],
				contextBackup = outermostContext,
				// Siempre debemos tener elementos semilla o contexto más externo
				elems = semilla || porElement && Expr.find ["TAG"] ("*", el más externo),
				// Usar dirruns enteros si este es el mejor emparejador
				dirrunsUnique = (dirruns + = contextBackup == null? 1: Math.random () || 0.1),
				len = elems.length;

			if (más externo) {
				outermostContext = context === document || contexto || más exterior;
			}

			// Añadir elementos pasando elementMatchers directamente a los resultados
			// Soporte: IE <9, Safari
			// Tolerar las propiedades de NodeList (IE: "length"; Safari: <número>) haciendo coincidir los elementos por ID
			para (; i! == len && (elem = elems [i])! = null; i ++) {
				if (byElement && elem) {
					j = 0;
					if (! context && elem.ownerDocument! == document) {
						setDocument (elem);
						xml =! documentIsHTML;
					}
					while ((matcher = elementMatchers [j ++])) {
						if (matcher (elem, context || document, xml)) {
							resultados.push (elem);
							descanso;
						}
					}
					if (más externo) {
						dirruns = dirrunsUnique;
					}
				}

				// Rastrear elementos no coincidentes para establecer filtros
				if (bySet) {
					// Habrán pasado por todos los posibles matchers.
					if ((elem =! matcher && elem)) {
						matchedCount--;
					}

					// Alargar la matriz para cada elemento, emparejado o no
					si (semilla) {
						unmatched.push (elem);
					}
				}
			}

			// `i` es ahora el recuento de elementos visitados anteriormente, y lo agrega a` matchedCount`
			// hace este último no negativo.
			matchedCount + = i;

			// Aplicar filtros establecidos a elementos no coincidentes
			// NOTA: Esto se puede omitir si no hay elementos no coincidentes (es decir, `matchedCount`
			// es igual a `i`), a menos que no hayamos visitado elementos _any_ en el bucle anterior porque tenemos
			// No hay coincidencias de elementos ni semillas.
			// Incrementar una cadena inicial "0" `i` permite que` i` permanezca como una cadena solo en eso
			// caso, que resultará en un "00" `matchedCount` que difiere de` i` pero también es
			// numéricamente cero.
			if (bySet && i! == matchedCount) {
				j = 0;
				while ((matcher = setMatchers [j ++])) {
					matcher (unmatched, setMatched, context, xml);
				}

				si (semilla) {
					// Reintegrar las coincidencias de elementos para eliminar la necesidad de clasificación
					if (matchedCount> 0) {
						mientras yo-- ) {
							if (! (sin emparejar [i] || setMatched [i])) {
								setMatched [i] = pop.call (resultados);
							}
						}
					}

					// Descartar valores de marcador de posición de índice para obtener solo coincidencias reales
					setMatched = condense (setMatched);
				}

				// Añadir coincidencias a los resultados
				push.apply (resultados, setMatched);

				// Las combinaciones de conjuntos sin semillas que se suceden exitosamente múltiples coincidencias exitosas estipulan la clasificación
				if (más externo &&! seed && setMatched.length> 0 &&
					(matchedCount + setMatchers.length)> 1) {

					Sizzle.uniqueSort (resultados);
				}
			}

			// Anular la manipulación de globales por emparejadores anidados
			if (más externo) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			regreso sin igual;
		};

	volver bySet?
		markFunction (superMatcher):
		superMatcher;
}

compile = Sizzle.compile = function (selector, match / * Internal Use Only * /) {
	var i
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache [selector + ""];

	si (! en caché) {
		// Generar una función de funciones recursivas que se pueden usar para verificar cada elemento
		si (! match) {
			match = tokenize (selector);
		}
		i = match.length;
		mientras yo-- ) {
			cached = matcherFromTokens (match [i]);
			if (en caché [expando]) {
				setMatchers.push (en caché);
			} else {
				elementMatchers.push (en caché);
			}
		}

		// caché la función compilada
		cached = compilerCache (selector, matcherFromGroupMatchers (elementMatchers, setMatchers));

		// Guardar selector y tokenización
		cached.selector = selector;
	}
	retorno en caché
};

/ **
 * Una función de selección de bajo nivel que funciona con la compilación de Sizzle
 * funciones de selector
 * @param {String | Función} selector Un selector o un precompilado
 * Función selectora construida con Sizzle.compile
 * @param {Elemento} contexto
 * @param {Array} [resultados]
 * @param {Array} [semilla] Un conjunto de elementos con los que hacer coincidir
 * /
select = Sizzle.select = function (selector, contexto, resultados, semilla) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match =! seed && tokenize ((selector = compiled.selector || selector));

	resultados = resultados || [];

	// Trate de minimizar las operaciones si solo hay un selector en la lista y no se aceptan semillas
	// (el último de los cuales nos garantiza el contexto)
	si (match.length === 1) {

		// Reducir el contexto si el selector compuesto principal es una ID
		tokens = match [0] = match [0] .slice (0);
		if (tokens.length> 2 && (token = tokens [0]). tipo === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative [tokens [1] .type]) {

			context = (Expr.find ["ID"] (token.matches [0] .replace (runescape, funescape), context) || []) [0];
			si (! contexto) {
				resultados de retorno

			// Los emparejadores precompilados seguirán verificando la ascendencia, así que subir un nivel
			} else if (compilado) {
				context = context.parentNode;
			}

			selector = selector.slice (tokens.shift (). value.length);
		}

		// Obtener un conjunto de semillas para la coincidencia de derecha a izquierda
		i = matchExpr ["needsContext"]. test (selector)? 0: tokens.length;
		mientras yo-- ) {
			ficha = fichas [i];

			// Abortar si golpeamos un combinador
			if (Expr.relative [(type = token.type)]) {
				descanso;
			}
			if ((find = Expr.find [tipo])) {
				// Buscar, expandir el contexto para los principales combinadores de hermanos.
				si ((semilla = encontrar)
					token.matches [0] .replace (runescape, funescape),
					rsibling.test (tokens [0] .type) && testContext (context.parentNode) || contexto
				))) {

					// Si la semilla está vacía o si no quedan fichas, podemos regresar temprano
					tokens.splice (i, 1);
					selector = seed.length && toSelector (tokens);
					if (! selector) {
						push.apply (resultados, semilla);
						resultados de retorno
					}

					descanso;
				}
			}
		}
	}

	// Compilar y ejecutar una función de filtrado si no se proporciona una
	// Proporcionar `match` para evitar la retokenización si modificamos el selector de arriba
	(compilado || compilar (selector, coincidencia)) (
		semilla,
		contexto,
		! documentIsHTML,
		resultados
		! contexto || rsibling.test (selector) && testContext (context.parentNode) || contexto
	);
	resultados de retorno
};

// Tareas de una sola vez

// Ordenar estabilidad
support.sortStable = expando.split (""). sort (sortOrder) .join ("") === expando;

// Soporte: Chrome 14-35 +
// Siempre asuma duplicados si no se pasan a la función de comparación
support.detectDuplicates = !! hasDuplicate;

// Inicializar contra el documento por defecto
setDocument ();

// Soporte: Webkit <537.32 - Safari 6.0.3 / Chrome 25 (corregido en Chrome 27)
// Los nodos separados se confunden y siguen * entre sí *
support.sortDetached = assert (function (el) {
	// Debe devolver 1, pero devuelve 4 (siguiente)
	return el.compareDocumentPosition (document.createElement ("fieldset")) & 1;
});

// Soporte: IE <8
// Impedir atributo / propiedad "interpolación"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if (! assert (function (el) {
	el.innerHTML = "<a href='#'> </a>";
	devuelve el.firstChild.getAttribute ("href") === "#";
})) {
	addHandle ("tipo | href | altura | ancho", función (elem, nombre, isXML) {
		si (! isXML) {
			devuelve elem.getAttribute (name, name.toLowerCase () === "type"? 1: 2);
		}
	});
}

// Soporte: IE <9
// Use defaultValue en lugar de getAttribute ("valor")
if (! support.attributes ||! assert (function (el) {
	el.innerHTML = "<input />";
	el.firstChild.setAttribute ("value", "");
	devolver el.firstChild.getAttribute ("value") === "";
})) {
	addHandle ("valor", función (elemento, nombre, isXML) {
		if (! isXML && elem.nodeName.toLowerCase () === "input") {
			return elem.defaultValue;
		}
	});
}

// Soporte: IE <9
// Usa getAttributeNode para obtener valores booleanos cuando se encuentra getAttribute
if (! assert (function (el) {
	return el.getAttribute ("disabled") == null;
})) {
	addHandle (booleanos, función (elem, nombre, isXML) {
		var val;
		si (! isXML) {
			devuelve elem [nombre] === verdadero? name.toLowerCase ():
					(val = elem.getAttributeNode (nombre)) && val.specified?
					val.valor:
				nulo;
		}
	});
}

volver chisporrotear;

})( ventana );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Obsoleto
jQuery.expr [":"] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function (elem, dir, hasta) {
	var coincidente = [],
		truncar = hasta! == indefinido;

	while ((elem = elem [dir]) && elem.nodeType! == 9) {
		if (elem.nodeType === 1) {
			if (truncate && jQuery (elem) .is (hasta)) {
				descanso;
			}
			emparejado.push (elem);
		}
	}
	retorno emparejado;
};


var hermanos = función (n, elem) {
	var coincidente = [];

	para (; n; n = n.nextSibling) {
		if (n.nodeType === 1 && n! == elem) {
			emparejado.push (n);
		}
	}

	retorno emparejado;
};


var rneedsContext = jQuery.expr.match.needsContext;



función nodeName (elem, name) {

  devolver elem.nodeName && elem.nodeName.toLowerCase () === name.toLowerCase ();

};
var rsingleTag = (/ ^ <([az] [^ \ / \ 0>: \ x20 \ t \ r \ f] *) [\ x20 \ t \ r \ n \ f] * \ /?> ( ?: <\ / \ 1> |) $ / i);



// Implementar la funcionalidad idéntica para el filtro y no
función winnow (elementos, calificador, no) {
	if (isFunction (calificador)) {
		return jQuery.grep (elementos, función (elem, i) {
			return !! qualifier.call (elem, i, elem)! == no;
		});
	}

	// elemento único
	if (qualifier.nodeType) {
		return jQuery.grep (elements, function (elem) {
			return (elem === calificador)! == no;
		});
	}

	// Arraylike de elementos (jQuery, argumentos, Array)
	if (typeof qualifier! == "string") {
		return jQuery.grep (elements, function (elem) {
			return (indexOf.call (qualifier, elem)> -1)! == no;
		});
	}

	// Filtrado directamente para selectores simples y complejos.
	devolver jQuery.filter (calificador, elementos, no);
}

jQuery.filter = function (expr, elems, no) {
	var elem = elems [0];

	si no ) {
		expr = ": not (" + expr + ")";
	}

	if (elems.length === 1 && elem.nodeType === 1) {
		devolver jQuery.find.matchesSelector (elem, expr)? [elem]: [];
	}

	devuelve jQuery.find.matches (expr, jQuery.grep (elems, function (elem) {
		devuelve elem.nodeType === 1;
	}));
};

jQuery.fn.extend ({
	encontrar: función (selector) {
		var i, ret,
			len = this.length,
			auto = esto;

		if (typeof selector! == "string") {
			devuelve this.pushStack (jQuery (selector) .filter (function () {
				para (i = 0; i <len; i ++) {
					if (jQuery.contains (self [i], this)) {
						devuelve verdadero
					}
				}
			}));
		}

		ret = this.pushStack ([]);

		para (i = 0; i <len; i ++) {
			jQuery.find (selector, self [i], ret);
		}

		volver len> 1? jQuery.uniqueSort (ret): ret;
	}
	filtro: función (selector) {
		devuelve this.pushStack (winnow (this, selector || [], false));
	}
	no: función (selector) {
		devuelve this.pushStack (winnow (this, selector || [], true));
	}
	es: función (selector) {
		volver !!
			esta,

			// Si este es un selector posicional / relativo, verifique la membresía en el conjunto devuelto
			// así que $ ("p: first"). is ("p: last") no devolverá true para un documento con dos "p".
			typeof selector === "string" && rneedsContext.test (selector)?
				jQuery (selector):
				selector || [],
			falso
		).longitud;
	}
});


// Inicializar un objeto jQuery


// Una referencia central a la raíz jQuery (documento)
var rootjQuery,

	// Una forma simple de verificar las cadenas HTML
	// Priorice #id sobre <tag> para evitar XSS a través de location.hash (# 9521)
	// Reconocimiento estricto de HTML (# 11290: debe comenzar con <)
	// Shortcut simple #id case for speed
	rquickExpr = / ^ (?: \ s * (<[\ w \ W] +>) [^>] * | # ([\ w -] +)) $ /,

	init = jQuery.fn.init = function (selector, context, root) {
		var match, elem;

		// MANEJO: $ (""), $ (nulo), $ (no definido), $ (falso)
		if (! selector) {
			devuelve esto
		}

		// Método init () acepta un rootjQuery alternativo
		// así que migrate puede soportar jQuery.sub (gh-2101)
		raíz = raíz || rootjQuery;

		// Manejar cadenas HTML
		if (typeof selector === "string") {
			si (selector [0] === "<" &&
				selector [selector.length - 1] === ">" &&
				selector.length> = 3) {

				// Suponga que las cadenas que comienzan y terminan con <> son HTML y omita la comprobación de expresiones regulares
				match = [null, selector, null];

			} else {
				match = rquickExpr.exec (selector);
			}

			// Coincidir con html o asegurarse de que no se especifique un contexto para #id
			if (match && (match [1] ||! context)) {

				// HANDLE: $ (html) -> $ (array)
				si (coinciden [1]) {
					context = context instanceof jQuery? contexto [0]: contexto;

					// La opción para ejecutar scripts es verdadera para back-compat
					// Intencionalmente deje que se genere el error si parseHTML no está presente
					jQuery.merge (este, jQuery.parseHTML (
						partido [1],
						context && context.nodeType? context.ownerDocument || contexto: documento,
						cierto
					));

					// HANDLE: $ (html, props)
					if (rsingleTag.test (match [1]) && jQuery.isPlainObject (context)) {
						para (emparejar en contexto) {

							// Las propiedades del contexto se llaman como métodos si es posible
							if (isFunction (this [match])) {
								este [match] (contexto [match]);

							// ... y de otro modo establecer como atributos
							} else {
								this.attr (match, context [match]);
							}
						}
					}

					devuelve esto

				// HANDLE: $ (# id)
				} else {
					elem = document.getElementById (match [2]);

					if (elem) {

						// Inyectar el elemento directamente en el objeto jQuery
						este [0] = elem;
						this.length = 1;
					}
					devuelve esto
				}

			// MANGO: $ (expr, $ (...))
			} else if (! context || context.jquery) {
				return (context || root) .find (selector);

			// MANEJO: $ (expr, contexto)
			// (que es equivalente a: $ (context) .find (expr)
			} else {
				devuelve this.constructor (context) .find (selector);
			}

		// HANDLE: $ (DOMElement)
		} else if (selector.nodeType) {
			este [0] = selector;
			this.length = 1;
			devuelve esto

		// MANEJO: $ (función)
		// Atajo para documento listo
		} else if (isFunction (selector)) {
			devuelve root.ready! == undefined?
				root.ready (selector):

				// Ejecutar inmediatamente si está listo no está presente
				selector (jQuery);
		}

		return jQuery.makeArray (selector, this);
	};

// Dar a la función init el prototipo jQuery para una instanciación posterior
init.prototype = jQuery.fn;

// Inicializar referencia central
rootjQuery = jQuery (documento);


var rparentsprev = / ^ (?: parents | prev (?: Until | All)) /,

	// Métodos garantizados para producir un conjunto único al comenzar desde un conjunto único
	guaranteedUnique = {
		niños: verdad,
		contenido: verdadero,
		siguiente:
		anterior: verdadero
	};

jQuery.fn.extend ({
	tiene: función (objetivo) {
		objetivos var = jQuery (objetivo, esto),
			l = objetivos.longitud;

		devuelve this.filter (function () {
			var i = 0;
			para (; i <l; i ++) {
				if (jQuery.contains (this, target [i])) {
					devuelve verdadero
				}
			}
		});
	}

	más cercano: función (selectores, contexto) {
		var cur
			i = 0,
			l = this.length,
			emparejado = [],
			target = typeof selectors! == "string" && jQuery (selectores);

		// Los selectores de posición nunca coinciden, ya que no hay _selection_ context
		if (! rneedsContext.test (selectores)) {
			para (; i <l; i ++) {
				para (cur = this [i]; cur && cur! == context; cur = cur.parentNode) {

					// Siempre saltar fragmentos de documentos
					if (cur.nodeType <11 && (target?
						target.index (cur)> -1:

						// No pases no elementos a Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector (cur, selectores))) {

						emparejado.push (cur);
						descanso;
					}
				}
			}
		}

		devuelve this.pushStack (matched.length> 1? jQuery.uniqueSort (matched): matched);
	}

	// Determinar la posición de un elemento dentro del conjunto
	índice: función (elem) {

		// Sin argumento, índice de retorno en padre
		if (! elem) {
			volver (este [0] && este [0] .parentNode)? this.first (). prevAll (). length: -1;
		}

		// Índice en selector
		if (typeof elem === "string") {
			devuelve indexOf.call (jQuery (elem), this [0]);
		}

		// Localiza la posición del elemento deseado
		devolver indexOf.call (esto,

			// Si recibe un objeto jQuery, se usa el primer elemento
			elem.jquery? elem [0]: elem
		);
	}

	agregar: función (selector, contexto) {
		devuelve this.pushStack (
			jQuery.uniqueSort (
				jQuery.merge (this.get (), jQuery (selector, contexto))
			)
		);
	}

	addBack: función (selector) {
		devuelve this.add (selector == null?
			this.prevObject: this.prevObject.filter (selector)
		);
	}
});

funcion hermano (cur, dir) {
	while ((cur = cur [dir]) && cur.nodeType! == 1) {}
	volver cur
}

jQuery.each ({
	padre: función (elem) {
		var parent = elem.parentNode;
		return parent && parent.nodeType! == 11? padre: nulo;
	}
	padres: función (elem) {
		return dir (elem, "parentNode");
	}
	parentsUntil: function (elem, i, hasta) {
		return dir (elem, "parentNode", hasta);
	}
	siguiente: function (elem) {
		hermano de vuelta (elem, "nextSibling");
	}
	prev: function (elem) {
		volver hermano (elem, "previousSibling");
	}
	nextAll: function (elem) {
		return dir (elem, "nextSibling");
	}
	prevAll: function (elem) {
		return dir (elem, "previousSibling");
	}
	nextUntil: function (elem, i, hasta) {
		return dir (elem, "nextSibling", hasta);
	}
	prevUntil: función (elem, i, hasta) {
		return dir (elem, "previousSibling", hasta);
	}
	hermanos: función (elem) {
		devolver hermanos ((elem.parentNode || {}) .firstChild, elem);
	}
	niños: función (elem) {
		volver hermanos (elem.firstChild);
	}
	contenidos: función (elem) {
        if (nodeName (elem, "iframe")) {
            return elem.contentDocument;
        }

        // Soporte: Solo IE 9 - 11, solo iOS 7, navegador de Android <= 4.3 solamente
        // Trate el elemento de la plantilla como un elemento normal en los navegadores que
        // No lo apoyes.
        if (nodeName (elem, "template")) {
            elem = elem.content || elem
        }

        devolver jQuery.merge ([], elem.childNodes);
	}
}, función (nombre, fn) {
	jQuery.fn [nombre] = función (hasta, selector) {
		var matched = jQuery.map (esto, fn, hasta);

		if (name.slice (-5)! == "Hasta") {
			selector = hasta que;
		}

		if (selector && typeof selector === "string") {
			emparejado = jQuery.filter (selector, emparejado);
		}

		if (this.length> 1) {

			// Eliminar duplicados
			si (! guaranteedUnique [nombre]) {
				jQuery.uniqueSort (emparejado);
			}

			// Orden inverso para padres * y prev-derivados
			if (rparentsprev.test (nombre)) {
				matched.reverse ();
			}
		}

		devuelve this.pushStack (coincidente);
	};
});
var rnothtmlwhite = (/ [^ \ x20 \ t \ r \ n \ f] + / g);



// Convertir las opciones con formato de cadena en opciones con formato de objeto
función createOptions (opciones) {
	objeto var = {};
	jQuery.each (options.match (rnothtmlwhite) || [], function (_, flag) {
		objeto [bandera] = verdadero;
	});
	devolver objeto;
}

/ *
 * Crea una lista de devolución de llamada usando los siguientes parámetros:
 *
 * opciones: una lista opcional de opciones separadas por espacios que cambiarán cómo
 * la lista de devolución de llamada se comporta o un objeto de opción más tradicional
 *
 * Por defecto, una lista de devolución de llamada actuará como una lista de devolución de llamada de evento y puede ser
 * "disparó" varias veces.
 *
 * Posibles opciones:
 *
 * una vez: se asegurará de que la lista de devolución de llamada solo se pueda activar una vez (como un Aplazado)
 *
 * memoria: mantendrá un registro de los valores anteriores y llamará a cualquier devolución de llamada agregada
 * después de que la lista se haya disparado de inmediato con el último "memorizado"
 * valores (como un diferido)
 *
 * único: asegurará que la devolución de llamada solo se pueda agregar una vez (no hay duplicado en la lista)
 *
 * stopOnFalse: interrumpe llamadas cuando una devolución de llamada devuelve falso
 *
 * /
jQuery.Callbacks = function (opciones) {

	// Convertir las opciones de formato de cadena a formato de objeto si es necesario
	// (Verificamos caché primero)
	options = typeof options === "string"?
		createOptions (opciones):
		jQuery.extend ({}, opciones);

	var // Marcar para saber si la lista se está disparando actualmente
		disparo,

		// Último valor de disparo para listas no olvidables
		memoria,

		// Marcar para saber si la lista ya fue disparada
		despedido,

		// Bandera para evitar disparos.
		bloqueado

		// Lista de devolución de llamada actual
		lista = [],

		// Cola de datos de ejecución para listas repetibles.
		queue = [],

		// Índice de devolución de llamada que se está disparando actualmente (modificado por agregar / eliminar según sea necesario)
		índice de firing = -1,

		// Devolución de llamadas
		fuego = función () {

			// Hacer cumplir un solo disparo
			bloqueado = bloqueado || options.once;

			// Ejecutar devoluciones de llamada para todas las ejecuciones pendientes,
			// respetando las anulaciones de firingIndex y los cambios de tiempo de ejecución
			disparado = disparo = verdadero;
			para (; queue.length; firingIndex = -1) {
				memory = queue.shift ();
				while (++ firingIndex <list.length) {

					// Ejecutar devolución de llamada y comprobar la terminación anticipada
					if (list [firingIndex] .apply (memory [0], memory [1]) === false &&
						options.stopOnFalse) {

						// Salta hasta el final y olvida los datos para que .add no se vuelva a disparar.
						firingIndex = list.length;
						memoria = falso;
					}
				}
			}

			// Olvida los datos si hemos terminado con ellos.
			si (! options.memory) {
				memoria = falso;
			}

			disparo = falso;

			// Limpiar si hemos terminado de disparar para siempre.
			si (bloqueado) {

				// Mantener una lista vacía si tenemos datos para futuras llamadas de adición.
				if (memoria) {
					lista = [];

				// De lo contrario, este objeto se gasta.
				} else {
					list = "";
				}
			}
		}

		// Objeto real de devoluciones de llamada
		auto = {

			// Agregar una devolución de llamada o una colección de devoluciones de llamada a la lista
			añadir: function () {
				si (lista) {

					// Si tenemos memoria de una ejecución pasada, deberíamos disparar después de agregar
					si (memoria &&! disparando) {
						firingIndex = list.length - 1;
						queue.push (memoria);
					}

					(función add (args) {
						jQuery.each (args, function (_, arg) {
							if (isFunction (arg)) {
								if (! options.unique ||! self.has (arg)) {
									list.push (arg);
								}
							} else if ((arg && arg.length && toType (arg)! == "string") {

								// inspeccionar recursivamente
								add (arg);
							}
						});
					}) (argumentos);

					si (memoria &&! disparando) {
						fuego();
					}
				}
				devuelve esto
			}

			// Eliminar una devolución de llamada de la lista
			eliminar: función () {
				jQuery.each (argumentos, función (_, arg) {
					índice var
					while ((index = jQuery.inArray (arg, list, index))> -1) {
						list.splice (índice, 1);

						// Manejar índices de disparo.
						if (index <= firingIndex) {
							firingIndex--;
						}
					}
				});
				devuelve esto
			}

			// Compruebe si una devolución de llamada dada está en la lista.
			// Si no se proporciona ningún argumento, devuelva si la lista tiene devoluciones de llamada adjuntas.
			tiene: función (fn) {
				volver fn?
					jQuery.inArray (fn, lista)> -1:
					list.length> 0;
			}

			// Eliminar todas las devoluciones de llamada de la lista
			vacío: función () {
				si (lista) {
					lista = [];
				}
				devuelve esto
			}

			// Desactivar .fire y .add
			// Abortar cualquier ejecución actual / pendiente
			// Borrar todos los callbacks y valores
			deshabilitar: función () {
				bloqueado = cola = [];
				list = memory = "";
				devuelve esto
			}
			deshabilitado: función () {
				volver! lista;
			}

			// Desactivar .fire
			// También deshabilite .add a menos que tengamos memoria (ya que no tendría efecto)
			// Abortar cualquier ejecución pendiente
			lock: function () {
				bloqueado = cola = [];
				if (! memory &&! firing) {
					list = memory = "";
				}
				devuelve esto
			}
			bloqueado: function () {
				regreso !! bloqueado;
			}

			// Llamar a todas las devoluciones de llamada con el contexto y los argumentos dados
			fireWith: function (context, args) {
				si (! bloqueado) {
					args = args || [];
					args = [contexto, args.slice? args.slice (): args];
					queue.push (args);
					si (! disparando) {
						fuego();
					}
				}
				devuelve esto
			}

			// Llamar a todos los callbacks con los argumentos dados.
			fuego: función () {
				self.fireWith (esto, argumentos);
				devuelve esto
			}

			// Para saber si las devoluciones de llamada ya han sido llamadas al menos una vez.
			disparado: function () {
				¡¡Vuelve !!
			}
		};

	volver a sí mismo
};


Identidad de la función (v) {
	retorno v;
}
función lanzador (ex) {
	tirar ex
}

función adoptValue (valor, resolución, rechazo, noValue) {
	método var;

	tratar {

		// Verifique el aspecto de promesa primero para privilegiar el comportamiento síncrono
		if (value && isFunction ((method = value.promise))) {
			method.call (valor) .done (resolver) .fail (rechaza);

		// Otros objetos
		} else if (value && isFunction ((method = value.then))) {
			method.call (valor, resolver, rechazar);

		// Otros no-thenables
		} else {

			// Controle los argumentos `resolver` permitiendo que Array # slice lance el valor booleano` noValue` a entero:
			// * falso: [valor] .slice (0) => resolver (valor)
			// * true: [valor] .slice (1) => resolver ()
			resolver.apply (undefined, [valor] .slice (noValue));
		}

	// Para Promesas / A +, convertir excepciones en rechazos
	// Dado que jQuery.when no desempaqueta los problemas, podemos omitir los cheques adicionales que aparecen en
	// Aplazado # entonces para suprimir condicionalmente el rechazo.
	} captura (valor) {

		// Soporte: solo Android 4.0
		// Funciones de modo estricto invocadas sin .call / .apply obtener contexto de objeto global
		reject.apply (indefinido, [valor]);
	}
}

jQuery.extend ({

	Aplazado: función (func) {
		var tuples = [

				// acción, añadir listener, callbacks,
				// ... luego manejadores, índice de argumentos, [estado final]
				["Notify", "progress", jQuery.Callbacks ("memory"),
					jQuery.Callbacks ("memory"), 2],
				["resolver", "hecho", jQuery.Callbacks ("once memory"),
					jQuery.Callbacks ("once memory"), 0, "resolvió"],
				["rechazar", "fallar", jQuery.Callbacks ("once memory"),
					jQuery.Callbacks ("once memory"), 1, "rechazado"]
			]
			estado = "pendiente",
			promesa = {
				función estatal() {
					estado de retorno
				}
				siempre: función () {
					deferred.done (argumentos) .fail (argumentos);
					devuelve esto
				}
				"catch": function (fn) {
					promesa de devolución. luego (nulo, fn);
				}

				// Mantener el tubo para la espalda
				pipe: function (/ * fnDone, fnFail, fnProgress * /) {
					var fns = argumentos;

					return jQuery.Deferred (function (newDefer) {
						jQuery.each (tuplas, función (i, tupla) {

							// Mapear tuplas (progress, done, fail) a argumentos (done, fail, progress)
							var fn = isFunction (fns [tupla [4]]) && fns [tupla [4]];

							// deferred.progress (function () {enlazar a newDefer o newDefer.notify})
							// deferred.done (function () {enlazar a newDefer o newDefer.resolve})
							// deferred.fail (function () {enlazar a newDefer o newDefer.reject})
							aplazado [tupla [1]] (función () {
								var devolvió = fn && fn.apply (esto, argumentos);
								if (devuelto && isFunction (return.promise)) {
									devuelto.prometir ()
										.progress (newDefer.notify)
										.done (newDefer.resolve)
										.fail (newDefer.reject);
								} else {
									newDefer [tuple [0] + "With"] (
										esta,
										fn? [devuelto]: argumentos
									);
								}
							});
						});
						fns = nulo;
					}) .promise ();
				}
				entonces: function (onFulfilled, onRejected, onProgress) {
					var maxDepth = 0;
					Función de resolución (profundidad, diferido, manejador, especial) {
						función de retorno () {
							var que = esto,
								args = argumentos,
								mightThrow = function () {
									var volvió, entonces;

									// Soporte: Promesas / A + sección 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignorar intentos de doble resolución
									if (profundidad <maxDepth) {
										regreso;
									}

									devuelto = handler.apply (that, args);

									// Soporte: Promesas / A + sección 2.3.1
									// https://promisesaplus.com/#point-48
									if (devuelto === diferido.promiso ()) {
										lanzar nuevo TypeError ("auto resolución de Thenable");
									}

									// Soporte: Promesas / A + secciones 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Recuperar `then` solo una vez
									entonces = devuelto &&

										// Soporte: Promesas / A + sección 2.3.4
										// https://promisesaplus.com/#point-64
										// Solo revisar objetos y funciones para ver si son
										(typeof devuelto === "objeto" ||
											typeof devuelto === "función") &&
										devuelto.

									// Manejar un objeto devuelto
									if (isFunction (then)) {

										// Procesadores especiales (notificar) solo esperan resolución
										si (especial) {
											luego llame(
												devuelto
												resolver (maxDepth, diferido, Identidad, especial),
												resolver (maxDepth, diferido, Thrower, especial)
											);

										// Procesadores normales (resolver) también enganchan en progreso
										} else {

											// ... e ignorar los valores de resolución anteriores
											maxDepth ++;

											luego llame(
												devuelto
												resolver (maxDepth, diferido, Identidad, especial),
												resolver (maxDepth, diferido, Thrower, especial),
												resolver (maxDepth, diferido, Identidad,
													Deferred.notifyWith)
											);
										}

									// Manejar todos los demás valores devueltos
									} else {

										// Sólo los controladores sustitutos pasan el contexto
										// y valores múltiples (comportamiento no especif.)
										if (handler! == Identity) {
											que = indefinido;
											args = [devuelto];
										}

										// Procesar los valores
										// El proceso predeterminado es resolver
										(special || deferred.resolveWith) (that, args);
									}
								}

								// Solo los procesadores normales (resolver) capturan y rechazan las excepciones
								proceso = especial?
									podría
									función () {
										tratar {
											mightThrow ();
										} atrapar (e) {

											if (jQuery.Deferred.exceptionHook) {
												jQuery.Deferred.exceptionHook (e,
													process.stackTrace);
											}

											// Soporte: Promesas / A + sección 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignorar las excepciones posteriores a la resolución
											si (profundidad + 1> = maxDepth) {

												// Sólo los controladores sustitutos pasan el contexto
												// y valores múltiples (comportamiento no especif.)
												if (handler! == Thrower) {
													que = indefinido;
													args = [e];
												}

												deferred.rejectWith (that, args);
											}
										}
									};

							// Soporte: Promesas / A + sección 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Resolver las promesas de inmediato para evitar el rechazo falso de
							// errores posteriores
							si (profundidad) {
								proceso();
							} else {

								// Llame a un gancho opcional para grabar la pila, en caso de excepción
								// ya que de otra manera se pierde cuando la ejecución se vuelve asíncrona
								if (jQuery.Deferred.getStackHook) {
									process.stackTrace = jQuery.Deferred.getStackHook ();
								}
								window.setTimeout (proceso);
							}
						};
					}

					return jQuery.Deferred (function (newDefer) {

						// progress_handlers.add (...)
						tuplas [0] [3] .add (
							resolver(
								0,
								nuevoDefer,
								isFunction (onProgress)?
									en progreso :
									Identidad,
								newDefer.notifyWith
							)
						);

						// completed_handlers.add (...)
						tuplas [1] [3] .add (
							resolver(
								0,
								nuevoDefer,
								isFunction (onFulfilled)?
									onFulfilled:
									Identidad
							)
						);

						// rejected_handlers.add (...)
						tuplas [2] [3] .add (
							resolver(
								0,
								nuevoDefer,
								isFunction (onRejected)?
									onReyectado:
									Lanzador
							)
						);
					}) .promise ();
				}

				// Obtener una promesa para este aplazado
				// Si se proporciona obj, el aspecto de promesa se agrega al objeto
				promesa: función (obj) {
					devuelve obj! = null? jQuery.extend (obj, promesa): promesa;
				}
			}
			diferido = {};

		// Añadir métodos específicos de lista
		jQuery.each (tuplas, función (i, tupla) {
			var list = tuple [2],
				stateString = tupla [5];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promesa [tuple [1]] = list.add;

			// Manejar estado
			if (stateString) {
				list.add (
					función () {

						// estado = "resuelto" (es decir, cumplido)
						// estado = "rechazado"
						state = stateString;
					}

					// reject_callbacks.disable
					// completed_callbacks.disable
					tuplas [3 - i] [2] .disable,

					// rejected_handlers.disable
					// completed_handlers.disable
					tuplas [3 - i] [3] .disable,

					// progress_callbacks.lock
					tuplas [0] [2] .lock,

					// progress_handlers.lock
					tuplas [0] [3] .lock
				);
			}

			// progress_handlers.fire
			// completed_handlers.fire
			// rejected_handlers.fire
			list.add (tuple [3] .fire);

			// deferred.notify = function () {deferred.notifyWith (...)}
			// deferred.resolve = function () {deferred.resolveWith (...)}
			// deferred.reject = function () {deferred.rejectWith (...)}
			aplazado [tupla [0]] = función () {
				aplazado [tupla [0] + "Con"] (esto === aplazado? indefinido: esto, argumentos);
				devuelve esto
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			aplazado [tupla [0] + "Con"] = list.fireWith;
		});

		// Haz de la promesa diferida
		promesa.promiso (diferido);

		// Llamada dada func si la hay
		if (func) {
			func.call (diferido, diferido);
		}

		// ¡Todo listo!
		retorno diferido
	}

	// ayudante diferido
	cuando: function (singleValue) {
		var

			// recuento de subordinados incompletos
			restante = argumentos.longitud,

			// recuento de argumentos sin procesar
			i = restante,

			// datos de cumplimiento subordinados
			resolverContexts = Array (i),
			resolverValues ​​= slice.call (argumentos),

			// el maestro diferido
			master = jQuery.Deferred (),

			// fábrica de devolución de llamada subordinada
			updateFunc = function (i) {
				función de retorno (valor) {
					resolverContexts [i] = esto;
					resolverValues ​​[i] = argumentos.longitud> 1? slice.call (argumentos): valor;
					si (! (--nombre)) {
						master.resolveWith (resolverContexts, resolverValues);
					}
				};
			};

		// Los argumentos simples y vacíos se adoptan como Promise.resolve
		si (restante <= 1) {
			adoptValue (singleValue, master.done (updateFunc (i)) .resolve, master.reject,
				!restante );

			// Use .then () para desenvolver los objetos secundarios (cf. gh-3000)
			if (master.state () === "pendiente" ||
				isFunction (resolverValues ​​[i] && resolverValues ​​[i] .then)) {

				volver maestro.then ();
			}
		}

		// Múltiples argumentos se agregan como elementos de la matriz Promise.all
		mientras yo-- ) {
			adoptValue (resolverValues ​​[i], updateFunc (i), master.reject);
		}

		volver master.promise ();
	}
});


// Estos usualmente indican un error de programador durante el desarrollo,
// advierte sobre ellos lo antes posible en lugar de tragarlos por defecto.
var rerrorNames = / ^ (Eval | Internal | Range | Reference | Syntax | Type | URI) Error $ /;

jQuery.Deferred.exceptionHook = function (error, stack) {

	// Soporte: IE 8 - 9 solamente
	// La consola existe cuando las herramientas dev están abiertas, lo que puede suceder en cualquier momento
	if (window.console && window.console.warn && error && rerrorNames.test (error.name)) {
		window.console.warn ("jQuery.Deferred excepción:" + error.message, error.stack, stack);
	}
};




jQuery.readyException = function (error) {
	window.setTimeout (function () {
		error de lanzamiento
	});
};




// El diferido utilizado en DOM listo
var readyList = jQuery.Deferred ();

jQuery.fn.ready = function (fn) {

	lista lista
		.then (fn)

		// Ajustar jQuery.readyException en una función para que la búsqueda
		// sucede en el momento de manejo de errores en lugar de devolución de llamada
		// registro.
		.catch (función (error) {
			jQuery.readyException (error);
		});

	devuelve esto
};

jQuery.extend ({

	// ¿Está listo el DOM para ser utilizado? Establézcalo en verdadero una vez que ocurra.
	isReady: falso,

	// Un contador para rastrear cuántos artículos esperar antes
	// el evento listo dispara. Ver # 6781
	readyWait: 1,

	// Manejar cuando el DOM esté listo
	listo: función (espera) {

		// Cancelar si hay suspensiones pendientes o ya estamos listos
		if (wait === true? --jQuery.readyWait: jQuery.isReady) {
			regreso;
		}

		// Recuerda que el DOM está listo
		jQuery.isReady = true;

		// Si un evento normal de DOM Ready se activa, disminuye y espera si es necesario
		if (wait! == true && --jQuery.readyWait> 0) {
			regreso;
		}

		// Si hay funciones enlazadas, ejecutar
		readyList.resolveWith (documento, [jQuery]);
	}
});

jQuery.ready.then = readyList.then;

// El controlador de eventos listo y el método de autolimpieza
función completada () {
	document.removeEventListener ("DOMContentLoaded", completado);
	window.removeEventListener ("carga", completado);
	jQuery.ready ();
}

// Detectar casos donde se llama $ (document) .ready ()
// después de que el evento del navegador ya haya ocurrido.
// Soporte: IE <= 9 - 10 solamente
// El IE antiguo a veces señala "interactivo" demasiado pronto
if (document.readyState === "complete" ||
	(document.readyState! == "cargando" &&! document.documentElement.doScroll)) {

	// Manéjelo de forma asíncrona para permitir que los scripts tengan la oportunidad de demorar listo
	window.setTimeout (jQuery.ready);

} else {

	// Usa el útil callback de evento
	document.addEventListener ("DOMContentLoaded", completado);

	// Una alternativa a window.onload, que siempre funcionará
	window.addEventListener ("carga", completado);
}




// Método multifuncional para obtener y establecer los valores de una colección
// El valor / s puede ser ejecutado opcionalmente si es una función
var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
	var i = 0,
		len = elems.length,
		bulk = clave == nulo;

	// Establece muchos valores
	if (toType (clave) === "objeto") {
		chainable = true;
		para (i en clave) {
			acceso (elems, fn, i, key [i], true, emptyGet, raw);
		}

	// Establece un valor
	} else if (valor! == indefinido) {
		chainable = true;

		if (! isFunction (value)) {
			raw = true;
		}

		si (a granel) {

			// Las operaciones masivas se ejecutan contra todo el conjunto
			if (crudo) {
				fn.call (elems, valor);
				fn = nulo;

			// ... excepto al ejecutar valores de función
			} else {
				bulk = fn;
				fn = función (elemento, clave, valor) {
					return bulk.call (jQuery (elem), valor);
				};
			}
		}

		si (fn) {
			para (; i <len; i ++) {
				fn
					elems [i], clave, crudo?
					valor:
					value.call (elems [i], i, fn (elems [i], clave))
				);
			}
		}
	}

	si (chainable) {
		volver elems;
	}

	// Obtiene
	si (a granel) {
		devuelve fn.call (elems);
	}

	volver len? fn (elems [0], clave): emptyGet;
};


// Coincide con la cadena punteada para camelizar
var rmsPrefix = / ^ - ms- /,
	rdashAlpha = / - ([az]) / g;

// utilizado por camelCase como devolución de llamada para reemplazar ()
función fcamelCase (todos, letra) {
	return letter.toUpperCase ();
}

// Convertir guiones a camelCase; Utilizado por el css y los módulos de datos.
// Soporte: IE <= 9 - 11, Edge 12 - 15
// Microsoft olvidó juntar el prefijo de su proveedor (# 9572)
función camelCase (cadena) {
	return string.replace (rmsPrefix, "ms-") .replace (rdashAlpha, fcamelCase);
}
var acceptData = function (owner) {

	// Sólo acepta:
	// - Nodo
	// - Nodo.ELEMENT_NODE
	// - Nodo.DOCUMENT_NODE
	// - Objeto
	// - Alguna
	return owner.nodeType === 1 || owner.nodeType === 9 || ! (+ owner.nodeType);
};




función de datos () {
	this.expando = jQuery.expando + Data.uid ++;
}

Data.uid = 1;

Data.prototype = {

	caché: función (propietario) {

		// Compruebe si el objeto propietario ya tiene un caché
		var value = owner [this.expando];

		// Si no, crea uno
		si (! valor) {
			valor = {};

			// Podemos aceptar datos para nodos que no son elementos en navegadores modernos,
			// pero no deberíamos, ver # 8335.
			// Siempre devolver un objeto vacío.
			if (acceptData (propietario)) {

				// Si es un nodo poco probable que esté edificado o en bucle
				// usar asignación simple
				if (owner.nodeType) {
					propietario [this.expando] = valor;

				// De lo contrario, asegúralo en una propiedad no enumerable.
				// configurable debe ser verdadero para permitir que la propiedad sea
				// eliminado cuando se eliminan los datos
				} else {
					Object.defineProperty (propietario, este.expando, {
						valor: valor,
						configurable: verdadero
					});
				}
			}
		}

		valor de retorno;
	}
	set: función (propietario, datos, valor) {
		prop var
			cache = this.cache (propietario);

		// Manejar: [propietario, clave, valor] args
		// Siempre usa la tecla camelCase (gh-2257)
		if (typeof data === "string") {
			caché [camelCase (datos)] = valor;

		// Handle: [owner, {properties}] args
		} else {

			// Copia las propiedades una por una al objeto de caché
			para (prop en los datos) {
				caché [camelCase (prop)] = data [prop];
			}
		}
		caché de retorno
	}
	obtener: función (propietario, clave) {
		tecla de retorno === indefinido?
			this.cache (propietario):

			// Siempre usa la tecla camelCase (gh-2257)
			owner [this.expando] && owner [this.expando] [camelCase (key)];
	}
	acceso: función (propietario, clave, valor) {

		// En los casos en que:
		//
		// 1. No se especificó ninguna clave
		// 2. Se especificó una clave de cadena, pero no se proporcionó ningún valor
		//
		// Tome la ruta de "lectura" y permita que el método get determine
		// qué valor devolver, respectivamente:
		//
		// 1. El objeto de caché completo
		// 2. Los datos almacenados en la llave.
		//
		si (clave === indefinido ||
				((key && typeof key === "string") && value === undefined)) {

			devuelve this.get (propietario, clave);
		}

		// Cuando la clave no es una cadena, o tanto una clave como un valor
		// se especifican, establecen o amplían (objetos existentes) con:
		//
		// 1. Un objeto de propiedades.
		// 2. Una clave y un valor
		//
		this.set (propietario, clave, valor);

		// Dado que la ruta "set" puede tener dos puntos de entrada posibles
		// devuelve los datos esperados según la ruta que se tomó [*]
		valor de retorno! == indefinido? valor: clave;
	}
	eliminar: función (propietario, clave) {
		var i
			cache = owner [this.expando];

		if (cache === undefined) {
			regreso;
		}

		if (clave! == indefinido) {

			// Matriz de llaves o matriz de claves separadas por espacios
			if (Array.isArray (clave)) {

				// Si la clave es una matriz de claves ...
				// Siempre configuramos las claves de camelCase, así que elimínelas.
				key = key.map (camelCase);
			} else {
				key = camelCase (key);

				// Si existe una clave con los espacios, úsala.
				// De lo contrario, cree una matriz haciendo coincidir espacios que no sean espacios en blanco.
				clave = clave en caché?
					[ llave ] :
					(key.match (rnothtmlwhite) || []);
			}

			i = key.length;

			mientras yo-- ) {
				borrar caché [clave [i]];
			}
		}

		// Eliminar el expando si no hay más datos.
		if (clave === undefined || jQuery.isEmptyObject (caché)) {

			// Soporte: Chrome <= 35 - 45
			// El rendimiento de Webkit & Blink sufre al eliminar propiedades
			// desde los nodos DOM, así que configúralo como indefinido
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (error restringido)
			if (owner.nodeType) {
				propietario [this.expando] = indefinido;
			} else {
				borrar propietario [this.expando];
			}
		}
	}
	hasData: function (owner) {
		var cache = owner [this.expando];
		devolver caché! == undefined &&! jQuery.isEmptyObject (caché);
	}
};
var dataPriv = new Data ();

var dataUser = new Data ();



// Resumen de Implementación
//
// 1. Exigir la compatibilidad de la superficie y la semántica de la API con la rama 1.9.x
// 2. Mejorar la mantenibilidad del módulo reduciendo el almacenamiento
// Rutas hacia un solo mecanismo.
// 3. Utilice el mismo mecanismo único para admitir datos "privados" y de "usuario".
// 4. _Never_ expone datos "privados" al código de usuario (TODO: Drop _data, _removeData)
// 5. Evite exponer los detalles de la implementación en objetos de usuario (por ejemplo, expando propiedades)
// 6. Proporcionar una ruta clara para la actualización de la implementación a WeakMap en 2014

var rbrace = / ^ (?: \ {[\ w \ W] * \} | \ [[\ w \ W] * \]) $ /,
	rmultiDash = / [AZ] / g;

función getData (datos) {
	si (datos === "verdadero") {
		devuelve verdadero
	}

	si (datos === "falso") {
		falso retorno;
	}

	if (datos === "null") {
		retorno nulo
	}

	// Convertir solo a un número si no cambia la cadena
	si (datos === + datos + "") {
		retorno + datos;
	}

	if (rbrace.test (data)) {
		devolver JSON.parse (datos);
	}

	datos de retorno;
}

función dataAttr (elem, key, data) {
	nombre var

	// Si no se encontró nada internamente, intenta buscar cualquier
	// datos del atributo de datos HTML5 *
	if (datos === undefined && elem.nodeType === 1) {
		name = "data-" + key.replace (rmultiDash, "- $ &") .toLowerCase ();
		datos = elem.getAttribute (nombre);

		if (typeof data === "string") {
			tratar {
				datos = getData (datos);
			} atrapar (e) {}

			// Asegúrate de configurar los datos para que no se modifiquen más tarde.
			dataUser.set (elem, clave, datos);
		} else {
			datos = indefinido;
		}
	}
	datos de retorno;
}

jQuery.extend ({
	hasData: function (elem) {
		devuelve dataUser.hasData (elem) || dataPriv.hasData (elem);
	}

	datos: función (elem, nombre, datos) {
		devuelve dataUser.access (elem, nombre, datos);
	}

	removeData: function (elem, name) {
		dataUser.remove (elem, nombre);
	}

	// TODO: Ahora que todas las llamadas a _data y _removeData han sido reemplazadas
	// con llamadas directas a los métodos dataPriv, estos pueden ser desaprobados.
	_data: función (elem, nombre, datos) {
		devuelve dataPriv.access (elem, nombre, datos);
	}

	_removeData: function (elem, name) {
		dataPriv.remove (elem, nombre);
	}
});

jQuery.fn.extend ({
	datos: función (clave, valor) {
		var i, nombre, datos,
			elem = este [0],
			attrs = elem && elem.attributes;

		// Obtiene todos los valores
		if (clave === indefinido) {
			if (this.length) {
				data = dataUser.get (elem);

				if (elem.nodeType === 1 &&! dataPriv.get (elem, "hasDataAttrs")) {
					i = attrs.length;
					mientras yo-- ) {

						// Soporte: solo IE 11
						// Los elementos attrs pueden ser nulos (# 14894)
						if (attrs [i]) {
							name = attrs [i] .name;
							if (name.indexOf ("data-") === 0) {
								name = camelCase (name.slice (5));
								dataAttr (elem, nombre, datos [nombre]);
							}
						}
					}
					dataPriv.set (elem, "hasDataAttrs", true);
				}
			}

			datos de retorno;
		}

		// Establece valores múltiples
		if (typeof key === "object") {
			devuelve this.each (function () {
				dataUser.set (esta, clave);
			});
		}

		acceso de retorno (esta, función (valor) {
			datos var

			// El objeto jQuery llamante (elemento coincide) no está vacío
			// (y por lo tanto tiene un elemento aparece en este [0]) y el
			// El parámetro `value` no estaba indefinido. Un objeto jQuery vacío
			// resultará en `undefined` para elem = this [0] lo cual
			// lanza una excepción si se hace un intento de leer un caché de datos.
			if (elem && value === undefined) {

				// Intentar obtener datos de la caché
				// La clave siempre será camelCased in Data
				data = dataUser.get (elem, clave);
				si (datos! == indefinido) {
					datos de retorno;
				}

				// Intentar "descubrir" los datos en
				// HTML5 custom data- * attrs
				data = dataAttr (elem, key);
				si (datos! == indefinido) {
					datos de retorno;
				}

				// Lo intentamos muy duro, pero los datos no existen.
				regreso;
			}

			// Establecer los datos ...
			this.each (function () {

				// Siempre almacenamos la clave camelCased
				dataUser.set (esto, clave, valor);
			});
		}, nulo, valor, argumentos.longitud> 1, nulo, verdadero);
	}

	removeData: function (key) {
		devuelve this.each (function () {
			dataUser.remove (esta, clave);
		});
	}
});


jQuery.extend ({
	queue: function (elem, type, data) {
		cola de var

		if (elem) {
			type = (type || "fx") + "queue";
			queue = dataPriv.get (elem, type);

			// Acelera la salida de la cola saliendo rápidamente si esto es solo una búsqueda
			si (datos) {
				if (! queue || Array.isArray (data)) {
					queue = dataPriv.access (elem, type, jQuery.makeArray (data));
				} else {
					queue.push (datos);
				}
			}
			cola de retorno || [];
		}
	}

	dequeue: function (elem, type) {
		tipo = tipo || "fx";

		var queue = jQuery.queue (elem, type),
			startLength = queue.length,
			fn = queue.shift (),
			hooks = jQuery._queueHooks (elem, type),
			siguiente = función () {
				jQuery.dequeue (elem, tipo);
			};

		// Si la cola de fx está en cola, siempre elimine el centinela de progreso
		if (fn === "inprogress") {
			fn = queue.shift ();
			startLength--;
		}

		si (fn) {

			// Agregar un centinela de progreso para evitar que la cola de fx sea
			// automáticamente en cola
			if (tipo === "fx") {
				queue.unshift ("inprogress");
			}

			// Borrar la última función de parada de cola
			eliminar hooks.stop;
			fn.call (elem, siguiente, ganchos);
		}

		if (! startLength && hooks) {
			hooks.empty.fire ();
		}
	}

	// No público: generar un objeto queueHooks o devolver el actual
	_queueHooks: function (elem, type) {
		clave var = tipo + "queueHooks";
		devuelve dataPriv.get (elem, clave) || dataPriv.access (elem, clave, {
			vacío: jQuery.Callbacks ("once memory") .add (function () {
				dataPriv.remove (elem, [type + "queue", key]);
			})
		});
	}
});

jQuery.fn.extend ({
	cola: función (tipo, datos) {
		var setter = 2;

		if (tipo de tipo! == "cadena") {
			datos = tipo;
			type = "fx";
			setter--;
		}

		if (argumentos.longitud <definidor) {
			devolver jQuery.queue (este [0], tipo);
		}

		devuelve datos === indefinido?
			esta :
			this.each (function () {
				var queue = jQuery.queue (this, type, data);

				// Asegurar un enganche para esta cola
				jQuery._queueHooks (this, type);

				if (escriba === "fx" && queue [0]! == "inprogress") {
					jQuery.dequeue (this, type);
				}
			});
	}
	dequeue: function (type) {
		devuelve this.each (function () {
			jQuery.dequeue (this, type);
		});
	}
	clearQueue: function (type) {
		devuelva this.queue (escriba || "fx", []);
	}

	// Obtener una promesa resuelta cuando colas de un cierto tipo
	// se vacían (fx es el tipo por defecto)
	promesa: función (tipo, obj) {
		var tmp,
			cuenta = 1,
			defer = jQuery.Deferred (),
			elementos = esto,
			i = this.length,
			resolver = función () {
				si (! (--count)) {
					defer.resolveWith (elementos, [elementos]);
				}
			};

		if (tipo de tipo! == "cadena") {
			obj = tipo;
			tipo = indefinido;
		}
		tipo = tipo || "fx";

		mientras yo-- ) {
			tmp = dataPriv.get (elementos [i], tipo + "queueHooks");
			if (tmp && tmp.empty) {
				cuenta ++;
				tmp.empty.add (resolver);
			}
		}
		resolver();
		devolver aplazar.promiso (obj);
	}
});
var pnum = (/[+-◆?(?:\d*\.|)\d+(? :[eE◆◆++-◆?\d+|)/) .source;

var rcssNum = new RegExp ("^ (?: ([+ -]) = |) (" + pnum + ") ([az%] *) $", "i");


var cssExpand = ["Top", "Right", "Bottom", "Left"];

var isHiddenWithinTree = function (elem, el) {

		// isHiddenWithinTree puede llamarse desde jQuery # filter function;
		// en ese caso, el elemento será el segundo argumento
		elem = el || elem

		// El estilo en línea triunfa sobre todo
		devolver elem.style.display === "none" ||
			elem.style.display === "" &&

			// De lo contrario, compruebe el estilo computado.
			// Soporte: Firefox <= 43 - 45
			// Los elementos desconectados pueden tener visualización computada: ninguno, así que primero confirme que elem es
			// en el documento.
			jQuery.contains (elem.ownerDocument, elem) &&

			jQuery.css (elem, "display") === "none";
	};

var swap = function (elem, options, callback, args) {
	var ret, nombre,
		antiguo = {};

	// Recuerda los valores antiguos, e inserta los nuevos
	para (nombre en opciones) {
		old [nombre] = elem.style [nombre];
		elem.style [nombre] = opciones [nombre];
	}

	ret = callback.apply (elem, args || []);

	// Revertir los valores antiguos
	para (nombre en opciones) {
		elem.style [nombre] = antiguo [nombre];
	}

	volver ret
};




función adjustCSS (elem, prop, valueParts, tween) {
	var ajustada, escala,
		maxIteraciones = 20,
		currentValue = tween?
			función () {
				volver tween.cur ();
			}:
			función () {
				devolver jQuery.css (elem, prop, "");
			}
		initial = currentValue (),
		unit = valueParts && valueParts [3] || (jQuery.cssNumber [prop]? "": "px"),

		// Se requiere el cálculo del valor inicial para posibles desajustes de unidades
		initialInUnit = (jQuery.cssNumber [prop] || unit! == "px" && + initial) &&
			rcssNum.exec (jQuery.css (elem, prop));

	if (initialInUnit && initialInUnit [3]! == unidad) {

		// Soporte: Firefox <= 54
		// Reducir a la mitad el valor objetivo de iteración para evitar la interferencia de los límites superiores de CSS (gh-2144)
		inicial = inicial / 2;

		// Unidades fiduciarias reportadas por jQuery.css
		unidad = unidad || initialInUnit [3];

		// Iterativamente aproximado de un punto de partida distinto de cero
		initialInUnit = + initial || 1;

		while (maxIterations--) {

			// Evalúe y actualice nuestras mejores conjeturas (duplicando las conjeturas que se eliminan).
			// Finalice si la escala es igual o cruza 1 (lo que hace que el producto nuevo * no sea positivo).
			jQuery.style (elem, prop, initialInUnit + unit);
			if ((1 - scale) * (1 - (scale = currentValue () / initial || 0.5)) <= 0) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style (elem, prop, initialInUnit + unit);

		// Asegúrate de actualizar las propiedades de la interpolación más adelante
		valueParts = valueParts || [];
	}

	if (valueParts) {
		initialInUnit = + initialInUnit || + inicial || 0;

		// Aplicar compensación relativa (+ = / - =) si se especifica
		ajustado = valueParts [1]?
			initialInUnit + (valueParts [1] + 1) * valueParts [2]:
			+ valueParts [2];
		if (tween) {
			tween.unit = unidad;
			tween.start = initialInUnit;
			tween.end = ajustado;
		}
	}
	retorno ajustado
}


var defaultDisplayMap = {};

función getDefaultDisplay (elem) {
	temperatura del var
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap [nodeName];

	if (mostrar) {
		pantalla de retorno;
	}

	temp = doc.body.appendChild (doc.createElement (nodeName));
	display = jQuery.css (temp, "display");

	temp.parentNode.removeChild (temp);

	if (display === "none") {
		display = "bloque";
	}
	defaultDisplayMap [nodeName] = display;

	pantalla de retorno;
}

función showHide (elementos, show) {
	pantalla var, elem,
		valores = [],
		índice = 0,
		longitud = elementos.longitud;

	// Determine el nuevo valor de visualización para los elementos que necesitan cambiar
	para (; índice <longitud; índice ++) {
		elem = elementos [índice];
		if (! elem.style) {
			continuar;
		}

		display = elem.style.display;
		if (mostrar) {

			// Dado que forzamos la visibilidad sobre elementos ocultos en cascada, una inmediata (y lenta)
			// se requiere verificación en este primer bucle a menos que tengamos un valor de visualización no vacío (ya sea
			// inline o about-to-be-restore)
			if (display === "none") {
				valores [índice] = dataPriv.get (elem, "display") || nulo;
				si (! valores [índice]) {
					elem.style.display = "";
				}
			}
			if (elem.style.display === "" && isHiddenWithinTree (elem)) {
				valores [índice] = getDefaultDisplay (elem);
			}
		} else {
			if (display! == "none") {
				valores [índice] = "ninguno";

				// Recuerda lo que estamos sobrescribiendo
				dataPriv.set (elem, "display", display);
			}
		}
	}

	// Ajuste la visualización de los elementos en un segundo bucle para evitar un reflujo constante
	para (índice = 0; índice <longitud; índice ++) {
		if (valores [índice]! = nulo) {
			elementos [índice] .style.display = valores [índice];
		}
	}

	elementos de retorno;
}

jQuery.fn.extend ({
	show: function () {
		volver showHide (this, true);
	}
	ocultar: función () {
		volver showHide (esto);
	}
	toggle: function (state) {
		if (typeof state === "boolean") {
			Estado de retorno? this.show (): this.hide ();
		}

		devuelve this.each (function () {
			if (isHiddenWithinTree (this)) {
				jQuery (this) .show ();
			} else {
				jQuery (this) .hide ();
			}
		});
	}
});
var rcheckableType = (/ ^ (?: casilla de verificación | radio) $ / i);

var rtagName = (/ <([az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] +) / i);

var rscriptType = (/ ^ $ | ^ módulo $ | \ / (?: java | ecma) script / i);



// Tenemos que cerrar estas etiquetas para admitir XHTML (# 13200)
var wrapMap = {

	// Soporte: IE <= 9 solamente
	opción: [1, "<select multiple = 'multiple'>", "</select>"],

	// Los analizadores XHTML no insertan elementos mágicamente en el
	// de la misma manera que lo hacen los analizadores de sopa de etiquetas. Así que no podemos acortar
	// esto omitiendo <tbody> u otros elementos requeridos.
	thead: [1, "<table>", "</table>"],
	col: [2, "<table> <colgroup>", "</colgroup> </table>"],
	tr: [2, "<table> <tbody>", "</tbody> </table>"],
	td: [3, "<table> <tbody> <tr>", "</tr> </tbody> </table>"],

	_default: [0, "", ""]
};

// Soporte: IE <= 9 solamente
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


función getAll (contexto, etiqueta) {

	// Soporte: IE <= 9 - 11 solamente
	// Use typeof para evitar la invocación del método de argumento cero en objetos host (# 15151)
	var ret

	if (typeof context.getElementsByTagName! == "undefined") {
		ret = context.getElementsByTagName (etiqueta || "*");

	} else if ((typeof context.querySelectorAll! == "undefined") {
		ret = context.querySelectorAll (tag || "*");

	} else {
		ret = [];
	}

	if (tag === undefined || tag && nodeName (contexto, tag)) {
		devuelve jQuery.merge ([contexto], ret);
	}

	volver ret
}


// Marcar los scripts como ya evaluados
función setGlobalEval (elems, refElements) {
	var i = 0,
		l = elems.length;

	para (; i <l; i ++) {
		dataPriv.set (
			elems [i],
			"globalEval",
			! refElementos || dataPriv.get (refElements [i], "globalEval")
		);
	}
}


var rhtml = / <| & #? \ w +; /;

función buildFragment (elementos, contexto, scripts, selección, ignorado) {
	var elem, tmp, etiqueta, envolver, contiene, j,
		fragment = context.createDocumentFragment (),
		nodos = [],
		i = 0,
		l = elems.length;

	para (; i <l; i ++) {
		elem = elems [i];

		if (elem || elem === 0) {

			// Agregar nodos directamente
			if (toType (elem) === "objeto") {

				// Soporte: Android <= 4.0 solamente, PhantomJS 1 solamente
				// push.apply (_, arraylike) lanza en el antiguo WebKit
				jQuery.merge (nodos, elem.nodeType? [elem]: elem);

			// Convertir no html en un nodo de texto
			} else if (! rhtml.test (elem)) {
				nodes.push (context.createTextNode (elem));

			// Convertir html en nodos DOM
			} else {
				tmp = tmp || fragment.appendChild (context.createElement ("div"));

				// Deserializar una representación estándar
				tag = (rtagName.exec (elem) || ["", ""]) [1] .toLowerCase ();
				wrap = wrapMap [etiqueta] || wrapMap._default;
				tmp.innerHTML = wrap [1] + jQuery.htmlPrefilter (elem) + wrap [2];

				// Desciende a través de envoltorios al contenido correcto
				j = envolver [0];
				mientras que (j--) {
					tmp = tmp.lastChild;
				}

				// Soporte: Android <= 4.0 solamente, PhantomJS 1 solamente
				// push.apply (_, arraylike) lanza en el antiguo WebKit
				jQuery.merge (nodos, tmp.childNodes);

				// Recuerda el contenedor de nivel superior
				tmp = fragment.firstChild;

				// Asegúrese de que los nodos creados estén huérfanos (# 12392)
				tmp.textContent = "";
			}
		}
	}

	// Eliminar envoltorio del fragmento
	fragment.textContent = "";

	i = 0;
	while ((elem = nodos [i ++])) {

		// Omitir elementos que ya están en la colección de contexto (trac-4087)
		if (selection && jQuery.inArray (elem, selection)> -1) {
			si (ignorado) {
				ignored.push (elem);
			}
			continuar;
		}

		contiene = jQuery.contains (elem.ownerDocument, elem);

		// Añadir al fragmento
		tmp = getAll (fragment.appendChild (elem), "script");

		// Conservar el historial de evaluación de guiones
		if (contiene) {
			setGlobalEval (tmp);
		}

		// Capturar ejecutables
		if (scripts) {
			j = 0;
			while ((elem = tmp [j ++])) {
				if (rscriptType.test (elem.type || "")) {
					scripts.push (elem);
				}
			}
		}
	}

	fragmento de retorno
}


(función () {
	var fragment = document.createDocumentFragment (),
		div = fragment.appendChild (document.createElement ("div")),
		input = document.createElement ("input");

	// Soporte: Android 4.0 - 4.3 solamente
	// Verificar estado perdido si el nombre está establecido (# 11217)
	// Soporte: Windows Web Apps (WWA)
	// `name` y` type` deben usar .setAttribute para WWA (# 14901)
	input.setAttribute ("tipo", "radio");
	input.setAttribute ("verificado", "verificado");
	input.setAttribute ("nombre", "t");

	div.appendChild (entrada);

	// Soporte: Android <= 4.1 solamente
	// El WebKit anterior no clona el estado verificado correctamente en fragmentos
	support.checkClone = div.cloneNode (true) .cloneNode (true) .lastChild.checked;

	// Soporte: IE <= 11 solamente
	// Asegúrese de que textarea (y casilla de verificación) defaultValue esté clonado correctamente
	div.innerHTML = "<textarea> x </textarea>";
	support.noCloneChecked = !! div.cloneNode (true) .lastChild.defaultValue;
}) ();
var documentElement = document.documentElement;



var
	rkeyEvent = / ^ key /,
	rmouseEvent = / ^ (?: mouse | pointer | contextmenu | drag | drop) | click /,
	rtypenamespace = /^([^.◆*)(?:\.(.+)|)/;

función returnTrue () {
	devuelve verdadero
}

función returnFalse () {
	falso retorno;
}

// Soporte: IE <= 9 solamente
// Ver # 13393 para más información
función safeActiveElement () {
	tratar {
		volver document.activeElement;
	} atrapar (err) {}
}

función en (elemento, tipos, selector, datos, fn, uno) {
	var origFn, tipo;

	// Los tipos pueden ser un mapa de tipos / manejadores
	if (tipo de tipos === "objeto") {

		// (tipos-objeto, selector, datos)
		if (typeof selector! == "string") {

			// (tipos-objeto, datos)
			datos = datos || selector;
			selector = indefinido;
		}
		para (tipo en tipos) {
			on (elem, tipo, selector, datos, tipos [tipo], uno);
		}
		devuelve elem;
	}

	if (datos == nulo && fn == nulo) {

		// (tipos, fn)
		fn = selector;
		datos = selector = indefinido;
	} else if (fn == null) {
		if (typeof selector === "string") {

			// (tipos, selector, fn)
			fn = datos;
			datos = indefinido;
		} else {

			// (tipos, datos, fn)
			fn = datos;
			datos = selector;
			selector = indefinido;
		}
	}
	si (fn === falso) {
		fn = returnFalse;
	} else if (! fn) {
		devuelve elem;
	}

	si (uno === 1) {
		origFn = fn;
		fn = función (evento) {

			// Puede usar un conjunto vacío, ya que el evento contiene la información
			jQuery (). off (evento);
			devuelve origFn.apply (esto, argumentos);
		};

		// Use el mismo guid para que la persona que llama pueda eliminar usando origFn
		fn.guid = origFn.guid || (origFn.guid = jQuery.guid ++);
	}
	devuelve elem.each (función () {
		jQuery.event.add (esto, tipos, fn, datos, selector);
	});
}

/ *
 * Funciones auxiliares para la gestión de eventos, que no forman parte de la interfaz pública.
 * Apoyos a la biblioteca addEvent de Dean Edwards para muchas de las ideas.
 * /
jQuery.event = {

	global: {},

	agregar: función (elemento, tipos, manejador, datos, selector) {

		var handleObjIn, eventHandle, tmp,
			eventos, t, handleObj,
			especiales, manejadores, tipo, espacios de nombres, origType,
			elemData = dataPriv.get (elem);

		// No adjunte eventos a los nodos NoData o texto / comentario (pero permita objetos simples)
		if (! elemData) {
			regreso;
		}

		// El llamante puede pasar un objeto de datos personalizados en lugar del controlador
		if ( handler.handler) {
			handleObjIn = manejador;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Asegurar que los selectores inválidos lanzan excepciones en el momento de adjuntar
		// Evaluar contra documentElement en caso de que elem no sea un nodo del elemento (por ejemplo, documento)
		if (selector) {
			jQuery.find.matchesSelector (documentElement, selector);
		}

		// Asegúrese de que el manejador tenga una ID única, que se usa para encontrarlo o eliminarlo más adelante
		if (! handler.guid) {
			handler.guid = jQuery.guid ++;
		}

		// Inicia la estructura de eventos del elemento y el controlador principal, si esta es la primera
		if (! (events = elemData.events)) {
			eventos = elemData.events = {};
		}
		if (! (eventHandle = elemData.handle)) {
			eventHandle = elemData.handle = function (e) {

				// Deseche el segundo evento de un jQuery.event.trigger () y
				// cuando se llama a un evento después de que se haya descargado una página
				devuelva typeof jQuery! == "undefined" && jQuery.event.triggered! == e.type?
					jQuery.event.dispatch.apply (elem, argumentos): undefined;
			};
		}

		// Manejar múltiples eventos separados por un espacio
		types = (types || "") .match (rnothtmlwhite) || [""];
		t = tipos.longitud;
		mientras que (t--) {
			tmp = rtypenamespace.exec (tipos [t]) || [];
			type = origType = tmp [1];
			espacios de nombres = (tmp [2] || "") .split (".") .sort ();

			// Allí * debe * ser un tipo, no adjuntar manejadores de espacio de nombres solamente
			if (! type) {
				continuar;
			}

			// Si el evento cambia su tipo, use los controladores de eventos especiales para el tipo modificado
			special = jQuery.event.special [tipo] || {};

			// Si el selector está definido, determine el tipo de api de evento especial, de lo contrario, se le dará un tipo
			type = (selector? special.delegateType: special.bindType) || tipo;

			// Actualizar especial basado en el nuevo tipo de reinicio
			special = jQuery.event.special [tipo] || {};

			// handleObj se pasa a todos los controladores de eventos
			handleObj = jQuery.extend ({
				tipo: tipo
				origType: origType,
				datos: datos,
				manejador: manejador,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test (selector),
				espacio de nombres: espacios de nombres.juntar (".")
			}, handleObjIn);

			// Inicia la cola del manejador de eventos si somos los primeros
			if (! (handlers = eventos [tipo])) {
				manejadores = eventos [tipo] = [];
				handlers.delegateCount = 0;

				// Solo use addEventListener si el controlador de eventos especiales devuelve falso
				si (! special.setup ||
					special.setup.call (elem, data, namespaces, eventHandle) === false) {

					if (elem.addEventListener) {
						elem.addEventListener (type, eventHandle);
					}
				}
			}

			if (special.add) {
				special.add.call (elem, handleObj);

				if (! handleObj.handler.guid) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Agregar a la lista de controladores del elemento, delegados en frente
			if (selector) {
				handlers.splice (handlers.delegateCount ++, 0, handleObj);
			} else {
				handlers.push (handleObj);
			}

			// Mantenga un registro de los eventos que se han utilizado, para la optimización de eventos
			jQuery.event.global [tipo] = verdadero;
		}

	}

	// Separar un evento o conjunto de eventos de un elemento
	remove: function (elem, types, handler, selector, mappedTypes) {

		var j, origCount, tmp,
			eventos, t, handleObj,
			especiales, manejadores, tipo, espacios de nombres, origType,
			elemData = dataPriv.hasData (elem) && dataPriv.get (elem);

		if (! elemData ||! (events = elemData.events)) {
			regreso;
		}

		// Una vez para cada type.namespace en tipos; el tipo puede ser omitido
		types = (types || "") .match (rnothtmlwhite) || [""];
		t = tipos.longitud;
		mientras que (t--) {
			tmp = rtypenamespace.exec (tipos [t]) || [];
			type = origType = tmp [1];
			espacios de nombres = (tmp [2] || "") .split (".") .sort ();

			// Desenlazar todos los eventos (en este espacio de nombres, si se proporciona) para el elemento
			if (! type) {
				para (escribir eventos) {
					jQuery.event.remove (elem, type + types [t], handler, selector, true);
				}
				continuar;
			}

			special = jQuery.event.special [tipo] || {};
			type = (selector? special.delegateType: special.bindType) || tipo;
			manejadores = eventos [tipo] || [];
			tmp = tmp [2] &&
				new RegExp ("(^ | \\.)" + namespaces.join ("\\. (?:. * \\. |)") + "(\\. | $)");

			// Eliminar eventos coincidentes
			origCount = j = handlers.length;
			mientras que (j--) {
				handleObj = manejadores [j];

				if ((mappedTypes || origType === handleObj.origType) &&
					(! handler || handler.guid === handleObj.guid) &&
					(! tmp || tmp.test (handleObj.namespace)) &&
					(! selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector)) {
					handlers.splice (j, 1);

					if (handleObj.selector) {
						handlers.delegateCount--;
					}
					if (special.remove) {
						special.remove.call (elem, handleObj);
					}
				}
			}

			// Eliminar el controlador de eventos genérico si eliminamos algo y no existen más controladores
			// (evita el potencial de recursión sin fin durante la eliminación de controladores de eventos especiales)
			if (origCount &&! handlers.length) {
				si (! special.teardown ||
					special.teardown.call (elem, namespaces, elemData.handle) === false) {

					jQuery.removeEvent (elem, type, elemData.handle);
				}

				eliminar eventos [tipo];
			}
		}

		// Eliminar los datos y el expando si ya no se usa.
		if (jQuery.isEmptyObject (eventos)) {
			dataPriv.remove (elem, "manejar eventos");
		}
	}

	dispatch: function (nativeEvent) {

		// Hacer un jQuery.Event escribible desde el objeto de evento nativo
		evento var = jQuery.event.fix (nativeEvent);

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array (argumentos.longitud),
			handlers = (dataPriv.get (this, "events") || {}) [event.type] || [],
			special = jQuery.event.special [event.type] || {};

		// Use el jQuery.Event corregido en lugar del evento nativo (solo lectura)
		args [0] = evento;

		para (i = 1; i <argumentos.longitud; i ++) {
			args [i] = argumentos [i];
		}

		event.delegateTarget = esto;

		// Llame al enganche preDispatch para el tipo mapeado, y déjelo en libertad si lo desea
		if (special.preDispatch && special.preDispatch.call (this, evento) === false) {
			regreso;
		}

		// Determinar manejadores
		handlerQueue = jQuery.event.handlers.call (this, event, handlers);

		// Ejecutar delegados primero; Es posible que quieran detener la propagación debajo de nosotros.
		i = 0;
		while ((matched = handlerQueue [i ++]) &&! event.isPropagationStopped ()) {
			event.currentTarget = matched.elem;

			j = 0;
			while ((handleObj = matched.handlers [j ++]) &&
				! event.isImmediatePropagationStopped ()) {

				// El evento activado debe 1) no tener espacio de nombres, o 2) tener espacio de nombres
				// un subconjunto o iguales a los del evento enlazado (ambos no pueden tener espacio de nombres).
				if (! event.rnamespace || event.rnamespace.test (handleObj.namespace)) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ((jQuery.event.special [handleObj.origType] || {}) .handle ||
						handleObj.handler) .apply (matched.elem, args);

					if (ret! == indefinido) {
						if ((event.result = ret) === false) {
							event.preventDefault ();
							event.stopPropagation ();
						}
					}
				}
			}
		}

		// Llame al gancho postDispatch para el tipo mapeado
		if (special.postDispatch) {
			special.postDispatch.call (this, event);
		}

		return event.result;
	}

	manejadores: función (evento, manejadores) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Encontrar manejadores delegados
		si (delegateCount &&

			// Soporte: IE <= 9
			// Árboles de instancia SVG <use> de agujero negro (trac-13180)
			cur.nodeType &&

			// Soporte: Firefox <= 42
			// Suprimir los clics que violan las especificaciones que indican un botón de puntero no primario (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Soporte: solo IE 11
			// ... pero no la tecla de flecha "hace clic" en las entradas de radio, que pueden tener `button` -1 (gh-2343)
			! (event.type === "click" && event.button> = 1)) {

			para (; cur! == this; cur = cur.parentNode || this) {

				// No verifique los no elementos (# 13208)
				// No procesar clics en elementos deshabilitados (# 6911, # 8165, # 11382, # 11764)
				if (cur.nodeType === 1 &&! (event.type === "click" && cur.disabled === true)) {
					MatchedHandlers = [];
					matchedSelectors = {};
					para (i = 0; i <delegateCount; i ++) {
						handleObj = manejadores [i];

						// No entrar en conflicto con las propiedades de Object.prototype (# 13203)
						sel = handleObj.selector + "";

						if (matchedSelectors [sel] === undefined) {
							matchedSelectors [sel] = handleObj.needsContext?
								jQuery (sel, this) .index (cur)> -1:
								jQuery.find (sel, this, null, [cur]) .length;
						}
						if (matchedSelectors [sel]) {
							matchedHandlers.push (handleObj);
						}
					}
					if (matchedHandlers.length) {
						handlerQueue.push ({elem: cur, handlers: matchedHandlers});
					}
				}
			}
		}

		// Agregar los controladores restantes (directamente enlazados)
		cur = esto;
		if (delegateCount <handlers.length) {
			handlerQueue.push ({elem: cur, handlers: handlers.slice (delegateCount)});
		}

		return handlerQueue;
	}

	addProp: function (name, hook) {
		Object.defineProperty (jQuery.Event.prototype, name, {
			enumerable: verdadero,
			configurable: verdadero,

			get: isFunction (hook)?
				función () {
					if (this.originalEvent) {
							gancho de retorno (this.originalEvent);
					}
				}:
				función () {
					if (this.originalEvent) {
							devuelve this.originalEvent [nombre];
					}
				}

			establecer: función (valor) {
				Object.defineProperty (este, nombre, {
					enumerable: verdadero,
					configurable: verdadero,
					escribible: verdadero,
					valor: valor
				});
			}
		});
	}

	corregir: función (originalEvent) {
		volver originalEvent [jQuery.expando]?
			originalEvento:
			nuevo jQuery.Event (originalEvent);
	}

	especial: {
		carga: {

			// Evita que los eventos image.load desencadenados se borren a window.load
			noBubble: cierto
		}
		atención: {

			// Disparar evento nativo si es posible, por lo que la secuencia de desenfoque / enfoque es correcta
			trigger: function () {
				if (this! == safeActiveElement () && this.focus) {
					this.focus ();
					falso retorno;
				}
			}
			delegateType: "focusin"
		}
		desenfoque: {
			trigger: function () {
				if (this === safeActiveElement () && this.blur) {
					this.blur ();
					falso retorno;
				}
			}
			delegateType: "focusout"
		}
		haga clic en: {

			// Para la casilla de verificación, se activa el evento nativo, así que el estado marcado será correcto
			trigger: function () {
				if (this.type === "checkbox" && this.click && nodeName (this, "input")) {
					este.click ();
					falso retorno;
				}
			}

			// Para la coherencia entre navegadores, no active .click () nativo en los enlaces
			_default: función (evento) {
				devuelve nodeName (event.target, "a");
			}
		}

		descarga previa: {
			postDispatch: function (event) {

				// Soporte: Firefox 20+
				// Firefox no alerta si el campo returnValue no está establecido.
				if (event.result! == undefined && event.originalEvent) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function (elem, type, handle) {

	// Este "si" es necesario para objetos simples
	if (elem.removeEventListener) {
		elem.removeEventListener (type, handle);
	}
};

jQuery.Event = function (src, props) {

	// Permitir la creación de instancias sin la palabra clave 'nuevo'
	if (! (this instanceof jQuery.Event)) {
		devolver nuevo jQuery.Event (src, props);
	}

	// objeto de evento
	if (src && src.type) {
		this.originalEvent = src;
		this.type = src.type;

		// Los eventos que borran el documento pueden haberse marcado como prevenidos
		// por un controlador más abajo del árbol; reflejar el valor correcto.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Soporte: Android <= 2.3 solamente
				src.returnValue === falso?
			Devuelve la verdad
			falso retorno;

		// Crear propiedades de destino
		// Soporte: Safari <= 6 - 7 solamente
		// El destino no debe ser un nodo de texto (# 504, # 13143)
		this.target = (src.target && src.target.nodeType === 3)?
			src.target.parentNode:
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Tipo de evento
	} else {
		this.type = src;
	}

	// Poner propiedades proporcionadas explícitamente en el objeto de evento
	if (accesorios) {
		jQuery.extend (esto, props);
	}

	// Crear una marca de tiempo si el evento entrante no tiene uno
	this.timeStamp = src && src.timeStamp || Date.now ();

	// Marcarlo como fijo
	este [jQuery.expando] = verdadero;
};

// jQuery.Event se basa en eventos DOM3 según lo especificado por el enlace de lenguaje ECMAScript
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	es simulado: falso,

	preventDefault: function () {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if (e &&! this.isSimulated) {
			e.preventDefault ();
		}
	}
	stopPropagation: function () {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if (e &&! this.isSimulated) {
			e.stopPropagation ();
		}
	}
	stopImmediatePropagation: function () {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if (e &&! this.isSimulated) {
			e.stopImmediatePropagation ();
		}

		this.stopPropagation ();
	}
};

// Incluye todos los accesorios de eventos comunes, incluidos los accesorios específicos de KeyEvent y MouseEvent
jQuery.each ({
	altKey: verdadero,
	burbujas: verdad,
	cancelable: verdadero,
	cambiado Toques: verdadero,
	ctrlKey: verdadero,
	detalle: verdadero,
	eventPhase: verdadero,
	MetaKey: verdadero,
	pageX: verdadero,
	pageY: true,
	ShiftKey: verdadero,
	vista: verdadero,
	"char": verdadero,
	Código de caracteres: verdadero,
	clave: verdadero,
	claveCódigo: verdadero,
	botón: verdadero,
	botones: verdad,
	clientX: verdadero,
	cliente: verdadero,
	offsetX: verdadero,
	offsetY: verdadero,
	punteroId: verdadero,
	tipo puntero: verdadero,
	screenX: verdadero,
	screenY: verdadero,
	targetTouches: verdadero,
	toElemento: verdadero,
	toques: verdad,

	cual: función (evento) {
		var button = event.button;

		// Añadir que para eventos clave
		if (event.which == null && rkeyEvent.test (event.type)) {
			return event.charCode! = null? event.charCode: event.keyCode;
		}

		// Añadir para que haga clic: 1 === izquierda; 2 === medio; 3 === derecho
		if (! event.which && button! == undefined && rmouseEvent.test (event.type)) {
			si (botón & 1) {
				devuelve 1;
			}

			si (botón & 2) {
				retorno 3;
			}

			si (botón & 4) {
				devuelve 2;
			}

			devuelve 0;
		}

		evento de retorno.
	}
}, jQuery.event.addProp);

// Crear eventos de mouseenter / leave usando mouseover / out y controles en tiempo de eventos
// para que la delegación de eventos funcione en jQuery.
// Haga lo mismo para puntero / puntero y puntero / puntero
//
// Soporte: solo para Safari 7
// Safari envía mouseenter muy a menudo; ver:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// para la descripción del error (también existía en versiones anteriores de Chrome).
jQuery.each ({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	puntero: "puntero",
	puntero: "puntero"
}, función (orig, fix) {
	jQuery.event.special [orig] = {
		delegateType: fix,
		bindType: corregir,

		manejar: función (evento) {
			var ret,
				objetivo = esto
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// Para mouseenter / leave, llame al controlador si está relacionado está fuera del destino.
			// NB: No hay un objetivo relacionado si el mouse se fue / entró en la ventana del navegador
			if (! related || (related! == target &&! jQuery.contains (target, related))) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply (esto, argumentos);
				event.type = fix;
			}
			volver ret
		}
	};
});

jQuery.fn.extend ({

	en: función (tipos, selector, datos, fn) {
		retorno en (esto, tipos, selector, datos, fn);
	}
	uno: función (tipos, selector, datos, fn) {
		retorno en (esto, tipos, selector, datos, fn, 1);
	}
	off: función (tipos, selector, fn) {
		var handleObj, tipo;
		if (types && types.preventDefault && types.handleObj) {

			// (evento) despachado jQuery.Event
			handleObj = types.handleObj;
			jQuery (types.delegateTarget) .off (
				handleObj.namespace?
					handleObj.origType + "." + handleObj.namespace:
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			devuelve esto
		}
		if (tipo de tipos === "objeto") {

			// (tipos-objeto [, selector])
			para (tipo en tipos) {
				this.off (tipo, selector, tipos [tipo]);
			}
			devuelve esto
		}
		if (selector === false || typeof selector === "function") {

			// (tipos [, fn])
			fn = selector;
			selector = indefinido;
		}
		si (fn === falso) {
			fn = returnFalse;
		}
		devuelve this.each (function () {
			jQuery.event.remove (this, types, fn, selector);
		});
	}
});


var

	/ * eslint-disable max-len * /

	// Ver https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = / <(?! area | br | col | embed | hr | img | input | link | meta | param) (([az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] *) [^>] *) \ /> / gi,

	/ * habilitar eslint * /

	// Soporte: IE <= 10 - 11, Edge 12 - 13 solamente
	// En IE / Edge usando grupos de expresiones regulares aquí causa desaceleraciones severas.
	// Ver https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = / <script | <estilo | <link / i,

	// marcada = "marcada" o marcada
	rchecked = /checked\s*(?:[^=◆|=\s*.checked.)/i,
	rcleanScript = / ^ \ s * <! (?: \ [CDATA \ [| -) | (?: \] \] | -)> \ s * $ / g;

// Prefiere un tbody sobre su tabla principal para contener nuevas filas
function manipulationTarget (elemento, contenido) {
	if (nodeName (elem, "tabla") &&
		nodeName (content.nodeType! == 11? content: content.firstChild, "tr")) {

		return jQuery (elem) .children ("tbody") [0] || elem
	}

	devuelve elem;
}

// Reemplazar / restaurar el atributo de tipo de elementos de script para una manipulación segura de DOM
función disableScript (elem) {
	elem.type = (elem.getAttribute ("type")! == null) + "/" + elem.type;
	devuelve elem;
}
función restoreScript (elem) {
	if ((elem.type || "") .slice (0, 5) === "true /") {
		elem.type = elem.type.slice (5);
	} else {
		elem.removeAttribute ("type");
	}

	devuelve elem;
}

función cloneCopyEvent (src, dest) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, eventos;

	if (dest.nodeType! == 1) {
		regreso;
	}

	// 1. Copiar datos privados: eventos, manejadores, etc.
	if (dataPriv.hasData (src)) {
		pdataOld = dataPriv.access (src);
		pdataCur = dataPriv.set (dest, pdataOld);
		eventos = pdataOld.events;

		if (eventos) {
			eliminar pdataCur.handle;
			pdataCur.events = {};

			para (escribir eventos) {
				para (i = 0, l = eventos [tipo] .length; i <l; i ++) {
					jQuery.event.add (dest, type, events [type] [i]);
				}
			}
		}
	}

	// 2. Copiar datos de usuario
	if (dataUser.hasData (src)) {
		udataOld = dataUser.access (src);
		udataCur = jQuery.extend ({}, udataOld);

		dataUser.set (dest, udataCur);
	}
}

// Corregir errores de IE, ver pruebas de soporte
función fixInput (src, dest) {
	var nodeName = dest.nodeName.toLowerCase ();

	// No puede persistir el estado marcado de una casilla de verificación o botón de radio clonado.
	if (nodeName === "input" && rcheckableType.test (src.type)) {
		dest.checked = src.checked;

	// No puede devolver la opción seleccionada al estado predeterminado seleccionado al clonar opciones
	} else if (nodeName === "input" || nodeName === "textarea") {
		dest.defaultValue = src.defaultValue;
	}
}

función domManip (colección, argumentos, devolución de llamada, ignorado) {

	// Aplanar cualquier matriz anidada
	args = concat.apply ([], args);

	fragmento var, primero, scripts, hasScripts, node, doc,
		i = 0,
		l = colección.longitud,
		iNoClone = l - 1,
		valor = args [0],
		valueIsFunction = isFunction (value);

	// No podemos clonar fragmentos de nodo que contienen comprobados, en WebKit
	si (valueIsFunction ||
			(l> 1 && typeof value === "string" &&
				! support.checkClone && rchecked.test (value))) {
		return collection.each (función (índice) {
			var self = collection.eq (index);
			if (valueIsFunction) {
				args [0] = value.call (this, index, self.html ());
			}
			domManip (self, args, callback, ignorado);
		});
	}

	si (l) {
		fragmento = buildFragment (args, collection [0] .ownerDocument, false, collection, ignorado);
		primero = fragment.firstChild;

		if (fragment.childNodes.length === 1) {
			fragmento = primero;
		}

		// Requerir nuevo contenido o un interés en elementos ignorados para invocar la devolución de llamada
		si (primero || ignorado) {
			scripts = jQuery.map (getAll (fragmento, "script"), disableScript);
			hasScripts = scripts.length;

			// Usa el fragmento original para el último artículo
			// en lugar de la primera porque puede terminar
			// vaciarse incorrectamente en ciertas situaciones (# 8070).
			para (; i <l; i ++) {
				nodo = fragmento;

				if (i! == iNoClone) {
					node = jQuery.clone (node, true, true);

					// Mantener las referencias a los guiones clonados para su posterior restauración
					if (hasScripts) {

						// Soporte: Android <= 4.0 solamente, PhantomJS 1 solamente
						// push.apply (_, arraylike) lanza en el antiguo WebKit
						jQuery.merge (scripts, getAll (node, "script"));
					}
				}

				callback.call (colección [i], nodo, i);
			}

			if (hasScripts) {
				doc = scripts [scripts.length - 1] .ownerDocument;

				// Rehabilitar scripts
				jQuery.map (scripts, restoreScript);

				// Evaluar los scripts ejecutables en la primera inserción de documentos
				para (i = 0; i <hasScripts; i ++) {
					nodo = guiones [i];
					if (rscriptType.test (node.type || "") &&
						! dataPriv.access (node, "globalEval") &&
						jQuery.contains (doc, node)) {

						if (node.src && (node.type || "") .toLowerCase ()! == "módulo") {

							// Dependencia opcional de AJAX, pero no ejecutará scripts si no está presente
							if (jQuery._evalUrl) {
								jQuery._evalUrl (node.src);
							}
						} else {
							DOMEval (node.textContent.replace (rcleanScript, ""), doc, node);
						}
					}
				}
			}
		}
	}

	devolución de recogida;
}

Función eliminar (elem, selector, keepData) {
	nodo var,
		nodos = selector? jQuery.filter (selector, elem): elem,
		i = 0;

	para (; (nodo = nodos [i])! = nulo; i ++) {
		if (! keepData && node.nodeType === 1) {
			jQuery.cleanData (getAll (node));
		}

		if (node.parentNode) {
			if (keepData && jQuery.contains (node.ownerDocument, node)) {
				setGlobalEval (getAll (node, "script"));
			}
			node.parentNode.removeChild (node);
		}
	}

	devuelve elem;
}

jQuery.extend ({
	htmlPrefilter: function (html) {
		devuelve html.replace (rxhtmlTag, "<$ 1> </ $ 2>");
	}

	clone: ​​function (elem, dataAndEvents, deepDataAndEvents) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode (true),
			inPage = jQuery.contains (elem.ownerDocument, elem);

		// Solucionar problemas de clonación de IE
		if (! support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) &&
				! jQuery.isXMLDoc (elem)) {

			// Evitamos Sizzle aquí por razones de rendimiento: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll (clon);
			srcElements = getAll (elem);

			para (i = 0, l = srcElements.length; i <l; i ++) {
				fixInput (srcElements [i], destElements [i]);
			}
		}

		// Copia los eventos del original al clon.
		if (dataAndEvents) {
			if (deepDataAndEvents) {
				srcElements = srcElements || getAll (elem);
				destElements = destElements || getAll (clon);

				para (i = 0, l = srcElements.length; i <l; i ++) {
					cloneCopyEvent (srcElements [i], destElements [i]);
				}
			} else {
				cloneCopyEvent (elem, clone);
			}
		}

		// Conservar el historial de evaluación de guiones
		destElements = getAll (clon, "script");
		if (destElements.length> 0) {
			setGlobalEval (destElements,! inPage && getAll (elem, "script"));
		}

		// Devolver el conjunto clonado
		volver clon
	}

	cleanData: function (elems) {
		datos var, elemento, tipo,
			special = jQuery.event.special,
			i = 0;

		para (; (elem = elems [i])! == undefined; i ++) {
			if (acceptData (elem)) {
				if ((data = elem [dataPriv.expando])) {
					if (data.events) {
						para (escriba en data.events) {
							if (especial [tipo]) {
								jQuery.event.remove (elem, type);

							// Este es un atajo para evitar la sobrecarga de jQuery.event.remove
							} else {
								jQuery.removeEvent (elem, type, data.handle);
							}
						}
					}

					// Soporte: Chrome <= 35 - 45+
					// Asigne undefined en lugar de usar delete, vea Data # remove
					elem [dataPriv.expando] = indefinido;
				}
				if (elem [dataUser.expando]) {

					// Soporte: Chrome <= 35 - 45+
					// Asigne undefined en lugar de usar delete, vea Data # remove
					elem [dataUser.expando] = indefinido;
				}
			}
		}
	}
});

jQuery.fn.extend ({
	separar: función (selector) {
		return remove (this, selector, true);
	}

	eliminar: función (selector) {
		volver eliminar (este, selector);
	}

	texto: función (valor) {
		acceso de retorno (esta, función (valor) {
			valor de retorno === indefinido?
				jQuery.text (este):
				this.empty (). each (function () {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						this.textContent = valor;
					}
				});
		}, nulo, valor, argumentos.longitud);
	}

	añadir: function () {
		devolver domManip (esto, argumentos, función (elem) {
			if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
				var target = manipulationTarget (this, elem);
				target.appendChild (elem);
			}
		});
	}

	anteponer: función () {
		devolver domManip (esto, argumentos, función (elem) {
			if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
				var target = manipulationTarget (this, elem);
				target.insertBefore (elem, target.firstChild);
			}
		});
	}

	antes: function () {
		devolver domManip (esto, argumentos, función (elem) {
			if (this.parentNode) {
				this.parentNode.insertBefore (elem, this);
			}
		});
	}

	después de: function () {
		devolver domManip (esto, argumentos, función (elem) {
			if (this.parentNode) {
				this.parentNode.insertBefore (elem, this.nextSibling);
			}
		});
	}

	vacío: función () {
		var elem
			i = 0;

		para (; (elem = this [i])! = null; i ++) {
			if (elem.nodeType === 1) {

				// Prevenir las fugas de memoria
				jQuery.cleanData (getAll (elem, false));

				// Eliminar cualquier nodo restante
				elem.textContent = "";
			}
		}

		devuelve esto
	}

	clone: ​​function (dataAndEvents, deepDataAndEvents) {
		dataAndEvents = dataAndEvents == null? falso: dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null? dataAndEvents: deepDataAndEvents;

		devuelve this.map (function () {
			return jQuery.clone (this, dataAndEvents, deepDataAndEvents);
		});
	}

	html: función (valor) {
		acceso de retorno (esta, función (valor) {
			var elem = este [0] || {},
				i = 0,
				l = this.length;

			if (valor === undefined && elem.nodeType === 1) {
				volver elem.innerHTML;
			}

			// Mira si podemos tomar un atajo y solo usar innerHTML
			if (typeof value === "string" &&! rnoInnerhtml.test (value) &&
				! wrapMap [(rtagName.exec (value) || ["", ""]) [1] .toLowerCase ()]) {

				value = jQuery.htmlPrefilter (value);

				tratar {
					para (; i <l; i ++) {
						elem = este [i] || {};

						// Eliminar los nodos de elementos y prevenir las fugas de memoria.
						if (elem.nodeType === 1) {
							jQuery.cleanData (getAll (elem, false));
							elem.innerHTML = valor;
						}
					}

					elem = 0;

				// Si usa innerHTML lanza una excepción, use el método de reserva
				} atrapar (e) {}
			}

			if (elem) {
				this.empty (). append (valor);
			}
		}, nulo, valor, argumentos.longitud);
	}

	replaceWith: function () {
		var ignoró = [];

		// Realice los cambios, reemplazando cada elemento de contexto no ignorado con el nuevo contenido
		devolver domManip (esto, argumentos, función (elem) {
			var parent = this.parentNode;

			if (jQuery.inArray (esto, ignorado) <0) {
				jQuery.cleanData (getAll (this));
				si (padre) {
					parent.replaceChild (elem, this);
				}
			}

		// Forzar la invocación de devolución de llamada
		}, ignorado);
	}
});

jQuery.each ({
	appendTo: "append",
	prependTo: "prepend"
	insertBefore: "antes",
	insertAfter: "después de",
	replaceAll: "replaceWith"
}, función (nombre, original) {
	jQuery.fn [nombre] = función (selector) {
		var elems,
			ret = [],
			insert = jQuery (selector),
			last = insert.length - 1,
			i = 0;

		para (; i <= último; i ++) {
			elems = i === last? esto: este.clone (verdadero);
			jQuery (inserte [i]) [original] (elementos);

			// Soporte: Android <= 4.0 solamente, PhantomJS 1 solamente
			// .get () porque push.apply (_, arraylike) lanza en el antiguo WebKit
			push.apply (ret, elems.get ());
		}

		devuelve this.pushStack (ret);
	};
});
var rnumnonpx = new RegExp ("^ (" + pnum + ") (?! px) [az%] + $", "i");

var getStyles = function (elem) {

		// Soporte: IE <= 11 solamente, Firefox <= 30 (# 15098, # 14150)
		// IE lanza sobre elementos creados en ventanas emergentes
		// FF mientras tanto lanza elementos de marco a través de "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if (! view ||! view.opener) {
			vista = ventana;
		}

		devolver view.getComputedStyle (elem);
	};

var rboxStyle = new RegExp (cssExpand.join ("|"), "i");



(función () {

	// La ejecución de ambas pruebas pixelPosition y boxSizingReliable requiere solo un diseño
	// por lo que se ejecutan al mismo tiempo para guardar el segundo cálculo.
	función computeStyleTests () {

		// Este es un singleton, necesitamos ejecutarlo solo una vez
		si (! div) {
			regreso;
		}

		container.style.cssText = "posición: absoluta; izquierda: -11111px; ancho: 60px;" +
			"margen superior: 1px; relleno: 0; borde: 0";
		div.style.cssText =
			"posición: relativo; pantalla: bloque; tamaño de caja: cuadro de borde; desbordamiento: desplazamiento;" +
			"margen: auto; borde: 1px; relleno: 1px;" +
			"ancho: 60%; parte superior: 1%";
		documentElement.appendChild (container) .appendChild (div);

		var divStyle = window.getComputedStyle (div);
		pixelPositionVal = divStyle.top! == "1%";

		// Soporte: Android 4.0 - 4.3 solamente, Firefox <= 3 - 44
		reliableMarginLeftVal = roundPixelMeasures (divStyle.marginLeft) === 12;

		// Soporte: Android 4.0 - 4.3 solamente, Safari <= 9.1 - 10.1, iOS <= 7.0 - 9.3
		// Algunos estilos regresan con valores de porcentaje, aunque no deberían
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures (divStyle.right) === 36;

		// Soporte: IE 9 - 11 solamente
		// Detectar informes erróneos de dimensiones de contenido para el tamaño de cuadro: elementos de cuadro de borde
		boxSizingReliableVal = roundPixelMeasures (divStyle.width) === 36;

		// Soporte: solo IE 9
		// Detectar desbordamiento: destornillamiento de desplazamiento (gh-3699)
		div.style.position = "absoluto";
		scrollboxSizeVal = div.offsetWidth === 36 || "absoluto";

		documentElement.removeChild (contenedor);

		// Anula el div para que no se almacene en la memoria y
		// También será una señal de que los controles ya realizados.
		div = nulo;
	}

	función roundPixelMeasures (medida) {
		return Math.round (parseFloat (medida));
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		confiableMarginLeftVal,
		container = document.createElement ("div"),
		div = document.createElement ("div");

	// Finaliza temprano en entornos limitados (sin navegador)
	if (! div.style) {
		regreso;
	}

	// Soporte: IE <= 9 - 11 solamente
	// El estilo del elemento clonado afecta al elemento fuente clonado (# 8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode (true) .style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend (soporte, {
		boxSizingReliable: function () {
			computeStyleTests ();
			return boxSizingReliableVal;
		}
		pixelBoxStyles: function () {
			computeStyleTests ();
			devuelve pixelBoxStylesVal;
		}
		pixelPosition: function () {
			computeStyleTests ();
			devuelve pixelPositionVal;
		}
		reliableMarginLeft: function () {
			computeStyleTests ();
			return confiable MarginLeftVal;
		}
		scrollboxSize: function () {
			computeStyleTests ();
			devolver scrollboxSizeVal;
		}
	});
}) ();


función curCSS (elemento, nombre, computado) {
	ancho var, minWidth, maxWidth, ret,

		// Soporte: Firefox 51+
		// Recuperar el estilo antes calculado de alguna manera
		// soluciona un problema con obtener valores erróneos
		// en elementos separados
		estilo = elem.style;

	computado = computado || getStyles (elem);

	// Se necesita getPropertyValue para:
	// .css ('filtro') (solo IE 9, # 12537)
	// .css ('- customProperty) (# 3144)
	si (calculado) {
		ret = computed.getPropertyValue (nombre) || computado [nombre];

		if (ret === "" &&! jQuery.contains (elem.ownerDocument, elem)) {
			ret = jQuery.style (elem, nombre);
		}

		// Un homenaje al "hack impresionante de Dean Edwards"
		// El navegador de Android devuelve el porcentaje de algunos valores,
		// pero el ancho parece ser confiablemente pixeles.
		// Esto va en contra de la especificación del borrador de CSSOM:
		// https://drafts.csswg.org/cssom/#resolved-values
		if (! support.pixelBoxStyles () && rnumnonpx.test (ret) && rboxStyle.test (nombre)) {

			// Recordar los valores originales.
			ancho = estilo. ancho;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Introduce los nuevos valores para obtener un valor computado
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revertir los valores cambiados
			style.width = ancho;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	devuelve ret! == undefined?

		// Soporte: IE <= 9 - 11 solamente
		// IE devuelve el valor zIndex como un entero.
		ret + "":
		jubilado;
}


función addGetHookIf (conditionFn, hookFn) {

	// Definir el gancho, verificaremos la primera ejecución si es realmente necesario.
	regreso {
		get: function () {
			if (conditionFn ()) {

				// No es necesario el gancho (o no es posible usarlo debido)
				// a la dependencia que falta), eliminarla.
				eliminar this.get;
				regreso;
			}

			// Se necesita gancho; Vuelva a definirlo para que la prueba de soporte no se ejecute de nuevo.
			return (this.get = hookFn) .apply (this, argumentos);
		}
	};
}


var

	// Intercambiable si la visualización es ninguna o comienza con la tabla
	// excepto "table", "table-cell" o "table-caption"
	// Vea aquí los valores de visualización: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = / ^ (ninguno | table (?! - c [ea]). +) /,
	rcustomProp = / ^ - /,
	cssShow = {posición: "absoluta", visibilidad: "oculta", pantalla: "bloque"},
	cssNormalTransform = {
		letterSpacing: "0",
		fuentePeso: "400"
	}

	cssPrefixes = ["Webkit", "Moz", "ms"],
	emptyStyle = document.createElement ("div") .style;

// Devolver una propiedad css asignada a una propiedad prefijada potencialmente proveedor
función vendorPropName (nombre) {

	// Atajo para nombres que no tienen prefijo de proveedor
	if (nombre en emptyStyle) {
		nombre de retorno
	}

	// Verificar nombres prefijados de proveedores
	var capName = nombre [0] .toUpperCase () + name.slice (1),
		i = cssPrefixes.length;

	mientras yo-- ) {
		name = cssPrefixes [i] + capName;
		if (nombre en emptyStyle) {
			nombre de retorno
		}
	}
}

// Devuelve una propiedad asignada según lo que jQuery.cssProps sugiere o
// una propiedad prefijada del vendedor.
función finalPropName (nombre) {
	var ret = jQuery.cssProps [nombre];
	si (! ret) {
		ret = jQuery.cssProps [nombre] = vendorPropName (nombre) || nombre;
	}
	volver ret
}

función setPositiveNumber (elemento, valor, resta) {

	// Todos los valores relativos (+/-) ya han sido
	// normalizado en este punto
	var matches = rcssNum.exec (value);
	volver partidos?

		// Protéjase contra "resta" indefinida, por ejemplo, cuando se usa como en cssHooks
		Math.max (0, coincidencias [2] - (restar || 0)) + (coincidencias [3] || "px"):
		valor;
}

function boxModelAdjustment (elem, dimension, box, isBorderBox, styles, computedVal) {
	var i = dimensión === "ancho"? 1: 0,
		extra = 0,
		delta = 0;

	// El ajuste puede no ser necesario
	if (cuadro === (isBorderBox? "border": "content")) {
		devuelve 0;
	}

	para (; i <4; i + = 2) {

		// Ambos modelos de caja excluyen margen
		if (cuadro === "margen") {
			delta + = jQuery.css (elem, box + cssExpand [i], true, styles);
		}

		// Si llegamos aquí con un cuadro de contenido, estamos buscando "relleno" o "borde" o "margen"
		if (! isBorderBox) {

			// Añadir relleno
			delta + = jQuery.css (elem, "padding" + cssExpand [i], true, styles);

			// Para "borde" o "margen", agregar borde
			if (caja! == "relleno") {
				delta + = jQuery.css (elem, "border" + cssExpand [i] + "Width", true, styles);

			// Pero de todas formas mantente al tanto de ello
			} else {
				extra + = jQuery.css (elem, "border" + cssExpand [i] + "Width", true, styles);
			}

		// Si llegamos aquí con un cuadro de borde (contenido + relleno + borde), estamos buscando "contenido" o
		// "relleno" o "margen"
		} else {

			// Para "contenido", resta el relleno
			if (cuadro === "contenido") {
				delta - = jQuery.css (elem, "padding" + cssExpand [i], true, styles);
			}

			// Para "contenido" o "relleno", resta el borde
			si (caja! == "margen") {
				delta - = jQuery.css (elem, "border" + cssExpand [i] + "Width", true, styles);
			}
		}
	}

	// Cuenta para el contenido de la caja de desplazamiento de la caja de contenido positiva cuando se solicite, proporcionando computedVal
	if (! isBorderBox && computedVal> = 0) {

		// offsetWidth / offsetHeight es una suma redondeada de contenido, relleno, margen de desplazamiento y borde
		// Suponiendo un canal entero de desplazamiento, reste el resto y redondee hacia abajo
		delta + = Math.max (0, Math.ceil (
			elem ["offset" + dimension [0] .toUpperCase () + dimension.slice (1)] -
			computedVal -
			delta
			extra -
			0.5
		));
	}

	retorno delta
}

función getWidthOrHeight (elemento, dimensión, extra) {

	// Comenzar con el estilo computado
	var styles = getStyles (elem),
		val = curCSS (elemento, dimensión, estilos),
		isBorderBox = jQuery.css (elem, "boxSizing", false, styles) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Soporte: Firefox <= 54
	// Devuelve un valor de no píxel de confusión o finge ignorancia, según corresponda.
	if (rnumnonpx.test (val)) {
		si (! extra) {
			devuelve val;
		}
		val = "auto";
	}

	// Compruebe el estilo en el caso de un navegador que devuelva valores no confiables
	// for getComputedStyle recae silenciosamente en el confiable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		(support.boxSizingReliable () || val === elem.style [dimensión]);

	// Retroceder a offsetWidth / offsetHeight cuando el valor es "auto"
	// Esto sucede para los elementos en línea sin configuración explícita (gh-3571)
	// Soporte: Android <= 4.1 - 4.3 solamente
	// También use offsetWidth / offsetHeight para las dimensiones en línea mal reportadas (gh-3602)
	si (val === "auto" ||
		! parseFloat (val) && jQuery.css (elem, "display", false, styles) === "inline") {

		val = elem ["offset" + dimension [0] .toUpperCase () + dimension.slice (1)];

		// offsetWidth / offsetHeight proporciona valores de cuadro de borde
		valueIsBorderBox = true;
	}

	// Normalizar "" y auto
	val = parseFloat (val) || 0;

	// Ajustar para el modelo de caja del elemento
	retorno (val +
		cajaModeloAjustes
			elem
			dimensión,
			extra || (isBorderBox? "border": "content"),
			valueIsBorderBox,
			estilos

			// Proporcionar el tamaño computado actual para solicitar el cálculo del margen de desplazamiento (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend ({

	// Añadir ganchos de propiedad de estilo para anular el valor predeterminado
	// comportamiento de obtener y establecer una propiedad de estilo
	cssHooks: {
		opacidad: {
			get: function (elem, computed) {
				si (calculado) {

					// Siempre debemos recuperar un número de la opacidad
					var ret = curCSS (elem, "opacidad");
					devuelve ret === ""? "1": ret;
				}
			}
		}
	}

	// No agregue automáticamente "px" a estas propiedades posiblemente sin unidades
	cssNumber: {
		"animationIterationCount": verdadero,
		"columnCount": verdadero,
		"fillOpacity": verdadero,
		"flexGrow": verdadero,
		"flexShrink": verdadero,
		"fontWeight": verdadero,
		"lineHeight": verdadero,
		"opacidad": verdadero,
		"orden": verdadero,
		"huérfanos": cierto,
		"viudas": cierto,
		"zIndex": verdadero,
		"zoom": verdadero
	}

	// Añadir propiedades cuyos nombres desees corregir antes
	// configurando u obteniendo el valor
	cssProps: {},

	// Obtener y establecer la propiedad de estilo en un nodo DOM
	estilo: función (elemento, nombre, valor, extra) {

		// No establecer estilos en texto y nodos de comentarios
		if (! elem || elem.nodeType === 3 || elem.nodeType === 8 ||! elem.style) {
			regreso;
		}

		// Asegúrate de que estamos trabajando con el nombre correcto
		var ret, tipo, ganchos,
			origName = camelCase (nombre),
			isCustomProp = rcustomProp.test (nombre),
			estilo = elem.style;

		// Asegúrese de que estamos trabajando con el nombre correcto. Nosotros no
		// quiero consultar el valor si es una propiedad personalizada de CSS
		// ya que son definidos por el usuario.
		if (! isCustomProp) {
			name = finalPropName (origName);
		}

		// Obtiene el gancho para la versión prefijada, luego la versión no prefijada
		hooks = jQuery.cssHooks [nombre] || jQuery.cssHooks [origen];

		// Comprueba si estamos configurando un valor
		si (valor! == indefinido) {
			type = typeof value;

			// Convertir "+ =" o "- =" a números relativos (# 7345)
			if (tipo === "cadena" && (ret = rcssNum.exec (valor)) && ret [1]) {
				value = adjustCSS (elem, name, ret);

				// Corrige el error # 9237
				tipo = "número";
			}

			// Asegúrese de que los valores nulos y NaN no estén establecidos (# 7116)
			if (valor == nulo || valor! == valor) {
				regreso;
			}

			// Si se pasó un número, agregue la unidad (a excepción de ciertas propiedades de CSS)
			if (tipo === "número") {
				valor + = ret && ret [3] || (jQuery.cssNumber [origName]? "": "px");
			}

			// background- * props afectan los valores del clon original
			if (! support.clearCloneStyle && value === "" && name.indexOf ("background") === 0) {
				estilo [nombre] = "heredar";
			}

			// Si se proporcionó un gancho, use ese valor, de lo contrario, simplemente configure el valor especificado
			if (! hooks ||! ("set" en hooks) ||
				(value = hooks.set (elem, value, extra))! == undefined) {

				if (isCustomProp) {
					style.setProperty (nombre, valor);
				} else {
					estilo [nombre] = valor;
				}
			}

		} else {

			// Si se proporcionó un gancho, obtenga el valor no computado desde allí
			if (hooks && "get" in hooks &&
				(ret = hooks.get (elem, false, extra))! == undefined) {

				volver ret
			}

			// De lo contrario, simplemente obtenga el valor del objeto de estilo.
			estilo de retorno [nombre];
		}
	}

	css: function (elem, name, extra, styles) {
		var val, num, ganchos,
			origName = camelCase (nombre),
			isCustomProp = rcustomProp.test (nombre);

		// Asegúrese de que estamos trabajando con el nombre correcto. Nosotros no
		// quiere modificar el valor si es una propiedad personalizada de CSS
		// ya que son definidos por el usuario.
		if (! isCustomProp) {
			name = finalPropName (origName);
		}

		// Probar el nombre con prefijo seguido del nombre sin prefijo
		hooks = jQuery.cssHooks [nombre] || jQuery.cssHooks [origen];

		// Si se proporcionó un gancho, obtenga el valor calculado desde allí
		if (hooks && "get" in hooks) {
			val = hooks.get (elem, true, extra);
		}

		// De lo contrario, si existe una manera de obtener el valor computado, use ese
		if (val === indefinido) {
			val = curCSS (elemento, nombre, estilos);
		}

		// Convertir "normal" a valor computado
		if (val === "normal" && nombre en cssNormalTransform) {
			val = cssNormalTransform [nombre];
		}

		// Hacer numérico si fue forzado o si se proporcionó un calificador y val parece numérico
		if (extra === "" || extra) {
			num = parseFloat (val);
			devuelve extra === verdadero || isFinite (num)? num || 0: val;
		}

		devuelve val;
	}
});

jQuery.each (["altura", "ancho"], función (i, dimensión) {
	jQuery.cssHooks [dimensión] = {
		get: function (elem, computed, extra) {
			si (calculado) {

				// Ciertos elementos pueden tener información de dimensión si los mostramos invisiblemente
				// pero debe tener un estilo de visualización actual que beneficie
				devolver rdisplayswap.test (jQuery.css (elem, "display")) &&

					// Soporte: Safari 8+
					// Las columnas de la tabla en Safari tienen offsetWidth y cero distintos de cero
					// getBoundingClientRect (). width a menos que se cambie la visualización.
					// Soporte: IE <= 11 solamente
					// Ejecutando getBoundingClientRect en un nodo desconectado
					// en IE lanza un error.
					(! elem.getClientRects (). length ||! elem.getBoundingClientRect (). width)?
						swap (elem, cssShow, function () {
							devuelve getWidthOrHeight (elemento, dimensión, extra);
						}):
						getWidthOrHeight (elemento, dimensión, extra);
			}
		}

		set: function (elem, value, extra) {
			coincidencias var
				styles = getStyles (elem),
				isBorderBox = jQuery.css (elem, "boxSizing", false, styles) === "border-box",
				restar = extra && boxModelAdjustment (
					elem
					dimensión,
					extra,
					isBorderBox,
					estilos
				);

			// Tenga en cuenta las dimensiones no confiables del cuadro de frontera comparando el desplazamiento * con el cálculo y
			// simular un cuadro de contenido para obtener bordes y relleno (gh-3699)
			if (isBorderBox && support.scrollboxSize () === styles.position) {
				restar - = Math.ceil (
					elem ["offset" + dimension [0] .toUpperCase () + dimension.slice (1)] -
					parseFloat (estilos [dimensión]) -
					boxModelAdjustment (elemento, dimensión, "borde", falso, estilos) -
					0.5
				);
			}

			// Convertir a píxeles si se necesita un ajuste de valor
			if (restar && (coincidencias = rcssNum.exec (valor)) &&
				(coincide con [3] || "px")! == "px") {

				elem.style [dimensión] = valor;
				value = jQuery.css (elem, dimension);
			}

			devuelve setPositiveNumber (elemento, valor, resta);
		}
	};
});

jQuery.cssHooks.marginLeft = addGetHookIf (support.reliableMarginLeft,
	función (elem, computada) {
		si (calculado) {
			return (parseFloat (curCSS (elem, "marginLeft")) ||
				elem.getBoundingClientRect (). left -
					swap (elem, {marginLeft: 0}, function () {
						devolver elem.getBoundingClientRect (). left;
					})
				) + "px";
		}
	}
);

// Estos ganchos son utilizados por animar para expandir propiedades
jQuery.each ({
	margen: "",
	relleno: "",
	ancho del borde"
}, función (prefijo, sufijo) {
	jQuery.cssHooks [prefijo + sufijo] = {
		expandir: función (valor) {
			var i = 0,
				expandido = {},

				// Asume un solo número si no es una cadena
				parts = typeof value === "string"? value.split (""): [value];

			para (; i <4; i ++) {
				expandido [prefijo + cssExpand [i] + sufijo] =
					partes [i] || partes [i - 2] || partes [0];
			}

			retorno expandido
		}
	};

	if (prefijo! == "margen") {
		jQuery.cssHooks [prefijo + sufijo] .set = setPositiveNumber;
	}
});

jQuery.fn.extend ({
	css: función (nombre, valor) {
		acceso de retorno (esta, función (elemento, nombre, valor) {
			estilos var, len,
				map = {},
				i = 0;

			if (Array.isArray (nombre)) {
				styles = getStyles (elem);
				len = nombre.longitud;

				para (; i <len; i ++) {
					mapa [nombre [i]] = jQuery.css (elem, nombre [i], falso, estilos);
				}

				mapa de retorno;
			}

			valor de retorno! == indefinido?
				jQuery.style (elem, nombre, valor):
				jQuery.css (elem, nombre);
		}, nombre, valor, argumentos.longitud> 1);
	}
});


Función Tween (elemento, opciones, prop, fin, suavizado) {
	devolver nuevo Tween.prototype.init (elemento, opciones, prop, end, easing);
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function (elem, options, prop, end, easing, unit) {
		this.elem = elem;
		this.prop = prop;
		this.easing = flexibilización || jQuery.easing._default;
		this.options = opciones;
		this.start = this.now = this.cur ();
		this.end = end;
		this.unit = unidad || (jQuery.cssNumber [prop]? "": "px");
	}
	cur: function () {
		var hooks = Tween.propHooks [this.prop];

		Ganchos de retorno && hooks.get?
			hooks.get (esto):
			Tween.propHooks._default.get (esto);
	}
	ejecutar: función (porcentaje) {
		var aliviado,
			hooks = Tween.propHooks [this.prop];

		if (this.options.duration) {
			this.pos = eased = jQuery.easing [this.easing] (
				porcentaje, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = aliviado = porcentaje;
		}
		this.now = (this.end - this.start) * suavizado + this.start;

		if (this.options.step) {
			this.options.step.call (this.elem, this.now, this);
		}

		if (hooks && hooks.set) {
			hooks.set (este);
		} else {
			Tween.propHooks._default.set (este);
		}
		devuelve esto
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_defecto: {
		get: function (tween) {
			resultado var

			// Use una propiedad en el elemento directamente cuando no es un elemento DOM,
			// o cuando no hay una propiedad de estilo coincidente que exista.
			si (tween.elem.nodeType! == 1 ||
				tween.elem [tween.prop]! = nulo && tween.elem.style [tween.prop] == null) {
				devuelve tween.elem [tween.prop];
			}

			// Pasando una cadena vacía como un tercer parámetro a .css automáticamente
			// intenta un parseFloat y retroceder a una cadena si el análisis falla.
			// Los valores simples como "10px" se analizan a Float;
			// los valores complejos como "rotate (1rad)" se devuelven como están.
			result = jQuery.css (tween.elem, tween.prop, "");

			// Las cadenas vacías, nulas, indefinidas y "automáticas" se convierten a 0.
			retorno! resultado || resultado === "auto"? 0: resultado;
		}
		set: function (tween) {

			// Use el gancho de paso para la espalda compat.
			// Usa cssHook si está ahí.
			// Use .style si está disponible y use propiedades simples donde esté disponible.
			if (jQuery.fx.step [tween.prop]) {
				jQuery.fx.step [tween.prop] (tween);
			} else if (tween.elem.nodeType === 1 &&
				(tween.elem.style [jQuery.cssProps [tween.prop]]! = null ||
					jQuery.cssHooks [tween.prop])) {
				jQuery.style (tween.elem, tween.prop, tween.now + tween.unit);
			} else {
				tween.elem [tween.prop] = tween.now;
			}
		}
	}
};

// Soporte: IE <= 9 solamente
// Enfoque basado en pánico para configurar cosas en nodos desconectados
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function (tween) {
		if (tween.elem.nodeType && tween.elem.parentNode) {
			tween.elem [tween.prop] = tween.now;
		}
	}
};

jQuery.easing = {
	lineal: función (p) {
		volver p;
	}
	swing: función (p) {
		return 0.5 - Math.cos (p * Math.PI) / 2;
	}
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 punto de extensión
jQuery.fx.step = {};




var
	fx ahora en progreso
	rfxtypes = / ^ (?: toggle | show | hide) $ /,
	rrun = / queueHooks $ /;

función de horario () {
	if (inProgress) {
		if (document.hidden === false && window.requestAnimationFrame) {
			window.requestAnimationFrame (schedule);
		} else {
			window.setTimeout (schedule, jQuery.fx.interval);
		}

		jQuery.fx.tick ();
	}
}

// Las animaciones creadas sincrónicamente se ejecutarán sincrónicamente.
función createFxNow () {
	window.setTimeout (function () {
		fxNow = indefinido;
	});
	return (fxNow = Date.now ());
}

// Generar parámetros para crear una animación estándar
función genFx (type, includeWidth) {
	var que
		i = 0,
		attrs = {altura: tipo};

	// Si incluimos el ancho, el valor del paso es 1 para hacer todos los valores de cssExpand,
	// de lo contrario, el valor del paso es 2 para saltar sobre la izquierda y la derecha
	includeWidth = includeWidth? 1: 0;
	para (; i <4; i + = 2 - includeWidth) {
		que = cssExpand [i];
		attrs ["margen" + que] = attrs ["relleno" + que] = tipo;
	}

	if (includewidth) {
		attrs.opacity = attrs.width = tipo;
	}

	regresa attrs;
}

función createTween (valor, prop, animación) {
	var tween
		collection = (Animation.tweeners [prop] || []) .concat (Animation.tweeners ["*"]),
		índice = 0,
		length = collection.length;
	para (; índice <longitud; índice ++) {
		if ((tween = collection [index] .call (animación, prop, valor)) {

			// Hemos terminado con esta propiedad
			volver entre
		}
	}
}

función defaultPrefilter (elem, props, opts) {
	var prop, valor, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "ancho" en accesorios || "altura" en puntales,
		anim = esto
		orig = {},
		estilo = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree (elem),
		dataShow = dataPriv.get (elem, "fxshow");

	// Las animaciones que saltan en la cola secuestran los ganchos fx
	if (! opts.queue) {
		hooks = jQuery._queueHooks (elem, "fx");
		if (hooks.unqueued == null) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function () {
				si (! hooks.unqueued) {
					fuego antiguo ();
				}
			};
		}
		ganchos.unqueued ++;

		anim.always (function () {

			// Asegúrese de que se llame al controlador completo antes de que se complete
			anim.always (function () {
				ganchos.
				if (! jQuery.queue (elem, "fx") .length) {
					hooks.empty.fire ();
				}
			});
		});
	}

	// Detectar mostrar / ocultar animaciones
	para (prop en props) {
		valor = props [prop];
		if (rfxtypes.test (valor)) {
			eliminar props [prop];
			toggle = toggle || valor === "alternar";
			if (value === (hidden? "hide": "show")) {

				// Pretende estar oculto si se trata de un "show" y
				// todavía hay datos de un show / hide detenido
				if (valor === "show" && dataShow && dataShow [prop]! == undefined) {
					oculto = verdadero;

				// Ignorar todos los otros datos de mostrar / ocultar no-op
				} else {
					continuar;
				}
			}
			orig [prop] = dataShow && datashow [prop] || jQuery.style (elem, prop);
		}
	}

	// Salta si esto es un no-op como .hide (). Hide ()
	propTween =! jQuery.isEmptyObject (props);
	if (! propTween && jQuery.isEmptyObject (orig)) {
		regreso;
	}

	// Restrinja los estilos de "desbordamiento" y "visualización" durante las animaciones de cuadro
	if (isBox && elem.nodeType === 1) {

		// Soporte: IE <= 9 - 11, Edge 12 - 15
		// Registre los 3 atributos de desbordamiento porque IE no infiere la taquigrafía
		// de overflowX y overflowY con valores idénticos y Edge simplemente reflejos
		// el valor overflowX allí.
		opts.overflow = [style.overflow, style.overflowX, style.overflowY];

		// Identificar un tipo de pantalla, prefiriendo datos antiguos de mostrar / ocultar sobre la cascada de CSS
		restoreDisplay = dataShow && dataShow.display;
		if (restoreDisplay == null) {
			restoreDisplay = dataPriv.get (elem, "display");
		}
		display = jQuery.css (elem, "display");
		if (display === "none") {
			if (restoreDisplay) {
				display = restoreDisplay;
			} else {

				// Obtenga valores no vacantes forzando temporalmente la visibilidad
				showHide ([elem], true);
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css (elem, "display");
				showHide ([elem]);
			}
		}

		// Animar elementos en línea como bloques en línea
		if (display === "inline" || display === "inline-block" && restoreDisplay! = null) {
			if (jQuery.css (elem, "float") === "none") {

				// Restaure el valor de visualización original al final de las animaciones de mostrar / ocultar puras
				si (! proptween) {
					anim.done (function () {
						style.display = restoreDisplay;
					});
					if (restoreDisplay == null) {
						display = style.display;
						restoreDisplay = display === "none"? "" : monitor;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if (opts.overflow) {
		style.overflow = "oculto";
		anim.always (function () {
			style.overflow = opts.overflow [0];
			style.overflowX = opts.overflow [1];
			style.overflowY = opts.overflow [2];
		});
	}

	// Implementar mostrar / ocultar animaciones
	propTween = false;
	para (prop en orig) {

		// Configuración general de mostrar / ocultar para este elemento animación
		si (! proptween) {
			if (datashow) {
				if ("oculto" en dataShow) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access (elem, "fxshow", {display: restoreDisplay});
			}

			// Almacenar oculto / visible para alternar así que `.stop (). Toggle ()` "invierte"
			si (alternar) {
				dataShow.hidden =! hidden;
			}

			// Mostrar elementos antes de animarlos
			if (oculto) {
				showHide ([elem], true);
			}

			/ * eslint-disable no-loop-func * /

			anim.done (function () {

			/ * eslint-enable no-loop-func * /

				// El paso final de una animación "oculta" es en realidad esconder el elemento
				si (! oculto) {
					showHide ([elem]);
				}
				dataPriv.remove (elem, "fxshow");
				para (prop en orig) {
					jQuery.style (elem, prop, orig [prop]);
				}
			});
		}

		// Configuración por propiedad
		propTween = createTween (hidden? dataShow [prop]: 0, prop, anim);
		if (! (prop en datashow)) {
			dataShow [prop] = propTween.start;
			if (oculto) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

función propFilter (props, specialEasing) {
	índice var, nombre, suavizado, valor, ganchos;

	// camelCase, specialEasing y expand cssHook pass
	para (índice en props) {
		nombre = camelCase (índice);
		easing = specialEasing [nombre];
		valor = props [índice];
		if (Array.isArray (valor)) {
			flexibilización = valor [1];
			value = props [index] = value [0];
		}

		si (índice! == nombre) {
			props [nombre] = valor;
			eliminar props [índice];
		}

		hooks = jQuery.cssHooks [nombre];
		if (ganchos && "expandir" en ganchos) {
			value = hooks.expand (value);
			eliminar props [nombre];

			// No del todo $ .extend, esto no sobrescribirá las claves existentes.
			// Reutilizando 'índice' porque tenemos el "nombre" correcto
			para (índice en valor) {
				if (! (index en props)) {
					props [índice] = valor [índice];
					specialEasing [index] = easing;
				}
			}
		} else {
			specialEasing [name] = easing;
		}
	}
}

Función de animación (elemento, propiedades, opciones) {
	resultado var
		detenido,
		índice = 0,
		length = Animation.prefilters.length,
		aplazado = jQuery.Deferred (). always (function () {

			// No coincide con elem en el selector animado
			eliminar tick.elem;
		}),
		tick = function () {
			si (detenido) {
				falso retorno;
			}
			var currentTime = fxNow || createFxNow (),
				restantes = Math.max (0, animation.startTime + animation.duration - currentTime),

				// Soporte: solo Android 2.3
				// El error de fallo arcaico no nos permitirá usar `1 - (0.5 || 0)` (# 12497)
				temp = restantes / animation.duration || 0,
				porcentaje = 1 - temperatura,
				índice = 0,
				length = animation.tweens.length;

			para (; índice <longitud; índice ++) {
				animation.tweens [index] .run (porcentaje);
			}

			deferred.notifyWith (elem, [animación, porcentaje, restante]);

			// Si hay más que hacer, cede
			si (porcentaje <1 & & longitud) {
				retorno restante
			}

			// Si esta era una animación vacía, sintetiza una notificación de progreso final
			si (! longitud) {
				deferred.notifyWith (elem, [animación, 1, 0]);
			}

			// Resolver la animación y reportar su conclusión.
			deferred.resolveWith (elem, [animación]);
			falso retorno;
		}
		animación = aplazado.promiso ({
			elem: elem,
			props: jQuery.extend ({}, propiedades),
			opta: jQuery.extend (true, {
				especialEasing: {},
				suavizado: jQuery.easing._default
			}, opciones),
			Propiedades originales: propiedades,
			Opciones originales: opciones,
			startTime: fxNow || createFxNow (),
			duración: options.duration,
			preadolescentes: [],
			createTween: function (prop, end) {
				var tween = jQuery.Tween (elem, animation.opts, prop, end,
						animation.opts.specialEasing [prop] || animación.opts.easing);
				animation.tweens.push (tween);
				volver entre
			}
			detener: función (gotoEnd) {
				índice var = 0,

					// Si vamos al final, queremos ejecutar todas las interpolaciones
					// de lo contrario nos saltamos esta parte
					longitud = gotoEnd? animation.tweens.length: 0;
				si (detenido) {
					devuelve esto
				}
				detenido = verdadero;
				para (; índice <longitud; índice ++) {
					animation.tweens [index] .run (1);
				}

				// Resolver cuando jugamos el ultimo cuadro; de lo contrario, rechazar
				if (gotoEnd) {
					deferred.notifyWith (elem, [animación, 1, 0]);
					deferred.resolveWith (elem, [animation, gotoEnd]);
				} else {
					deferred.rejectWith (elem, [animation, gotoEnd]);
				}
				devuelve esto
			}
		}),
		props = animation.props;

	propFilter (props, animation.opts.specialEasing);

	para (; índice <longitud; índice ++) {
		result = Animation.prefilters [index] .call (animation, elem, props, animation.opts);
		si (resultado) {
			if (isFunction (result.stop)) {
				jQuery._queueHooks (animation.elem, animation.opts.queue) .stop =
					result.stop.bind (resultado);
			}
			resultado de retorno
		}
	}

	jQuery.map (props, createTween, animation);

	if (isFunction (animation.opts.start)) {
		animation.opts.start.call (elemento, animación);
	}

	// Adjuntar devoluciones de llamada de opciones
	animación
		.progress (animation.opts.progress)
		.done (animation.opts.done, animation.opts.complete)
		.fail (animation.opts.fail)
		.always (animation.opts.always);

	jQuery.fx.timer (
		jQuery.extend (marca, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );