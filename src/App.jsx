import ExtractedColorPalette from "./components/ExtractedColorPalette/ExtractedColorPalette"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import ImagePreview from "./components/ImagePreview/ImagePreview"
import UploadFile from "./components/UploadPreview/UploadFile"

function App() {

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* <!-- Header --> */}
      <Header />

      {/* <!-- Main Content --> */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* <!-- Upload Section --> */}
        <UploadFile />

        {/* <!-- Image Preview Section --> */}
        <ImagePreview />

        {/* <!-- Color Palette Section --> */}
        <ExtractedColorPalette />
      </main>

      {/* <!-- Footer --> */}
      <Footer />
    </section>
  )
}


export default App
