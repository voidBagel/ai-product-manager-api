function IdeaForm({ idea, setIdea, onSubmit, loading }) {
  return (
    <form className="idea-form" onSubmit={onSubmit}>
      <label htmlFor="idea">Enter your business idea</label>

      <textarea
        id="idea"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Example: Food delivery application for Mars..."
        disabled={loading}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Generating..." : "Generate Proposal"}
      </button>
    </form>
  );
}

export default IdeaForm;