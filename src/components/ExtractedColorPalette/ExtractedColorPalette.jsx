import React from 'react'

const ExtractedColorPalette = () => {
    return (
        <div id="palette-section" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hidden">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Extracted Color Palette</h2>

            {/* <!-- Color Grid --> */}
            <div id="color-grid" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {/* <!-- Sample color swatches - these would be dynamically generated --> */}
                <div className="color-swatch group cursor-pointer">
                    <div className="w-full h-24 rounded-lg shadow-sm border border-gray-200 group-hover:shadow-md transition-shadow" style={{ backgroundColor: "#FF6B6B" }}> </div>
                    <div className="mt-2 text-center">
                        <p className="text-sm font-mono text-gray-700">#FF6B6B this is mew color </p>
                        <p className="text-xs text-gray-500">Coral Red how are you </p>
                    </div>
                </div>

                <div className="color-swatch group cursor-pointer">
                    <div className="w-full h-24 rounded-lg shadow-sm border border-gray-200 group-hover:shadow-md transition-shadow" style={{ backgroundColor: "#4ECDC4" }}   ></div>
                    <div className="mt-2 text-center">
                        <p className="text-sm font-mono text-gray-700">#4ECDC4 i am aditya </p>
                        <p className="text-xs text-gray-500">Turquoise is my favourite color</p>
                    </div>
                    <div>Hello aditya 13-02</div>
                </div>

                <div className="color-swatch group cursor-pointer">
                    <div className="w-full h-24 rounded-lg shadow-sm border border-gray-200 group-hover:shadow-md transition-shadow" style={{ backgroundColor: "#45B7D1" }}  ></div>
                    <div className="mt-2 text-center">
                        <p className="text-sm font-mono text-gray-700">#45B7D1</p>
                        <p className="text-xs text-gray-500">Sky Blue</p>
                    </div>
                </div>

                <div className="color-swatch group cursor-pointer">
                    <div className="w-full h-24 rounded-lg shadow-sm border border-gray-200 group-hover:shadow-md transition-shadow" style={{ backgroundColor: "#F7DC6F" }}   ></div>
                    <div className="mt-2 text-center">
                        <p className="text-sm font-mono text-gray-700">#F7DC6F</p>
                        <p className="text-xs text-gray-500">Light Yellow</p>
                    </div>
                </div>

                <div className="color-swatch group cursor-pointer">
                    <div className="w-full h-24 rounded-lg shadow-sm border border-gray-200 group-hover:shadow-md transition-shadow" style={{ backgroundColor: "#BB8FCE" }} ></div>
                    <div className="mt-2 text-center">
                        <p className="text-sm font-mono text-gray-700">#BB8FCE</p>
                        <p className="text-xs text-gray-500">Lavender</p>
                    </div>
                </div>

                <div className="color-swatch group cursor-pointer">
                    <div className="w-full h-24 rounded-lg shadow-sm border border-gray-200 group-hover:shadow-md transition-shadow" style={{ backgroundColor: "#58D68D" }} ></div>
                    <div className="mt-2 text-center">
                        <p className="text-sm font-mono text-gray-700">#58D68D</p>
                        <p className="text-xs text-gray-500">Mint Green</p>
                    </div>
                </div>
            </div>

            {/* <!-- Export Options --> */}
            <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Export Palette</h3>
                <div className="flex flex-wrap gap-3">
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                        Copy CSS
                    </button>
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                        Copy JSON
                    </button>
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                        Download ASE
                    </button>
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                        Save as PNG
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ExtractedColorPalette