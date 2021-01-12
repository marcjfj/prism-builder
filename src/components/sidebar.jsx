import { SketchPicker } from 'react-color'
import ClickAwayListener from 'react-click-away-listener'
const SideBar = ({
    styleConfig,
    setStyleConfig,
    fonts,
    fontKey,
    setFontKey,
    fontSize,
    setFontSize,
}) => {
    const togglePicker = (key) => {
        setStyleConfig({
            ...styleConfig,
            [key]: {
                ...styleConfig[key],
                colorPickerOpen: !styleConfig[key].colorPickerOpen,
            },
        })
    }
    const highlightPairs = (selector, active) => {
        const tokens = document.querySelectorAll(selector).forEach((t) => {
            t.style.background = active ? '#d6d6d633' : 'transparent'
        })
    }
    return (
        <div className="sidebar">
            <div className="font-select-wrapper">
                <label htmlFor="font-select" className="sidebar-title">
                    Font
                </label>
                <select
                    id="font-select"
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
                <div className="font-size input-block">
                    <input
                        value={fontSize}
                        onChange={(e) => setFontSize(e.target.value)}
                        type="number"
                        id="font-size-input"
                        className="font-size-input"
                    />
                    <label htmlFor="font-size-input">px</label>
                </div>
            </div>
            <h3 className="sidebar-title">Colors</h3>
            {Object.keys(styleConfig).map((key) => (
                <div
                    className="input-block"
                    key={key}
                    onMouseOver={() =>
                        highlightPairs(styleConfig[key].selector, true)
                    }
                    onMouseLeave={() =>
                        highlightPairs(styleConfig[key].selector, false)
                    }
                >
                    <div className="top">
                        <label>{key}</label>
                        <button
                            onClick={() => togglePicker(key)}
                            className="swatch"
                            style={{
                                backgroundColor: styleConfig[key].color,
                            }}
                        ></button>
                    </div>
                    {styleConfig[key].colorPickerOpen ? (
                        <div className="picker-wrapper">
                            <ClickAwayListener
                                onClickAway={() => togglePicker(key)}
                            >
                                <SketchPicker
                                    disableAlpha={true}
                                    color={styleConfig[key].color}
                                    presetColors={[
                                        ...new Set(
                                            Object.keys(styleConfig).map(
                                                (key) => styleConfig[key].color
                                            )
                                        ),
                                    ]}
                                    onChange={(color) =>
                                        setStyleConfig({
                                            ...styleConfig,
                                            [key]: {
                                                ...styleConfig[key],
                                                color: color.hex,
                                            },
                                        })
                                    }
                                />
                            </ClickAwayListener>
                        </div>
                    ) : null}
                </div>
            ))}
        </div>
    )
}

export default SideBar
