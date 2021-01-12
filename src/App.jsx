import './App.scss'
import './utils/prism.js'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import GoogleFontLoader from 'react-google-font-loader'
import { SketchPicker } from 'react-color'
import ClickAwayListener from 'react-click-away-listener'
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
const getUniqueColors = (theme) => {
    const colors = [
        ...new Set(
            Object.keys(theme.config).map((key) => theme.config[key].color)
        ),
    ]
    colors.shift()
    return colors
}
getUniqueColors(allThemes.okaidia)
function App() {
    const [languageKey, setLanguageKey] = useState('js')
    const [fontKey, setFontKey] = useState('default')
    const [genCodeOpen, setGenCodeOpen] = useState(false)
    const [styleConfig, setStyleConfig] = useState(allThemes.okaidia.config)
    const [fontSize, setFontSize] = useState(16)
    const [canvasColor, setCanvasColor] = useState('#f4f6f6')
    const [canvasPicker, setCanvasPicker] = useState(false)

    useEffect(async () => {
        Prism.highlightAll()
    }, [styleConfig, languageKey, fontKey, genCodeOpen, fontSize])

    return (
        <div className="App">
            <GoogleFontLoader fonts={fontsForLoader} />
            <div className="container">
                <SideBar
                    styleConfig={styleConfig}
                    setStyleConfig={setStyleConfig}
                    fonts={fonts}
                    fontKey={fontKey}
                    setFontKey={setFontKey}
                    fontSize={fontSize}
                    setFontSize={setFontSize}
                />
                <div className="main" style={{ background: canvasColor }}>
                    <div className="preview-inner">
                        <div className="prism-container">
                            <div className="main-header">
                                <div className="lang-select-wrapper">
                                    <select
                                        className="language-select"
                                        value={languageKey}
                                        onChange={(e) =>
                                            setLanguageKey(e.target.value)
                                        }
                                    >
                                        {Object.keys(languageSamples).map(
                                            (key) => (
                                                <option value={key} key={key}>
                                                    {languageSamples[key].title}
                                                </option>
                                            )
                                        )}
                                    </select>
                                </div>
                                <div className="canvas-color">
                                    <label htmlFor="canvas-color-button">
                                        Canvas Color
                                    </label>
                                    <button
                                        id="canvas-color-button"
                                        className="swatch canvas-color-button"
                                        style={{ background: canvasColor }}
                                        onClick={() =>
                                            setCanvasPicker(!canvasPicker)
                                        }
                                    ></button>
                                    {canvasPicker && (
                                        <ClickAwayListener
                                            onClickAway={() =>
                                                setCanvasPicker(false)
                                            }
                                        >
                                            <div className="picker-wrapper">
                                                <SketchPicker
                                                    disableAlpha={true}
                                                    color={canvasColor}
                                                    onChange={(color) =>
                                                        setCanvasColor(
                                                            color.hex
                                                        )
                                                    }
                                                />
                                            </div>
                                        </ClickAwayListener>
                                    )}
                                </div>
                            </div>
                            <PrismWrapper
                                template={styleTemplate(
                                    styleConfig,
                                    fonts[fontKey],
                                    fontSize
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
                            <h1 className="app-title">Refract</h1>
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
                                                fonts[fontKey],
                                                fontSize
                                            )}
                                        </code>
                                    </pre>
                                </PrismWrapper>
                            </div>
                        ) : null}
                    </div>
                </div>
                <div className="right-bar">
                    <h3 className="sidebar-title">Themes</h3>
                    {Object.keys(allThemes).map((key) => (
                        <button
                            key={key}
                            onClick={() =>
                                setStyleConfig(allThemes[key].config)
                            }
                            className="theme-button"
                            style={{
                                background:
                                    allThemes[key].config.background.color,
                            }}
                        >
                            <span className="theme-button-title">
                                {allThemes[key].title}
                            </span>
                            <div className="theme-swatches">
                                {getUniqueColors(allThemes[key]).map(
                                    (color) => (
                                        <div
                                            className="theme-swatch"
                                            style={{
                                                background: color,
                                            }}
                                        ></div>
                                    )
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App
