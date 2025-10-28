import React from 'react';

export const mdxComponents = {
  h1: (props: any) => <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mt-6 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-8 mb-3" {...props} />,
  h3: (props: any) => <h3 className="text-2xl md:text-3xl font-semibold text-navy-900 mt-6 mb-2" {...props} />,
  p: (props: any) => <p className="text-navy-800/90 my-4" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 my-4 space-y-1" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 my-4 space-y-1" {...props} />,
  li: (props: any) => <li className="text-navy-800/90" {...props} />,
  a: (props: any) => <a className="text-navy-700 underline hover:text-navy-900 underline-offset-4" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-navy-200 pl-4 italic text-navy-800/90 my-4" {...props} />
  ),
  code: (props: any) => <code className="bg-gray-50 rounded px-1 py-0.5" {...props} />,
  pre: (props: any) => <pre className="bg-gray-50 rounded-xl p-4 overflow-auto text-sm" {...props} />,
};

export default mdxComponents;
