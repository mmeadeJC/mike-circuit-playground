function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function inlineMarkdown(text: string): string {
  return escapeHtml(text)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

/** Renders the subset of markdown used by COMPONENT_INVENTORY.md. */
export function renderPolicyInventoryMarkdown(markdown: string): string {
  const lines = markdown.split('\n');
  const html: string[] = [];
  let inCode = false;
  let codeLines: string[] = [];
  let inTable = false;
  let tableLines: string[] = [];
  let inUl = false;

  const closeUl = () => {
    if (inUl) {
      html.push('</ul>');
      inUl = false;
    }
  };

  const flushTable = () => {
    if (!inTable) return;

    html.push('<table><thead>');
    let headerDone = false;

    for (const row of tableLines) {
      if (/^\|[-: |]+\|$/.test(row.trim())) continue;

      const cells = row
        .split('|')
        .slice(1, -1)
        .map((cell) => cell.trim());

      if (!headerDone) {
        html.push(
          `<tr>${cells.map((cell) => `<th>${inlineMarkdown(cell)}</th>`).join('')}</tr></thead><tbody>`,
        );
        headerDone = true;
      } else {
        html.push(
          `<tr>${cells.map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join('')}</tr>`,
        );
      }
    }

    html.push('</tbody></table>');
    inTable = false;
    tableLines = [];
  };

  for (const line of lines) {
    if (line.startsWith('```')) {
      if (inCode) {
        html.push(`<pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`);
        codeLines = [];
        inCode = false;
      } else {
        closeUl();
        flushTable();
        inCode = true;
      }
      continue;
    }

    if (inCode) {
      codeLines.push(line);
      continue;
    }

    if (line.startsWith('|')) {
      closeUl();
      if (!inTable) inTable = true;
      tableLines.push(line);
      continue;
    }

    if (inTable) flushTable();

    if (line.startsWith('### ')) {
      closeUl();
      html.push(`<h3>${inlineMarkdown(line.slice(4))}</h3>`);
    } else if (line.startsWith('## ')) {
      closeUl();
      html.push(`<h2>${inlineMarkdown(line.slice(3))}</h2>`);
    } else if (line.startsWith('# ')) {
      closeUl();
      html.push(`<h1>${inlineMarkdown(line.slice(2))}</h1>`);
    } else if (line.startsWith('> ')) {
      closeUl();
      html.push(`<blockquote><p>${inlineMarkdown(line.slice(2))}</p></blockquote>`);
    } else if (line.startsWith('- ')) {
      if (!inUl) {
        html.push('<ul>');
        inUl = true;
      }
      html.push(`<li>${inlineMarkdown(line.slice(2))}</li>`);
    } else if (line.trim() === '---') {
      closeUl();
      html.push('<hr />');
    } else if (line.trim() === '') {
      closeUl();
    } else {
      closeUl();
      html.push(`<p>${inlineMarkdown(line)}</p>`);
    }
  }

  closeUl();
  flushTable();

  if (inCode && codeLines.length) {
    html.push(`<pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`);
  }

  return html.join('\n');
}
