function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slateBg">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-4 border-slate-300"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-navyText border-r-navyText animate-spin"></div>
        </div>
        <p className="text-sm font-medium text-slate-600">Đang tải...</p>
      </div>
    </div>
  )
}

export default Loading
