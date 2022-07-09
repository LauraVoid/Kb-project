export default [
    {
      name: 'Logjam',
      info: 'Clave de cifrado DH menor a 2048 bits, si tienen la curva antes del DHE menor a 2048 no se notifica. Tambien cuando no tiene curva se reporta como menor a 2048',
    },
    {
      name: 'SWEET-32',
      info: 'Suites de cifrado TLS con tamaño de bloque de 64 bits CBC3-SHA, DES-CB3 indican que tiene un bloque de 64bits',
    },
    {
      name: 'POODLE',
      info: 'Si el recurso tiene ssl v3.o y CBC3 es vulnerable a poodle',
    },
    {
      name: 'Beast',
      info: 'Si el servidor soporta TLS 1.0 o cualquier version de SSL',
    },
    {
      name: 'DROWN',
      info: 'Si soporta SSL v2 ',
    },
    {
      name: 'PFS',
      info: 'Inadecuada configuración (no preferido por el servidor). PFS no soportado ( solo se ven los cifrados , no ultima columna)',
    }
]