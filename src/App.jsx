import './App.scss'
import './utils/prism.js'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SketchPicker } from 'react-color'

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
// react-color picker: converted all keys and style to objects
// color-picker-active set to boolean to open the color picker if it gets clicked
// looping over all the object keys
// generating the css
//

function App() {
    const [styleConfig, setStyleConfig] = useState({
        comment: {
            color: '#8292a2',
            colorPickerOpen: false,
        },
        prolog: {
            color: '#8292a2',
            colorPickerOpen: false,
        },
        doctype: {
            color: '#8292a2',
            colorPickerOpen: false,
        },
        cdata: {
            color: '#8292a2',
            colorPickerOpen: false,
        },
        punctuation: {
            color: '#f8f8f2',
            colorPickerOpen: false,
        },
        namespace: {
            color: '#f8f8f2',
            colorPickerOpen: false,
        },
        property: {
            color: '#f92672',
            colorPickerOpen: false,
        },
        tag: {
            color: '#f92672',
            colorPickerOpen: false,
        },
        constant: {
            color: '#f92672',
            colorPickerOpen: false,
        },
        symbol: {
            color: '#f92672',
            colorPickerOpen: false,
        },
        deleted: {
            color: '#f92672',
            colorPickerOpen: false,
        },
        boolean: {
            color: '#f92672',
            colorPickerOpen: false,
        },
        number: {
            color: '#ae81ff',
            colorPickerOpen: false,
        },
        selector: {
            color: '#a6e22e',
            colorPickerOpen: false,
        },
        ttrName: {
            color: '#a6e22e',
            colorPickerOpen: false, // connect this to .ttr-name in styled.components
        },
        string: {
            color: '#a6e22e',
            colorPickerOpen: false,
        },
        char: {
            color: '#a6e22e',
            colorPickerOpen: false,
        },
        builtin: {
            color: '#a6e22e',
            colorPickerOpen: false,
        },
        inserted: {
            color: '#a6e22e',
            colorPickerOpen: false,
        },
        operator: {
            color: '#f8f8f2',
            colorPickerOpen: false,
        },
        entity: {
            color: '#f8f8f2',
            colorPickerOpen: false,
        },
        url: {
            color: '#f8f8f2',
            colorPickerOpen: false,
        },
        variable: {
            color: '#f8f8f2',
            colorPickerOpen: false,
        },
        atrule: {
            color: '#e6db74',
            colorPickerOpen: false,
        },
        ttrValue: {
            color: '#e6db74',
            colorPickerOpen: false,
        },
        function: {
            color: '#e6db74',
            colorPickerOpen: false,
        },
        classname: {
            color: '#DD4A68',
            colorPickerOpen: false,
        },
        keyword: {
            color: '#66d9ef',
            colorPickerOpen: false,
        },
        variable: {
            color: '#fd971f',
            colorPickerOpen: false,
        },
        important: {
            color: '#fd971f',
            colorPickerOpen: false,
        },
        regex: {
            color: '#e90',
            colorPickerOpen: false,
        },
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
                            <label>{key}</label>
                            <SketchPicker
                                color={styleConfig[key].color}
                                onChange={(color) =>
                                    setStyleConfig({
                                        ...styleConfig,
                                        [key]: color.hex,
                                    })
                                }
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
