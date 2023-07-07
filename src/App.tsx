import React from "react"

export function App() {
  return (
    <div className="min-h-screen p-8 text-zinc-900 bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800">
      <div className="bg-white w-[1100px] mx-auto rounded-xl min-h-[720px] shadow-sm border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
        <aside className="bg-zinc-50 border-r border-r-zinc-100 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400" />
          </div>
        </aside>
        <main className="p-4">
          <div className="max-w[700px] mx-auto pt-16">
            <h1>Guerra da Cabanagem</h1>
            <p>
              A Cabanagem teve origem nas profundas desigualdades sociais e políticas que
              caracterizavam o Brasil na época. Durante o período colonial, a região norte,
              especialmente o Pará, era dominada por uma elite política e econômica composta
              por grandes proprietários de terras e comerciantes. Enquanto isso, a maioria da
              população era formada por cabanos, trabalhadores rurais, indígenas, negros e mestiços,
              que sofriam com a pobreza, a exploração e a falta de representação política.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}