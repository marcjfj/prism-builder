const styles = (styleConfig, font) => {
    console.log(typeof styleConfig)
    return `
  ${font.import || ''}
  code[class*='language-'],
  pre[class*='language-'] {
      color: ${styleConfig.base.color};
      background: none;
      text-shadow: 0 1px rgba(0, 0, 0, 0.3);
      font-family: ${
          font ? font.name : 'Consolas'
      }, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
      font-size: 1em;
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;
      line-height: 1.5;

      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;

      -webkit-hyphens: none;
      -moz-hyphens: none;
      -ms-hyphens: none;
      hyphens: none;
  }

  /* Code blocks */
  pre[class*='language-'] {
      padding: 1em;
      margin: 0.5em 0;
      overflow: auto;
      border-radius: 0.3em;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
      background: ${styleConfig.background.color};
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
      padding: 0.1em;
      border-radius: 0.3em;
      white-space: normal;
  }

  .token.comment {
      color: ${styleConfig.comment.color};
  }
  .token.prolog {
      color: ${styleConfig.prolog.color};
  }
  .token.doctype {
      color: ${styleConfig.doctype.color};
  }
  .token.cdata {
      color: ${styleConfig.cdata.color};
  }

  .token.punctuation {
      color: ${styleConfig.punctuation.color};
  }

  .token.namespace {
      opacity: ${styleConfig.namespace.color};
  }

  .token.property {
      color: ${styleConfig.property.color};
  }
  .token.tag {
      color: ${styleConfig.tag.color};
  }
  .token.constant {
      color: ${styleConfig.constant.color};
  }
  .token.symbol {
      color: ${styleConfig.symbol.color};
  }
  .token.deleted {
      color: ${styleConfig.deleted.color};
  }

  .token.boolean {
      color: ${styleConfig.boolean.color};
  }
  .token.number {
      color: ${styleConfig.number.color};
  }

  .token.selector {
      color: ${styleConfig.selector.color};
  }
  .token.attr-name {
      color: ${styleConfig.attrName.color};
  }
  .token.string {
      color: ${styleConfig.string.color};
  }
  .token.char {
      color: ${styleConfig.char.color};
  }
  .token.builtin {
      color: ${styleConfig.builtin.color};
  }
  .token.inserted {
      color: ${styleConfig.inserted.color};
  }

  .token.operator {
      color: ${styleConfig.operator.color};
  }
  .token.entity {
      color: ${styleConfig.entity.color};
  }
  .token.url {
      color: ${styleConfig.url.color};
  }
  .language-css .token.string {
      color: ${styleConfig.string.color};
  }
  .style .token.string {
      color: ${styleConfig.string.color};
  }
  .token.variable {
      color: ${styleConfig.variable.color};
  }

  .token.atrule {
      color: ${styleConfig.atrule.color};
  }
  .token.attr-value {
      color: ${styleConfig.attrValue.color};
  }
  .token.function {
      color: ${styleConfig.function.color};
  }
  .token.class-name {
      color: ${styleConfig.className.color};
  }

  .token.keyword {
      color: ${styleConfig.keyword.color};
  }

  .token.regex {
      color: ${styleConfig.regex.color};
  }
  .token.important {
      color: ${styleConfig.important.color};
  }

  .token.important {
      font-weight: bold;
  }
  .token.bold {
      font-weight: bold;
  }
  .token.italic {
      font-style: italic;
  }

  .token.entity {
      cursor: help;
  }
`
}
export default styles
