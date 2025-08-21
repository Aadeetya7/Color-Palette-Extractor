import React from 'react'

const ImagePreview = () => {
    return (
        <>
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
        </>
    )
}

export default ImagePreview