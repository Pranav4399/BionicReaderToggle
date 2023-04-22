import React, { useState } from "react";
import "../assets/toggleButton.css";

function ToggleButton({ className }) {
  const [isToggled, setIsToggled] = useState(false);
  const [originalText, setOriginalText] = useState([]);

  // Components to be considered can be added here
  const componentNames = ['p', 'span'];

  const handleToggle = () => {
    const componentSelectors = componentNames.map(name => `.${className} ${name}`).join(', ');
    const textTags = document.querySelectorAll(componentSelectors);

    // Loop through each text tag and modify its text content
    textTags.forEach((el, i) => {
      // Toggle on - store the original text and update the tag content
      if (!isToggled) {
        const textNodes = el.childNodes;
        let originalText = '';
        let boldText = '';
        
        // Loop through each child node of the tag
        textNodes.forEach((node) => {
          // If the child node is a text node
          if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent;
            boldText += boldWords(text).join(' ');
            originalText += text;
          }
          // If the child node is a p or span tag
          else if (node.nodeName === 'P' || node.nodeName === 'SPAN') {
            const text = node.textContent;
            const boldChildText = text ? boldWords(text).join(' ') : null;
            node.innerHTML = boldChildText;
            originalText += text;
          }
        });
        
        // Update the original text and tag content
        if (el.nodeType === Node.TEXT_NODE) {
          if (boldText) el.textContent = boldText;
          setOriginalText((prevState) => ({ ...prevState, [i]: originalText }));
        } else if (el.nodeName === 'P' || el.nodeName === 'SPAN') {
          if (boldText) el.innerHTML = boldText;
          setOriginalText((prevState) => ({ ...prevState, [i]: originalText }));
        }
      }
      // Toggle off - retrieve the original text and update the tag content
      else {
        if (el.nodeType === Node.TEXT_NODE) {
          el.textContent = originalText[i];
        } else if (el.nodeName === 'P' || el.nodeName === 'SPAN') {
          el.innerHTML = originalText[i];
        }
      }
    });
    // Toggle the isToggled state
    setIsToggled(!isToggled);
  };

  const boldWords = (text) => {
    const first = "<strong>";
    const last = "</strong>";
    return text
      .split(" ")
      .map((x) =>
        x.length === 1
          ? first + x + last
          : first +
            x.slice(0, Math.round(x.length / 2)) +
            last +
            x.slice(Math.round(x.length / 2))
      );
  };

  return (
    <div className="container">
      <button className={isToggled ? "on" : "off"} onClick={handleToggle}>
        <span className="pin">B</span>
      </button>
    </div>
  );
}

export default ToggleButton;
