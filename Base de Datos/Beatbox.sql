CREATE TABLE Usuario(
nombre_usuario VARCHAR(30),
id_usuario SERIAL CONSTRAINT pk_usuario PRIMARY KEY,
contrasena_usuario VARCHAR(10)
);

CREATE TABLE Album(
nombre_album VARCHAR(30),
id_album SERIAL  CONSTRAINT pk_album PRIMARY KEY
);

CREATE TABLE Cancion(
nombre_cancion VARCHAR(30),
genero_cancion VARCHAR(30),
duracion SERIAL,
nombre_autor VARCHAR(30),
id_cancion INT CONSTRAINT pk_cancion PRIMARY KEY,
id_album INT REFERENCES Album(id_album)
);

CREATE TABLE Lista_reproduccion(
id_lista INT,
id_cancion INT REFERENCES Cancion(id_cancion),
id_usuario INT REFERENCES Usuario(id_usuario)
);