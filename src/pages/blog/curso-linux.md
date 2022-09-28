# Curso de Linux desde cero

## Tabla de contenidos 📚

## 1. Introducción a Linux 🐧

### 1.1. Presentación e introducción del curso

#### ¿Porqué es importante?

- Opera en millones de servidores en internet.
- Amo y señior de las super computadoras.
- Teléfonos Android corren con Linux.
- Posibilidad de cubrir las necesidades de cada usuario.

#### ¿Qué aprenderas en este curso?

- Conceptos teóricos y prácticos de Linux
- Distribución y jerarquía de carpetas Linux
- Uso de la terminal y línea de comandos.
- Herramientas provistas por la terminal Linux
- Manipulación del sistema operativo a través de la terminal y línea de comandos.
- Búsquedas utilizando la terminal de línea de comandos.
- Automatización de procesos.

#### ¿Para quién es este curso?

- Para todo aquel que desee dar sus primeros pasos en el mundo de Linux, servidores, seguridad informática o cualquier persona que desee hacer una tarea específica con este sistema operativo.

### 1.2. Historia de Linux - Principales distribuciones y derivados

#### Software libre

- Software libre es aquel que puede ser usado, estudiado, modificado y redistribuido libremente por cualquiera. Proyectis que permiten a los desarrolladores leer y modificar el código fuente para adaptarlos a sus necesidades.

#### ¿Qué es GNU?

- GNU es el sistema operativo libre creado por Richar Stallman en 1983. GNU es un acrónimo de GNU's Not Unix. GNU es un sistema operativo que se compone de software libre y que puede ser instalado en cualquier computadora. No contaba con un kernel propio.

#### ¿Qué es Linux?

- Linux es un kernel de sistema operativo libre creado por Linus Torvalds, a sus 21 años, en 1991. Linux es un sistema operativo que se compone de software libre y que puede ser instalado en cualquier computadora.

> La manera correcta de llamar a lo que todos conocemos como Linux es en realidad GNU/Linux.

#### ¿Qué es una distribución (distro)?

- Una distribución Linux es un sistema operativo basado en Linux. Al ser software libre los desarrolladores, las empresas o entiaddes pueden rear sus propios sistemas operativos adaptándolo a sus necesidades.

- Existen sistemas operativos Linux para todo tipo de usuarios, desde los más básicos hasta los más avanzados. Y si no existe una distribución que se adapte a tus necesidades puedes crear tu propia distribución.

#### Distribuciones Linux más importantes

- Debian: Enfocada a usuarios profesionales.
- RedHat: Enfocada a usuarios empresariales.
- Slackware: Enfocada a usuarios bastante avanzados.

#### Distribuciones derivadas de Debian

- Ubuntu: Enfocada a usuarios principiantes.
- Linux Mint: Enfocada a usuarios principiantes.
- Kali Linux: Enfocada a usuarios avanzados y seguridad informática.

#### Distribuciones derivadas de RedHat

- CentOS: Enfocada a usuarios avanzados.

### 1.3. ¿Qué es una interfaz?

- Interfaz es todo aquello que permite la interacción entre 2 sistemas, para que interactuen el uno sobre el otro. En el caso de Linux, la interfaz es la que permite la interacción entre el usuario y el sistema operativo.

### 1.4. CLI - Command Line Interface

- Es un programa que nos permite dar instrucciones a las computadoras através de texto plano. Dichas instrucciones se ejecutan en una capa de bajo nivel que permite la velocidad de ejecución sea notiriamente superior a la interfáz gráfica.

### 1.5. ¿Qué lograré con CLI?

- Navegar entre directorios.
- Crear, mover, copiar, remover archivos y carpetas.
- Ejecutar archivos y programas.
- Ver y detener procesos.
- Crear tareas programadas para automatizar procesos.
- Hacer despligues de sitios web.
- Ejecutar comandos especializados y configurados para ciertos programas.

---

## 2. Linux - Primeros pasos 🐧

### 2.1 Introducción a los directorios

#### Filesystem Hierachy Standard (FHS)

- Es un estándar que define la estructura de directorios y archivos en Linux. Es un estándar que se debe seguir para que los programas puedan funcionar correctamente. (/ = raíz)

#### Tipos de directorios

- Directorios de uso compartido: Aquellos directorios al cual pueden tener acceso diferentes usuarios.
- Directorios no compartibles: Sólo modificables y accesibles por el usuario root.
- Dirctorios variables: Aquellos directorios cuya información varía. Generalmente hablamos de los loggers del sistema y de los programas.
  Directorios estáticos: Modificables por el root, pero pueden ser vistos por otros usuarios.

### 2.2 Entendiendo la funcionalidad de los directorios

