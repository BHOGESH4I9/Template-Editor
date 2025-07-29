import React, { useState } from 'react';
import '../styles/TemplateSidebar.css';
import Logo from '../assets/Logo';

const TemplateSidebar = ({ templates, onSelectTemplate }) => {
  const [search, setSearch] = useState('');
  const [expandedCategory, setExpandedCategory] = useState(null);

  const filteredTemplates = templates.map(cat => ({
    ...cat,
    templates: cat.templates.filter(temp =>
      temp.name.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(cat => cat.templates.length > 0);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2><Logo /> OrgTemplate Hub</h2> 
      </div>
      <input
        className="form-control mb-3"
        type="text"
        placeholder="Search templates..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {filteredTemplates.map(({ category, templates }) => (
        <div key={category} className="mb-3">
          <button
            onClick={() =>
              setExpandedCategory(prev => (prev === category ? null : category))
            }
            className={`category-btn ${expandedCategory === category ? 'expanded' : ''}`}
          >
            {category}
          </button>

          {expandedCategory === category && (
            <ul className="template-list">
              {templates.map(temp => (
                <li
                  key={temp.name}
                  onClick={() => onSelectTemplate(temp.content)}
                  className="template-item"
                >
                  {temp.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default TemplateSidebar;