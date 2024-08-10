import React, { useEffect, useState, useCallback } from 'react';

import './TableOfContents.scss';

const TableOfContents = ({ toc }) => {
  const [formattedToc, setFormattedToc] = useState('');

  const addNumbersToList = useCallback((ul, prefix) => {
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
  }, []);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(toc, 'text/html');
    const ul = doc.querySelector('ul');
    if (ul) {
      addNumbersToList(ul, []);
      setFormattedToc(ul.outerHTML);
    }
  }, [toc, addNumbersToList]);

  return (
    <div 
        className="table_of_contents"
        dangerouslySetInnerHTML={{ __html: formattedToc }} 
    />
  );
};

export default TableOfContents;