| Directorio | Función                                                        |
| ---------- | -------------------------------------------------------------- |
| /bin:      | Contiene los binarios ejecutables del sistema.                 |
| /boot:     | Contiene los archivos necesarios para el arranque del sistema. |
| /dev:      | Contiene los archivos de dispositivos.                         |
| /etc:      | Contiene los archivos de configuración del sistema.            |
| /home:     | Contiene los directorios de los usuarios.                      |
| /lib:      | Contiene las librerías del sistema.                            |
| /media:    | Contiene los puntos de montaje de los dispositivos.            |
| /mnt:      | Contiene los puntos de montaje de los dispositivos.            |
| /opt:      | Contiene los archivos de programas instalados por el usuario.  |
| /proc:     | Contiene información sobre los procesos del sistema.           |
| /root:     | Contiene el directorio del usuario root.                       |
| /sbin:     | Contiene los binarios ejecutables del sistema.                 |
| /srv:      | Contiene los archivos de servicios del sistema.                |
| /sys:      | Contiene información sobre los dispositivos del sistema.       |
| /tmp:      | Contiene archivos temporales.                                  |
| /usr:      | Contiene los archivos de programas instalados por el usuario.  |
| /var:      | Contiene archivos variables.                                   |

---

## 3. CLI - Navegación y manipulación de directorios 📁

| Comando | Función                                                 |
| ------- | ------------------------------------------------------- |
| cd      | Cambia de directorio.                                   |
| pwd     | Muestra el directorio actual.                           |
| ls      | Muestra el contenido del directorio actual.             |
| mkdir   | Crea un directorio.                                     |
| rmdir   | Elimina un directorio.                                  |
| rm      | Elimina un archivo.                                     |
| cp      | Copia un archivo o directorio.                          |
| mv      | Mueve o renombra un archivo o directorio.               |
| touch   | Crea un archivo.                                        |
| cat     | Muestra el contenido de un archivo.                     |
| head    | Muestra las primeras 10 líneas de un archivo.           |
| tail    | Muestra las últimas 10 líneas de un archivo.            |
| less    | Muestra el contenido de un archivo.                     |
| grep    | Filtra el contenido de un archivo.                      |
| wc      | Cuenta las líneas, palabras y caracteres de un archivo. |
| find    | Busca archivos o directorios.                           |
| ~       | Directorio del usuario actual.                          |
| .       | Directorio actual.                                      |
| ..      | Directorio padre.                                       |

---

## 4. Herramientas de terminal 🛠

| Comando | Función                            |
| ------- | ---------------------------------- |
| TOP     | Muestra los procesos en ejecución. |
| PS      | Muestra los procesos en ejecución. |
| KILL    | Mata un proceso.                   |
| CRONTAB | Crea tareas programadas.           |
| WGET    | Descarga archivos de internet.     |
| CURL    | Descarga archivos de internet.     |
| TAR     | Empaqueta y comprime archivos.     |
| ZIP     | Comprime archivos.                 |
| UNZIP   | Descomprime archivos.              |

---

## 5. Comandos de búsqueda 🔍

| Comando | Función                                     |
| ------- | ------------------------------------------- |
| FIND    | Busca archivos o directorios.               |
| LS      | Muestra el contenido del directorio actual. |
| GREP    | Filtra el contenido de un archivo.          |

---

## 6. Usuarios y permisos 🔑

| Comando  | Función                                           |
| -------- | ------------------------------------------------- |
| USERADD  | Crea un usuario.                                  |
| USERDEL  | Elimina un usuario.                               |
| PASSWD   | Cambia la contraseña de un usuario.               |
| GROUPADD | Crea un grupo.                                    |
| GROUPDEL | Elimina un grupo.                                 |
| CHOWN    | Cambia el propietario de un archivo o directorio. |
| CHMOD    | Cambia los permisos de un archivo o directorio.   |
| SUDO     | Ejecuta un comando como otro usuario.             |
| SU       | Ejecuta un comando como otro usuario.             |
| VISUDO   | Edita el archivo de configuración de sudo.        |
| WHOAMI   | Muestra el nombre del usuario actual.             |

### 6.1 Tipos de permisos

rwxrwxrwx: 9 bits de permisos
rwx: 3 bits de permisos para el propietario
rwx: 3 bits de permisos para el grupo
rwx: 3 bits de permisos para otros

| Permiso | Valor | Descripción                                  |
| ------- | ----- | -------------------------------------------- |
| r       | 4     | Permite leer el archivo o directorio.        |
| w       | 2     | Permite escribir en el archivo o directorio. |
| x       | 1     | Permite ejecutar el archivo o directorio.    |
| -       | 0     | No permite realizar ninguna acción.          |

### 6.2 Combinaciones de permisos

| Combinación | Valor | Descripción                                                |
| ----------- | ----- | ---------------------------------------------------------- |
| rwx         | 7     | Permite leer, escribir y ejecutar el archivo o directorio. |
| rw-         | 6     | Permite leer y escribir el archivo o directorio.           |
| r-x         | 5     | Permite leer y ejecutar el archivo o directorio.           |
| r--         | 4     | Permite leer el archivo o directorio.                      |
| -wx         | 3     | Permite escribir y ejecutar el archivo o directorio.       |
| -w-         | 2     | Permite escribir el archivo o directorio.                  |
| --x         | 1     | Permite ejecutar el archivo o directorio.                  |
| ---         | 0     | No permite realizar ninguna acción.                        |

---
