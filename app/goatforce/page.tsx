import Link from "next/link";
import CodeSnippet from "../../components/CodeSnippet";

export default function GoatforcePage() {
  return (
    <div className="min-h-screen bg-white font-mono">
      <main className="max-w-4xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-250"
          >
            ← back to home
          </Link>
          <div className="text-gray-600 text-sm">August 2025</div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Building Goatforce
        </h1>

        {/* Content Section */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div className="space-y-4">
            <p>
              Goatforce is a CRM dashboard powered by MCP (Model Context
              Protocol) servers, designed to be the one-stop shop for sales reps
              to manage their deals efficiently. The core idea was to eliminate
              the friction between different tools and create a unified
              interface that understands natural language commands.
            </p>
            <p>
              The challenge was building a lightweight interface that could
              handle complex sales workflows while maintaining speed and
              reliability. We used MCP servers to bridge the gap between natural
              language processing and CRM operations, allowing sales reps to
              simply type what they want to accomplish rather than navigating
              through multiple screens and forms.
            </p>
          </div>

          {/* Sub-heading */}
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
            Why MCP Servers
          </h2>

          <div className="space-y-4">
            <p>
              Goatforce was built entirely leveraging MCP servers for seamless
              integration with Salesforce APIs. The MCP architecture allows for
              real-time data synchronization, automated deal tracking, and
              intelligent workflow management. By using MCP servers, we could
              maintain context across complex multi-step sales processes while
              ensuring data consistency and reliability.
            </p>
            <p>
              The MCP server's strength lies in handling complex action chains
              without losing track of the sales pipeline. For example, when a
              sales rep types "update this deal to closed-won and schedule
              follow-up with the client," the system can execute multiple
              operations while adapting to changing CRM states and maintaining
              proper data relationships.
            </p>
            <p>
              We tuned the compute allocation based on task complexity - giving
              minimal processing power for simple data updates and more
              computational resources for complex multi-step workflows. This
              approach balanced speed with reliability, ensuring that simple
              operations remained fast while complex processes had sufficient
              resources to complete successfully.
            </p>
          </div>

          {/* Code Snippet Component */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Websocket Challenge
            </h3>
            <CodeSnippet
              code={`// MCP Server Integration Example
const mcpClient = new MCPClient();

// Initialize connection to Salesforce
await mcpClient.connect('salesforce');

// Process natural language command
const result = await mcpClient.processCommand(
  'Update deal ABC123 to closed-won',
  {
    complexity: 'medium',
    context: 'sales-pipeline'
  }
);`}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
