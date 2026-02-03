# ---------- 1) Build FRONT (Angular) ----------
FROM node:20-alpine AS front_build
WORKDIR /app/front

# Instala dependencias (usa package-lock si está)
COPY front/package*.json ./
RUN npm ci

# Copia el código y buildea
COPY front/ ./
RUN npm run build


# ---------- 2) Build BACK (Spring Boot) + copiar FRONT al static ----------
FROM maven:3.9-eclipse-temurin-21 AS back_build
WORKDIR /app

# Copiamos el backend
COPY back/ ./back/

# Traemos el dist generado del paso anterior
COPY --from=front_build /app/front/dist/ /app/front_dist/

# Copiamos el contenido de dist/*/browser/* a back/src/main/resources/static/
RUN mkdir -p /app/back/src/main/resources/static && \
    cp -R /app/front_dist/*/browser/* /app/back/src/main/resources/static/

# Compilamos el backend
WORKDIR /app/back
RUN mvn -DskipTests clean package


# ---------- 3) Runtime ----------
FROM eclipse-temurin:21-jre
WORKDIR /app

COPY --from=back_build /app/back/target/*.jar app.jar

ENV PORT=8080
EXPOSE 8080

CMD ["sh", "-c", "java -jar app.jar"]
