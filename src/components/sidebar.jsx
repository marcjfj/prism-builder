import { SketchPicker } from 'react-color'
import ClickAwayListener from 'react-click-away-listener'
const SideBar = ({ styleConfig, setStyleConfig }) => {
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
            t.style.textDecoration = active ? 'underline' : 'none'
        })
    }
    return (
        <div className="sidebar">
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
