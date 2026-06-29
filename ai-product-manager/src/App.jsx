import { useState } from "react";
import "./App.css";

import IdeaForm from "./components/IdeaForm";
import ProposalResult from "./components/ProposalResult";
import Loading from "./components/Loading";
import { generateProposal } from "./api";

function App() {
  const [idea, setIdea] = useState("");
  const [proposal, setProposal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (idea.trim() === "") {
      setError("Please enter a business idea first.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setProposal(null);

      const data = await generateProposal(idea);
      setProposal(data.proposal);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="app">
      <section className="hero">
        <span className="badge">Internship Day 1 Hackathon</span>
        <h1>AI Product Manager</h1>
        <p>
          Turn a simple business idea into a complete software project proposal.
        </p>
      </section>

      <IdeaForm
        idea={idea}
        setIdea={setIdea}
        onSubmit={handleSubmit}
        loading={loading}
      />

      {loading && <Loading />}

      <ProposalResult proposal={proposal} />
    </main>
  );
}

export default App;