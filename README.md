# Spring AI Audio-to-Text Transcription Service

## Overview

This project demonstrates how to use Spring AI to transcribe audio files to text using OpenAI's Whisper model. The application provides a full-stack solution with a Spring Boot backend for audio transcription and a modern React frontend for user interaction.

## Features

- **Audio Transcription:** Converts audio files to text using OpenAI's Whisper model via Spring AI
- **Multiple Audio Formats:** Supports various audio formats (WAV, MP3, M4A, etc.)
- **REST API:** Provides a clean RESTful API for audio transcription
- **React Frontend:** Modern, responsive web interface built with React and Tailwind CSS
- **Real-time Processing:** Upload and transcribe audio files instantly
- **Spring Boot Integration:** Built with Spring Boot for easy deployment and configuration

## Technologies Used

### Backend

- [Spring Boot 3.4.4](https://spring.io/projects/spring-boot)
- [Spring AI 1.0.0-M6](https://spring.io/projects/spring-ai)
- [OpenAI Whisper API](https://platform.openai.com/docs/guides/speech-to-text)
- Java 17
- Maven

### Frontend

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4.1.1](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)

## Prerequisites

- **Java 17+**
- **Node.js 18+** and **npm/yarn**
- **Maven 3.6+**
- **OpenAI API Key** with access to the Whisper API

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/TechmoNoway/spring-ai-audio-to-text.git
cd spring-ai-audio-to-text
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory or set the environment variable:

```bash
# Windows PowerShell
$env:OPENAI_API_KEY="your-openai-api-key-here"

# Linux/macOS
export OPENAI_API_KEY="your-openai-api-key-here"
```

### 3. Build and Run the Backend

```bash
# Build the project
./mvnw clean install

# Run the Spring Boot application
./mvnw spring-boot:run
```

The backend server will start on `http://localhost:4242`

### 4. Build and Run the Frontend

```bash
# Navigate to the web directory
cd src/main/resources/web

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will be available at `http://localhost:5173`

## Configuration

### Application Configuration

The application configuration is located in `src/main/resources/application.yml`:

```yaml
spring:
  profiles:
    active: dev
  application:
    name: spring-ai-audio-to-text
  ai:
    openai:
      api-key: ${OPENAI_API_KEY}
      audio:
        transcription:
          base-url: https://api.openai.com
          options:
            model: whisper-1
            response-format: json
server:
  port: 4242
```

### Transcription Options

The transcription service supports various configuration options:

- **Model:** whisper-1 (OpenAI's Whisper model)
- **Language:** Default is English ("en"), can be configured
- **Response Format:** TEXT or JSON
- **Temperature:** Controls randomness in output (0.0 for deterministic)

## API Documentation

### Transcribe Audio Endpoint

**URL:** `POST /api/transcribe`

**Content-Type:** `multipart/form-data`

**Parameters:**

- `file` (required): Audio file to transcribe

**Supported Audio Formats:**

- WAV
- MP3
- M4A
- FLAC
- OGG
- And other formats supported by Whisper

**Example Request:**

```bash
curl -X POST \
  -F "file=@audio-sample.wav" \
  http://localhost:4242/api/transcribe
```

**Response:**

```
Status: 200 OK
Content-Type: text/plain

"This is the transcribed text from the audio file."
```

## Usage

### Using the Web Interface

1. Open your browser and navigate to `http://localhost:5173`
2. Click "Choose File" and select an audio file
3. Click "Upload and Transcribe"
4. View the transcription result below

### Using the API Directly

```bash
# Example with curl
curl -X POST \
  -F "file=@path/to/your/audio.wav" \
  http://localhost:4242/api/transcribe
```

## Project Structure

```
spring-ai-audio-to-text/
├── src/
│   ├── main/
│   │   ├── java/com/trikynguci/audiototext/
│   │   │   ├── SpringAiAudioToTextApplication.java
│   │   │   ├── config/
│   │   │   │   └── WebConfig.java
│   │   │   └── controller/
│   │   │       └── TranscriptionController.java
│   │   └── resources/
│   │       ├── application.yml
│   │       ├── application-dev.yml
│   │       └── web/                    # React Frontend
│   │           ├── src/
│   │           │   ├── components/
│   │           │   │   └── AudioUploader.tsx
│   │           │   ├── App.tsx
│   │           │   └── main.tsx
│   │           ├── package.json
│   │           └── vite.config.ts
│   └── test/
├── pom.xml
└── README.md
```

## Development

### Backend Development

The backend is built with Spring Boot and uses Spring AI for OpenAI integration. Key components:

- **TranscriptionController:** Handles audio upload and transcription requests
- **WebConfig:** Configures CORS for frontend integration
- **Application Configuration:** Manages OpenAI API integration

### Frontend Development

The frontend is a React application with TypeScript and Tailwind CSS:

```bash
# Navigate to web directory
cd src/main/resources/web

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

## Production Deployment

### Building for Production

```bash
# Build backend
./mvnw clean package

# Build frontend
cd src/main/resources/web
npm run build
```

### Environment Variables

Set the following environment variables in production:

- `OPENAI_API_KEY`: Your OpenAI API key
- `SPRING_PROFILES_ACTIVE`: Set to `prod` for production profile

## Troubleshooting

### Common Issues

1. **OpenAI API Key not found:**

   - Ensure the `OPENAI_API_KEY` environment variable is set
   - Check that your API key has access to the Whisper API

2. **Audio file upload fails:**

   - Verify the audio file format is supported
   - Check file size limits (default Spring Boot limit is 1MB)

3. **CORS errors:**
   - Ensure the `WebConfig` is properly configured
   - Check that the frontend is calling the correct backend URL

### Logs

Enable debug logging by adding to `application.yml`:

```yaml
logging:
  level:
    com.trikynguci.audiototext: DEBUG
    org.springframework.ai: DEBUG
```
