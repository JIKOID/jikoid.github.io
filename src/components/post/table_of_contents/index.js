import React from 'react';
import { useEffect, useState } from 'react';

const TableOfContents = ({ toc }) => {
  const [formattedToc, setFormattedToc] = useState('');

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(toc, 'text/html');
    const ul = doc.querySelector('ul');
    if (ul) {
      addNumbersToList(ul, []);
      setFormattedToc(ul.outerHTML);
    }
  }, [toc]);

  const addNumbersToList = (ul, prefix) => {
    let count = 1;

    ul.querySelectorAll(':scope > li').forEach((li) => {
      const currentPrefix = [...prefix, count].join('-');
      const content = li.querySelector('a').textContent;

      li.querySelector('a').textContent = `${currentPrefix}. ${content}`;

      const nestedUl = li.querySelector('ul');

      if (nestedUl) {
        addNumbersToList(nestedUl, [...prefix, count]);
      }
      
      count += 1;
    });
  };

  return (
    <div 
        className="table-of-contents" 
        dangerouslySetInnerHTML={{ __html: formattedToc }} 
    />
  );
};

export default TableOfContents;
