import './App.scss'
import './utils/prism.js'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const styles = (styleConfig) => {
    return `
    code[class*='language-'],
    pre[class*='language-'] {
        color: #f8f8f2;
        background: none;
        text-shadow: 0 1px rgba(0, 0, 0, 0.3);
        font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
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
        background: #272822;
    }

    /* Inline code */
    :not(pre) > code[class*='language-'] {
        padding: 0.1em;
        border-radius: 0.3em;
        white-space: normal;
    }

    .token.comment {
        color: ${styleConfig.comment};
    }
    .token.prolog {
        color: ${styleConfig.prolog};
    }
    .token.doctype {
        color: ${styleConfig.doctyle};
    }
    .token.cdata {
        color: ${styleConfig.cdata};
    }

    .token.punctuation {
        color: ${styleConfig.puctuation};
    }

    .token.namespace {
        opacity: ${styleConfig.namespace};
    }

    .token.property {
        color: ${styleConfig.namespace};
    }
    .token.tag {
        color: ${styleConfig.tag};
    }
    .token.constant {
        color: ${styleConfig.constant};
    }
    .token.symbol {
        color: ${styleConfig.symbol};
    }
    .token.deleted {
        color: ${styleConfig.deleted};
    }

    .token.boolean {
        color: ${styleConfig.boolean};
    }
    .token.number {
        color: ${styleConfig.number};
    }

    .token.selector {
        color: ${styleConfig.selector};
    }
    .token.attr-name {
        color: ${styleConfig.attrName};
    }
    .token.string {
        color: ${styleConfig.string};
    }
    .token.char {
        color: ${styleConfig.char};
    }
    .token.builtin {
        color: ${styleConfig.builtin};
    }
    .token.inserted {
        color: ${styleConfig.inserted};
    }

    .token.operator {
        color: ${styleConfig.operator};
    }
    .token.entity {
        color: ${styleConfig.entity};
    }
    .token.url {
        color: ${styleConfig.url};
    }
    .language-css .token.string {
        color: ${styleConfig.string};
    }
    .style .token.string {
        color: ${styleConfig.string};
    }
    .token.variable {
        color: ${styleConfig.variable};
    }

    .token.atrule {
        color: ${styleConfig.atrule};
    }
    .token.attr-value {
        color: ${styleConfig.attVal};
    }
    .token.function {
        color: ${styleConfig.function};
    }
    .token.class-name {
        color: ${styleConfig.className};
    }

    .token.keyword {
        color: ${styleConfig.keyword};
    }

    .token.regex {
        color: ${styleConfig.regex};
    }
    .token.important {
        color: ${styleConfig.important};
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

function App() {
    const [styleConfig, setStyleConfig] = useState({
        comment: '#8292a2',
        prolog: '#8292a2',
        doctype: '#8292a2',
        cdata: '#8292a2',
        punctuation: '#f8f8f2',
        namespace: '#f8f8f2',
        property: '#f92672',
        tag: '#f92672',
        constant: '#f92672',
        symbol: '#f92672',
        deleted: '#f92672',
        boolean: '#ae8whatever1ff',
        number: '#ae81ff',
        selector: '#a6e22e',
        ttrName: '#a6e22e', // connect this to .ttr-name in styled.components
        string: '#a6e22e',
        char: '#a6e22e',
        builtin: '#a6e22e',
        inserted: '#a6e22e',
        operator: '#f8f8f2',
        entity: '#f8f8f2',
        url: '#f8f8f2',
        variable: '#f8f8f2',
        atrule: '#e6db74',
        ttrValue: '#e6db74',
        function: '#e6db74',
        classname: '#DD4A68',
        keyword: '#66d9ef',
        variable: '#fd971f',
        important: '#fd971f',
        regex: '#e90',
        entity: 'help',
    })
    const PrismWrapper = styled.div`
        ${styles(styleConfig)}
    `
    useEffect(() => {
        Prism.highlightAll()
    }, [styleConfig])
    return (
        <div className="App">
            <div className="container">
                <div className="sidebar">
                    {Object.keys(styleConfig).map((key) => (
                        <div className="input-block" key={key}>
                            <label htmlFor="#comment-input">{key}</label>
                            <input
                                value={styleConfig[key]}
                                onChange={(e) =>
                                    setStyleConfig({
                                        ...styleConfig,
                                        [key]: e.target.value,
                                    })
                                }
                                type="text"
                                id="comment-input"
                            />
                        </div>
                    ))}
                </div>
                <div className="code-preview">
                    <PrismWrapper className="prism-wrapper">
                        <pre>
                            <code className="language-js">
                                {`
                                const foo = bar;
                                foo = "good christianssdfd";
                                function do() {
                                  for (i = 0; i < 100000; i++){
                                    let j += i;
                                    do();
                                    // this is a comment
                                    }
                                }
                                do();
                                `}
                            </code>
                        </pre>
                    </PrismWrapper>
                </div>
            </div>
        </div>
    )
}

export default App
