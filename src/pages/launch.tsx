import { useState, useRef, type ChangeEvent, type FormEvent } from 'react'

import checkIcon from '../assets/check-icon.svg'
import bnbIcon from '../assets/bnb-icon.svg'
import uploadIcon from '../assets/upload-icon.svg'
import chevronIcon from '../assets/chevron-icon.svg'
import titleBackArrow from '../assets/title-back-arrow.svg'

interface SectionHeaderProps {
  title: string
  required?: boolean
}

function SectionHeader({ title, required = false }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-gradient-to-r from-[#FE810B] via-[#FFA546] to-[#FE810B]">
        <img src={checkIcon} alt="" className="h-2 w-2" />
      </div>
      <h2 className="text-sm font-bold text-white">
        {title}
        {required && <span className="ml-0.5 text-rose-500">*</span>}
      </h2>
    </div>
  )
}

interface TaxSliderProps {
  label: string
  value: number
  onChange: (val: number) => void
}

function TaxSlider({ label, value, onChange }: TaxSliderProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-0.5">
          <span className="text-xs text-white">{label}</span>
          <span className="text-xs text-rose-500">*</span>
        </div>
        <div className="flex h-8 w-12 items-center justify-center rounded border border-white/30 bg-[#141517] text-sm font-bold text-[#FB5F16]">
          {value}%
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between text-xs text-white">
          <span>0%</span>
          <span>10%</span>
        </div>
        <div className="relative flex items-center py-1">
          <div className="h-1 w-full rounded-full bg-[#2F3737]">
            <div
              className="h-1 rounded-full bg-linear-to-r from-[#FE810B] via-[#FFA546] to-[#FE810B]"
              style={{ width: `${(value / 10) * 100}%` }}
            />
          </div>
          <input
            type="range"
            min={0}
            max={10}
            step={1}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          />
          <div
            className="pointer-events-none absolute h-3.5 w-2 -translate-x-1/2 rounded-xs bg-[#FB5F16]"
            style={{ left: `${(value / 10) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default function LaunchPage() {
  const [logoPreview, setLogoPreview] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [symbol, setSymbol] = useState('')
  const [description, setDescription] = useState('')
  const [buyTax, setBuyTax] = useState(0)
  const [sellTax, setSellTax] = useState(0)
  const [buyAmount, setBuyAmount] = useState('0')
  const [selectedPercent, setSelectedPercent] = useState<string | null>(null)
  const [links, setLinks] = useState({
    telegram: '',
    twitter: '',
    github: '',
    youtube: '',
    debox: '',
    website: '',
  })

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setLogoPreview(url)
    }
  }

  const handlePercentClick = (percent: string) => {
    setSelectedPercent(percent)
    if (percent === '25%') setBuyAmount('4.075')
    else if (percent === '50%') setBuyAmount('8.15')
    else if (percent === '75%') setBuyAmount('12.225')
    else if (percent === '100%') setBuyAmount('16.3')
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="relative mx-auto flex w-full flex-col pb-10">
      {/* Page Title Row */}
      <div className="flex items-center gap-2 py-4">
        <button
          type="button"
          className="flex h-4 w-4 shrink-0 items-center justify-center hover:opacity-80"
        >
          <img src={titleBackArrow} alt="Back" className="h-4 w-4" />
        </button>
        <h1 className="text-sm font-bold text-white tracking-wide">
          创建税收代币
        </h1>
      </div>

      {/* Main Content Card */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 rounded border border-white/10 bg-[#141517] p-4">
          {/* Reserve CA banner */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <div className="text-xs font-bold text-white">
                保留您的代币 CA
              </div>
              <div className="mt-0.5 text-xs text-neutral-500">
                在发布前锁定您的代币合约的地址。
              </div>
            </div>
            <button
              type="button"
              className="flex items-center justify-center rounded border border-[#FE810B] px-2.5 py-1.5 text-xs font-bold text-[#FE810B] transition-colors hover:bg-[#FE810B]/10"
            >
              保留 CA →
            </button>
          </div>

          {/* Section 1: Basic Information */}
          <div className="flex flex-col gap-4">
            <SectionHeader title="基本信息" />

            {/* Logo Upload */}
            <div className="flex items-center gap-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="group relative flex h-20 w-20 shrink-0 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg border border-dashed border-neutral-700 bg-[#111111] transition-colors hover:border-[#FE810B]"
              >
                {logoPreview ? (
                  <img
                    src={logoPreview}
                    alt="Token Logo"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src={uploadIcon}
                    alt="Upload"
                    className="h-7 w-7 opacity-70 transition-opacity group-hover:opacity-100"
                  />
                )}
              </button>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#FB5F16]">
                  // 支持的文件格式
                </span>
                <span className="mt-1 text-xs leading-relaxed text-neutral-500">
                  PNG、JPEG、SVG、GIF、文件大小限制 3MB
                </span>
              </div>
            </div>

            {/* Token Name */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-0.5">
                <label className="text-xs text-white">代币名称</label>
                <span className="text-xs text-rose-500">*</span>
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder=""
                className="h-11 w-full rounded border border-neutral-800 bg-[#0F0F0F] px-3 text-sm text-white focus:border-[#FE810B] focus:outline-none"
              />
            </div>

            {/* Token Symbol */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-0.5">
                <label className="text-xs text-white">代币符號</label>
                <span className="text-xs text-rose-500">*</span>
              </div>
              <input
                type="text"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                placeholder=""
                className="h-11 w-full rounded border border-neutral-800 bg-[#0F0F0F] px-3 text-sm text-white focus:border-[#FE810B] focus:outline-none"
              />
            </div>

            {/* Token Description */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-white">代币描述</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="w-full resize-none rounded border border-neutral-800 bg-[#0F0F0F] p-3 text-sm text-white focus:border-[#FE810B] focus:outline-none"
              />
            </div>
          </div>

          {/* Section 2: Payment Token */}
          <div className="flex flex-col gap-3">
            <SectionHeader title="支付代币" required />
            <button
              type="button"
              className="flex h-9 w-36 items-center justify-center gap-2 rounded border border-[#FE810B] bg-[#FE810B]/5 transition-colors hover:bg-[#FE810B]/10"
            >
              <img src={bnbIcon} alt="BNB" className="h-4 w-4" />
              <span className="text-sm font-medium text-[#FB5F16]">BNB</span>
            </button>
          </div>

          {/* Section 3: Tax Settings */}
          <div className="flex flex-col gap-4">
            <SectionHeader title="税率设置" />
            <TaxSlider label="买入税率" value={buyTax} onChange={setBuyTax} />
            <TaxSlider label="卖出税率" value={sellTax} onChange={setSellTax} />
          </div>

          {/* Section 4: Creator Token Purchase */}
          <div className="flex flex-col gap-3">
            <SectionHeader title="创建者代币购买（可选）" />
            <p className="text-xs leading-relaxed text-white/60">
              创建者少量买入有助于减少抢跑，提高代币发行安全性。最多可购买 800M
              枚代币；超额支付将自动退回。部署成本：约 0.001 BNB
            </p>

            {/* Balance */}
            <div className="flex items-center justify-between text-xs">
              <span className="text-neutral-500">余额：</span>
              <span className="font-medium text-white">0 BNB</span>
            </div>

            {/* Amount input */}
            <div className="flex h-11 items-center rounded border border-white/30 bg-[#141517] px-3">
              <input
                type="text"
                value={buyAmount}
                onChange={(e) => {
                  setBuyAmount(e.target.value)
                  setSelectedPercent(null)
                }}
                className="flex-1 bg-transparent text-sm font-medium text-white placeholder-neutral-500 focus:outline-none"
              />
              <div className="mx-2 h-5 w-px bg-white/10" />
              <div className="flex items-center gap-1.5">
                <img src={chevronIcon} alt="" className="h-3 w-3" />
                <img src={bnbIcon} alt="BNB" className="h-4 w-4" />
                <span className="text-sm font-medium text-white">BNB</span>
              </div>
            </div>

            {/* Percent quick select */}
            <div className="grid grid-cols-4 gap-2">
              {(['25%', '50%', '75%', '100%'] as const).map((percent) => {
                const isSelected = selectedPercent === percent
                return (
                  <button
                    key={percent}
                    type="button"
                    onClick={() => handlePercentClick(percent)}
                    className={`flex h-9 items-center justify-center rounded-lg text-xs font-semibold transition-all ${
                      isSelected
                        ? 'border border-[#FE810B] bg-neutral-800 text-[#FE810B]'
                        : 'border border-neutral-800 bg-neutral-900 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    {percent}
                  </button>
                )
              })}
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between text-xs">
              <div>
                <span className="text-neutral-500">预计收到：</span>
                <span className="font-medium text-white">0 代币</span>
              </div>
              <div>
                <span className="text-neutral-500">最高：</span>
                <span className="font-medium text-white">16.3 BNB</span>
              </div>
            </div>
          </div>

          {/* Section 5: Optional Links */}
          <div className="flex flex-col gap-4">
            <SectionHeader title="可选链接" />
            <div className="flex flex-col gap-3">
              {[
                { label: 'Telegram 链接', key: 'telegram' },
                { label: 'Twitter 链接', key: 'twitter' },
                { label: 'GitHub 链接', key: 'github' },
                { label: 'YouTube 链接', key: 'youtube' },
                { label: 'DeBox 链接', key: 'debox' },
                { label: '网站链接', key: 'website' },
              ].map((item) => (
                <div key={item.key} className="flex flex-col gap-1.5">
                  <label className="text-xs text-white">{item.label}</label>
                  <input
                    type="text"
                    placeholder="可选"
                    value={links[item.key as keyof typeof links]}
                    onChange={(e) =>
                      setLinks((prev) => ({
                        ...prev,
                        [item.key]: e.target.value,
                      }))
                    }
                    className="h-11 w-full rounded-lg border border-neutral-800 bg-[#0F0F0F] px-3 text-sm text-white placeholder-neutral-600 focus:border-[#FE810B] focus:outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex h-10 w-full cursor-pointer items-center justify-center rounded-lg border border-white/60 bg-gradient-to-r from-[#FE810B] via-[#FFA546] to-[#FE810B] text-base font-bold text-white shadow-[0_3px_0_0_#963000] transition-all active:translate-y-0.5"
        >
          创建代币
        </button>
      </form>
    </div>
  )
}
