"use client"

import React from 'react';

const EducationSection = () => {
  return (
    <section id="education" className="container py-16 md:py-24 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Education</h2>

        {/* Education Content */}
        <div>
          {/* Degree Name */}
          <h3 className="text-2xl font-semibold">Bachelor of Science in Computer Science</h3>

          {/* University and Date */}
          <p className="text-lg"><strong>University of South Florida</strong> - 2021 - 2025</p>

          {/* Description */}
          <p className="text-lg">Graduated with <strong>Honors</strong> from the College of Engineering.</p>
          {/* Coursework */}
          <p className="text-lg mt-4"><strong>Relevant Coursework:</strong> Data Structures, Algorithms, Database Systems, Artificial Intelligence</p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
