import './App.scss'
import './utils/prism.js'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SketchPicker } from 'react-color'
import ClickAwayListener from 'react-click-away-listener'
// import ScrollArea from 'react-scrollbar'
import styleTemplate from './utils/styleTemplate'
import languageSamples from './utils/languageSamples'
import allThemes from './utils/themes/_allThemes'
import SideBar from './components/sidebar'

// react-color picker: converted all keys and style to objects
// color-picker-active set to boolean to open the color picker if it gets clicked
// looping over all the object keys
// generating the css
//

function App() {
    const [languageKey, setLanguageKey] = useState('js')
    const [presetTheme, setPresetTheme] = useState(allThemes.okaidia)
    const [styleConfig, setStyleConfig] = useState(allThemes.okaidia.config)
    const PrismWrapper = styled.div`
        ${styleTemplate(styleConfig)}
    `
    const togglePicker = (key) => {
        setStyleConfig({
            ...styleConfig,
            [key]: {
                ...styleConfig[key],
                colorPickerOpen: !styleConfig[key].colorPickerOpen,
            },
        })
    }

    useEffect(() => {
        Prism.highlightAll()
    }, [styleConfig, languageKey])
    return (
        <div className="App">
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
                            <PrismWrapper className="prism-wrapper">
                                <pre>
                                    <code className={`language-${languageKey}`}>
                                        {languageSamples[languageKey].code}
                                    </code>
                                </pre>
                            </PrismWrapper>
                        </div>
                    </div>
                    <div className="export-controls">
                        <button className="view-gen-code">
                            View Generated Code
                        </button>
                        <a
                            href={`data:text/json;charset=utf-8,${encodeURIComponent(
                                styleTemplate(styleConfig)
                            )}`}
                            className="download-link"
                            download="refract.css"
                        >
                            Download CSS
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
