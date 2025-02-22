export function Experience() {
  return (
    <div className="rounded-xl bg-gray-900/60 backdrop-blur-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Experience</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-medium text-m mb-1">
            Genzai Internship (Sep 2024 - Jan 2025)
          </h3>
          <p className="text-sm text-gray-400">
            <strong className="text-white">Key Responsibilities:</strong>
          </p>
          <ul className="mb-1 text-sm text-gray-400">
            <li>
              Conducted research on designing a chatbot system to enhance user
              experience.
            </li>
            <li>
              Completed research ahead of schedule and transitioned to
              implementation.
            </li>
          </ul>
          <p className="text-sm text-gray-400">
            <strong className="text-white">Achievements:</strong>
          </p>
          <ul className="mb-1 text-sm text-gray-400">
            <li>Built a chatbot using Meta Llama 3.1 70B.</li>
            <li>Designed and implemented a custom RAG system.</li>
            <li>Developed the Flutter UI for seamless user interaction.</li>
            <li>Managed hosting and deployment via Google Cloud Run.</li>
            <li>Implemented in-app-purchase using Adapty.</li>
          </ul>
          <p className="text-sm text-gray-400">
            <strong className="text-white">
              Functionality of the Chatbot:
            </strong>
          </p>
          <ul className="text-sm text-gray-400">
            <li>Responds to user queries.</li>
            <li>
              Provides personalized tips based on user performance in exercises.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
