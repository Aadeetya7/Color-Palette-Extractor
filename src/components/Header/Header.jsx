const Header = () => {
  return (
    <header className="bg-white hello-world  shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Color Palette Extractor</h1>
        <p className="text-gray-600 mt-2">Upload an image to extract its dominant colors</p>
      </div>
    </header>
  )
}

export default Header