export default function PrelaunchPage() {
  return (
    <div className="flex flex-col h-full py-4">
      <div className="flex-1 rounded-bl rounded-tl border border-[#484b51] p-4 bg-[#131516]">
        <div className="flex flex-col items-stretch">
          <div className="flex items-center space-x-3">
            <div className="text-xs size-5 flex items-center justify-center text-white bg-linear-to-r from-[#FE810B] via-[#FFA546] to-[#FE810B] [clip-path:polygon(0_0,100%_0,100%_81.25%,81.25%_100%,0_100%)] font-semibold">
              1
            </div>
            <span>生成 CA</span>
          </div>
          <p className="text-sm text-[#a0a3a7]">
            我们将为您代币 CA，只需几秒钟
          </p>
          <div className="flex flex-col gap-2">
            <p>区块链网络</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-xs size-5 flex items-center justify-center text-white bg-linear-to-r from-[#FE810B] via-[#FFA546] to-[#FE810B] [clip-path:polygon(0_0,100%_0,100%_81.25%,81.25%_100%,0_100%)] font-semibold">
              2
            </div>
            <span>锁定 CA 地址</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-xs size-5 flex items-center justify-center text-white bg-linear-to-r from-[#FE810B] via-[#FFA546] to-[#FE810B] [clip-path:polygon(0_0,100%_0,100%_81.25%,81.25%_100%,0_100%)] font-semibold">
              3
            </div>
            <span>发布您的代币</span>
          </div>
          <div className="mt-5 border border-[#484b51] p-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start">
                <span>可用的保留CA</span>
                <span>显示您已保留的的 CA 地址</span>
              </div>
              <button className="shrink-0 text-xs text-[#84888c]">
                重新整理
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}
