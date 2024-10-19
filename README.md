# Fullstack-EcommerceProject-Docker

This is a full-stack e-commerce project built using **Spring Boot** for the backend and **Angular** for the frontend. The project is containerized using **Docker** and orchestrated with **Docker Compose**.

## Project Structure

- **Backend**: Spring Boot (Java 17, Spring Data JPA, Spring Security, PostgreSQL, Stripe API for payments)
- **Frontend**: Angular 16 (Angular Material, TypeScript, OpenSSL, Okta for authentication)
- **Containerization**: Docker and Docker Compose

---

## Prerequisites

Before running the project, ensure you have the following installed:

- **Java 17**
- **Node.js** and **npm** (for the Angular frontend)
- **Maven** (for the Spring Boot backend)
- **Docker** and **Docker Compose**

---

## Running the Project

### 1. Backend: Spring Boot

Navigate to the `backend/` directory and follow these steps:

#### Running Locally

1. **Install dependencies and build the project**:
 
    Run `mvn clean install`

2. **Run the Spring Boot application**:

    Run `mvn spring-boot:run`

The backend will be available at `http://localhost:8080`.

#### Running with Docker

1. **Build the Docker image**:

    Run `docker build -t ecommerce-backend ./backend`

2. **Run the Docker container**:

    Run `docker run -p 8080:8080 ecommerce-backend`

---

### 2. Frontend: Angular

Navigate to the `frontend/` directory and follow these steps:

#### Running Locally

1. **Install dependencies**:

    Run `npm install`

2. **Run the Angular development server**:

    Run `ng serve`


The frontend will be available at `http://localhost:4200`.

#### Running with Docker

1. **Build the Docker image**:
    Run`docker build -t ecommerce-frontend ./frontend`

2. **Run the Docker container**:
    Run `docker run -p 4200:80 ecommerce-frontend`

---

### 3. Running with Docker Compose

The project includes a `docker-compose.yml` file for orchestrating both the backend and frontend with a PostgreSQL database.

1. **Docker Compose Setup**:

Ensure the `docker-compose.yml` is at the root of the project:

#### Run the application with Docker Compose:

    Run `docker-compose up --build`


# License

This global `README.md` file covers both the **Spring Boot backend** and **Angular frontend**, with instructions for running the project locally or with Docker/Docker Compose. It also includes security, authentication, and API documentation details.