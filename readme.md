#### Consola Node JS conectada con SQLite

Nos da la posibilidad de ejecutar sentencias sql mediante la consola personalizadas a tu gusto.

## Leer todos los registros

```
node . --read:Contact
//node . --read:(table)
```

## Crear registro

```
node . --create:Contact --firstname=Ricardo --lastname="Mendoza Arjona"  --phone=2334234 --email=ricardo@gmail.com
// node . --create:(table) --(parameter)=(value)
```

**Nota:** al pasar mas de una palabra ponerlo entre comillas

## Actualizar registro por id

```
node . --update:Contact:1 --firstname=Ricardo323 --lastname="Mendoza Arjona"  --phone=2334234 --email=ricardo3@gmail.com
// node . --update:(table):(id) --(parameter)=(value)
```

## Mostrar registro por id

```
node . --findbyid:Contact:5
// node . --findbyid:(table):(id)
```

## Eliminar registro por id

```
node . --delete:Contact:5
// node . --delete:(table):(id)
```
