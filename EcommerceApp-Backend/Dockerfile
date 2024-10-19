# Build Stage
FROM maven:3.9.4-eclipse-temurin-17 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy pom.xml and the project source
COPY pom.xml ./
COPY src ./src

# Package the application
RUN mvn clean package -DskipTests

# Run Stage
FROM eclipse-temurin:17-jdk-jammy

# Set the working directory for the runtime
WORKDIR /app

# Copy the built jar from the builder stage
COPY --from=builder /app/target/*.jar app.jar

# Copy the keystore into the container
COPY src/main/resources/local_ssl.p12 /app/

# Expose the application's HTTPS port
EXPOSE 8181

# Run the application with the required environment variables
ENTRYPOINT ["java", "-jar", "app.jar"]
