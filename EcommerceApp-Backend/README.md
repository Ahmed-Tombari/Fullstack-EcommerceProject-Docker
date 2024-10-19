# EcommerceAppBackend

EcommerceApp is a Spring Boot-based e-commerce application that utilizes various services, such as PostgreSQL, Stripe for payment, and Spring Security for authentication.

## Prerequisites

- Java 17
- Maven
- Docker
- Docker Compose

## Project Structure

This project is built using the following dependencies:

- **Spring Boot 3.3.4**: For building the REST API.
- **Spring Data JPA**: For database interactions.
- **PostgreSQL**: As the database for the application.
- **Stripe API**: For handling payments.
- **Spring Security**: For securing the application.
- **Springdoc OpenAPI**: For API documentation.

## Running the Application

### 1. Local Development

To run the project locally without Docker:

1. **Build the project**:

    Run `mvn clean install`


2. **Run the application**:

    Run `mvn spring-boot:run`


Navigate to `http://localhost:8181` to access the application.

### 2. Running with Docker

A Dockerfile is included in this project to containerize the Spring Boot application.

#### Build the Docker image:

    Run `docker build -t ecommerce-app`.

#### Run the application with Docker Compose:

    Run `docker-compose up --build`.

#### Run the Docker container:

    Run `docker run` 

## API Documentation

    Run `http://localhost:8080/swagger-ui.html`

## API Security and Payments

Spring Security: Protects the endpoints with secure authentication.
Stripe Integration: For handling payments via the Stripe API.

# License

This `README.md` file includes instructions on how to run the project locally, using Docker, and using Docker Compose. It also covers security, payments, and the API documentation setup with Springdoc OpenAPI.