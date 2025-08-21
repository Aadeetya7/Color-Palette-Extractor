import React from 'react'

const UploadFile = () => {
    return (
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
    )
}

export default UploadFile