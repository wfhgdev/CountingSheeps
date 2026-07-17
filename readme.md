# Counting Sheeps by William Hernández🐑

Un pequeño script en JavaScript que analiza un rebaño mixto y cuenta cuántas ovejas han sobrevivido a la presencia de los lobos. Proyecto desarrollado para el módulo **Frontend: Javascript & APIs** de **JM Factoria**.


# Github Pages

[Enlace a GitHub Pages](https://wfhgdev.github.io/CountingSheeps/)

## 📋 Descripción del Reto

La función recibe una lista de valores booleanos (`list`) donde:
*   `true` representa una **oveja**.
*   `false` representa un **lobo**.

### Reglas del ejercicio:
1. Contar la cantidad total de ovejas (`true`) excluyendo a los lobos.
2. Si la lista no contiene ovejas (solo lobos), debe retornar un mensaje advirtiendo que los lobos se han comido al rebaño.

---

## 🚀 Casos de Uso & Pruebas

El código está diseñado y testeado para cubrir los siguientes escenarios obligatorios:

### Caso 1: Rebaño con ovejas y lobos
*   **Input:** 
    ```javascript
    const list1 = [ true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true ];
    ```
*   **Output esperado (Console):** 
    `There are 17 sheep in total`

### Caso 2: Rebaño sin ovejas (Solo lobos)
*   **Input:** 
    ```javascript
    const list2 = [ false, false, false ];
    ```
*   **Output esperado (Console):** 
    `UPS!!! Wolfs eaten Sheeps`

### Ejecución de las pruebas

```
const list1 = [ true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true ];
const list2 = [ false, false, false ];

console.log(countSheeps(list1)); // Output: There are 17 sheep in total
console.log(countSheeps(list2)); // Output: UPS!!! Wolfs eaten Sheeps
```