import React, { useState } from 'react';
import TemplateSidebar from '../components/TemplateSidebar';
import { templates as rawTemplates } from '../data/templates';
import EditorApp from '../components/EditorApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/TemplatePage.css';

// Group templates by category
const templatesByCategory = rawTemplates.reduce((acc, template) => {
  if (!acc[template.category]) acc[template.category] = [];
  acc[template.category].push(template);
  return acc;
}, {});

const TemplatePage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const groupedTemplates = Object.entries(templatesByCategory).map(([category, templates]) => ({
    category,
    templates,
  }));

  return (
    <div className="template-page">
      <TemplateSidebar
        templates={groupedTemplates}
        onSelectTemplate={(templateContent) => {
          const found = rawTemplates.find(t => t.content.toString() === templateContent.toString());
          setSelectedTemplate(found);
        }}
      />
      <div className="editor-container">
        <EditorApp selectedTemplate={selectedTemplate} />
      </div>
    </div>
  );
};

export default TemplatePage;