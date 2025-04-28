# Spring AI - Text Interaction

## Overview

This project demonstrates how to use Spring AI to interact with AI models for text-based tasks. Spring AI simplifies the integration of Artificial Intelligence (AI) capabilities into Spring applications. This example focuses on using AI to generate text.

## Features

* **Text Generation:** Utilizes Spring AI to generate text based on prompts.
* **Spring Boot Integration:** Built using Spring Boot for easy setup and dependency management.
* **Configurable AI Model:** Supports configuration of the underlying AI model through Spring AI.
* **REST API:** Provides a RESTful API endpoint to interact with the text generation functionality.

## Technologies Used

* [Spring Boot](https://spring.io/projects/spring-boot)
* [Spring AI](https://spring.io/projects/spring-ai)
* [Your Choice of AI Provider]: (e.g., OpenAI, Azure AI, etc. -  Specify which one you're using)

## Prerequisites

* Java 17+
* Maven or Gradle
* An API key for your chosen AI provider (e.g., OpenAI API key)

## Setup

1.  **Clone the repository:**

    ```bash
    git clone <your-repo-url>
    cd <your-project-directory>
    ```

2.  **Configure your AI provider API key:**

    * Create an `application.properties` or `application.yml` file in `src/main/resources`.
    * Add the API key for your chosen provider. For example, for OpenAI:

        ```properties
        spring.ai.openai.api-key=YOUR_OPENAI_API_KEY
        ```
      or
        ```yaml
        spring:
          ai:
            openai:
              api-key: YOUR_OPENAI_API_KEY
        ```
    * Refer to the Spring AI documentation for configuration details for other providers.

3.  **Build the project:**

    * Using Maven:

        ```bash
        ./mvnw clean install
        ```

    * Using Gradle:

        ```bash
        ./gradlew clean build
        ```

4.  **Run the application:**

    * Using Maven:

        ```bash
        ./mvnw spring-boot:run
        ```

    * Using Gradle:

        ```bash
        ./gradlew bootRun
        ```

## Usage

The application provides a REST API endpoint to generate text.

### Endpoint

* `POST /api/generate`

### Request

* **Method:** `POST`
* **Content Type:** `application/json`
* **Body:**

    ```json
    {
      "prompt": "Your prompt here.  For example: Write a short story about a cat."
    }
    ```

### Response

* **Status:** `200 OK`
* **Content Type:** `application/json`
* **Body:**

    ```json
    {
      "generatedText": "The cat stretched, yawned, and embarked on a grand adventure..."
    }
    ```

