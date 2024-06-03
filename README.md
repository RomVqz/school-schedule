# School Schedule CRUD

Este proyecto es un ejemplo de una aplicación CRUD simple para gestionar horarios escolares utilizando Motoko y desplegada en el Internet Computer.

## Estructura del Proyecto

- `src/Schedule.mo`: Contiene el modelo y la lógica CRUD para los horarios escolares.
- `src/Main.mo`: Contiene el actor principal que instancia el actor de `Schedule`.

## Comandos para Desplegar

```bash
dfx start --background
dfx deploy

## Comandos para Desplegar

"Añadir una entrada" 
dfx canister call schedule addEntry '(record {id = 1; course = "Matemáticas"; day = "Lunes"; startTime = "08:00"; endTime = "10:00"})'

"Listar todas las entradas"
dfx canister call schedule listEntries

"Obtener una entrada por ID"
dfx canister call schedule getEntry '(1)'

"Actualizar una entrada"
dfx canister call schedule updateEntry '(record {id = 1; course = "Física"; day = "Lunes"; startTime = "08:00"; endTime = "10:00"})'

"Eliminar una entrada"
dfx canister call schedule deleteEntry '(1)'


## 4. Desplegar y Probar

1. Inicia el entorno de desarrollo local de Internet Computer:
   ```bash
   dfx start --background


"Despliega tu proyecto"
dfx deploy
