import { useState, useRef } from "react";
import { FaSearch, FaMicrophone } from "react-icons/fa";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      setQuery(spokenText);
      console.log("Voice input:", spokenText);
      // Optional: Trigger search here
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  return (
    <div className="flex items-center bg-[#fefbf7] border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-2.5 shadow-sm w-full max-w-3xl mx-auto">
      <FaSearch className="text-gray-500 text-sm sm:text-base mr-2 sm:mr-3" />
      <input
        type="search"
        placeholder="Search for Carbide Cutters"
        aria-label="Search for Carbide Cutters"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-500 text-sm sm:text-base"
      />
      <button
        type="button"
        onClick={startListening}
        className={`text-sm sm:text-base ml-2 sm:ml-3 cursor-pointer ${
          listening ? "text-red-500 animate-pulse" : "text-gray-500"
        }`}
        title="Click to speak"
      >
        <FaMicrophone />
      </button>
    </div>
  );
}
