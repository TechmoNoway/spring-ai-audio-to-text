import axios from "axios";
import { useState } from "react";

const AudioUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [transcription, setTranscription] = useState<string>("");

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFile(event.target.files?.[0] || null);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file as Blob);

    try {
      const response = await axios.post(
        "http://localhost:4242/api/transcribe",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setTranscription(response.data);
    } catch (error) {
      console.log("Error transcribing audio:", error);
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center space-y-4">
      <h1>Audio to Text Transcriber</h1>
      <div className="file-input">
        <input
          className="file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100 dark:file:bg-violet-600 dark:file:text-violet-100 dark:hover:file:bg-violet-500 ..."
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
        />
      </div>
      <button className="upload-button" onClick={handleUpload}>
        Upload and Transcribe
      </button>
      <div className="transcription-result">
        <h2>Transcription Result</h2>
        <p>{transcription}</p>
      </div>
    </div>
  );
};

export default AudioUploader;
