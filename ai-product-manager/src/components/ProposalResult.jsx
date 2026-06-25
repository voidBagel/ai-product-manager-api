function Section({ title, children }) {
  if (!children || (Array.isArray(children) && children.length === 0)) return null;

  return (
    <div className="proposal-section">
      <h3>{title}</h3>

      {Array.isArray(children) ? (
        <ul>
          {children.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{children}</p>
      )}
    </div>
  );
}

function ProposalResult({ proposal }) {
  if (!proposal) return null;

  return (
    <section className="proposal-card">
      <div className="proposal-header">
        <p className="eyebrow">Generated Proposal</p>
        <h2>{proposal.productName || "Untitled Product"}</h2>
      </div>

      <Section title="Elevator Pitch">{proposal.elevatorPitch}</Section>
      <Section title="Problem Statement">{proposal.problemStatement}</Section>
      <Section title="Target Audience">{proposal.targetAudience}</Section>
      <Section title="Core Features">{proposal.coreFeatures}</Section>
      <Section title="User Stories">{proposal.userStories}</Section>
      <Section title="Acceptance Criteria">{proposal.acceptanceCriteria}</Section>
      <Section title="Sprint Plan">{proposal.sprintPlan}</Section>
      <Section title="API Suggestions">{proposal.apiSuggestions}</Section>
      <Section title="Database Design">{proposal.databaseDesign}</Section>
      <Section title="Risks">{proposal.risks}</Section>
      <Section title="Technology Stack">{proposal.technologyStack}</Section>
      <Section title="AI Reviewer Feedback">{proposal.aiReviewerFeedback}</Section>
    </section>
  );
}

export default ProposalResult;