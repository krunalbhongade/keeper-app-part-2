import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../Notes";

function createNotes(noteItem) {
  return <Note title={noteItem.title} content={noteItem.content} />;
}

function App() {
  return (
    <div>
      <Header />
      {Notes.map(createNotes)}

      <Footer />
    </div>
  );
}

export default App;
