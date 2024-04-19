import React from "react";

const SectionHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="max-w-2xl mx-auto mb-16 text-center">
      <h2 className="text-gray-700 mb-2">{title}</h2>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
