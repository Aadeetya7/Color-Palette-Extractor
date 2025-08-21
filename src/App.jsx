import Header from "./components/Header/Header"

function App() {

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* <!-- Header --> */}
     <Header/>

      {/* <!-- Main Content --> */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* <!-- Upload Section --> */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="text-center">
            <div id="upload-area" className="border-2 border-dashed border-gray-300 rounded-lg p-12 hover:border-[#6366f1] transition-colors cursor-pointer">
              <div id="upload-content">
                <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Upload an image</h3>
                <p className="text-gray-500 mb-4">Drag and drop your image here, or click to browse</p>
                <button className="bg-[#6366f1] text-white px-6 py-2 rounded-lg hover:bg-[#6366f1]/90 transition-colors cursor-pointer">
                  Choose File
                </button>
              </div>
              <input type="file" id="file-input" className="hidden" accept="image/*" />
            </div>
          </div>
        </div>

        {/* <!-- Image Preview Section --> */}
        <div id="preview-section" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8 hidden">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Image Preview</h2>
          <div className="flex justify-center">
            <img id="preview-image" className="max-w-full max-h-96 rounded-lg shadow-md" alt="Preview" />
          </div>
          <div className="mt-4 text-center">
            <button id="extract-btn" className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-secondary/90 transition-colors font-medium">
              Extract Colors
            </button>
          </div>
        </div>

        {/* <!-- Color Palette Section --> */}
        <div id="palette-section" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hidden">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Extracted Color Palette</h2>

          {/* <!-- Color Grid --> */}
          <div id="color-grid" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* <!-- Sample color swatches - these would be dynamically generated --> */}
            <div className="color-swatch group cursor-pointer">
              <div className="w-full h-24 rounded-lg shadow-sm border border-gray-200 group-hover:shadow-md transition-shadow" style={{backgroundColor:"#FF6B6B"}}> </div>
              <div className="mt-2 text-center">
                <p className="text-sm font-mono text-gray-700">#FF6B6B</p>
                <p className="text-xs text-gray-500">Coral Red</p>
              </div>
            </div>

            <div className="color-swatch group cursor-pointer">
              <div className="w-full h-24 rounded-lg shadow-sm border border-gray-200 group-hover:shadow-md transition-shadow"   style={{backgroundColor:"#4ECDC4"}}   ></div>
              <div className="mt-2 text-center">
                <p className="text-sm font-mono text-gray-700">#4ECDC4</p>
                <p className="text-xs text-gray-500">Turquoise</p>
              </div>
            </div>

            <div className="color-swatch group cursor-pointer">
              <div className="w-full h-24 rounded-lg shadow-sm border border-gray-200 group-hover:shadow-md transition-shadow"  style={{backgroundColor:"#45B7D1"}}  ></div>
              <div className="mt-2 text-center">
                <p className="text-sm font-mono text-gray-700">#45B7D1</p>
                <p className="text-xs text-gray-500">Sky Blue</p>
              </div>
            </div>

            <div className="color-swatch group cursor-pointer">
              <div className="w-full h-24 rounded-lg shadow-sm border border-gray-200 group-hover:shadow-md transition-shadow" style={{backgroundColor:"#F7DC6F"}}   ></div>
              <div className="mt-2 text-center">
                <p className="text-sm font-mono text-gray-700">#F7DC6F</p>
                <p className="text-xs text-gray-500">Light Yellow</p>
              </div>
            </div>

            <div className="color-swatch group cursor-pointer">
              <div className="w-full h-24 rounded-lg shadow-sm border border-gray-200 group-hover:shadow-md transition-shadow"    style={{backgroundColor:"#BB8FCE"}} ></div>
              <div className="mt-2 text-center">
                <p className="text-sm font-mono text-gray-700">#BB8FCE</p>
                <p className="text-xs text-gray-500">Lavender</p>
              </div>
            </div>

            <div className="color-swatch group cursor-pointer">
              <div className="w-full h-24 rounded-lg shadow-sm border border-gray-200 group-hover:shadow-md transition-shadow" style={{backgroundColor:"#58D68D"}} ></div>
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
      </main>

      {/* <!-- Footer --> */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <p className="text-center text-gray-500">Built with modern web technologies</p>
        </div>
      </footer>



    </section>
  )
}


export default App
