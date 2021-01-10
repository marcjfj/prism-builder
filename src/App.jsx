import './App.scss'
import './utils/prism.js'
import { useEffect, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import GoogleFontLoader from 'react-google-font-loader'
import styleTemplate from './utils/styleTemplate'
import languageSamples from './utils/languageSamples'
import allThemes from './utils/themes/_allThemes'
import SideBar from './components/sidebar'
import fonts from './utils/fonts'

const fontsForLoader = Object.keys(fonts)
    .map((key) => {
        return fonts[key].import
            ? { font: fonts[key].name, weights: [400, '400i', 700, '700i'] }
            : null
    })
    .filter((font) => font)
const PrismWrapper = styled.div`
    ${(props) => props.template}
`
function App() {
    const [languageKey, setLanguageKey] = useState('js')
    const [fontKey, setFontKey] = useState('default')
    const [genCodeOpen, setGenCodeOpen] = useState(false)
    const [presetTheme, setPresetTheme] = useState(allThemes.okaidia)
    const [styleConfig, setStyleConfig] = useState(allThemes.okaidia.config)
    // const [fontSize, setFontSize] = useState(16)

    useEffect(async () => {
        Prism.highlightAll()
    }, [styleConfig, languageKey, fontKey, genCodeOpen])

    return (
        <div className="App">
            <GoogleFontLoader fonts={fontsForLoader} />
            <div className="container">
                <SideBar
                    styleConfig={styleConfig}
                    setStyleConfig={setStyleConfig}
                />
                <div className="main">
                    <div className="preview-inner">
                        <div className="prism-container">
                            <div className="lang-select-wrapper">
                                <select
                                    className="language-select"
                                    value={languageKey}
                                    onChange={(e) =>
                                        setLanguageKey(e.target.value)
                                    }
                                >
                                    {Object.keys(languageSamples).map((key) => (
                                        <option value={key} key={key}>
                                            {languageSamples[key].title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <PrismWrapper
                                template={styleTemplate(
                                    styleConfig,
                                    fonts[fontKey]
                                )}
                                className="prism-wrapper"
                            >
                                <pre>
                                    <code className={`language-${languageKey}`}>
                                        {languageSamples[languageKey].code}
                                    </code>
                                </pre>
                            </PrismWrapper>
                        </div>
                    </div>
                    <div className="bottom-bar">
                        <div className="export-controls">
                            <button
                                onClick={() => setGenCodeOpen(!genCodeOpen)}
                                className="view-gen-code"
                            >
                                {genCodeOpen
                                    ? 'Hide Generated CSS'
                                    : 'View Generated CSS'}
                            </button>
                            <a
                                href={`data:text/json;charset=utf-8,${encodeURIComponent(
                                    styleTemplate(styleConfig, fonts[fontKey])
                                )}`}
                                className="download-link"
                                download="refract.css"
                            >
                                Download CSS
                            </a>
                        </div>
                        {genCodeOpen ? (
                            <div className="gen-code">
                                <PrismWrapper
                                    template={styleTemplate(
                                        styleConfig,
                                        fonts[fontKey]
                                    )}
                                    className="gen-prism-wrapper"
                                >
                                    <pre>
                                        <code className="language-css">
                                            {styleTemplate(
                                                styleConfig,
                                                fonts[fontKey]
                                            )}
                                        </code>
                                    </pre>
                                </PrismWrapper>
                            </div>
                        ) : null}
                    </div>
                </div>
                <div className="right-bar">
                    <div className="font-select-wrapper">
                        <label className="sidebar-title">Font</label>
                        <select
                            className="font-select"
                            value={fontKey}
                            onChange={(e) => setFontKey(e.target.value)}
                        >
                            {Object.keys(fonts).map((key) => (
                                <option key={key} value={key}>
                                    {fonts[key].name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
