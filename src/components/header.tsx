import { Link } from 'react-router'
import { MenuIcon, XIcon } from 'lucide-react'
import { ConnectButton } from '@rainbow-me/rainbowkit'

interface HeaderProps {
  isMenuOpen: boolean
  onToggleMenu: () => void
}

function Header({ isMenuOpen, onToggleMenu }: HeaderProps) {
  return (
    <header className="sticky inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-b-[#484B51] bg-[#070808] px-4">
      <div className="flex items-center space-x-2.5">
        <button
          type="button"
          aria-label={isMenuOpen ? '关闭菜单' : '打开菜单'}
          aria-expanded={isMenuOpen}
          onClick={onToggleMenu}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md p-2.5 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA546]"
        >
          <div
            className={`transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'rotate-90' : 'rotate-0'
            }`}
          >
            {isMenuOpen ? (
              <XIcon className="size-6" />
            ) : (
              <MenuIcon className="size-6" />
            )}
          </div>
        </button>
      </div>
      <div className="flex shrink-0 items-center space-x-2">
        <Link
          to="/launch"
          className="cursor-pointer rounded-md bg-linear-to-r from-[#FE810B] via-[#FFA546] to-[#FE810B] px-6 py-1.5 text-sm font-semibold shadow-[0_3px_0_0_#963000] transition-all active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA546]"
        >
          创建代币
        </Link>
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            mounted,
          }) => {
            const ready = mounted
            const connected = ready && account && chain

            return (
              <div
                {...(!ready && {
                  'aria-hidden': true,
                  style: {
                    opacity: 0,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <button
                        onClick={openConnectModal}
                        type="button"
                        className="cursor-pointer rounded-md border border-[#FE810B] bg-[#FD810B1A] px-6 py-1.5 text-sm font-semibold transition-all active:translate-y-0.5 hover:bg-[#FD810B33] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA546]"
                      >
                        连接钱包
                      </button>
                    )
                  }

                  if (chain.unsupported) {
                    return (
                      <button
                        onClick={openChainModal}
                        type="button"
                        className="cursor-pointer rounded-md border border-rose-500 bg-rose-500/10 px-6 py-1.5 text-sm font-semibold text-rose-500 transition-all active:translate-y-0.5 hover:bg-rose-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                      >
                        网络错误
                      </button>
                    )
                  }

                  return (
                    <button
                      onClick={openAccountModal}
                      type="button"
                      className="cursor-pointer rounded-md border border-[#FE810B] bg-[#FD810B1A] px-6 py-1.5 text-sm font-semibold transition-all active:translate-y-0.5 hover:bg-[#FD810B33] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA546]"
                    >
                      {account.displayName}
                    </button>
                  )
                })()}
              </div>
            )
          }}
        </ConnectButton.Custom>
      </div>
    </header>
  )
}

export { Header }
export default Header
