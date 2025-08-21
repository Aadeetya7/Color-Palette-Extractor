import ExtractedColorPalette from "./components/ExtractedColorPalette/ExtractedColorPalette"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import ImagePreview from "./components/ImagePreview/ImagePreview"
import UploadFile from "./components/UploadPreview/UploadFile"

function App() {

  return (
    <section className="bg-gray-50 min-h-screen">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <UploadFile />

        <ImagePreview />

        <ExtractedColorPalette />
      </main>

      <Footer />
    </section>
  )
}


export default App
