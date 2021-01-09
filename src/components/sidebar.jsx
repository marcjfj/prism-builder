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
    return (
        <div className="sidebar">
            <h3 className="sidebar-title">Colors</h3>
            {Object.keys(styleConfig).map((key) => (
                <div className="input-block" key={key}>
                    <label>{key}</label>
                    <button
                        onClick={() => togglePicker(key)}
                        className="swatch"
                        style={{
                            backgroundColor: styleConfig[key].color,
                        }}
                    ></button>
                    {styleConfig[key].colorPickerOpen ? (
                        <div className="picker-wrapper">
                            <ClickAwayListener
                                onClickAway={() => togglePicker(key)}
                            >
                                <SketchPicker
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
