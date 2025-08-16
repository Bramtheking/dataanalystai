import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">DataAnalyst AI</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-accent transition-colors">
              API Features
            </a>
            <a href="#docs" className="hover:text-accent transition-colors">
              Documentation
            </a>
            <a href="#support" className="hover:text-accent transition-colors">
              Support
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-background to-muted">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Transform Your Data Analysis with AI
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful AI-driven data analysis API that processes, analyzes, and visualizes any dataset in minutes. From
            web scraping to complex statistical analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Powerful AI Features</h2>
            <p className="text-xl text-muted-foreground">Everything you need for comprehensive data analysis</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <CardTitle>Smart Data Processing</CardTitle>
                <CardDescription>
                  Automatically scrape, clean, and process data from any source with AI-powered intelligence.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle>Lightning Fast Analysis</CardTitle>
                <CardDescription>
                  Get comprehensive statistical analysis and insights in under 3 minutes, powered by advanced AI.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
                <CardTitle>Dynamic Visualizations</CardTitle>
                <CardDescription>
                  Generate beautiful charts, plots, and visualizations automatically from your analysis results.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* API Documentation Section */}
      <section id="docs" className="py-20 px-6 bg-muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Simple API Integration</h2>
            <p className="text-xl text-muted-foreground">Get started with just one API call</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>API Endpoint</CardTitle>
                <CardDescription>Send your analysis tasks via POST request</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-secondary rounded-lg p-4">
                  <code className="text-secondary-foreground text-sm">
                    POST /.netlify/functions/api
                    <br />
                    Content-Type: text/plain
                    <br />
                    Body: Your analysis task
                  </code>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Example Request</CardTitle>
                <CardDescription>Analyze Wikipedia movie data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-secondary rounded-lg p-4">
                  <code className="text-secondary-foreground text-sm break-all">
                    curl -X POST https://yourapp.netlify.app/.netlify/functions/api \<br />
                    -d "Scrape highest grossing films from Wikipedia and return top 5 as JSON"
                  </code>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">DataAnalyst AI</h3>
          <p className="text-muted-foreground mb-6">Powered by advanced AI technology for intelligent data analysis</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-accent transition-colors">
              Documentation
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              API Reference
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Support
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
