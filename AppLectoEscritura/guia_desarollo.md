Esta es una adición breve a la guía de ejecución e instalación listada [**aquí**](./README.md).

# 📋 Dependencias

>**Nota**: Esta es es un listado de de configuraciones de herramientas y entornos, pero no es la única forma. Visita la [documentación oficial de React Native respecto al entorno de desarrollo](https://reactnative.dev/docs/environment-setup) para más información.

## Entorno de Desarrollo y Ejecución en Android

- **Entorno de Emulación de Android**: 
    - IDE: `Android Studio v2023.1`, versión `Hedgehog`.
    - Emulador: `Android Emulator`, incluido con `Android Studio`.
    - Debugger / Puente: `Android Debug Bridge v1.0.41`, incluido con `Android Studio`.

- **Imagen de Dispositivo**: 
    - Paquete de imagen: `Tiramisu API Level 33`.
    - Imagen: `Intel x86 Atom_64 System Image`.
    - Plataforma de SDK: `SDK Android SDK Platform v33`.
    - Herramientas de SDK: `Android SDK Build-Tools v33`.

- **Variables de Entorno:**
    - Ubicacion de SDKs: Variables propias `ANDROID_HOME` y `ANDROID_SDK_ROOT`, con valor `%LOCALAPPDATA%\Android\Sdk` (siguiendo instalación por defecto).
    - Herramientas de plataforma: Adiciones a variable `PATH`, con valores `%LOCALAPPDATA%\Android\Sdk\platform-tools` y `%ANDROID_HOME%\cmdline-tools\latest\bin` (siguiendo instalación por defecto).

## Entorno de Ejecución y Paquetes de React Native

- **Entorno de Ejecución y administración de paquetes de JS**:
    - Entorno de Ejecución: `Node.JS v20.11.1`, versión `lts` (instalado con Chocolatey).
    - Administracion de Paquetes: `npm` (node package manager), incluido con `NodeJS`.

- **Herramientas y paquetes de React Native**: 
    - Interfaz de React Native: `React Native CLI`, versión `latest`, **instalación local al projecto, no global al sistema**.
    - Diagnóstico de proyecto: `Cli Doctor`, incluido junto a otras herramientas de `React Native CLI`. 
    - Servidor de Debugging: `Metro`, incluido junto a otras herramientas de `React Native CLI`.

# 📖 Convenciones:

## Estructura de Directorios:

- **Directorios principales**:
    - Dependencias, codigo fuente y configuración para Android: `android/`.
    - ... para IOS: `ios/`.
    - Módulos y bibliotecas de `Node`: `node_modules/`.
    - Codigo combinado de aplicación React Native (JS): `.bundle/`.
    - Código fuente de la aplicación: `src/`.

- **Utilidades de desarrollo**:
    - Control de versiones: `git`.
    - Transpilación de `JSX` a `TS`: `Babel`.
    - Guía de Estilos: `ESLint`, `Prettier`.
    - Entorno de Pruebas de `JS`: `Jest`.
    - Control de Dependencias: `NodeJS` (paquetes de `JS` y `React Native` con `npm`), `Gemfile` (`Ruby`).
    - Ejecución, Debugging y Construcción: `Metro` (`React Native`), `Android Debug Bridge` (debugging de dispositivos Android).

- **Archivos de configuración**:
    - Patrones de omisión en versión de control con `git`: `.gitignore`.
    - Utilidad para reconstrucción rápida de aplicación `Watchman`: `.watchmanconfig`. 
    - Análisis de estilos / linting con `ESLint`: `.eslintrc.js`.
    - ... con `Prettier`: `.prettierrc.js`.
    - Herramientas de construcción `Metro`: `metro.config.js`.
    - Entorno de pruebas `Jest`: `jest.config.js`.
    - Transpilación de `JSX` a `JS` `Babel`: `babel.config.js`.
    - Dependencias, scripts y metadatos de `Node.js`: `package.json`.
    - Versiones exactas de paquetes en `Node.js`: `package-lock.json`.
    - Compilación y transpilación de projecto en `TS`: `tsconfig.json`.
    - Control de dependencias en `Ruby`: `Gemfile`.

- **Código fuente**:
    - Arte y otros archivos de decoración: `src/assets`.
    - Componentes reutilizables de `JSX` para presentación: `src/components`.
    - Componentes de `JSX` para lógica DOM y datos: `src/containers`.
    - Componentes de `JSX` para etapas de navegación / pantallas: `src/screens`.