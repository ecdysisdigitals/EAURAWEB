export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <div className="inline-block w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
        <h2 className="text-xl font-medium">Naglo-load...</h2>
        <p className="text-muted-foreground">Mangyaring maghintay habang inihahanda ang nilalaman.</p>
      </div>
    </div>
  )
}
