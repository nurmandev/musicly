"use client"
import React, { useEffect, useState } from 'react';

const Setting = () => {
    const [openSetting, setOpenSetting] = useState(false);
    const [selectedColor, setSelectedColor] = useState("#FF589B");

    useEffect(() => {
        // Function to set color scheme
        const setColorScheme = (color: string) => {
            localStorage.setItem('ms_color_scheme', color);
            document.documentElement.style.setProperty('--clr-theme-1', color);
            setSelectedColor(color);
        };

        // Initialize color settings
        const bdInitColor = () => {
            const defaultColorBtn = document.querySelector('.bd-color-settings-btn');
            if (defaultColorBtn) {
                const defaultColor = defaultColorBtn.getAttribute('data-color-default');
                const setColor = localStorage.getItem('ms_color_scheme') || defaultColor;

                if (setColor) {
                    setColorScheme(setColor);
                }
            }
        };

        bdInitColor();
    }, []);


    // Handle color button click
    const handleColorButtonClick = (color: string) => {
        setSelectedColor(color);
        localStorage.setItem('ms_color_scheme', color);
        document.documentElement.style.setProperty('--clr-theme-1', color);
    };

    // Handle custom color change
    const handleCustomColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const color = event.target.value;
        setSelectedColor(color);
        localStorage.setItem('ms_color_scheme', color);
        document.documentElement.style.setProperty('--clr-theme-1', color);
    };

    // Toggle settings
    const toggleSetting = () => {
        setOpenSetting(!openSetting);
    };

    return (
        <div className={`bd-theme-settings-area transition-3 ${openSetting ? "settings-opened" : ""}`}>
            <div className="bd-theme-wrapper">
                <div className="bd-theme-header text-center">
                    <h4 className="bd-theme-header-title">Template Settings</h4>
                </div>

                <div className="bd-theme-toggle mb-20">
                    <label className="bd-theme-toggle-main d-none" htmlFor="bd-theme-toggler">
                        <span className="bd-theme-toggle-dark"><i className="fa-light fa-moon"></i> Dark</span>
                        <input type="checkbox" id="bd-theme-toggler" />
                        <i className="bd-theme-toggle-slide"></i>
                        <span className="bd-theme-toggle-light active"><i className="fa-light fa-sun-bright"></i> Light</span>
                    </label>
                </div>

                <div className="bd-theme-dir mb-20 d-none">
                    <label className="bd-theme-dir-main" htmlFor="bd-dir-toggler">
                        <span className="bd-theme-dir-rtl"> RTL</span>
                        <input type="checkbox" id="bd-dir-toggler" />
                        <i className="bd-theme-dir-slide"></i>
                        <span className="bd-theme-dir-ltr active"> LTR</span>
                    </label>
                </div>

                <div className="bd-theme-settings">
                    <div className="bd-theme-settings-wrapper">
                        <div className="bd-theme-settings-open">
                            <button className="bd-theme-settings-open-btn" onClick={toggleSetting}>
                                <span className="bd-theme-settings-gear"><i className="fa-light fa-gear"></i></span>
                                <span className="bd-theme-settings-close"><i className="fa-regular fa-xmark"></i></span>
                            </button>
                        </div>
                        <div className="row row-cols-4 gy-2 gx-2">
                            <div className="col">
                                <div className={`bd-theme-color-item bd-color-active ${selectedColor === "#FF589B" ? "active" : ""}`}>
                                    <button onClick={() => handleColorButtonClick("#FF589B")} className="bd-theme-color-btn bd-color-settings-btn" type="button" style={{ backgroundColor: "#FF589B" }}></button>
                                </div>
                            </div>
                            <div className="col">
                                <div className={`bd-theme-color-item bd-color-active ${selectedColor === "#69E7CB" ? "active" : ""}`}>
                                    <button onClick={() => handleColorButtonClick("#69E7CB")} className="bd-theme-color-btn bd-color-settings-btn" type="button" style={{ backgroundColor: "#69E7CB" }}></button>
                                </div>
                            </div>
                            <div className="col">
                                <div className={`bd-theme-color-item bd-color-active ${selectedColor === "#FBC21E" ? "active" : ""}`}>
                                    <button onClick={() => handleColorButtonClick("#FBC21E")} className="bd-theme-color-btn bd-color-settings-btn" type="button" style={{ backgroundColor: "#FBC21E" }}></button>
                                </div>
                            </div>
                            <div className="col">
                                <div className={`bd-theme-color-item bd-color-active ${selectedColor === "#F7426F" ? "active" : ""}`}>
                                    <button onClick={() => handleColorButtonClick("#F7426F")} className="bd-theme-color-btn bd-color-settings-btn" type="button" style={{ backgroundColor: "#F7426F" }}></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bd-theme-color-input">
                        <h6>Choose Custom Color</h6>
                        <input type="color" onChange={handleCustomColorChange} value={selectedColor} />
                        <label
                            id="bd-theme-color-label"
                            htmlFor="bd-color-setings-input"
                            style={{ backgroundColor: selectedColor }}
                        ></label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Setting;
