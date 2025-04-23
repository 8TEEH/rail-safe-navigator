
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Globe, Code2 } from "lucide-react";
import Navigation from "../components/Navigation";
import { Separator } from "@/components/ui/separator";

const CodePreview = () => {
  const codeSnippets = [
    {
      title: "HTML Structure",
      icon: <Globe className="h-6 w-6 text-orange-500" />,
      code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Smart Railway Navigator</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`
    },
    {
      title: "React Component",
      icon: <Code2 className="h-6 w-6 text-blue-500" />,
      code: `const TrainSearch = () => {
  return (
    <div className="search-container">
      <input placeholder="From Station" />
      <input placeholder="To Station" />
      <button>Search Trains</button>
    </div>
  );
};`
    },
    {
      title: "CSS Styles",
      icon: <FileText className="h-6 w-6 text-pink-500" />,
      code: `.search-container {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.train-card {
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #eee;
}`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navigation />
      <div className="pt-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Project Code Overview</h1>
        <p className="text-center text-gray-600 mb-12">
          A preview of the core code structure for Smart Railway Navigator
        </p>
        
        <div className="grid gap-8">
          {codeSnippets.map((snippet, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {snippet.icon}
                  <h2 className="text-xl font-semibold">{snippet.title}</h2>
                </div>
                <Separator className="mb-4" />
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">{snippet.code}</code>
                </pre>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodePreview;
